<template>
	<div class="page">
		<new-header />
		<div class="warps" v-loading="loading">
			<div class="hotel">
				<div class="left flex">
					<div class="events">
						<div class="day">
							{{page_size}} אירועים
							מתוך{{total_size}} אירועים
						</div>
						<div class="about">למדו על הסטנדרטים שלנו</div>
						<div class="item">
							<div class="item-li">
								<p>זמינות בזמן אמת</p>
								<img src="~assets/images/icon/checkmark.png" />
							</div>
							<div class="item-li">
								<p>מושבים אחד-ליד-השני</p>
								<img src="~assets/images/icon/checkmark.png" />
							</div>
							<div class="item-li">
								<p>אירועים מובטחים</p>
								<img src="~assets/images/icon/checkmark.png" />
							</div>
							<div class="item-li">
								<p>כרטיסים רישמיים</p>
								<img src="~assets/images/icon/checkmark.png" />
							</div>
						</div>
						<div class="select-list">
							<div v-for="(item,index) in list" :key="index" class="select-li" @click="toEngPage(item)">
								<div class="flex">
									<span class="el-icon-back"></span>
								</div>
								<div class="flex price">
									<span v-if="item.number_of_tickets==0||item.number_of_tickets==null"
										class="no-stock">אזל המלאי</span>
									<span v-else
										class="num">€{{item.min_ticket_price_eur?(item.min_ticket_price_eur/100).toFixed(2):'0.00'}}</span>
								</div>
								<div class="text">
									<p>{{item.season}} {{item.tournament_name}}</p>
									<p>{{item.venue_name}}</p>
									<p>{{item.city}} ({{item.iso_country}})</p>
								</div>
								<div class="info">
									<div class="xx" v-if="item.is_popular">
										<p class="xx-bg">
											<span>אירוע פופולרי</span>
											<img src="~assets/images/icon/icon4.png" />
										</p>
									</div>
									<h3>{{item.event_name}}</h3>
									<p class="time">
										{{item.date_stop}} - {{item.date_start}}
									</p>
								</div>
							</div>
						</div>
						<div class="pages">
							<div v-if="hidePage" @click="next">הצג עוד 25</div>
							<div v-if="hideAll" @click="showAll">הצג הכל {{total_size}} תוצאות</div>
						</div>
					</div>
				</div>
				<div class="right">
					<div class="nav">
						<span>אירועים</span>
						<i class="el-icon-arrow-left"></i>
						<span>בית</span>
					</div>
					<div class="Dates">
						<div class="name">תאריכים</div>
						<date-picker itemtypes="1" ref="myDatePicker" v-model="date" type="daterange"
							@pick="confirmDateRange" popperClass="date-content" value-format="yyyy-MM-dd"
							range-separator="至" start-placeholder="" end-placeholder="">
						</date-picker>
					</div>
					<div class="Sports">
						<div class="check">
							<div class="name">ענפי ספורט</div>
							<div class="check-li">
								<span>(798)</span>
								<p>כדורגל</p>
								<div class="check-img"></div>
							</div>
							<div class="check-li">
								<span>(798)</span>
								<p>כדורגל</p>
								<div class="check-img"></div>
							</div>
							<div class="check-li">
								<span>(798)</span>
								<p>כדורגל</p>
								<div class="check-img"></div>
							</div>
							<div class="total">צפייה בהכל (10)</div>
						</div>
						<div class="check">
							<div class="name">ענפי ספורט</div>
							<div class="check-li" @click="selectCountry(item)" v-if="index<countryIndex"
								v-for="(item,index) in countryList" :key="index">
								<span>({{item.num}})</span>
								<p>{{item.name}}</p>
								<img class="icon-img" :src="item.flag" />
								<div class="check-img" :style="{backgroundColor:item.select?'rgb(255, 50, 99)':''}">
									<img src="~assets/images/icon/select.png" />
								</div>
							</div>
							<div class="total" @click="countryIndex=countryList.length">({{countryList.length}}) צפייה
								בהכל</div>
						</div>

						<div class="check">
							<div class="name">ערים</div>
							<div @click="selectCity(item)" class="check-li" v-if="index<cityIndex"
								v-for="(item,index) in cityList" :key="index">
								<span>({{item.num}})</span>
								<p>{{item.name}}</p>
								<div class="check-img" :style="{backgroundColor:item.select?'rgb(255, 50, 99)':''}">
									<img src="~assets/images/icon/select.png" />
								</div>
							</div>
							<div class="total" @click="cityIndex=cityList.length">({{cityList.length}}) צפייה בהכל</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		events
	} from '@/api/kentaHbEvent'
	import dayjs from 'dayjs'
	export default {
		data: () => ({
			dateType: 0,
			dayRageIndex: 0,
			monthIndex: 0,
			monthEN: {
				month1: 'January',
				month2: 'February',
				month3: 'March',
				month4: 'April',
				month5: 'May',
				month6: 'June',
				month7: 'July',
				month8: 'August',
				month9: 'September',
				month10: 'October',
				month11: 'November',
				month0: 'December',
			},
			travelTypeIndex: 2,
			traveTypeText: 'A week',
			monthList: [],
			selectedMonth: [],
			date: '',
			list: [],
			loading: true,
			total_size: 0,
			page_size: 0,
			maxItems: 25,
			hidePage: true,
			page: 1,
			hideAll: true,
			allList: [],
			cityList: [],
			countryList: [],
			cityIndex: 3,
			countryIndex: 3,
			filtercountryList: [],
			filtercityList: [],
			filterAll: []
		}),
		mounted() {
			this.makMonthList();
			this.getEvents()
		},
		methods: {
			selectCountry(item) {
				item.select = !item.select
				this.getselectCountry()
			},
			getselectCountry() {
				this.filtercountryList = this.countryList.filter(item => item.select)
				this.fnfilter()
			},
			selectCity(item) {
				item.select = !item.select
				this.getselectCity()
			},
			getselectCity() {
				this.filtercityList = this.cityList.filter(item => item.select)
				this.fnfilter()
			},
			fnfilter() {
				this.page = 1
				this.list = []
				this.loading = true
				this.filterAll = []
				let that = this
				let filteredItems = this.allList.filter(item => {
					if (this.filtercountryList.length > 0 && this.filtercityList.length == 0) {
						return this.filtercountryList.map(item1 => item1.name).includes(item.country_name)
					} else if (this.filtercityList.length > 0 && this.filtercountryList.length == 0) {
						return this
							.filtercityList.map(item1 => item1.name).includes(item.city)
					} else {
						return this.filtercountryList.map(item1 => item1.name).includes(item.country_name) && this
							.filtercityList.map(item1 => item1.name).includes(item.city)
					}
				})
				if (filteredItems.length > 0) {
					this.list = filteredItems.length < this.maxItems ? filteredItems : filteredItems.slice(0, this
						.maxItems)

					this.filterAll = filteredItems
					this.total_size = filteredItems.length
					if (filteredItems.length < this.maxItems) {
						this.hideAll = false
						this.hidePage = false
					} else {
						this.hideAll = true
						this.hidePage = true
					}
					setTimeout(function() {
						that.loading = false
					}, 500)
				} else {
					this.page = 1
					this.filtercityList = []
					this.filtercountryList = []
					this.getEvents()
				}
			},
			showAll() {
				this.page = 1
				this.hidePage = false
				this.hideAll = false
				this.list = (this.filterAll.length > 0 ? this.filterAll : this.allList)
			},
			next() {
				if (this.paginate((this.filterAll.length > 0 ? this.filterAll : this.allList), 25, this.page).length < this
					.maxItems) {
					this.hidePage = false
				} else {
					this.page++
					let list = this.paginate((this.filterAll.length > 0 ? this.filterAll : this.allList), 25, this.page)
					this.list = this.page > 1 ? [...this.list, ...list] : list
					if (list.length < this.maxItems) {
						this.hidePage = false
					}
				}
			},
			paginate(array, page_size, page_number) {
				const start = (page_number - 1) * page_size;
				const end = page_number * page_size;
				return array.slice(start, end);
			},
			//获取当前的年月日
			getady() {
				var currentDate = new Date();
				var year = currentDate.getFullYear();
				var month = currentDate.getMonth() + 1;
				var day = currentDate.getDate();
				month = (month < 10 ? '0' : '') + month;
				day = (day < 10 ? '0' : '') + day;
				var formattedDate = year + '-' + month + '-' + day;
				return formattedDate
			},
			// 获取数据
			getEvents() {
				this.getady()
				events({
					sport_type: 'soccer',
					date_start: 'ge:' + this.getady(),
					tournament_name: this.$route.query.tournament_name
				}).then(res => {
					this.list = res.events.slice(0, this.maxItems)
					this.allList = res.events

					this.total_size = res.pagination.total_size
					this.page_size = res.pagination.page_size
					this.cityList = res.pagination.city_counts
					this.countryList = res.pagination.country_counts
					this.loading = false
					if (res.events.length < this.maxItems) {
						this.hideAll = false
						this.hidePage = false
					} else {
						this.hideAll = true
						this.hidePage = true
					}
				}).catch(err => {
					this.loading = false
				})
			},
			toEngPage(item) {
				this.$router.push({
					path: '/engPage',
					query: {
						event_id: item.event_id,
						event_name: item.event_name,
						tournament_name: item.tournament_name,
						season: item.season,
						city:item.city,
						venue_id:item.venue_id
					}
				})
			},
			confirmDateRange(e) {
				this.date =
					`${dayjs(e[0]).format('DD')} ${this.monthEN['month' + dayjs(e[0]).format('MM') % 12].slice(0, 3)} - ${dayjs(e[1]).format('DD')} ${this.monthEN['month' + dayjs(e[1]).format('MM') % 12].slice(0, 3)}`
				this.visible3 = false;
				console.log(this.date);
				console.log(this.dateType);
			},
			handleDateRange(index) {
				this.dayRageIndex = index;
			},
			handleTravelType(index, text) {
				this.travelTypeIndex = index;
				this.traveTypeText = text;
			},
			makMonthList() {
				let list = [];
				let currentYear = dayjs().year();
				let currentMonth = dayjs().month() + 1;
				for (let i = currentMonth; i <= currentMonth + 20; i++) {
					let item = new Object();
					item = {
						year: i > 12 ? currentYear + 1 : currentYear,
						month: this.monthEN['month' + i % 12]
					};
					list.push(item);
				}
				this.monthList = list;
			},
			handleMonth(index) {
				this.monthIndex = index;
				if (this.monthList[index].checked) {
					this.monthList[index].checked = false;
				} else {
					for (let i = 0; i < this.monthList.length; i++) {
						if (this.monthList[i].checked) {
							this.monthList[i].checked = false;
							break;
						}
					}
					this.$set(this.monthList[index], 'checked', true);
				}
				this.calcSelectMonth();
			},
			calcSelectMonth() {
				let selectedMonth = this.monthList.filter((item) => {
					return item.checked
				});
				let monthTextArr = [];
				for (let i = 0; i < selectedMonth.length; i++) {
					monthTextArr.push(selectedMonth[i].month.slice(0, 3))
				}
				this.selectedMonth = monthTextArr;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.pages {
		display: flex;
		text-align: center;
		padding: 0.4rem 0;
		justify-content: flex-end;

		div {
			cursor: pointer;
			margin-left: 0.3rem;
			font-size: 0.16rem;
		}
	}

	.hotel::v-deep .el-date-range-picker__content.is-left {
		margin-right: 0
	}

	.hotel::v-deep .el-date-range-picker .el-picker-panel__body {
		min-width: 100%;
	}

	.hotel::v-deep .el-date-range-picker__content {
		width: 100%;
	}

	.page {

		.hotel {
			display: flex;

			.left {
				.select-list {
					.select-li {
						display: flex;
						align-items: center;
						padding: 0.32rem 0;
						border-bottom: 1px solid rgba(218, 218, 218, 1);
						cursor: pointer;

						.el-icon-back {
							font-size: 24px;
							color: rgba(26, 26, 26, 0.6);
						}

						.price {
							span {
								display: inline-block;
								padding: 0.08rem 0.16rem;
								font-size: 0.16rem;
								font-weight: 600;
								border-radius: 6px
							}

							.no-stock {
								background-color: rgba(238, 35, 68, 0.16);
								color: rgba(238, 35, 68, 1);
							}

							.num {
								background-color: rgba(0, 188, 147, 0.16);
								color: rgba(0, 188, 147, 1);
							}
						}

						.text {
							width: 1.60rem;
							text-align: right;

							p {
								margin-top: 4px;
								font-size: 0.12rem;
								font-weight: 400;
								color: rgba(26, 26, 26, 0.6);
							}
						}

						.info {
							width: 3.16rem;
							text-align: right;
							padding-left: 0.2rem;

							.time {
								font-size: 0.12rem;
								font-weight: 400;
								color: rgba(26, 26, 26, 0.6);
							}

							h3 {
								font-size: 0.16rem;
								font-weight: 600;
								margin: 0.12rem 0;
							}

							.xx {
								display: flex;
								justify-content: flex-end;

								.xx-bg {
									padding: 0.04rem 0.08rem;
									background-color: rgba(255, 184, 0, 0.16);
									border-radius: 6px;
									font-size: 0.12rem;
									font-weight: 400;
								}

							}

							img {
								width: 0.12rem;
								height: auto;
							}
						}
					}
				}

				.events {
					padding: 0.4rem 1rem 0 1rem;

					.item {
						margin-top: 0.24rem;
						display: flex;
						align-items: center;
						padding: 0.12rem 0.16rem;
						background-color: rgba(0, 188, 147, 0.12);
						border-radius: 8px;

						.item-li {
							flex: 1;
							display: flex;
							justify-content: center;
							align-items: center;

							p {
								font-size: 0.16rem;
								font-weight: 400;
							}

							img {
								width: 0.16rem;
								height: auto;
								margin-left: 8px;
							}
						}
					}

					.about {
						margin-top: 0.16rem;
						font-size: 0.14rem;
						font-weight: 400;
						text-align: right;
						color: rgba(52, 81, 255, 1);
						text-decoration: underline;
					}

					.day {
						text-align: right;
						font-size: 0.16rem;
						font-weight: 400;
						direction: rtl;
					}
				}
			}

			.right {
				width: 3.64rem;
				padding: 0.24rem 0 0.24rem 0.32rem;
				border-left: 1px solid #DADADA;

				.Sports {
					.name {
						font-size: 0.16rem;
						font-weight: 500;
						text-align: right;
						margin-bottom: 0.16rem;
					}

					.check {
						margin-top: 0.4rem;

						.total {
							cursor: pointer;
							font-size: 0.12rem;
							font-weight: 400;
							text-align: right;
							color: rgba(26, 26, 26, 0.6);
							text-decoration: underline;
						}

						.check-li {
							display: flex;
							align-items: center;
							justify-content: flex-end;
							margin-bottom: 0.12rem;
							cursor: pointer;

							.icon-img {
								width: 0.2rem;
								height: auto;
								margin-left: 8px;
							}

							p {
								font-size: 0.16rem;
								font-weight: 400;
								margin-left: 8px;
							}

							span {
								font-size: 0.16rem;
								font-weight: 400;
								color: rgba(26, 26, 26, 0.4);

							}

							.check-img {
								width: 0.16rem;
								margin-left: 8px;
								height: 0.16rem;
								text-align: center;
								display: flex;
								align-items: center;
								justify-content: center;
								border: 1px solid rgba(218, 218, 218, 1);
								box-sizing: border-box;
								border-radius: 2px;

								img {
									width: 10px;
									height: 10px;
									object-fit: contain
								}
							}
						}
					}
				}

				.Dates {
					margin-top: 0.4rem;

					.name {
						font-size: 0.16rem;
						font-weight: 500;
						text-align: right;
					}
				}

				.nav {
					display: flex;
					align-items: center;
					justify-content: flex-end;

					span {
						font-size: 0.12rem;
						font-weight: 400;
						color: rgba(26, 26, 26, 0.6)
					}

					i {
						margin: 0 4px;
						display: inline-block;
						font-size: 0.12rem;
						font-weight: 600;
						color: rgba(26, 26, 26, 0.6)
					}
				}
			}
		}
	}
</style>