<template>
	<div class="page">
		<TripHeader :ishome="false" />
		<main>
			<div class="content">
				<div class="left">
					<div class="choose">
						<div class="choose-bg">
							<h1>1. &nbsp;&nbsp;בחרו כרטיס או חבילה</h1>
							<div class="text" style="margin-right: 0;">
								<img src="~assets/images/icon/icon13.png" />
								כרטיסים רשמיים ישירות ממארגן האירוע. זמינות בזמן אמת ומקומות ישיבה מובטחים!
							</div>
							<div class="type-name">סוג החבילה:</div>
							<div class="type">
								<div class="type-li">
									<div class="radio"></div>
									<div class="ticket">
										כרטיס/ים
									</div>
									<div class="tips">
										<p>בחר/י את מקומות הישיבה </p>
										<p>שלך בשלב 2.</p>
									</div>
								</div>
								<div class="type-li current">
									<!-- <span class="Casino"><img src="~assets/images/icon/icon4.png" />Sponsored by
										Asper Casino</span> -->

									<div class="radio">
										<img src="~assets/images/icon/select.png" />
									</div>
									<div class="ticket">
										כרטיס/ים + מלון
									</div>
									<div class="tips">
										<p>בחר/י את מקומות הישיבה  </p>
										<p>והמלון שלך בשלב 2 ו- 3.</p>
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
						<div class="confirm">
							<button>אישור והמשך</button>
							<div class="confirm-text">
								<p>יש לאשר כדי לראות את המחיר הסופי. ניתן לשנות </p>
								<p>את פרטי הכרטיס/חבילה עד לביצוע ההזמנה סופית.</p>
							</div>
						</div>
					</div>
					<div class="would">
						<div class="would-left">
							<h3>2.איפה תרצו לשבת?</h3>
							<div class="info">
								<div class="top">
									<!-- <span class="Casino"><img src="~assets/images/icon/icon4.png" />Sponsored by
										Asper Casino</span> -->
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
									<p>									משלוח: הכרטיסים שלכם יימסרו לפחות 24 שעות לפני האירוע
</p>
									<p>									מקומות ישיבה: מובטחים עד 10 מקומות ישיבה יחד לאירוע זה.
</p>
									

									


									
								</div>
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
								<img style="height: 0.24rem;"  src="~assets/images/icon/imgs5.png" />
								<img style="height: 0.4rem;" src="~assets/images/icon/imgs3.png" />
								<img style="height: 0.16rem;" src="~assets/images/icon/imgs2.png" />
								<img style="height: 0.4rem;" src="~assets/images/icon/imgs4.png" />
							</div>
						</div>
					</div>
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
								<p>האם תאריכי הכרטיסים מאושרים?</p>
								<img src="~assets/images/icon/xl.png" />
							</div>
							<div class="checkbox">
								<p>איך ומתי אקבל את הכרטיסים שלי?</p>
								<img src="~assets/images/icon/xl.png" />
							</div>
							<div class="checkbox">
								<p>איפה אני אשב באיצדטיון?</p>
								<img src="~assets/images/icon/xl.png" />
							</div>
						</div>
						<div class="help">
							<div class="help-name">איך נוכל לעזור?</div>
							<div class="user">
								<div class="state"></div>
								<img src="https://t10.baidu.com/it/u=666889455,569580402&fm=58" />
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
			<div style="height: 50px;"></div>
		</main>
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
				value: '2 אנשים'
			}

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
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

		.would-right {
			width: 3.99rem;
			margin-right: 0.3rem;
			padding-top: 0.81rem;

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

			h3 {
				padding-top: 0.25rem;
				font-size: 0.32rem;
				font-weight: 400;
			}

			.select {
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
        background-color: rgba(0, 188, 147, 0.05)!important;
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

	.content .choose .confirm {
		padding: 32px;
		display: flex;
		align-items: center;
		border-top: 1px solid #DADADA;
	}

	.content .choose .confirm button {
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

	.content .choose .confirm .confirm-text {
		margin-left: 32px;
		font-weight: 400;
		line-height: 16px;
		color: rgba(26, 26, 26, 0.6);
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
<style lang="scss">
   .page{
	  .el-input__suffix{
		  right: auto !important; 
		  left:5px !important;
     }
   }
  
</style>