<template>
	<div class="page">
		<new-header />
		<div class="warps">
			<div class="hotel">
				<div class="left flex">
					<div class="events">
						<div class="day">
							25 אירועים מתוך 895 אירועים
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
							<div class="select-li">
								<div class="flex">
									<i class="el-icon-back"></i>
								</div>
								<div class="flex price">
									<span class="num">€99</span>
								</div>
								<div class="text">
									<p>פורמולה 1 2024</p>
									<p>Circuit Park Zandvoort</p>
									<p>Zandvoort (NLD)</p>
								</div>
								<div class="info">
									<div class="xx">
										<p class="xx-bg">
											<span>אירוע פופולרי</span>
											<img src="~assets/images/icon/icon4.png" />
										</p>
									</div>
									<h3>Dutch Grand Prix</h3>
									<p class="time">אוגוסט 23, 2024 - אוגוסט 25, 2024</p>
								</div>
							</div>
							<div class="select-li">
								<div class="flex">
									<i class="el-icon-back"></i>
								</div>
								<div class="flex price">
									<span class="no-stock">אזל המלאי</span>
								</div>
								<div class="text">
									<p>פורמולה 1 2024</p>
									<p>Circuit Park Zandvoort</p>
									<p>Zandvoort (NLD)</p>
								</div>
								<div class="info">
									<div class="xx">
										<p class="xx-bg">
											<span>אירוע פופולרי</span>
											<img src="~assets/images/icon/icon4.png" />
										</p>
									</div>
									<h3>Dutch Grand Prix</h3>
									<p class="time">אוגוסט 23, 2024 - אוגוסט 25, 2024</p>
								</div>
							</div>
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
							<div class="check-li">
								<span>(798)</span>
								<p>כדורגל</p>
								<img class="icon-img" src="~assets/images/icon/icon22.png" />
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
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
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
			date: ''
		}),
		mounted() {
			this.makMonthList();
		},
		methods: {
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
						.el-icon-back{
							font-size: 24px;
							color: rgba(26, 26, 26, 0.6);
						}
						.price{
							span{
								display: inline-block;
								padding: 0.08rem 0.16rem;
								font-size: 0.16rem;
								font-weight: 600;
								border-radius: 6px
							}
							.no-stock{
								background-color: rgba(238, 35, 68, 0.16);
								color: rgba(238, 35, 68, 1);
							}
							.num{
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
							}

							p {
								font-size: 0.16rem;
								font-weight: 400;
								margin: 0 8px;
							}

							span {
								font-size: 0.16rem;
								font-weight: 400;
								color: rgba(26, 26, 26, 0.4);

							}

							.check-img {
								width: 0.16rem;
								height: 0.16rem;
								border: 1px solid rgba(218, 218, 218, 1);
								box-sizing: border-box;
								border-radius: 2px;
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