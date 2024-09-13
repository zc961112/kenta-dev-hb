<template>
	<div class="page">
		<new-header />
		<div class="search-border" :class="{ searchsticky: issearchSticky }" ref="searchElement">
			<div class="warps">
				<div class="search-box">
					<div class="search-li">
						<p class="a"> עדכון</p>
					</div>
					<div class="search-li filter">
						<filter-member :list="searchQuery.guestList" class="pacf-mb" @change="changeGuests" />
					</div>
					<div class="search-li filter">
						<filter-datepicker class="pacf-dp" :start-and-end-time="searchQuery.date"
							:date-type="searchQuery.dateType" :day-rage-index="dayRageIndex"
							@update:datetype="updateDateType" @update:time="updateStartEndTime"
							@update:daterange="updateDateRange" />
					</div>
					<div class="search-li">
						<div class="pac-search">
							<div class="search-btn" @click="citysearch"></div>
							<el-autocomplete @keyup.enter.native="search" suffix-icon="el-icon-search" class="pac-input"
								v-model="searchQuery.destinationName" :fetch-suggestions="querySearch"
								@focus="searchQuery.destinationName=''" placeholder="Caesar’s Palace Hotel & Casino"
								@select="handleSelect">
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
			<div class="content">
				<div class="Hotel">
					<div class="nav">
						<div class="left flex">
							<div class="yuan">
								<span></span>
								<span class="current"></span>
								<span class="current"></span>
								<span class="current"></span>
								<span class="current"></span>
								<img src="~assets/images/icon/image 1.png" />
							</div>
							<p class="time">14,256 חוות דעת</p>
						</div>
						<div class="right">
							<div class="xx">
								<span class="p">{{other.address}}</span>
								<span class="line"></span>
								<span class="p">0.0 ק״מ ממרכז העיר</span>
								<span class="line"></span>
								<div class="rate">
									<el-rate void-color="#FFB800" :value="other.star_rating" />
									<div class="disabled"></div>
								</div>
							</div>
							<h1>{{other.name}}</h1>
						</div>
					</div>
					<div class="ban">
						<div class="ban-li flex">
							<img src="~assets/images/Rectangle 615.png" />
						</div>
						<div class="ban-li flex">
							<img src="~assets/images/Rectangle 615.png" />
						</div>
					</div>
				</div>
				<div class="price" :class="{ pricesticky: pricechSticky }" ref="priceElement">
					<div class="price-info flex">
						<div @click="scrollToTop" class="fh"><i class="el-icon-download"></i> חזרה למעלה</div>
						<button>לצפיה בדילים</button>
						<p class="num">₪ 2,770 -מ</p>
						<div class="flex"></div>
						<span>מדיניות</span>
						<span>מיקום</span>
						<span>חוות דעת</span>
						<span>שירותים</span>
						<span>חדרים פנויים</span>
					</div>
				</div>
				<h1 class="h-title">חדרים זמינים ב- Caesar’s Palace Hotel & Casino</h1>
				<div class="Palace">
					<div class="Palace-left" :class="{ sticky: isSticky }" ref="stickyElement">
						<div class="top">
							<div class="index">9</div>
							<div class="name">
								<h3>מעולה</h3>
								<div class="yuan">
									<span></span>
									<span class="current"></span>
									<span class="current"></span>
									<span class="current"></span>
									<span class="current"></span>
								</div>
								<p>14,256 חוות דעת</p>
							</div>
							<div class="speed">
								<div class="tit">ביקורות האורחים:</div>
								<div class="speed-li">
									<div class="num">
										<p class="flex">9</p>
										תמורה על הכסף
									</div>
									<div class="progress">
										<el-progress :stroke-width="8" :show-text="false" :percentage="90"
											color="rgba(0, 188, 147, 0.8)"></el-progress>
									</div>
								</div>
								<div class="speed-li">
									<div class="num">
										<p class="flex">8</p>
										מיקום המלון
									</div>
									<div class="progress">
										<el-progress :stroke-width="8" :show-text="false" :percentage="90"
											color="rgba(0, 188, 147, 0.8)"></el-progress>
									</div>
								</div>
								<div class="speed-li">
									<div class="num">
										<p class="flex">10</p>
										איכות ה-WiFi
									</div>
									<div class="progress">
										<el-progress :stroke-width="8" :show-text="false" :percentage="90"
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
									<div class="laber">
										<div>חדר מקלחת פרטי <img src="~assets/images/icon/icon23.png" /></div>
										<div>חדר מקלחת פרטי <img src="~assets/images/icon/icon23.png" /></div>
										<div>חדר מקלחת פרטי <img src="~assets/images/icon/icon23.png" /></div>
									</div>
								</div>
								<div class="img">
									<img :src="item.images?item.images[0]:''" />
									<p v-if="item.images.length>0">תמונות {{item.images.length}}<i
											class="el-icon-view"></i></p>
								</div>
							</div>
							<div class="item-li">
								<div class="item-li-info" v-for="(item2,index2) in item.children" :key="index2">
									<div class="info item-l">
										<div class="btn">
											<p>המחיר הכי טוב</p>
											<div class="button">
												>הזמינו עכשיו
											</div>
										</div>
										<div class="item-price flex">
											<div>₪ {{item2.daily_prices}}</div>
											<p>מיסים ואגרות 170 $</p>
											<p>עבור 3 לילות עבור 2 אורחים</p>
										</div>
									</div>
									<div class="info wallet">
										<div class="p">
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
											מיטה כפולה
											<img class="r" src="~assets/images/icon/icon27.png" />
										</div>
										<div class="p">
											<img class="l" src="~assets/images/icon/info-feature.png" />
											לא כולל ארוחות
											<img class="r" src="~assets/images/icon/icon26.png" />
										</div>
										<div class="p" style="color: rgba(255, 50, 99, 1);">
											סוג המיטה לא מובטח
											<img class="r" src="~assets/images/icon/icon25.png" />
										</div>
										<div class="p">
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
			</div>
		</div>
	</div>
