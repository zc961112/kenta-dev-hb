<template>
	<div class="page">
		<new-header />
		<div v-loading="loading">
			<!-- :class="{ searchsticky: issearchSticky }" -->
			<div class="search-border" ref="searchElement">
				<div class="warps">
					<div class="search-box">
						<div class="search-li">
							<p class="a"> עדכון</p>
						</div>
						<div class="search-li filter">
							<filter-member :list="list" class="pacf-mb" @change="changeGuests" />
						</div>
						<div class="search-li filter">
							<filter-datepicker ref="datepicker" :defaultTime="defaultTime" @RangeTime="RangeTime"
								class="pacf-dp" :start-and-end-time="searchQuery.date" :date-type="searchQuery.dateType"
								:day-rage-index="dayRageIndex" @update:datetype="updateDateType"
								@update:time="updateStartEndTime" @update:daterange="updateDateRange" />
						</div>
						<div class="search-li">
							<div class="pac-search">
								<div class="search-btn" @click="citysearch"></div>
								<el-autocomplete @keyup.enter.native="search" suffix-icon="el-icon-search"
									class="pac-input" v-model="searchQuery.destinationName"
									:fetch-suggestions="querySearch" @focus="searchQuery.destinationName=''"
									:placeholder="other.name" @select="handleSelect">
									<template slot-scope="{ item }">
										<div>{{ item.city }}</div>
									</template>
								</el-autocomplete>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="warps">
				<div class="navs">
					<span class="span-li">
						<span>{{other.name}}</span><i class="el-icon-arrow-left"></i>
					</span>

					<span class="span-li">
						<span>לאס וגאס</span><i class="el-icon-arrow-left"></i><span>ארצות הברית</span><i
							class="el-icon-arrow-left"></i>בית
					</span>
				</div>
			</div>
			<div class="warps">
				<div class="content">
					<div class="Hotel">
						<div class="nav">
							<div class="left flex">
								<div class="yuan">
									<!--填充空白的位置 -->
									<span v-for="j in Math.max(0, 5 - Math.floor((other.rating || 0) / 2))"
										:key="'fraction-' + j"></span>
									<!-- 显示当前的分数 -->
									<span v-for="i in Math.min(5, Math.floor((other.rating || 0) / 2))"
										:key="'current-' + i" class="current"></span>
									<img src="~assets/images/icon/image 1.png" />
								</div>
								<p class="time">0 חוות דעת</p>
							</div>
							<div class="right">
								<div class="xx">
									<p class="p address">
										<span class="n">{{other.address}}</span>
										<span class="line m-line"></span>
									</p>
									<div class="xx-info">
										<span class="line m-line-no"></span>
										<span class="p rtl">{{other.distance_client}} ק״מ ממרכז העיר</span>
										<span class="line"></span>
										<div class="rate">
											<el-rate void-color="#FFB800" :value="other.star_rating" />
											<div class="disabled"></div>
										</div>
									</div>
								</div>
								<h1>{{other.name}}</h1>
							</div>
						</div>
						<!-- pc 轮播 -->
						<div class="ban">
							<div class="ban-h" v-if="otherimg.length==0"></div>
							<div class="ban-li flex" v-for="(item,index) in otherimg" :key="index">
								<el-image style="width: 100%; height: 100%" :src="item"
									:preview-src-list="other.images">
								</el-image>
								<p v-if="index == 1" style="direction: rtl;">{{other.images?other.images.length:0}}
									תמונות </p>
							</div>
						</div>
						<!-- 移动端轮播 -->
						<div class="m-ban">
							<swiper ref="mySwiper" :options="swiperOptionM">
								<swiper-slide v-for="(item,index) in otherimg" :key="index">
									<el-image style="width: 100%; height: 2.4rem" :src="item"
										:preview-src-list="other.images">
									</el-image>
								</swiper-slide>
								<div class="swiper-pagination" slot="pagination"></div>
							</swiper>
							<p style="direction: rtl;">{{mimgNum}} תמונות </p>
						</div>
					</div>

					<div class="price" :class="{ pricesticky: pricechSticky}" ref="priceElement">
						<div class="price-info flex">
							<div class="bgs"></div>
							<div @click="scrollToTop" class="fh"><i class="el-icon-download"></i> חזרה למעלה</div>
							<button style="cursor: pointer;" @click="tocheckout(hotelslist[0])">לצפיה בדילים</button>
							<div class="num">₪ {{hotelslist.length>0? hotelslist[0].children[0].daily_prices:0}} -מ
							</div>
							<div class="flex"></div>
							<div class="r">
								<div class="r-w">
									<p>מדיניות</p>
									<p>מיקום</p>
									<p>חוות דעת</p>
									<p>שירותים</p>
									<p>חדרים פנויים</p>
								</div>
							</div>
						</div>
					</div>
					<!-- 移动端 -->
					<div class="ismobile">
						<div class="mfilter-bg">
							<div class="filter-f">
								<div class="pub-div select">
									עדכון
								</div>
								<div class="pub-div" @click="showmember">
									<i class="el-icon-arrow-down"></i>
									<img src="~assets/images/icon/m-my.png" />
								</div>
								<div class="pub-div" @click="showdatepicker">
									<img src="~assets/images/icon/m-date.png" />
								</div>
								<div class="pub-div" @click="searchdirection=true">
									<img src="~assets/images/icon/m-s.png" />
								</div>
							</div>
						</div>
						<filter-member ref="member" :list="list" :hideMember="false" class="pacf-mb"
							@change="changeGuests" />
						<filter-datepicker ref="mdatepicker" :hideDate="false" :defaultTime="defaultTime"
							@RangeTime="RangeTime" class="pacf-dp" :start-and-end-time="searchQuery.date"
							:date-type="searchQuery.dateType" :day-rage-index="dayRageIndex"
							@update:datetype="updateDateType" @update:time="updateStartEndTime"
							@update:daterange="updateDateRange" />

						<div class="Palace">
							<div class="Palace-left" :class="{ sticky: !ism?isSticky:'' }" ref="stickyElement">
								<div class="top">
									<div class="index">
										<span>{{other.rating}}</span>
									</div>
									<div class="name">
										<h3>מעולה</h3>
										<div class="yuan">
											<!--填充空白的位置 -->
											<span v-for="j in Math.max(0, 5 - Math.floor((other.rating || 0) / 2))"
												:key="'fraction-' + j"></span>
											<!-- 显示当前的分数 -->
											<span v-for="i in Math.min(5, Math.floor((other.rating || 0) / 2))"
												:key="'current-' + i" class="current"></span>
										</div>
										<p>0 חוות דעת</p>
									</div>
									<div class="speed">
										<div class="tit">ביקורות האורחים:</div>
										<div class="speed-li">
											<div class="num">
												<p class="flex">{{other.price}}</p>
												תמורה על הכסף
											</div>
											<div class="progress">
												<el-progress :stroke-width="8" :show-text="false"
													:percentage="computedPercentage"
													color="rgba(0, 188, 147, 0.8)"></el-progress>
											</div>
										</div>
										<div class="speed-li">
											<div class="num">
												<p class="flex">{{other.location}}</p>
												מיקום המלון
											</div>
											<div class="progress">
												<el-progress :stroke-width="8" :show-text="false"
													:percentage="computedPercentage1"
													color="rgba(0, 188, 147, 0.8)"></el-progress>
											</div>
										</div>
										<div class="speed-li">
											<div class="num">
												<p class="flex">{{other.wifi}}</p>
												איכות ה-WiFi
											</div>
											<div class="progress">
												<el-progress :stroke-width="8" :show-text="false"
													:percentage="computedPercentage2"
													color="rgba(0, 188, 147, 0.8)"></el-progress>
											</div>
										</div>
										<div style="height: 8px;"></div>
										<button class="btn">
											לצפיה בכל הביקורות
											<img src="~assets/images/icon/Group.png" />
										</button>
									</div>
								</div>
								<div class="customer">
									<p>לא אוהבים לסגור לבד?</p>
									<p>חסכו לכם את כאב הראש</p>
									<div class="chat-btn">
										דברו עם נציג<img src="~assets/images/icon/Page-1.png" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<h1 class="h-title">{{other.name}}</h1>
					<div class="Palace">
						<div class="Palace-left" :class="{ sticky: !ism?isSticky:'' }" ref="stickyElement">
							<div class="top">
								<div class="index">
									<span>{{other.rating}}</span>
								</div>
								<div class="name">
									<h3>מעולה</h3>
									<div class="yuan">
										<!--填充空白的位置 -->
										<span v-for="j in Math.max(0, 5 - Math.floor((other.rating || 0) / 2))"
											:key="'fraction-' + j"></span>
										<!-- 显示当前的分数 -->
										<span v-for="i in Math.min(5, Math.floor((other.rating || 0) / 2))"
											:key="'current-' + i" class="current"></span>
									</div>
									<p>0 חוות דעת</p>
								</div>
								<div class="speed">
									<div class="tit">ביקורות האורחים:</div>
									<div class="speed-li">
										<div class="num">
											<p class="flex">{{other.price}}</p>
											תמורה על הכסף
										</div>
										<div class="progress">
											<el-progress :stroke-width="8" :show-text="false"
												:percentage="computedPercentage"
												color="rgba(0, 188, 147, 0.8)"></el-progress>
										</div>
									</div>
									<div class="speed-li">
										<div class="num">
											<p class="flex">{{other.location}}</p>
											מיקום המלון
										</div>
										<div class="progress">
											<el-progress :stroke-width="8" :show-text="false"
												:percentage="computedPercentage1"
												color="rgba(0, 188, 147, 0.8)"></el-progress>
										</div>
									</div>
									<div class="speed-li">
										<div class="num">
											<p class="flex">{{other.wifi}}</p>
											איכות ה-WiFi
										</div>
										<div class="progress">
											<el-progress :stroke-width="8" :show-text="false"
												:percentage="computedPercentage2"
												color="rgba(0, 188, 147, 0.8)"></el-progress>
										</div>
									</div>
									<div style="height: 8px;"></div>
									<button class="btn">
										לצפיה בכל הביקורות
										<img src="~assets/images/icon/Group.png" />
									</button>
								</div>
							</div>
							<div class="customer">
								<p>לא אוהבים לסגור לבד?</p>
								<p>חסכו לכם את כאב הראש</p>
								<div class="chat-btn">
									דברו עם נציג<img src="~assets/images/icon/Page-1.png" />
								</div>
							</div>
						</div>
						<div class="Palace-right" :style="{marginLeft:isSticky?'3.32rem':''}">
							<div class="Hotel-li" v-for="(item,index) in hotelslist" :key="index">
								<div class="room">
									<div class="left flex">
										<h2>{{item.room_name}}</h2>
										<p>{{item.room_data_trans.bedding_type}}</p>
										<div class="laber-slide">
											<div class="laber">
												<div>חדר מקלחת פרטי <img src="~assets/images/icon/icon23.png" /></div>
												<div>חדר מקלחת פרטי <img src="~assets/images/icon/icon23.png" /></div>
												<div>חדר מקלחת פרטי <img src="~assets/images/icon/icon23.png" /></div>
											</div>
										</div>
									</div>
									<div class="img">
										<el-image style="width: 100%; height: 100%" :src="item.images?item.images[0]:''"
											:preview-src-list="item.images">
										</el-image>
										<p v-if="item.images?item.images.length>0:false">תמונות
											{{item.images?item.images.length:0}}<i class="el-icon-view"></i>
										</p>
									</div>
								</div>
								<div class="item-li">
									<div class="item-li-info" v-for="(item2,index2) in item.children" :key="index2">
										<div class="info item-l">
											<div class="btn">
												<p v-if="index2==0">המחיר הכי טוב</p>
												<div class="button" @click="tocheckout(item)">
													הזמינו עכשיו
												</div>
												<!-- <router-link :to="'/checkoutPage?book_hash=' + item.book_hash">
													<div class="button">
														הזמינו עכשיו
													</div>
												</router-link> -->
											</div>
											<div class="item-price flex">
												<div>₪ {{item2.daily_prices}}</div>
												<p>{{futax(item)}} מיסים ואגרות {{fuunit(item)}}</p>
												<p>עבור {{other.date}} לילות עבור {{other.total_guests}} אורחים</p>
											</div>
										</div>
										<div class="info wallet">
											<div class="p" style="color: rgb(0, 188, 147);">
												<img class="l" src="~assets/images/icon/info-feature.png" />
												ניתן לבטל בחינם עד ל-27 באוגוסט*
												<img class="r" src="~assets/images/icon/icon.png" />
											</div>
											<div class="p">
												<img class="l" src="~assets/images/icon/info-feature.png" />
												שלם עכשיו
												<img class="r" src="~assets/images/icon/qb.png" />
											</div>
										</div>
										<div class="info wallet no-boder">
											<div class="p">
												<img class="l" src="~assets/images/icon/info-feature.png" />
												{{item2.bedding_type}}
												<img class="r" src="~assets/images/icon/icon27.png" />
											</div>
											<!-- 无早餐 -->
											<div v-if="item2.meal=='nomeal'" class="p">
												<img class="l" src="~assets/images/icon/info-feature.png" />
												לא כולל ארוחות
												<img class="r" src="~assets/images/icon/icon26.png" />
											</div>
											<!-- 含早餐 -->
											<div v-if="item2.meal=='breakfast'" class="p"
												:style="{color:item2.meal_data.has_breakfast?'rgba(255, 50, 99, 1)':'#1A1A1A'}">
												<img class="l" src="~assets/images/icon/info-feature.png" />
												{{item2.meal_data.has_breakfast?'ארוחת בוקר כלולה':'לא כולל ארוחות'}}
												<img v-if="item2.meal_data.has_breakfast" class="r"
													src="~assets/images/icon/icon26s.png" />
												<img v-if="!item2.meal_data.has_breakfast" class="r"
													src="~assets/images/icon/icon26.png" />
											</div>

											<div v-if="item2.amenities_datacx" class="p"
												style="color: rgba(255, 50, 99, 1);">
												סוג המיטה לא מובטח
												<img class="r" src="~assets/images/icon/icon25.png" />
											</div>

											<div class="p" v-if="item2.amenities_data">
												חדר ללא עישון
												<img class="r" src="~assets/images/icon/icon24.png" />
											</div>
										</div>
									</div>
									<div class="more" v-if="item.children.length>5">
										5 אפשרויות נוספות<i class="el-icon-arrow-down"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="mobile-customer">
						<div class="customer">
							<p>לא אוהבים לסגור לבד?</p>
							<p>חסכו לכם את כאב הראש</p>
							<div class="chat-btn">
								דברו עם נציג<img src="~assets/images/icon/Page-1.png" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 移动端搜索 -->
		<el-drawer :with-header="false" :visible.sync="searchdirection" size="100%" direction="btt">
			<mobile-header @close="searchdirection=false" />
			<div class="m-search">
				<div class="pac-search">
					<div class="search-btn" @click="citysearch"></div>
					<el-autocomplete @keyup.enter.native="search" suffix-icon="el-icon-search" class="pac-input"
						v-model="searchQuery.destinationName" :fetch-suggestions="querySearch"
						@focus="searchQuery.destinationName=''" placeholder="select city" @select="handleSelect">
						<template slot-scope="{ item }">
							<div>{{ item.city }}</div>
						</template>
					</el-autocomplete>
				</div>
			</div>
		</el-drawer>
	</div>
