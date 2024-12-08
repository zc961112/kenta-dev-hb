<template>
	<div class="page">
		<TripHeader :ishome="false" />
		<main>
			<div class="content">
				<div class="left">
					<!-- <div class="choose">
						<div class="choose-bg">
							<h1>1. &nbsp;&nbsp;בחרו כרטיס או חבילה</h1>
							<div class="text" style="margin-right: 0;">
								<img src="~assets/images/icon/icon13.png" />
								כרטיסים רשמיים ישירות ממארגן האירוע. זמינות בזמן אמת ומקומות ישיבה מובטחים!
							</div>
							<div class="type-name">סוג החבילה:</div>
							<div class="type">
								<div class="type-li" @click="select(index)" :class="[active==index?'current':'']"
									v-for="(item,index) in list" :key="index">
									<span class="Casino" v-if="index==0"><img
											src="~assets/images/icon/icon4.png" />Sponsored by Asper
										Casino</span>
									<div class="radio">
										<img v-if="active==index" src="~assets/images/icon/select.png" />
									</div>
									<div class="ticket">
										{{item.name}}
									</div>
									<div class="tips">
										<p>{{item.p}}</p>
										<p>{{item.t}}</p>
									</div>
								</div>
							</div>
							<div class="people">
								<div class="type-name">מספר אנשים:</div>
								<el-select v-model="value" placeholder="2 אנשים">
									<el-option v-for="item in options" :key="item.value" :label="item.value"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
						</div>
					</div> -->
					<div class="would">
						<div class="would-left">
							<h3>2.איפה תרצו לשבת?</h3>
							<div class="info">
								<div class="top">
									<div class="checkbox">
										<img src="~assets/images/icon/select.png" />
									</div>
									<div class="tickets">Category 3 (corners) tickets</div>
									<div class="price">
										<p style="text-align: left;"><span>€0</span> +</p>
										<div>תוספת לאדם</div>
									</div>
								</div>
								<div class="imgText">
									<p>
										נוף נהדר (מחיר/איכות) על המגרש בפינות האצטדיון. מקסימום 50
									</p>
									<p style="margin-bottom: 0.2rem;">מושבים מובטחים הממוקמים יחד.</p>
									<p style="margin-bottom: 0.2rem;">מקום: Estadi Olímpic Lluís Companys</p>
									<p style="margin-bottom: 0.2rem;">סוג קטגוריה: יציע</p>
									<p>סוג כרטיס: כרטיס אלקטרוני, חלק ביתי</p>
									<p> משלוח: הכרטיסים שלכם יימסרו לפחות 24 שעות לפני האירוע
									</p>
									<p> מקומות ישיבה: מובטחים עד 10 מקומות ישיבה יחד לאירוע זה.
									</p>
									<!-- 移动端下拉查看更多 -->
									<div class="see-more" @click="direction=!direction">מידע נוסף<i
											class="el-icon-arrow-down"></i></div>
								</div>
								<!-- 移动端 座位图-->
								<div class="pm-mobile">
									<img src="~assets/images/pm.png" />
								</div>
								<!-- 查看更多 移动端 -->
								<el-drawer :with-header="false" :visible.sync="direction" size="100%" direction="btt">
									<mobile-header @close="direction=false" />
									<div class="mobile-padding">
										<div class="filter-w">
											<div class="filter" @click="direction=false">
												<img src="~assets/images/icon/mapcolse.png" />
											</div>
										</div>
										<div class="info">
											<div class="top">
												<div class="checkbox">
													<img src="~assets/images/icon/select.png" />
												</div>
												<div class="tickets">Category 3 (corners) tickets</div>
												<div class="price">
													<p style="text-align: left;"><span>€0</span> +</p>
													<div>תוספת לאדם</div>
												</div>
											</div>
											<div class="imgText">
												<p>
													נוף נהדר (מחיר/איכות) על המגרש בפינות האצטדיון. מקסימום 50
												</p>
												<p style="margin-bottom: 0.2rem;">מושבים מובטחים הממוקמים יחד.</p>
												<p style="margin-bottom: 0.2rem;">מקום: Estadi Olímpic Lluís Companys
												</p>
												<p style="margin-bottom: 0.2rem;">סוג קטגוריה: יציע</p>
												<p>סוג כרטיס: כרטיס אלקטרוני, חלק ביתי</p>
												<p> משלוח: הכרטיסים שלכם יימסרו לפחות 24 שעות לפני האירוע
												</p>
												<p> מקומות ישיבה: מובטחים עד 10 מקומות ישיבה יחד לאירוע זה.
												</p>
											</div>
											<!-- 移动端 座位图-->
											<div class="pm-mobile">
												<img src="~assets/images/pm.png" />
											</div>
										</div>
									</div>
								</el-drawer>
							</div>

							<div class="select">
								<div class="checkbox">
									<img src="~assets/images/icon/select.png" />
								</div>
								<div class="tickets">Category 2 (Lateral) tickets</div>
								<div class="price">
									<p style="text-align: left;"> <span>€20</span> +</p>
									<div>תוספת לאדם</div>
								</div>
							</div>

							<div class="select">
								<div class="checkbox">
									<img src="~assets/images/icon/select.png" />
								</div>
								<div class="tickets">Category 2 (Lateral) tickets</div>
								<div class="price">
									<p style="text-align: left;"><span>€101</span> +</p>
									<div>תוספת לאדם</div>
								</div>
							</div>

						</div>
						<div class="would-right">
							<img src="~assets/images/pm.png" />
						</div>
					</div>
					<div class="confirm">
						<button @click="toValenciapage">אישור והמשך</button>
						<div class="confirm-text">
							<p>יש לאשר כדי לראות את המחיר הסופי. ניתן לשנות </p>
							<p>את פרטי הכרטיס/חבילה עד לביצוע ההזמנה סופית.</p>
						</div>
					</div>
					<div class="item-li">
						3.פרטים אישיים
					</div>
				</div>
				<div class="right">
					<div class="Summary">
						<div class="name">
							סיכום ההזמנה שלך
						</div>
						<div class="Summary-li">
							<div class="n">
								אירוע
							</div>
							<p class="p">
								Celta de Vigo vs Valencia CF
							</p>
						</div>
						<div class="Summary-li">
							<div class="n">
								תאריך
							</div>
							<p class="p">
								<span class="dec"><i class="el-icon-check"></i>
									התאריך אושר</span>
								אוגוסט 23, 2024
							</p>
						</div>
						<div class="Summary-li">
							<div class="n">
								איצטדיון
							</div>
							<p class="p">
								Estadio Municipal de Balaídos
							</p>
						</div>
						<div class="Summary-li">
							<div class="n">
								מושבים
							</div>
							<p class="p">
								Long Side
							</p>
						</div>
						<div class="Summary-li Summary-Number">
							<div class="n">
								מספר אנשים
							</div>
							<p class="p">
								2 מבוגרים
							</p>
						</div>
						<div class="Card">
							<div>כרטיס/ים</div>
							<p>2</p>
						</div>
						<div class="Card">
							<div>סה״כ מחיר לאדם</div>
							<p>€55</p>
						</div>
						<div class="Total">
							<div class="n">
								<h4>סה״כ עבור 2 מבוגרים</h4>
								<p>ללא עלויות נוספות</p>
							</div>
							<div class="num">
								€110
							</div>
						</div>
						<div class="order">
							<div class="n">
								<img src="~assets/images/icon/icon15.png" />
								הזמינו בבטחה עם קנטה
							</div>
							<div class="img">
								<img style="height: 0.24rem;" src="~assets/images/icon/imgs1.png" />
								<img style="height: 0.24rem;" src="~assets/images/icon/imgs5.png" />
								<img style="height: 0.4rem;" src="~assets/images/icon/imgs3.png" />
								<img style="height: 0.16rem;" src="~assets/images/icon/imgs2.png" />
								<img style="height: 0.4rem;" src="~assets/images/icon/imgs4.png" />
							</div>
						</div>
					</div>
					<!-- 价格信息移动端 -->
					<el-drawer :with-header="false" :visible.sync="pricedirection" size="100%" direction="btt">
						<mobile-header @close="pricedirection=false" />
						<div class="priceSummary">
							<div class="filter-w">
								<div class="filter" @click="pricedirection=false">
									<img src="~assets/images/icon/mapcolse.png" />
								</div>
							</div>
							<div class="Summary">
								<div class="name">
									סיכום ההזמנה שלך
								</div>
								<div class="Summary-li">
									<div class="n">
										אירוע
									</div>
									<p class="p">
										Celta de Vigo vs Valencia CF
									</p>
								</div>
								<div class="Summary-li">
									<div class="n">
										תאריך
									</div>
									<p class="p">
										<span class="dec"><i class="el-icon-check"></i>
											התאריך אושר</span>
										אוגוסט 23, 2024
									</p>
								</div>
								<div class="Summary-li">
									<div class="n">
										איצטדיון
									</div>
									<p class="p">
										Estadio Municipal de Balaídos
									</p>
								</div>
								<div class="Summary-li">
									<div class="n">
										מושבים
									</div>
									<p class="p">
										Long Side
									</p>
								</div>
								<div class="Summary-li Summary-Number">
									<div class="n">
										מספר אנשים
									</div>
									<p class="p">
										2 מבוגרים
									</p>
								</div>
								<div class="Card">
									<div>כרטיס/ים</div>
									<p>2</p>
								</div>
								<div class="Card">
									<div>סה״כ מחיר לאדם</div>
									<p>€55</p>
								</div>
								<div class="Total">
									<div class="n">
										<h4>סה״כ עבור 2 מבוגרים</h4>
										<p>ללא עלויות נוספות</p>
									</div>
									<div class="num">
										€110
									</div>
								</div>
								<div class="order">
									<div class="n">
										<img src="~assets/images/icon/icon15.png" />
										הזמינו בבטחה עם קנטה
									</div>
									<div class="img">
										<img style="height: 0.24rem;" src="~assets/images/icon/imgs1.png" />
										<img style="height: 0.24rem;" src="~assets/images/icon/imgs5.png" />
										<img style="height: 0.4rem;" src="~assets/images/icon/imgs3.png" />
										<img style="height: 0.16rem;" src="~assets/images/icon/imgs2.png" />
										<img style="height: 0.4rem;" src="~assets/images/icon/imgs4.png" />
									</div>
								</div>
							</div>
						</div>
					</el-drawer>

					<div class="why padding">
						<div class="name">
							למה להזמין ב- <span> Kenta</span>？
						</div>
						<div class="why-li">
							<p>
								<img src="~assets/images/icon/icon14.png" />
								כרטיסים רישמיים
							</p>
							<p>
								<img src="~assets/images/icon/icon14.png" />
								מושבים אחד-ליד-השני
							</p>
							<p>
								<img src="~assets/images/icon/icon14.png" />
								אירועים מובטחים
							</p>
							<p>
								<img src="~assets/images/icon/icon14.png" />
								זמינות בזמן אמת
							</p>
						</div>
					</div>
					<div class="padding">
						<div class="Frequently">
							<div class="name">
								שאלות נפוצות
							</div>
							<div class="checkbox">
								<el-select v-model="value" placeholder="האם תאריכי הכרטיסים מאושרים?">
									<el-option v-for="item in options" :key="item.value" :label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
							<div class="checkbox">
								<el-select v-model="value" placeholder="איך ומתי אקבל את הכרטיסים שלי?">
									<el-option v-for="item in options" :key="item.value" :label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
							<div class="checkbox">
								<el-select v-model="value" placeholder="איפה אני אשב באיצדטיון?">
									<el-option v-for="item in options" :key="item.value" :label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
						</div>
						<div class="help">
							<div class="help-name">איך נוכל לעזור?</div>
							<div class="user">
								<div class="state"></div>
								<img src="~assets/images/kefu.png" />
								<div class="text">
									<p>שירות הלקוחות שלנו ישמח לסייע לכם</p>
									<p>בימי חול בין השעות 09:00-17:00.</p>
								</div>
							</div>
							<div class="contact-li">
								<div class="icon">
									<img src="~assets/images/icon/icon11.png" />
								</div>
								<p>כתבו לנו בWhatsApp</p>
							</div>
							<div class="contact-li">
								<div class="icon">
									<img src="~assets/images/icon/icon12.png" />
								</div>
								<p>כתבו לנו אימייל</p>
								<div class="text">support@kenta.co.il</div>
							</div>
							<div class="contact-li">
								<div class="icon">
									<img src="~assets/images/icon/icon10.png" />
								</div>
								<p>התקשרו</p>
								<div class="text">03-555-8888</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="foo-h"></div>
		</main>
		<!-- 移动端的悬浮 -->
		<div class="suspension-h"></div>
		<div class="suspension">
			<div class="suspension-warp">
				<div class="l">
					<h3>€110</h3>
					<p>Total for 2 adults</p>
				</div>
				<div class="r" @click="pricedirection=true">
					פרטי נסיעה<i class="el-icon-arrow-up"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tripPage',
		data() {
			return {
				options: [{
					value: '2 אנשים',
					label: '1'
				}],
				direction: false,
				pricedirection: false,
				value: '',
				list: [{
						name: 'כרטיס/ים',
						p: 'בחר/י את מקומות הישיבה',
						t: 'שלך בשלב 2.'
					},
					{
						name: 'כרטיס/ים + מלון',
						p: 'בחר/י את מקומות הישיבה',
						t: 'והמלון שלך בשלב 2 ו- 3.'
					}
				],
				active: 0,
				setData: {}
			}

		},
		mounted() {
			this.setData = JSON.parse(this.$route.query.data)
		},
		methods: {
			// 下一页
			toValenciapage() {
				this.$router.push({
					path: '/Valenciapage?data=' + JSON.stringify(this.setData)
				})
			},
			select(index) {
				this.active = index
			}
		}
	}