</template>

<script>
	import casino from '@/mixins/casino'
	import axios from 'axios';
	export default {
		mixins: [casino],
		data() {
			return {
				hotelslist: [],
				other: {},
				isSticky: false,
				stickyOffset: 0,
				issearchSticky: false,
				pricechSticky: false
			}
		},
		mounted() {
			this.stickyOffset = this.$refs.stickyElement.offsetTop;
			this.searchOffset = this.$refs.searchElement.offsetTop;
			this.priceOffset = this.$refs.priceElement.offsetTop;
			window.addEventListener('scroll', this.handleScroll);

			document.querySelector("body").setAttribute("style", "background-color:rgba(245, 245, 245, 1)");
			this.getHotel()
		},
		beforeDestroy() {
			window.removeEventListener('scroll', this.handleScroll);
		},
		methods: {
			scrollToTop() {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				})
			},
			handleScroll() {
				this.isSticky = (window.scrollY + 130) >= this.stickyOffset;
				this.issearchSticky = window.scrollY >= this.searchOffset;
				this.pricechSticky = window.scrollY >= this.priceOffset;
			},
			getHotel() {
				let data = {
					hid: this.$route.query.id,
					checkin: "2024-09-19",
					checkout: "2024-09-20",
					other: {}
					// adults: "",
					// children: ""
				}
				axios.post('https://zhouchen.love:8000/get_hotel_info', data, {
					headers: {
						'Content-Type': 'application/json'
					}
				}).then(res => {
					console.log(res.data.data.other, "好好")
					let arr = res.data.data.hotels[0].rates
					this.hotelslist = []
					this.other = res.data.data.other
					arr.forEach(element => {
						let index = this.hotelslist.findIndex(t => {
							return t.room_name === element.room_name
						})
						if (index === -1) {
							this.hotelslist.push({
								room_name: element.room_name,
								children: [],
								room_data_trans: element.room_data_trans,
								images: element.images
							})
							index = this.hotelslist.length - 1
						}

						this.hotelslist[index].children.push({
							allotment: element.allotment,
							daily_prices: element.daily_prices[0]
						})
					});
					console.log(arr)

				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.sticky {
		position: fixed;
		top: 1.4rem;
	}

	.pricesticky {
		position: fixed;
		top: 0.64rem;
		width: 100%;
		z-index: 9;
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

							i {}
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
					width: 0.66rem;
					height: 0.88rem;
					background: url("~assets/images/icon/Vector.png");
					background-size: 100% 100%;
					font-size: 0.56rem;
					font-weight: 600;
					color: #fff;
					padding-top: 8px;
					letter-spacing: -0.04em;
					text-align: center;
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

		span {
			font-size: 0.14rem;
			font-weight: 500;
			margin-right: 24px;
			display: inline-block;
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
		margin-top: 0.49rem;

		.Hotel {
			background-color: #fff;
			border-radius: 8px;
			overflow: hidden;
			border: 1px solid rgba(218, 218, 218, 1);
		}

		.ban {
			display: flex;

			.ban-li {
				width: 50%;
				height: 4rem;
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