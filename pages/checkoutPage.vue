<template>
	<div>
		<div class="header">
			<div class="time">
				<img class="l" src="~assets/images/icon/info-feature.png" />
				<span class="num">09:58</span>
				<span class="p">זמן נותר להזמנה:</span>
				<img class="r" src="~assets/images/icon/clock 1.png" />
			</div>
			<div class="logo">
				<img src="~assets/images/logo.png" />
			</div>
			<p>עמוד תשלום</p>
		</div>
		<div class="header-h"></div>
		<div class="warps">
			<div class="content">
				<div class="left">
					<div class="price">
						<div class="top">
							<p class="flex">₪ 1,611</p>
							<div>מחיר לילה</div>
						</div>
						<div class="text">עבור 3 לילות, 2 אורחים</div>
						<div class="bottom">
							<p class="flex">₪ 570</p>
							<div>כולל מס מגורים</div>
						</div>
						<div class="item">
							מידע חשוב <img src="~assets/images/icon/info-feature-s.png" />פירוט ההזמנה
						</div>
						<div class="num">
							<p class="flex">₪ 4,833</p>
							<div>סה״כ לתשלום</div>
						</div>
					</div>
					<div class="price-c">
						<div class="bg">
							<div class="name">תשלום בעת ההגעה</div>
							<div class="info">
								<p class="flex">$170</p>
								<div>דמי נופש</div>
							</div>
						</div>
						<div class="b">
							<p><span>לתשומת ליבך</span> כל המיסים ואגרות</p>
							<p>יחוייבו במטבע מקומי (USD).</p>
						</div>
					</div>
					<div class="send">
						<div class="send-text">
							<i class="el-icon-arrow-up"></i>
							<div class="flex"></div>
							<p>מבצעים והנחות</p>
						</div>
						<div class="send-box">
							<img src="~assets/images/icon/Rectangle 780.png" />
							<div class="flex"></div>
							<p>קוד קופון</p>
						</div>
					</div>
				</div>
				<div class="right">
					<div class="info">
						<div class="info-left flex">
							<div class="top">
								<div class="l">
									<p class="day">צ'ק אין - 16:00</p>
									<p class="time">31 יולי 2024</p>
									<p class="house">צ'ק אאוט - 11:00</p>
									<p class="time">31 יולי 2024</p>
								</div>
								<div class="r">
									<div class="score">
										<p>0.0 ק״מ ממרכז העיר</p>
										<div class="line"></div>
										<div class="rate">
											<el-rate void-color="#FFB800" :value="5" />
											<div class="disabled"></div>
										</div>
									</div>
									<div class="name">Caesar’s Palace Hotel & Casino</div>
									<div class="text">3655 Las Vegas Blvd S, Paradise</div>
								</div>
							</div>
							<div class="bottom">
								<div class="name">Julius Deluxe Double room</div>
								<div class="wallet">
									<div class="p">
										<img class="l" src="~assets/images/icon/info-feature.png" />
										<p class="curr">
											ניתן לבטל בחינם עד ל-27 באוגוסט*
										</p>
										<img class="r" src="~assets/images/icon/icon.png" />
									</div>
									<div class="p">
										<img class="l" src="~assets/images/icon/info-feature.png" />
										<p>מיטה כפולה</p>
										<img class="r" src="~assets/images/icon/icon27.png" />
									</div>
								</div>
								<div class="wallet">
									<div class="p">
										<img class="l" src="~assets/images/icon/info-feature.png" />
										<p>
											שלם עכשיו
										</p>
										<img class="r" src="~assets/images/icon/qb.png" />
									</div>
									<div class="p">
										<img class="l" src="~assets/images/icon/info-feature.png" />
										<p>לא כולל ארוחות</p>
										<img class="r" src="~assets/images/icon/icon26.png" />
									</div>
								</div>
							</div>
						</div>
						<div class="img">
							<img src="~assets/images/banner-2.png" />
						</div>
					</div>
					<div class="more">
						הזמן מהר יותר - התחבר לקנטה<i class="el-icon-arrow-down"></i>
					</div>
					<div class="user">
						<div class="top">
							<div class="name"> פרטי קשר<img class="r"
									src="~assets/images/icon/2users-svgrepo-com 1.png" />
							</div>
							<div class="text">נא למלא את כל שדות החובה</div>
							<div class="form">
								<div class="form-li">
									<div class="li">
										<el-input v-model="input" placeholder="שם משפחה*"></el-input>
									</div>
									<div class="w"></div>
									<div class="li">
										<el-input v-model="input" placeholder="שם פרטי*"></el-input>
									</div>
								</div>
								<div class="form-li">
									<div class="li">
										<img class="img" src="~assets/images/icon/info-feature.png" />
										<el-input v-model="input" placeholder="דואר אלקטרוני*"></el-input>
									</div>
								</div>
								<div class="form-li">
									<div class="li">
										<img class="img" src="~assets/images/icon/info-feature.png" />
										<el-input v-model="input" placeholder="מספר פלאפון*"></el-input>
									</div>
									<div class="w"></div>
									<div class="li">
										<img class="img" src="~assets/images/icon/info-feature.png" />
										<el-select v-model="input" placeholder="אזרחות*">
											<el-option v-for="item in options" :key="item.value" :label="item.label"
												:value="item.value">
											</el-option>
										</el-select>
									</div>
								</div>
							</div>
						</div>
						<div class="select">
							<el-select v-model="input" placeholder="הזינו אורחים נוספים">
								<el-option v-for="item in options" :key="item.value" :label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
							<p>לא חייב, מיועד כאישור הזמנה עבור קבלת ויזה</p>
						</div>
						<div class="select-time">
							<div class="name">זמני הגעה</div>
							<div class="option">
								<div class="t">
									<p>חדר שלך יהיה מוכן</p>
									<p>ב16:00</p>
								</div>
								<el-select v-model="input" placeholder="12:00">
									<el-option v-for="item in options" :key="item.value" :label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
							<div class="select-menu">
								<el-dropdown trigger="click">
									<span class="el-dropdown-link">
										בקשות מיוחדות<i class="el-icon-arrow-down el-icon--right"></i>
									</span>
									<el-dropdown-menu slot="dropdown">
										<el-dropdown-item>בקשות מיוחדות</el-dropdown-item>
										<el-dropdown-item>בקשות מיוחדות</el-dropdown-item>
									</el-dropdown-menu>
								</el-dropdown>
							</div>
						</div>
					</div>
					
					<div class="user">
						<div class="top form-boxs">
							<div class="name">ביחרו באמצעי תשלום<img class="r"
									src="~assets/images/icon/secure-shield-password.png" />
							</div>
							<div class="form form-bg">
								<div class="form-li">
									<div class="li">
										<p>מספר כרטיס אשראי</p>
										<el-input v-model="input" placeholder="1234 5678 9123 4567"></el-input>
									</div>
								</div>
								<div class="form-li">
									<div class="li">
										<p>תוקף</p>
										<el-input v-model="input" placeholder="12 / 27"></el-input>
									</div>
									<div class="w"></div>
									<div class="li li-none">
										<img class="img" src="~assets/images/icon/info-feature.png" />
										<p>CVC / CVV</p>
										<el-input v-model="input" placeholder="123"></el-input>
									</div>
								</div>
								<div class="form-li">
									<div class="li">
										<p>מספר כרטיס אשראי</p>
										<el-input v-model="input" placeholder="1234 5678 9123 4567"></el-input>
									</div>
								</div>
							</div>
						</div>
						<div class="btn">
							<div class="left">
								<p>לחיצה על הכפתור "להשלים הזמנה", </p>
								<p>מהווה הסכמה<span>לתנאים ולהתניות.</span></p>
							</div>
							<button>להשלים הזמנה</button>
						</div>
					</div>
					<div class="foo-h"></div>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				input: '',
				options: [{
					value: '"אזרחות*',
					label: '"אזרחות*'
				}]
			}

		},
		mounted() {
			document.querySelector("body").setAttribute("style", "background-color:rgba(245, 245, 245, 1)");
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.btn{
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding: 16px 1.72rem 16px 0;
		p{
			direction: rtl;
		}
		button{
			width: 1.34rem;
			height: 0.40rem;
			background-color: rgba(255, 50, 99, 1);
			border-radius: 8px;
			border: none;
			cursor: pointer;
			font-size: 0.14rem;
			font-weight: 400;
			color: #fff;

		}
		.left{
			font-size: 0.14rem;
			font-weight: 400;
			text-align: right;
			color: rgba(26, 26, 26, 0.6);
			span{
				color: rgba(26, 26, 26, 1);
			}
		}
	}
	.form-boxs{
		padding: 0!important;
		
		.name{
			margin-top: 0.42rem;
			padding: 0 1.16rem;
		}
		.form-bg{
			margin-top: 0.26rem;
			background-color:rgba(255, 184, 0, 0.16);
			padding: 0.4rem 1.16rem 0.4rem 3.31rem;
			.w{
				width: 0.22rem!important;
			}
			.li-none{
				flex: inherit!important;
			}
			.li-none::v-deep .el-input {
				width: 1.16rem!important;
			}
			.li{
				text-align: right;
				.img{
					top:0.4rem!important;
				}
				p{
					font-size: 0.12rem;
					font-weight: 400;
					text-align: right;
					margin-bottom: 8px;
				}
			}
		}
	}
	.form::v-deep .el-input__inner {
		text-align: right;
		direction: rtl;
		height: 0.48rem;
		font-size: 0.16rem;
	}

	.content::v-deep .el-input__icon {
		font-weight: bold;
	}


	.form::v-deep .el-select {
		width: 100%;
	}

	.form::v-deep .el-input__suffix {
		right: auto;
		left: 40px;
	}

	.form::v-deep .el-select-dropdown__item {
		text-align: right;
	}

	.content {
		margin-top: 0.4rem;
		display: flex;
		align-items: flex-start;

		.form-li {
			display: flex;
			padding-right: 0.56rem;
			margin-bottom: 0.16rem;

			.w {
				width: 16px;
			}

			.li {
				flex: 1;
				position: relative;

				.img {
					width: 0.12rem;
					height: auto;
					position: absolute;
					left: 15px;
					top: 18px;
					z-index: 1;
				}
			}
		}

		.user {
			border: 1px solid rgba(218, 218, 218, 1);
			border-radius: 8px;
			background-color: #fff;
			margin-bottom: 16px;

			.select::v-deep .el-input__inner {
				background-color: rgba(255, 50, 99, 0.08);
				color: rgba(255, 50, 99, 1);
				border-color: rgba(255, 50, 99, 1);
				font-size: 0.16rem;
				font-weight: 400;

			}

			.select::v-deep .el-select-dropdown__item {
				text-align: right;
			}

			.select::v-deep .el-input__inner::placeholder {
				color: rgba(255, 50, 99, 1);
			}

			.select::v-deep .el-select .el-input .el-select__caret {
				color: rgba(255, 50, 99, 1);
			}

			.select::v-deep .el-select {
				width: 209px;
			}

			.select-time::v-deep .el-input__inner::placeholder {
				color: rgba(26, 26, 26, 0.6);
			}

			.select-time::v-deep .el-input__inner {
				width: 216px;
				height: 0.48rem;
				font-size: 0.16rem;
				text-align: right;

			}

			.select-time::v-deep .el-input__suffix {
				right: auto;
				left: 15px;
				font-weight: bold;
				color: rgba(26, 26, 26, 0.6);
			}

			.select-time::v-deep .el-dropdown {
				font-size: 0.16rem;
				font-weight: 400;
				color: rgba(52, 81, 255, 1);
			}

			.select-time::v-deep .el-icon--right {
				font-weight: bold;
			}

			.select-time {
				padding: 0.24rem 1.72rem 0.24rem 1.16rem;
				text-align: right;

				.select-menu {
					margin-top: 16px;
					cursor: pointer;

				}

				.name {
					font-size: 0.32rem;
					font-weight: 500;
					letter-spacing: -0.04em;
					text-align: right;
				}

				.option {
					margin-top: 16px;
					display: flex;
					align-items: center;
					justify-content: flex-end;

					p {
						font-size: 0.12rem;
						font-weight: 400;
						text-align: right;
						padding-right: 12px;
						color: rgba(26, 26, 26, 0.6)
					}
				}
			}

			.select {
				border-top: 1px solid rgba(218, 218, 218, 1);
				border-bottom: 1px solid rgba(218, 218, 218, 1);
				padding: 0.24rem 1.72rem 0.24rem 1.16rem;
				text-align: right;

				p {
					margin-top: 8px;
					font-size: 0.12rem;
					font-weight: 400;
					text-align: right;
					color: rgba(26, 26, 26, 0.6);
				}
			}

			.top {
				padding: 0.4rem 1.16rem;
			}

			.text {
				margin-top: 8px;
				text-align: right;
				padding-right: 0.56rem;
				margin-bottom: 0.24rem;
			}

			.name {
				display: flex;
				align-items: center;
				justify-content: flex-end;
				font-size: 0.32rem;
				font-weight: 500;
				letter-spacing: -0.04em;

				img {
					width: 0.4rem;
					height: auto;
					margin-left: 0.16rem;
				}
			}
		}

		.more {
			border: 1px solid rgba(218, 218, 218, 1);
			border-radius: 8px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: rgba(255, 50, 99, 1);
			font-size: 0.16rem;
			font-weight: 400;
			padding: 0.16rem 0;
			margin: 0.16rem 0;
			background-color: #fff;
			cursor: pointer;

			i {
				font-weight: bold;
				margin-left: 10px;
				font-size: 16px;
			}
		}

		.right {
			flex: 1;

			.info {
				display: flex;
				overflow: hidden;
				border-radius: 8px;
				border: 1px solid rgba(218, 218, 218, 1);
				background-color: #fff;
				height: 2.22rem;

				.info-left {

					.bottom {
						padding: 0.16rem;
						border-top: 1px solid rgba(218, 218, 218, 1);

						.name {
							font-size: 0.16rem;
							font-weight: 600;
							text-align: right;
							margin-bottom: 8px;
							display: inline-block;
							width: 100%;
						}

						.wallet {
							display: flex;
							align-items: center;
							font-size: 0.14rem;
							font-weight: 400;
							margin-top: 8px;

							.curr {
								color: rgba(0, 188, 147, 1);
							}

							.p {
								flex: 1;
								display: flex;
								justify-content: flex-end;
								align-items: center;

								p {
									margin: 0 8px;
								}
							}

							.l {
								width: 0.12rem;
								height: auto;
							}

							.r {
								width: 0.16rem;
								height: auto;
							}
						}
					}

					.top {
						padding: 0.16rem;
						display: flex;

						.r {
							.name {
								margin: 8px 0;
								font-size: 0.20rem;
								font-weight: 600;

							}

							.text {
								font-size: 0.14rem;
								font-weight: 400;
								text-align: right;
								color: rgba(26, 26, 26, 0.6);

							}

							.score {
								display: flex;
								align-items: center;
								justify-content: flex-end;

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

								.line {
									width: 12px;
									height: 1px;
									background-color: rgba(218, 218, 218, 1);
									margin: 0 8px;
								}

								p {
									color: rgba(26, 26, 26, 0.6);
									font-size: 0.14rem;
									font-weight: 400;
								}
							}
						}

						.l {
							flex: 1;

							.day {
								font-size: 0.12rem;
								font-weight: 400;
								color: rgba(26, 26, 26, 0.6);
								margin-bottom: 4px;
							}

							.house {
								margin-top: 0.16rem;
								font-size: 0.12rem;
								font-weight: 400;
								color: rgba(26, 26, 26, 0.6);
							}

							.time {
								margin-top: 4px;
								font-size: 0.14rem;
								font-weight: 400;
								direction: rtl;
								text-align: left;
							}
						}


					}
				}
			}

			.img {
				img {
					width: 2.14rem;
					height: 2.22rem;
				}
			}
		}

		.left {
			width: 3.32rem;
			margin-right: 0.16rem;

			.send {
				border: 1px solid rgba(218, 218, 218, 1);
				border-radius: 8px;
				overflow: hidden;
				padding: 0.16rem;
				background-color: #fff;

				.send-box {
					margin-top: 0.16rem;
					display: flex;
					padding: 0 8px;
					align-items: center;
					border: 1px solid rgba(218, 218, 218, 1);
					border-radius: 6px;
					height: 0.48rem;

					p {
						font-size: 0.16rem;
						font-weight: 400;
						color: rgba(26, 26, 26, 0.6);
					}

					img {
						width: 0.32rem;
						height: auto;
					}
				}

				.send-text {
					display: flex;
					align-items: center;
					cursor: pointer;

					i {
						font-weight: bold;
					}

					p {
						font-size: 0.16rem;
						font-weight: 600;
					}
				}
			}

			.price-c {
				margin: 0.16rem 0;
				border: 1px solid rgba(218, 218, 218, 1);
				border-radius: 8px;
				overflow: hidden;

				.b {
					text-align: right;
					padding: 12px 0.16rem;
					font-size: 0.12rem;
					font-weight: 400;
					direction: rtl;

					span {
						font-weight: 600;
					}
				}

				.bg {
					background-color: #fff;

					.info {
						display: flex;
						align-items: center;
						padding: 8px 0.16rem;
						border-bottom: 1px solid rgba(218, 218, 218, 1);

						p {
							font-size: 0.12rem;
							font-weight: 400;
						}

						div {
							color: rgba(26, 26, 26, 0.6);
						}
					}

					.name {
						text-align: right;
						font-size: 0.16rem 0.16rem 0 0.16rem;
						font-weight: 600;
						padding: 0.16rem;
					}
				}
			}

			.text {
				padding: 0 0.16rem;
				text-align: right;
				font-size: 0.12rem;
				font-weight: 400;
				color: rgba(26, 26, 26, 0.6);
				margin-top: 4px;
				margin-bottom: 8px;
			}

			.num {
				display: flex;
				align-items: center;
				font-size: 0.16rem;
				font-weight: 600;
				padding: 0.16rem;
			}

			.item {
				margin-top: 0.16rem;
				display: flex;
				padding: 0.18rem 0.16rem;
				align-items: center;
				justify-content: flex-end;
				border-top: 1px solid rgba(218, 218, 218, 1);
				border-bottom: 1px solid rgba(218, 218, 218, 1);
				color: rgba(52, 81, 255, 1);

				img {
					width: 0.12rem;
					height: auto;
					margin: 0 0.16rem;
				}
			}

			.bottom {
				display: flex;
				align-items: center;
				font-size: 0.12rem;
				padding: 0 0.16rem;
				font-weight: 400;
				color: rgba(26, 26, 26, 0.6);
			}

			.price {
				border: 1px solid rgba(218, 218, 218, 1);
				border-radius: 8px;
				background-color: #fff;

				.top {
					display: flex;
					align-items: center;
					padding: 0.16rem;

					p {
						font-size: 0.14rem;
						font-weight: 400;
					}

					div {
						font-size: 0.16rem;
						font-weight: 600;
					}
				}
			}
		}
	}

	.header {
		padding: 0 0.32rem;
		height: 0.64rem;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 89;
		display: flex;
		width: 100%;
		align-items: center;
		background-color: #fff;

		.logo {
			flex: 1;
			text-align: center;
			justify-content: center;
			display: flex;
			align-items: center;

			img {
				width: 0.76rem;
				height: auto;
			}
		}

		p {
			font-size: 0.14rem;
			font-weight: 500;
			color: rgba(26, 26, 26, 0.6);
		}

		.time {
			display: flex;
			align-items: center;

			.l {
				width: 0.12rem;
				height: auto;
			}

			.p {
				font-size: 0.14rem;
				font-weight: 400;
				margin: 0 4px;
				display: inline-block;
				direction: rtl;

			}

			.num {
				font-size: 0.14rem;
				font-weight: 500;
				margin-left: 8px;
				display: inline-block;
			}

			.r {
				width: 0.16rem;
				height: auto;
			}
		}
	}

	.header-h {
		height: 0.64rem;
	}
</style>