</script>

<style lang="scss" scoped>
	@media (max-width: 820px) {
		.page {
			.content .left .choose h1 {
				font-size: 0.28rem;
			}

			.content .left .tips {
				width: 100%;
				margin: 0;
			}

			.suspension-h,
			.suspension {
				display: inline-block !important;
			}

			.suspension-warp {
				display: flex;
				align-items: center;
				direction: ltr;

				.r {
					color: #EE2344;
					font-size: 0.16rem;

					i {
						margin-left: 0.16rem;
					}
				}

				.l {
					flex: 1;

					h3 {
						font-size: 0.32rem;
						color: #00BC93;
					}

					p {
						font-size: 0.12rem;
						color: #1A1A1A;
					}
				}
			}

			.filter-w {
				text-align: left;
			}

			.filter {
				background-color: rgba(245, 245, 245, 1);
				display: inline-block;
				height: 0.4rem;
				padding-top: 0.12rem;
				width: 0.48rem;
				text-align: center;
				border: 1px solid #DADADA;
				border-radius: 6px;
			}

			.filter img {
				width: 0.11rem;
				height: auto;
			}

			.see-more {
				color: #3451FF;
				width: 100%;
				position: absolute;
				left: 0;
				bottom: 0;
				direction: ltr;
				font-size: 0.16rem;
				padding: 0.24rem 0.2rem 0.14rem 0.2rem;
				text-align: right;
				background: linear-gradient(180deg, rgba(254, 238, 242, 0.7) 0%, #FEEEF2 100%);
			}

			.mobile-padding {
				padding: 0.2rem;
			}

			.imgText p:nth-child(n+4) {
				display: none;
			}

			.pm-mobile {
				border-top: 1px solid #DADADA;
				padding: 0.2rem;
				display: inline-block;
			}

			.pm-mobile img {
				width: 100%;
			}

			.priceSummary .Summary {
				display: inline-block !important;
				border: none;
			}

			.priceSummary .filter-w {
				padding: 0.24rem 0.2rem;
			}

			.content .confirm button {
				width: 100%;
				margin-bottom: 0.12rem;
				margin-left: 0;
			}

			.content .confirm .confirm-text {
				margin-right: 0;
				margin-left: 0;
			}

			.would .would-left .top {
				padding: 0.2rem !important;
			}

			.content .item-li {
				margin-top: 0.24rem;
				font-size: 0.28rem;
				height: auto;
				padding: 0.24rem 0.2rem;
			}

			.would .would-left .info .imgText {
				padding: 0.2rem;
				position: relative;
			}

			.would .would-left .select {
				padding: 0 0.2rem !important;
			}

			.would .would-left .select .tickets,
			.would .would-left .top .tickets {
				font-size: 0.14rem;
				padding: 0;
				padding-right: 0.16rem !important;
			}

			.would .would-left .info {
				margin-top: 0.16rem;
			}

			.would .would-left h3 {
				margin-top: 0.4rem;
				padding-top: 0;
				font-size: 0.28rem;
			}

			.would .would-left {
				border: none;
				padding-left: 0;
				padding-bottom: 0.16rem;
			}

			.content .left .choose .text img {
				width: 0.14rem;
				height: 0.14rem;
			}

			.content .left .choose .text {
				height: auto;
				font-size: 0.14rem;
				padding: 0.12rem;
				align-items: flex-start;
				margin-left: 0;
			}

			.content .confirm {
				flex-direction: column;
				padding: 0.16rem 0.2rem;
			}

			.content .left .choose .choose-bg {
				padding: 0.32rem 0.16rem;
			}

			.content .type-li {
				margin-left: 0;
				margin-bottom: 0.08rem;
			}

			.content .type-li:nth-last-child(1) {
				margin-bottom: 0;
			}

			.content .type {
				flex-direction: column;
			}

			.would .would-right {
				display: none;
			}

			.Summary {
				display: none;
			}

			.content .right {
				width: 100%;
				margin-right: 0;
			}

			.content {
				width: 100%;
				padding: 0 0.2rem;
				margin-top: 0.24rem;
				flex-direction: column;
			}
		}
	}

	.confirm {
		padding: 32px;
		display: flex;
		align-items: center;
	}

	.confirm button {
		background-color: rgba(255, 50, 99, 1);
		border-radius: 8px;
		width: 123px;
		height: 40px;
		cursor: pointer;
		font-weight: 400;
		border: none;
		color: rgba(254, 254, 254, 1);
		margin-left: 0.24rem;
	}

	.confirm .confirm-text {
		margin-left: 32px;
		font-weight: 400;
		line-height: 16px;
		color: rgba(26, 26, 26, 0.6);
	}

	.page::v-deep .el-input__suffix {
		left: 0;
		right: auto;
	}

	.suspension-h {
		height: 0.7rem;
		display: none;
	}

	.suspension {
		display: none;
		position: fixed;
		bottom: 0;
		left: 0;
		border-top-right-radius: 8px;
		border-top-left-radius: 8px;
		z-index: 1;
		border-top: 1px solid #DADADA;
		background-color: #fff;
		padding: 0.2rem 0.2rem 0.24rem 0.2rem;
		width: 100%;
	}

	.pm-mobile {
		display: none;
	}

	.people::v-deep .el-input__suffix {
		left: 15px !important;
		right: auto;
	}

	.Casino {
		position: absolute;
		top: -0.15rem;
		left: 0.2rem;
		color: rgba(26, 26, 26, 1);
		background-color: rgba(254, 243, 213, 1);
		z-index: 9;
		border: 1px solid rgba(255, 184, 0, 1);
		padding: 0.05rem;
		border-radius: 6px;
		display: flex;
		align-items: center;
		font-size: 0.12rem;

		img {
			width: 0.12rem;
			margin-right: 0.05rem;
		}
	}

	.would {
		padding: 0 0.20rem;
		background-color: #fff;
		border: 1px solid rgba(218, 218, 218, 1);
		border-radius: 8px;
		display: flex;
		align-items: center;

		.would-right {
			width: 3.99rem;
			margin-right: 0.3rem;

			img {
				width: 100%;
				height: auto;
			}
		}

		.would-left {
			flex: 1;
			padding-left: 0.17rem;
			padding-bottom: 0.3rem;
			border-left: 1px solid rgba(218, 218, 218, 1);

			.info {
				cursor: pointer;
			}

			h3 {
				padding-top: 0.25rem;
				font-size: 0.32rem;
				font-weight: 400;
			}

			.select {
				cursor: pointer;
				margin-top: 0.1rem;
				height: 0.64rem;
				padding: 0 0.25rem !important;
				border: 1px solid rgba(218, 218, 218, 1) !important;
				border-radius: 6px;

				.price {
					color: rgba(0, 188, 147, 1) !important;
				}
			}

			.top,
			.select {
				padding: 0.20rem;
				position: relative;
				display: flex;
				align-items: center;
				border-bottom: 1px solid rgba(218, 218, 218, 1);

				.price {
					font-family: Rubik;
					font-size: 0.16rem;
					font-weight: 500;
					color: rgba(255, 50, 99, 1);

					span {
						font-weight: bold;
					}

					div {
						font-size: 0.12rem;
						font-weight: 400;
						text-align: right;
						margin-top: 0.05rem;
						color: rgba(26, 26, 26, 0.6);

					}
				}

				.tickets {
					font-family: Noto Sans Hebrew;
					font-size: 0.16rem;
					font-weight: 600;
					flex: 1;
					padding: 0 0.20rem;
				}


				.checkbox {
					width: 0.24rem;
					height: 0.24rem;
					text-align: center;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 50%;
					border: 1px solid rgb(255, 50, 99);
					background-color: rgb(255, 50, 99);

					img {
						width: 0.12rem;
						height: 0.15rem;
					}
				}
			}

			.info {
				margin-top: 0.25rem;
				background-color: rgba(255, 50, 99, 0.08);
				border: 1px solid rgb(255, 50, 99);
				border-radius: 6px;

				.imgText {
					padding: 0.25rem;
					font-size: 0.14rem;
					font-weight: 400;
				}


			}
		}
	}

	.page {
		direction: rtl;
		background-color: #F5F5F5;
	}

	.warp {
		padding: 0 0.32rem;
	}

	.why {
		margin: 0.20rem 0;
		padding: 0.25rem !important;
		border: 1px solid rgba(0, 188, 147, 1) !important;
		border-radius: 8px;
		background-color: rgba(0, 188, 147, 0.05) !important;

		.name {
			font-size: 0.2rem;
			font-weight: 600 !important;
			color: rgba(0, 188, 147, 1);

			span {
				font-family: Oleo Script;
				font-size: 0.24rem;
				font-weight: 700;
			}

		}

		.why-li {
			display: flex;
			align-items: center;
			flex-wrap: wrap;

			p {
				margin-top: 0.15rem;
				width: 50%;
				display: flex;
				align-items: center;
				font-family: Rubik;
				font-size: 0.14rem;
				font-weight: 400;

				img {
					width: 0.16rem;
					height: 0.16rem;
					margin-left: 0.10rem;
				}
			}
		}
	}

	.people::v-deep .el-input__inner {
		height: 48px;
		width: 308px;
		display: flex;
		align-items: center;
		padding: 0 20px;
		border: 1px solid rgba(218, 218, 218, 1);
		border-radius: 6px;
		font-size: 16px;
		font-weight: 400;
		color: rgba(26, 26, 26, 0.6);
	}

	/* content */
	.content {
		width: 1440px;
		margin: 0.32rem auto 0 auto;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}

	.content .left {
		flex: 1;
	}

	.content .left .choose .choose-bg {
		background-color: #fff;
		padding: 0.32rem;
		;
	}

	.content .left .choose {
		border-radius: 8px;
		width: 100%;
		display: inline-block;
		border: 1px solid #DADADA;
		margin-bottom: 0.10rem;
		;
		overflow: hidden;
	}

	.content .left .choose h1 {
		font-size: 0.32rem;
		font-weight: 400;
		text-align: right;
	}

	.content .left .choose .text {
		margin: 0.20rem;
		background-color: rgba(0, 188, 147, 0.12);
		font-size: 0.16rem;
		font-weight: 400;
		height: 0.4rem;
		display: flex;
		align-items: center;
		border-radius: 8px;
		padding: 0 0.15rem;

	}

	.content .left .choose .text img {
		width: 0.24rem;
		height: 0.24rem;
		margin-left: 0.10rem;
	}



	.content .type-name {
		font-weight: 400;
		margin-bottom: 0.10rem;
	}

	.content .type {
		display: flex;
	}

	.content .type-li {
		cursor: pointer;
		position: relative;
		width: 308px;
		margin-left: 20px;
		padding: 20px;
		border: 1px solid #DADADA;
		border-radius: 6px;


	}

	.content .current {
		background: rgba(255, 50, 99, 0.08);
		border-color: rgba(255, 50, 99, 1);
		color: rgba(255, 50, 99, 1);
	}

	.content .current p {
		color: rgba(255, 50, 99, 1);
	}

	.content .current .radio {
		background-color: rgba(255, 50, 99, 1);
		border-color: rgba(255, 50, 99, 1) !important;
	}

	.content .type-li .radio {
		width: 0.24rem;
		height: 0.24rem;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		border: 1px solid #DADADA;
	}

	.content .type-li .radio img {
		width: 0.12rem;
		height: 0.15rem;
	}

	.content .type-li .ticket {
		margin-top: 35px;
		margin-bottom: 10px;
		font-size: 16px;
		font-weight: 550;
		line-height: 16px;
	}

	.content .type-li .tips {
		font-weight: 400;
		width: 176px;
		color: rgba(26, 26, 26, 0.6);
	}

	.content .people {
		margin-top: 40px;
	}

	.content .people .select {
		height: 48px;
		width: 308px;
		display: flex;
		align-items: center;
		padding: 0 20px;
		border: 1px solid rgba(218, 218, 218, 1);
		border-radius: 6px;
		font-family: Noto Sans Hebrew;
		font-size: 16px;
		font-weight: 400;
		color: rgba(26, 26, 26, 0.6);
	}

	.content .people .select img {
		width: 20px;
	}

	.content .people .select p {
		flex: 1;
	}



	.content .item-li {
		margin-top: 0.25rem;
		background-color: #fff;
		border: 1px solid #DADADA;
		border-radius: 8px;
		height: 1rem;
		padding-right: 20px;
		display: flex;
		align-items: center;
		font-size: 0.32rem;
		font-weight: 400;
		color: #a2a2a2;
	}

	.Summary {
		padding: 0.25rem 0.25rem 0.20rem 0.25rem;
		border: 1px solid #DADADA;
		border-radius: 8px;
		overflow: hidden;
		background-color: #fff;

		.Summary-Number {
			padding-bottom: 0.15rem;
			border-bottom: 1px solid #DADADA;
		}

		.order {
			.img {
				display: flex;
				align-items: center;
				// width: 15%;
				height: auto;

				// margin-right: 0.25rem;
				img {
					margin-left: 0.3rem;
				}
			}

			.n {
				padding: 0.15rem 0;
				font-size: 0.14rem;
				font-weight: 400;
				color: rgba(0, 188, 147, 1);
				display: flex;
				align-items: center;

				img {
					width: 0.16rem;
					height: auto;
					margin-left: 0.05rem;
				}
			}
		}

		.Total {
			display: flex;
			padding: 0.15rem 0;
			align-items: center;
			margin-top: 0.15rem;
			border-top: 1px solid #DADADA;
			border-bottom: 1px solid #DADADA;

			.num {
				color: rgba(0, 188, 147, 1);
				font-size: 0.32rem;
				font-weight: 400;
			}

			.n {
				flex: 1;

				h4 {
					font-size: 0.16rem;
					font-weight: 500;
					margin: 0;
				}

				p {
					margin-top: 0.1rem;
					color: rgba(0, 188, 147, 1);
					font-family: Noto Sans Hebrew;
					font-size: 0.1rem;
					font-weight: 400;
				}
			}
		}

		.Card {
			display: flex;
			align-items: center;
			margin-top: 0.15rem;
			font-size: 0.12rem;
			color: rgba(26, 26, 26, 0.6);
			font-weight: 400;

			div {
				flex: 1;
			}
		}

		.Summary-li {
			display: flex;
			align-items: center;
			margin-top: 0.25rem;

			.dec {
				padding: 0.05rem 0.10rem;
				margin-left: 0.15rem;
				border-radius: 200px;
				background-color: rgba(0, 188, 147, 0.12);
				color: rgba(0, 188, 147, 1);
				font-size: 0.1rem;
				font-weight: 500;
				line-height: 0.12rem;
				margin-right: 0.1rem;

				i {
					font-weight: bold;
					margin-left: 0.05rem;
					;
				}
			}

			.n {
				flex: 1;
				font-size: 0.16rem;
				font-weight: 500;
				color: rgba(26, 26, 26, 1);
			}

			.t {
				font-size: 0.14rem;
				font-weight: 400;
				color: rgba(26, 26, 26, 1);
			}
		}

		.name {
			font-size: 0.20rem;
			font-weight: 500;
			padding-bottom: 0 !important;
		}
	}

	.content .right {
		width: 4.48rem;
		margin-right: 0.15rem;
		display: inline-block;

		.r-img {
			border: 1px solid #DADADA;
			border-radius: 8px;
			overflow: hidden;
			background-color: #fff;

			img {
				width: 100%;
				height: auto;
			}
		}
	}

	.content .right .padding {
		padding: 0.25rem 0;
		border: 1px solid #DADADA;
		border-radius: 8px;
		overflow: hidden;
		background-color: #fff;

		.Frequently {
			padding: 0 0.25rem;
		}
	}

	.content .right .name {
		font-size: 20px;
		font-weight: 400;
		padding-bottom: 10px;

	}

	.checkbox::v-deep .el-input__inner {
		height: 48px;
		border: none;
		padding: 0;
		background-color: rgba(26, 26, 26, 0);
	}

	.checkbox::v-deep .el-select {
		width: 100%;
	}

	.content .right .checkbox {
		margin-top: 15px;
		border: 1px solid #DADADA;
		border-radius: 6px;
		display: flex;
		align-items: center;
		height: 48px;
		background-color: #F5F5F5;
		font-size: 16px;
		padding: 0 15px;
		font-weight: 400;
		color: rgba(26, 26, 26, 0.6);
	}

	.content .right .checkbox p {
		flex: 1;
	}

	.content .right .checkbox img {
		width: 0.2rem;
		height: auto;
	}

	.content .right .help {
		margin-top: 0.30rem;
		padding: 0.20rem 0.25rem 0 0.25rem;
		border-top: 1px solid #DADADA;
	}

	.content .right .help .help-name {
		font-size: 20px;
		font-weight: 500;
	}

	.content .right .help .user {
		display: flex;
		position: relative;
		align-items: center;
		margin: 20px 0;
	}

	.content .right .help .user .state {
		width: 16px;
		height: 16px;
		position: absolute;

		top: 0;
		z-index: 9;
		background-color: #00BC93;
		border: 2px solid #fff;
		border-radius: 50%;
	}

	.content .right .help .user img {
		width: 56px;
		height: 56px;
		border-radius: 50%;
	}

	.content .right .help .user .text {
		font-size: 12px;
		margin-right: 20px;
		color: rgba(26, 26, 26, 0.6);
		font-weight: 400;
		line-height: 16px;

	}

	.contact-li {
		margin-top: 15px;
		border: 1px solid #DADADA;
		border-radius: 6px;
		display: flex;
		align-items: center;
		height: 48px;
		background-color: #F5F5F5;
		font-size: 16px;
		padding: 0 15px;
		font-weight: 400;
		color: rgba(26, 26, 26, 1);
	}

	.contact-li .icon {
		width: 32px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 32px;
		margin-left: 20px;
		border-radius: 4px;
		background: linear-gradient(135deg, #FF3263 0%, #EE2344 100%);
	}

	.contact-li .icon img {
		width: 0.16rem;
		height: auto;
	}

	.contact-li p {
		flex: 1;
	}

	.contact-li .text {
		font-size: 12px;
		font-weight: 400;
		line-height: 16px;
		color: rgba(26, 26, 26, 0.6);
	}
</style>