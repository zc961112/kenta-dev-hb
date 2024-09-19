import {
	getDestinationList,
	destinationSlugDetail
} from '@/api/destination'
import {
	getHotelRooms
} from '@/api/hotel'
import {
	mapToken
} from '@/config/map'
import {
	updateSessionQuery,
	getHotelRoomsParams
} from '@/utils/casino'
import {
	getLastestPrice
} from '@/utils/index'
import Decimal from '@/utils/decimal'
import axios from 'axios';
export default {
	data() {
		return {
			// 新增
			cityList: [],
			// 新增 -----
			showTip: false,
			showModal: false,
			map: null,
			mapInit: false,
			markerList: [],
			hotelInfo: null,
			selectedHotel: null,
			selectedRoom: null,
			selectedInfo: null,
			destinationList: [],
			dayRageIndex: 0,
			form: {
				latt: null,
				lng: null,
				date: null,
				dates: null,
				casinoList: [],
			},
			searchQuery: {
				destinationId: '',
				destinationName: '',
				date: '',
				dateType: 0,
				gj: '',
				selectedMonth: [],
				guestList: [],
			},
			filterQuery: {
				fields: [],
				maxPrice: 0,
				maxDistance: 0,
				star5: 0,
				star4: 0,
				star3: 0
			},
			timer: null,
			id: '',
			cityval: '',
			adults: '',
			ids: [],
			priceArr: [],
		}
	},
	mounted() {
		this.loadAll();
	},
	methods: {
		// 筛选价格
		getprice(dayTime) {
			let data = {
				checkin: '',
				checkout: '',
				region_id: this.id,
				ids: this.ids
			}
			if (dayTime) {
				data.checkin = (dayTime.split("/")[0])
				data.checkout = (dayTime.split("/")[1])
			}
			// 清空标记点
			if (this.markerList.length > 0) {
				for (var i = 0; i < this.markerList.length; i++) {
					this.markerList[i].remove()
				}
				this.markerList = []
			}

			axios.post('https://zhouchen.love:8000/update_hotels_info', data, {
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(res => {
				let list = res.data
				list.forEach(item => {
					this.cityList.forEach(i => {
						if (i.id === item.id) {
							this.priceArr = []
							if (i.daily_prices != null) {
								this.priceArr.push(item.daily_price != null ? item.daily_price
									.toFixed(2) : 'לא זמין')
								i.daily_prices = this.priceArr
							}
						}
					})
				})
				this.initMapMarkers();
			})
		},
		// 搜索
		citysearch() {
			let data = {
				city: this.searchQuery.destinationName
			}
			axios.post('https://zhouchen.love:8000/get_id_by_name', data, {
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(res => {
				this.$router.push({
					path: ("/destination/" + res.data[0].id)
				})
			})

		},
		handleSelect(item) {
			this.$router.push({
				path: ("/destination/" + item.id)
			})
		},
		querySearch(queryString, cb) {
			var restaurants = this.restaurants;
			var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
			// 调用 callback 返回建议列表的数据
			cb(results);
		},
		createFilter(queryString) {
			return (restaurant) => {
				return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
			};
		},
		loadAll() {
			this.restaurants = []
			axios.get('https://zhouchen.love:8000/get_index_data').then(res => {
				for (let i = 0; i < res.data.length; i++) {
					this.restaurants.push({
						value: res.data[i].city,
						city: res.data[i].city,
						id: res.data[i].id
					})
				}
			})
		},
		hideMapPopper() {
			const selectedMarkers = document.querySelectorAll('.map-area-marker-active')
			selectedMarkers.forEach(el => {
				el.classList.remove('map-area-marker-active')
				el.click()
			})
		},
		showMapPopper(item) {
			const marker = document.querySelector(`#marker_${item.id}`)
			if (marker) {
				marker.classList.add('map-area-marker-active')
				marker.click()
			}
		},
		async handleSearch(id) {
			this.id = id
			let data = {
				id: this.id
			}
			this.markerList = []
			this.ids = []
			axios.post('https://zhouchen.love:8000/get_hotels_by_region', data, {
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(res => {
				this.cityList = res.data
				if (res.data.length > 0) {
					this.initMapMarkers();
					this.cityList.forEach(item => {
						this.ids.push(item.id)
					})
				}

			})


			// this.markerList = []
			// try {
			// 	const params = {
			// 		slug: this.searchQuery.destinationId
			// 	}
			// 	const res = await destinationSlugDetail(params)
			// 	const formData = res.data || {}
			// 	this.form = formData
			// 	this.handleAllPrice()
			// 	// this.handleFilterData()
			// 	if (this.hid) {
			// 		this.selectedHotel = this.form.casinoList.find(c => c.slug === this.hid)
			// 	} else if (!this.isMobile) {
			// 		await this.initMapMarkers()
			// 	}
			// } catch (e) {
			// 	console.log('search error: ', e)
			// }
		},
		getAdultsParams() {
			const guestMap = {
				adults: 0,
				children: []
			}
			this.searchQuery.guestList.forEach(g => {
				if (g.label === 'Adults') {
					guestMap.adults = g.value
				} else if (g.label === 'Children') {
					for (let i = 0; i < g.value * 1; i++) {
						guestMap.children.push(12)
					}
				}
			})
			if (!guestMap.adults) {
				guestMap.adults = 1
			}
			return [guestMap]
		},
		async handleAllPrice() {
			try {
				const params = await getHotelRoomsParams(this.searchQuery)
				this.handleEachPrice(params, 0)
			} catch (e) {}
		},
		async handleEachPrice(p, index) {
			try {
				clearTimeout(this.timer)
				const casino = this.form.casinoList[index]
				if (!casino) {
					return false
				}
				const params = {
					id: casino.hotelId,
					...p,
				};
				const hpRes = await getHotelRooms(params);
				const hotel = (hpRes.data.hotels || []).find(h => h.id === casino.hotelId)
				if (hotel) {
					const roomList = hotel.rates;
					const paymentInfo = roomList[0].payment_options.payment_types[0]
					this.$set(casino, '$price', getLastestPrice(paymentInfo.amount))
					this.$set(casino, '$tax', (paymentInfo.tax_data.taxes || []).reduce((total, item) => Decimal
						.add(item.amount, total), 0))
					this.$set(casino, '$oldPrice', Decimal.add(casino.$price, casino.$tax))
					localStorage.setItem(`c_${casino.hotelId}`, JSON.stringify(roomList))
				} else {
					this.$set(casino, '$price', 0)
					this.$set(casino, '$tax', 0)
					this.$set(casino, '$oldPrice', 0)
				}
				this.timer = setTimeout(() => {
					this.handleEachPrice(p, index + 1)
				}, 2000)
			} catch (e) {}
		},
		handleFilterData() {
			const query = {
				fields: [],
				star5: 0,
				star4: 0,
				star3: 0,
				maxPrice: 0,
				maxDistance: 0
			}
			this.form.casinoList.forEach(casino => {
				if (!query['star' + casino.star]) {
					query['star' + casino.star] = 1
				} else {
					query['star' + casino.star] += 1
				}
				query.maxPrice = Math.max(query.maxPrice, casino.$price)
				query.maxDistance = Math.max(query.maxDistance, casino.distance)
			})
			this.filterQuery = query
		},
		async initMapMarkers() {
			try {
				const mapRes = await this.initMap()
				if (mapRes) {
					this.cityList.forEach((item, index) => {
						if (this.map) {
							if (index === 0) {
								this.map.flyTo({
									center: [item.longitude, item.latitude]
								})
							}

							const popup = new mapboxgl.Popup({
									offset: 25
								})
								.setHTML(`<div class="map-popper">
                  <img src="${item.first_image}" class="map-pp-img">
                  <h3 class="map-pp-title">${item.name}</h3>
                  <div class="map-pp-text">${item.country_code} ,${item.region_name}</div>
                  <div class="map-pp-line"></div>
                  <div class="map-pp-price"><span class="map-pp-price-no">₪ ${(item.daily_prices!=null?item.daily_prices[0]:'לא זמין')}</span> -החל מ</div>
                </div>`)

							const el = document.createElement('div')
							el.id = 'marker_' + (item.id || '-')
							el.innerHTML = '€' + (item.daily_prices != null ? item.daily_prices[0] :
								'לא זמין')
							el.className = 'map-area-marker'
							const marker = new mapboxgl.Marker(el)
								.setLngLat([item.longitude, item.latitude])
								.setPopup(popup)
								.addTo(this.map)
							this.markerList.push(marker)
						}
					})
				} else {
					// this.handleSearch()
				}
			} catch (e) {}
		},
		handleOrderSubmit(data) {
			this.showModal = false
			sessionStorage.setItem('orderform', JSON.stringify(data))
			sessionStorage.setItem('roominfo', JSON.stringify(this.selectedRoom))
			sessionStorage.setItem('hotelinfo', JSON.stringify(this.hotelInfo))
			sessionStorage.setItem('casino', JSON.stringify(this.selectedHotel))
			this.$nextTick(() => {
				this.showTip = true
				setTimeout(() => {
					this.showTip = false
					this.$router.push(`/order/${data.partner_order_id}`)
				}, 1000 * 3)
			})
		},
		handleRoomSelect({
			info,
			item,
			hotel
		}) {
			this.hotelInfo = hotel
			this.selectedInfo = info
			this.selectedRoom = item
		},
		clearRoomSelected() {
			this.selectedInfo = null
			this.selectedRoom = null
		},
		loadScript(src) {
			return new Promise((resolve, reject) => {
				let script = document.querySelector('#map_script')
				if (script && window.mapboxgl) {
					if (window.mapboxgl) {
						resolve({
							loaded: true,
							err: null
						})
						return
					}
					script.parentElement.removeChild(script)
				}
				script = document.createElement('script')
				script.setAttribute('id', 'map_script')
				script.src = src
				script.onload = () => {
					resolve({
						loaded: true,
						err: null
					})
				}
				script.onerror = error => {
					reject({
						loaded: true,
						err: error
					})
				}
				document.body.appendChild(script)
			})
		},
		async initMap() {
			try {
				await this.loadScript('https://api.mapbox.com/mapbox-gl-js/v2.3.1/mapbox-gl.js')
				mapboxgl.accessToken = mapToken

				this.map = new mapboxgl.Map({
					container: 'map',
					style: 'mapbox://styles/mapbox/streets-v11',
					center: [this.cityList[0].longitude, this.cityList[0].latitude], // 设置初始地图中心点
					zoom: 13
				})

				this.mapInit = true
				return true
			} catch (e) {
				console.log('init map error: ', e)
				return false
			}
		},
		initDestinations() {
			getDestinationList().then((res) => {
				let list = [];
				for (let i = 0; i < res.data.length; i++) {
					list.push({
						value: res.data[i].city,
						label: res.data[i].id,
						slug: res.data[i].slug
					})
				}
				this.destinationList = list;
			})
		},
		queryFetch(str, cb) {
			str = this.searchQuery.destinationName
			const res = str ? this.destinationList.filter(d => {
				return d.value.toLowerCase().includes(str.toLowerCase())
			}) : this.destinationList
			cb(res)
		},
		handleQuerySelect(item) {
			this.$router.push({
				path: `/destination/${item.slug}`,
				query: Object.assign(this.$route.query, {
					destinationName: item.value
				})
			})
			// this.searchQuery.destinationId = item.slug
			// this.searchQuery.destinationName = item.value
			// this.handleSearch()
		},
		handleFilterList() {
			if (this.selectedRoom) {
				return false
			}
			// this.showFilterPanel = true
		},
		updateDateType(value) {
			this.searchQuery.dateType = value
			updateSessionQuery(this.searchQuery)
		},
		updateStartEndTime(value) {
			this.searchQuery.date = value
			updateSessionQuery(this.searchQuery)
		},
		updateDateRange(value) {
			this.dayRageIndex = value
		},
		changeGuests(data) {
			// data.forEach(item => {
			// 	const index = this.searchQuery.guestList.findIndex(g => g.label === item.label)
			// 	this.searchQuery.guestList[index].value = item.value
			// })
			// updateSessionQuery(this.searchQuery)

			this.adults = JSON.stringify(data)
		}
	},
	beforeDestroy() {
		clearTimeout(this.timer)
	},
}