</template>

<script>
	import casino from '@/mixins/casino'
	import {
		getHotelInfo
	} from '@/api/kentaHb'
	import {
		currencyMap
	} from '@/config/paypal.js'
	export default {
		props: {
			other: {
				type: Object,
				default: () => ({
					price: 0,
					location: 0,
					wifi: 0
				}) // 设置默认值
			}
		},
		computed: {
			computedPercentage() {
				// 将 `other.price` 限制在 0 到 100 之间
				return Math.min(Math.max(this.other.price, 0), 100) * 10;
			},
			computedPercentage1() {
				// 将 `other.price` 限制在 0 到 100 之间
				return Math.min(Math.max(this.other.location, 0), 100) * 10;
			},
			computedPercentage2() {
				// 将 `other.price` 限制在 0 到 100 之间
				return Math.min(Math.max(this.other.wifi, 0), 100) * 10;
			}
		},

		mixins: [casino],
		data() {
			return {
				searchdirection: false,
				hotelslist: [],
				other: {},
				isSticky: false,
				stickyOffset: 0,
				issearchSticky: false,
				pricechSticky: false,
				otherimg: [],
				dayTime: '',
				defaultTime: '',
				list: [],
				loading: true,
				mimgNum: 0,
				ism: false,

				modifyData: {
					checkin: '',
					checkout: '',
					hid: "",
					other: {},
					adults: 1,
					children: []
				},
				swiperOptionM: {
					autoplay: {
						delay: 5000
					},
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets', // 或者 'fraction'，'progressbar' 等
					},
					// 将指示器放置在顶部
					paginationClickable: true,
					paginationBulletRender: (index, className) => {
						return `<span class="${className}">${index + 1}</span>`;
					},
				},
			}
		},
		mounted() {
			this.dayTime = this.$route.query.time
			this.defaultTime = this.$route.query.time
			this.searchOffset = this.$refs.searchElement.offsetTop;
			document.querySelector("body").setAttribute("style", "background-color:rgba(245, 245, 245, 1)");

			if (this.$route.query.adults) {
				this.list = JSON.parse(this.$route.query.adults)
			}

			this.getHotel()
		},
		beforeDestroy() {
			window.removeEventListener('scroll', this.handleScroll);
		},
		methods: {
			// 跳去下一个页面
			tocheckout(e) {
				let peopleNum = 2
				if (this.list.length > 0) {
					peopleNum = this.list[0].value + this.list[1].value
				}
				let query = {
					room_name: e.room_name,
					book_hash: e.book_hash,
					// taxprice: this.futax(e),
					// unit: this.fuunit(e),
					taxes: JSON.stringify(e.payment_options.payment_types[0].tax_data.taxes),
					hid: this.$route.query.id,
					checkin: this.modifyData.checkin,
					checkout: this.modifyData.checkout,
					peopleNum: peopleNum
					// other: JSON.stringify(this.other)
				}
				this.$router.push({
					path: '/checkoutPage',
					query: query
				})
			},
			// 移动端人数选择
			showmember() {
				this.$refs.member.handleVisible4()
			},
			// 移动端时间选择
			showdatepicker() {
				this.$refs.mdatepicker.handleVisible3()
			},
			// 单位
			fuunit(val) {
				let unit = ""
				if (val) {
					if (val.payment_options) {
						if (val.payment_options.payment_types.length > 0) {
							val.payment_options.payment_types.forEach(item => {
								item.tax_data.taxes.forEach(j => {
									Object.keys(currencyMap).forEach(key => {
										if (j.currency_code == key) {
											unit = currencyMap[key]
										}
									})
								})
							})
							return unit;
						}
					} else {
						return unit;
					}
				} else {
					return unit;
				}
			},
			// 税费
			futax(val) {
				let price = 0
				if (val) {
					if (val.payment_options) {
						if (val.payment_options.payment_types.length > 0) {
							val.payment_options.payment_types.forEach(item => {
								item.tax_data.taxes.forEach(j => {
									price = price + Number(j.amount)
								})

							})
							return price.toFixed(2);
						}
					} else {
						return price;
					}
				} else {
					return price;
				}
			},
			changeGuests(data) {
				this.loading = true
				this.modifyData.adults = data[0].value
				this.list = data
				// 获取未成年人
				let children = []
				if (data[1].value > 0) {
					for (let i = 0; i < data[1].value; i++) {
						let data = 12
						children.push(data)
					}
				}
				this.modifyData.children = children.length > 0 ? children : [],
					this.getDateils()
			},
			// 筛选时间
			RangeTime(e) {
				this.loading = true
				this.dayTime = e
				this.getHotel()
			},
			scrollToTop() {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				})
			},
			// 页面是否是移动端
			checkIfMobile() {
				if (820 < window.innerWidth) {
					this.ism = false
				} else {
					this.ism = true
				}
			},
			// 监听滚动
			handleScroll() {
				this.isSticky = (window.scrollY + 130) >= this.stickyOffset;
				this.issearchSticky = window.scrollY >= this.searchOffset;
				this.pricechSticky = window.scrollY >= this.priceOffset;
			},
			getHotel() {
				this.modifyData.hid = this.$route.query.id
				if (this.dayTime) {
					let checkin = (this.dayTime.split("/")[0]).split("-")
					let checkinTime = checkin[2] + '-' +
						checkin[1] + '-' + checkin[0]

					let checkout = (this.dayTime.split("/")[1]).split("-")
					let checkoutTime = checkout[2] + '-' +
						checkout[1] + '-' + checkout[0]

					this.modifyData.checkin = checkinTime
					this.modifyData.checkout = checkoutTime
					this.getDateils()
				}
			},
			// 价格相加
			getprice(list) {
				let num = 0
				if (list.length > 0) {
					list.forEach(item => {
						num = num + Number(item)
					})
				}
				return num
			},
			getDateils() {
				getHotelInfo(this.modifyData).then(res => {
					let arr = res.data.hotels[0].rates
					this.hotelslist = []
					this.other = res.data.other
					this.otherimg = this.other.images ? (this.other.images.length > 2 ? this.other.images.slice(0,
						2) : []) : []
					this.mimgNum = res.data.other.images ? (res.data.other.images.length > 0 ? res.data.other
						.images.length : 0) : 0
					arr.forEach(element => {
						let index = this.hotelslist.findIndex(t => {
							return t.room_name === element.room_name
						})
						if (index === -1) {
							this.hotelslist.push({
								room_name: element.room_name,
								children: [],
								payment_options: element.payment_options,
								room_data_trans: element.room_data_trans,
								images: element.images,
								book_hash: element.book_hash,
							})
							index = this.hotelslist.length - 1
						}

						this.hotelslist[index].children.push({
							allotment: element.allotment,
							meal: element.meal,
							meal_data: element.meal_data,
							// daily_prices: this.getprice(element.daily_prices),
							daily_prices:element.daily_prices[0],
							bedding_type: element.room_data_trans.bedding_type,
							amenities_data: element.amenities_data.some(s => s == 'non-smoking'),
							amenities_datacx: element.amenities_data.some(s => s ==
								'not-guaranteed')
						})
					})
					this.loading = false
					this.$nextTick(() => {
						this.stickyOffset = this.$refs.stickyElement.offsetTop;
						this.priceOffset = this.$refs.priceElement.offsetTop;
					})
					window.addEventListener('scroll', this.handleScroll);

					this.checkIfMobile()
					window.addEventListener("resize", this.checkIfMobile);

				}).catch(err => {
					this.loading = false
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.m-ban::v-deep .swiper-pagination-bullet {
		background: rgba(218, 218, 218, 1);
	}

	.m-ban::v-deep .swiper-pagination-bullet-active {
		background: #fff;
	}

	@media (max-width: 820px) {
		.page {
			.content .nav .right .xx .rtl {
				direction: rtl;
			}

			.Palace .Palace-left .top .name {
				border-bottom: none;
			}

			.m-search {
				padding: 0.3rem 0;

				.pac-search {
					text-align: center;
				}

				.search-btn {
					right: 0.17rem;
				}
			}

			.mfilter-bg {
				width: 100%;
				background-color: #f5f5f5;
				padding: 0.12rem 0;
				position: fixed;
				left: 0;
				bottom: 0;
				z-index: 9;
				border-top: 1px solid rgb(218, 218, 218);
				border-bottom: 1px solid rgb(218, 218, 218);

				.filter-f {
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.select {
					background-color: rgba(255, 50, 99, 0.08) !important;
					color: rgba(255, 50, 99, 1);
					border-color: rgba(255, 50, 99, 1) !important;
					padding: 0 0.5rem !important;
				}

				.pub-div :nth-last-child(1) {
					margin-right: 0;
				}

				i {
					margin-right: 0.08rem;
				}

				.pub-div {
					display: flex;
					align-items: center;
					justify-content: center;
					text-align: center;
					height: 0.4rem;
					margin-right: 0.08rem;
					background-color: #fff;
					padding: 0 0.12rem;
					border-radius: 6px;
					border: 1px solid rgba(218, 218, 218, 1)
				}

				.pub-div img {
					width: 0.16rem;
					height: auto;
				}
			}

			.ismobile {
				position: relative;
				margin-bottom: 0.4rem;

				.Palace .Palace-left .top .speed {
					border-top: 1px solid rgba(218, 218, 218, 1)
				}

				.Palace-left {
					display: inline-block !important;
				}
			}

			.price-info {
				position: relative;

				.bgs {
					width: 0.3rem;
					height: 0.2rem;
					position: absolute;
					right: 0.6rem;
					top: 0.07rem;
					z-index: 9;
					background: linear-gradient(90deg, #FEFEFE 83.25%, rgba(254, 254, 254, 0) 100%);
				}
			}

			.pricesticky {
				width: 100% !important;
				margin-left: 0 !important;
				padding: 8px 0.2rem;

				.price-info .bgs {
					width: 0.5rem;
					height: 0.2rem;
					position: absolute;
					right: auto;
					top: 0;
					left: 47%;
					z-index: 9;
					background: linear-gradient(90deg, #FEFEFE 8.25%, rgba(254, 254, 254, 0) 100%);
				}

				.price-info .r {
					width: 50% !important;
					flex: inherit !important;
					overflow-x: auto !important;
				}
			}

			.mobile-customer {
				display: inline-block;

				.customer {
					margin-top: 0;
					margin-bottom: 0.9rem;
				}
			}

			.laber-slide {
				display: flex;
				width: 100%;
				overflow-x: auto;
				white-space: nowrap;
				padding-bottom: 0.16rem;
				direction: rtl;
			}


			.Palace .Palace-right .Hotel-li {
				background: none;
				border: none;
				border-radius: 0
			}

			.Palace .Palace-right .Hotel-li .item-li .wallet {
				border-bottom: 1px solid rgb(218, 218, 218) !important;
				border-left: none !important;
				border-right: none !important
			}

			.Palace .Palace-right .Hotel-li .item-li .item-li-info {
				flex-direction: column-reverse;
			}

			.Palace .Palace-right .Hotel-li .item-li .info {
				width: 100%;
			}

			.Palace .Palace-right .Hotel-li .item-li {
				border-top: none;
			}

			.Palace .Palace-right .Hotel-li .room .left .laber div {
				direction: ltr;
			}

			.Palace .Palace-right .Hotel-li .item-li .item-li-info {
				background-color: #fff;
				border-radius: 8px;
				overflow: hidden;
				margin-top: 0.08rem;
				border: 1px solid rgb(218, 218, 218) !important;
			}

			.Palace .Palace-right .Hotel-li .room {
				flex-direction: column-reverse;
				background-color: #fff;
				border-radius: 8px;
				overflow: hidden;
				border: 1px solid rgb(218, 218, 218);
			}

			.Palace .Palace-right .Hotel-li .room .left .laber {
				margin-top: 0.16rem;
			}

			.Palace .Palace-right .Hotel-li .room .left h2 {
				margin-top: 0;
			}

			.Palace .Palace-right .Hotel-li .room .img {
				width: 100%;
			}

			.h-title {
				margin-top: 0;
				font-size: 0.28rem;
				padding: 0 0.2rem;
				line-height: 31.64px;
			}

			.Palace .Palace-left .top .speed .tit,
			.Palace .Palace-left .customer,
			.Palace .Palace-left {
				display: none;
			}

			.Palace .Palace-right {
				margin-left: 0 !important;
				padding-left: 0;
				width: calc(100% - 0.2rem);
				flex: inherit;
				padding-left: 0.2rem;
			}

			.ismobile {
				display: inline-block;
				width: 100%;
				position: relative;

				.Palace {
					display: inline-block !important;
					width: calc(100% - 0.2rem);
					padding-left: 0.2rem;
				}

				.Palace-left {
					width: 100%;
				}
			}

			.price .price-info .r {
				width: 0.8rem;
				display: flex;
				overflow: hidden;
				white-space: nowrap;
				direction: rtl;

			}

			.price p {
				margin-right: 0;
				margin-left: 0.12rem;
				text-align: center;
			}

			.r-w {
				direction: ltr;
			}

			.price button {
				width: 1.16rem;
			}

			.price {
				margin-top: 0.16rem;
				width: calc(100% - 0.4rem);
				overflow: hidden;
				margin-left: 0.2rem;
				margin-bottom: 0.16rem;
			}

			.price .num {
				margin-left: 0.12rem;
				font-size: 0.16rem;
				padding-right: 0.1rem;
				background: linear-gradient(90deg, #FEFEFE 3.25%, rgba(254, 254, 254, 0) 100%);
			}



			.swiper-pagination {
				position: absolute;
				top: 10px;
				/* 根据需要调整顶部位置 */
				left: 50%;
				transform: translateX(-50%);
				height: 8px;
			}

			.m-ban {
				display: block;
			}

			.content .nav .right .xx {
				flex-direction: column-reverse;
				align-items: flex-end;
			}

			.content .ban {
				display: none;
			}

			.content .Hotel {
				border: none;
				border-top: 1px solid rgb(218, 218, 218);
				border-radius: 0;
			}

			.content .nav .right .xx .m-line {
				display: inline-block !important;
			}

			.m-line-no {
				display: none !important;
			}

			.content .nav {
				padding: 0.24rem 0.2rem;
			}

			.navs {
				padding: 0 0.2rem;
				line-height: 0.18rem;
				display: flex;
				flex-direction: column-reverse;

			}

			.content .nav .right h1 {
				font-size: 0.4rem;
				line-height: 0.4rem;
			}



			.Hotel .left {
				display: none;
			}

			.search-box {
				display: none;
			}

			.warps {
				width: 100%;
			}
		}
	}

	.ismobile {
		display: none;
	}

	.m-ban {
		position: relative;
		display: none;

		p {
			position: absolute;
			right: 23px;
			bottom: 16px;
			padding: 12px 16px;
			background-color: #fff;
			border-radius: 6px;
			font-size: 14px;
			font-weight: 400;
			z-index: 1;
		}
	}


	.navs {
		margin: 0.26rem 0;
		font-size: 0.12rem;
		text-align: right;
		color: rgba(26, 26, 26, 0.6);

		.span-li {
			margin: 0 !important;
		}

		span {
			margin: 0 0.05rem;
			display: inline-block;
		}

		i {
			font-weight: bold;
		}
	}

	.sticky {
		position: fixed;
		top: 1.4rem;
	}

	a {
		text-decoration: none;
	}

	.pricesticky {
		position: fixed;
		top: 0.64rem;
		width: 100%;
		z-index: 999;
		left: 0;
		margin-top: 0 !important;
		border: none !important;
		border-radius: 0 !important;
		border-bottom: 1px solid rgba(218, 218, 218, 1) !important;
		justify-content: center;

		.price-info {
			width: 9.10rem;
			margin: 0 auto;
			flex: inherit !important;


			span {
				margin-left: 24px;
				margin-right: 0 !important;
			}

			.fh {
				display: block !important;
			}

			button,
			.num {
				display: none;
			}
		}
	}

	.searchsticky {
		position: fixed;
		top: 0;
		width: 100%;
		background-color: #fff !important;
		z-index: 99;
	}

	.mobile-customer {
		display: none;
		padding: 0 0.2rem;
		width: 100%;
	}

	.customer {
		margin-top: .16rem;
		padding: .24rem;
		background-color: #fff;
		border-radius: 8px;
		border: 1px solid rgba(218, 218, 218, 1);

		p {
			font-size: 0.20rem;
			font-weight: 600;
			text-align: center;

		}

		.chat-btn {
			margin-top: .24rem;
			border: 1px solid rgba(52, 81, 255, 1);
			height: 0.48rem;
			width: 100%;
			font-size: 0.16rem;
			display: flex;
			cursor: pointer;
			align-items: center;
			justify-content: center;
			font-weight: 600;
			border-radius: 6px;
			background-color: #fff;
			color: rgba(52, 81, 255, 1);

			img {
				width: .24rem;
				height: auto;
				margin-left: 10px;
			}
		}
	}

	.Palace {
		display: flex;

		.Palace-right {
			flex: 1;
			padding-left: 0.16rem;

			.Hotel-li {
				background-color: #fff;
				border-radius: 8px;
				overflow: hidden;
				margin-bottom: 16px;
				border: 1px solid rgba(218, 218, 218, 1);

				.item-li {
					.more {
						//border-top: 1px solid rgba(218, 218, 218, 1);
						text-align: center;
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 0.16rem 0;
						background-color: #fff;
						font-size: 0.14rem;
						font-weight: 400;
						color: rgba(255, 50, 99, 1);
						cursor: pointer;

						i {
							color: rgba(255, 50, 99, 1);
							margin-left: 0.1rem;
							font-weight: bold;
						}
					}

					.item-li-info:nth-last-child(1) {
						border-bottom: none;
					}

					.item-li-info {
						border-bottom: 1px solid rgba(218, 218, 218, 1);
						display: flex;
					}

					border-top: 1px solid rgba(218, 218, 218, 1);

					.no-boder {
						border: none !important;
					}

					.wallet {
						border-left: 1px solid rgba(218, 218, 218, 1);
						border-right: 1px solid rgba(218, 218, 218, 1);

						.p {
							margin-bottom: 8px;
							display: flex;
							align-items: center;
							justify-content: flex-end;

							.r {
								width: 0.16rem;
								height: auto;
								margin-left: 5px;
							}

							.l {
								width: 0.12rem;
								height: auto;
								margin-right: 5px;
							}
						}

					}

					.item-l {
						display: flex;

						.item-price {
							text-align: right;

							div {
								font-size: 0.20rem;
								font-weight: 600;
								letter-spacing: -0.02em;
								margin-bottom: 8px;
							}

							p {
								font-size: 0.12rem;
								font-weight: 400;
								color: rgba(26, 26, 26, 0.6);
							}

						}

						.btn {
							.button {
								cursor: pointer;
								margin-top: 8px;
								width: 1.19rem;
								height: 0.40rem;
								background-color: rgba(255, 50, 99, 1);
								border-radius: 8px;
								font-size: 0.14rem;
								font-weight: 400;
								text-align: center;
								line-height: 0.40rem;
								color: #fff;
							}

							p {
								font-size: 0.14rem;
								font-weight: 400;
								color: rgba(0, 188, 147, 1);
								margin-left: 0.16rem;
							}
						}
					}

					.info {
						width: 33.333333333%;
						padding: 16px 15px;
					}
				}

				.room {
					display: flex;

					.left {
						text-align: right;
						padding: 0.16rem 0.16rem 0 0;

						.laber {
							margin-top: 0.40rem;
							display: flex;
							align-items: center;
							justify-content: flex-end;

							div {
								background-color: rgba(245, 245, 245, 1);
								border-radius: 4px;
								display: flex;
								align-items: center;
								justify-content: flex-end;
								padding: 4px;
								margin-left: 12px;

								img {
									width: 0.16rem;
									margin-left: 5px;
									height: auto;
								}
							}
						}

						h2 {
							font-size: 0.20rem;
							font-weight: 600;
							text-align: right;
							margin: 8px 0;
						}
					}

					.img {
						cursor: pointer;
						width: 1.99rem;
						height: 1.43rem;
						position: relative;

						p {
							font-size: 0.12rem;
							font-weight: 400;
							position: absolute;
							background-color: rgba(254, 254, 254, 1);
							padding: 4px 6px;
							border-radius: 4px;
							right: 12px;
							bottom: 8px;

							i {
								margin-left: 5px;
							}
						}

						img {
							width: 100%;
							height: 100%;
						}
					}
				}
			}
		}



		.Palace-left {
			width: 3.32rem;



			.btn {
				border: 1px solid rgba(0, 188, 147, 1);
				height: 0.48rem;
				width: 100%;
				font-size: 0.16rem;
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: 600;
				border-radius: 6px;
				background-color: #fff;
				color: rgba(0, 188, 147, 1);

				img {
					width: .24rem;
					height: auto;
					margin-left: 10px;
				}
			}

			.top {
				position: relative;
				background-color: #fff;
				border-radius: 8px;
				border: 1px solid rgba(218, 218, 218, 1);

				.speed {
					padding: 0.24rem;

					.speed-li {
						margin-bottom: 16px;

						.progress {
							margin-top: 8px;
							transform: rotate(-180deg)
						}

						.num {
							display: flex;
							align-items: center;
							font-size: 0.14rem;
							font-weight: 400;
						}
					}

					.tit {
						font-size: 0.20rem;
						font-weight: 600;
						margin-bottom: 0.24rem;
						text-align: right;
					}
				}

				.index {
					position: absolute;
					top: 0;
					left: 24px;
					z-index: 1;
					min-width: 0.66rem;
					height: 0.88rem;
					background: url("~assets/images/icon/Vector.png");
					background-size: 100% 100%;
					font-size: 0.56rem;
					font-weight: 600;
					color: #fff;
					padding-top: 8px;
					letter-spacing: -0.04em;
					text-align: center;

					span {
						padding: 0 0.1rem;
						display: inline-block;
					}
				}

				h3 {
					font-size: 0.32rem;
					font-weight: 500;
					letter-spacing: -0.04em;
				}

				.name {
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
					align-items: flex-end;
					padding: 0.24rem;
					border-bottom: 1px solid rgba(218, 218, 218, 1);



					p {
						font-size: .14rem;
						font-weight: 400;
						color: rgba(26, 26, 26, 0.6);
						direction: rtl;
					}
				}

				.yuan {
					display: flex;
					align-items: center;
					margin-top: 16px;
					margin-bottom: 8px;

					.current {
						background-color: rgba(0, 188, 147, 1);

					}

					span {
						width: 16px;
						height: 16px;
						box-sizing: border-box;
						border: 1px solid rgba(0, 188, 147, 1);
						border-radius: 50%;
						display: inline-block;
						margin-right: 4px;
					}
				}
			}
		}
	}

	.h-title {
		margin-top: .4rem;
		margin-bottom: .24rem;
		text-align: right;
		font-size: 0.32rem;
		font-weight: 500;
		letter-spacing: -0.04em;
		text-align: right;
		direction: rtl;
	}

	.price {
		margin-top: 16px;
		background-color: #fff;
		border-radius: 8px;
		height: 0.57rem;
		border: 1px solid rgba(218, 218, 218, 1);
		padding: 8px;
		display: flex;
		align-items: center;

		.price-info {
			display: flex;
			align-items: center;

			.r {
				display: flex;
				align-items: center;
			}

			.r-w {
				display: flex;
				align-items: center;
			}

			.fh {
				font-size: 0.14rem;
				font-weight: 500;
				cursor: pointer;
				color: rgba(26, 26, 26, 0.6);
				display: none;

				i {
					transform: rotate(-180deg);
					display: inline-block;
					font-weight: bold;
					font-size: 18px;
					margin-right: 0.05rem;
				}
			}
		}

		p {
			font-size: 0.14rem;
			font-weight: 500;
			margin-right: 24px;
		}

		.num {
			margin-left: .16rem;
			font-size: 0.20rem;
			font-weight: 600;
		}

		button {
			width: 1.32rem;
			height: 0.4rem;
			background-color: rgba(255, 50, 99, 1);
			border-radius: 6px;
			border: none;
			font-size: 0.14rem;
			font-weight: 600;
			color: #fff;
		}
	}

	.content {
		.Hotel {
			background-color: #fff;
			border-radius: 8px;
			overflow: hidden;
			border: 1px solid rgba(218, 218, 218, 1);
		}

		.ban {
			display: flex;

			.ban-h {
				height: 4rem;
				background-color: red;
			}

			.ban-li {
				position: relative;
				width: 50%;
				height: 4rem;
				cursor: pointer;

				p {
					position: absolute;
					right: 23px;
					bottom: 16px;
					padding: 12px 16px;
					background-color: #fff;
					border-radius: 6px;
					font-size: 14px;
					font-weight: 400;
					z-index: 1;
				}
			}

			.ban-li:nth-child(1) {
				padding-right: 8px;
			}

			.ban-li:nth-child(2) {
				padding-left: 8px;
			}

			img {
				width: 100%;
				height: 4rem;
			}
		}

		.nav {
			display: flex;
			padding: 0.24rem;


			.right {
				.xx {
					display: flex;
					justify-content: flex-end;
					align-items: center;
					margin-bottom: 16px;

					.address {
						display: flex;
						align-items: center;
					}

					.xx-info {
						display: flex;
						align-items: center;
					}

					.rate {
						position: relative;

						.disabled {
							width: 1.15rem;
							height: 20px;
							position: absolute;
							top: 0;
							left: 0;
							z-index: 1;
						}
					}

					.p {
						font-size: 0.14rem;
						font-weight: 400;
						color: rgba(26, 26, 26, 0.6);
						direction: rtl;
					}

					.m-line {
						display: none !important;
					}

					.line {
						width: 12px;
						height: 1px;
						background-color: rgba(218, 218, 218, 1);
						margin: 0 8px;
						display: inline-block;
					}
				}

				h1 {
					font-size: 0.56rem;
					font-weight: 600;
					text-align: right;
				}
			}

			.time {
				margin-top: 0.12rem;
				font-size: 0.14rem;
				font-weight: 400;
				color: rgba(26, 26, 26, 0.6);
				direction: rtl;
				text-align: left;
			}

			.yuan {
				display: flex;
				align-items: center;

				img {
					width: 0.24rem;
					height: auto;
					margin-left: 4px;
				}

				.current {
					background-color: rgba(0, 188, 147, 1);

				}

				span {
					width: 16px;
					height: 16px;
					box-sizing: border-box;
					border: 1px solid rgba(0, 188, 147, 1);
					border-radius: 50%;
					display: inline-block;
					margin-right: 4px;
				}
			}
		}
	}



	.pac-search {
		position: relative;
	}

	.search-btn {
		cursor: pointer;
		width: 60px;
		height: 40px;
		position: absolute;
		top: 0;
		right: 0;
		z-index: 10;
	}

	.filter::v-deep .el-input__inner {
		background-color: #fff !important;
		border-radius: 6px;
		color: rgba(26, 26, 26, 0.6);
	}

	.pac-search ::v-deep .el-input__inner {
		text-align: right;
		padding-right: 35px;
		width: 3.46rem;
	}

	.pac-search ::v-deep .el-input__inner::placeholder,
	.filter::v-deep .el-input__inner::placeholder {
		color: rgba(26, 26, 26, 0.6);
	}

	.filter::v-deep .el-input__icon {
		color: rgba(118, 118, 118, 1);
		font-weight: bold;
	}

	.pac-search ::v-deep .el-input__suffix {
		font-size: 18px;
		color: rgba(118, 118, 118, 1);
	}

	.search-border {
		border-bottom: 1px solid rgba(218, 218, 218, 1);
	}


	.search-box {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 0.12rem 0;

		.search-li {
			margin: 0 4px;
		}

		.a {
			height: 0.40rem;
			line-height: 0.4rem;
			background-color: rgba(255, 50, 99, 0.08);
			border-radius: 6px;
			padding: 0 0.24rem;
			font-size: 0.16rem;
			font-weight: 600;
			color: rgba(255, 50, 99, 1);
			border: 1px solid rgba(255, 50, 99, 1);

		}
	}
</style>