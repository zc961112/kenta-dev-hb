<template>
	<div class="page">
		<NewHeader :ishome="false" />
		<main>
			<div class="banner">
				<div class="info">
					<div class="navigation">
						<span>Home</span>
						<i class="el-icon-arrow-right"></i>
						<span>Events</span>
						<i class="el-icon-arrow-right"></i>
						<span>Dutch Grand Prix</span>
					</div>
					<h1 class="name">
						Manchester&nbsp;&nbsp;United&nbsp;&nbsp;vs&nbsp;&nbsp;Liverpool
					</h1>
					<div class="time">
						<img style="padding-left: 0;" src="~assets/images/icon/icon1.png" />
						<span>Aug 23, 2024 - Aug 25, 2024</span>
						<img src="~assets/images/icon/icon2.png" />
						<span>Old Trafford</span>
						<img src="~assets/images/icon/icon3.png" />
						<span>Champions League </span>
						<span class="Promo">Exclusive Promo</span>
						<span class="Casino"><img src="~assets/images/icon/icon4.png" />Sponsored by Asper Casino</span>
					</div>
				</div>
			</div>
			<div class="content">
				<div class="left">
					<div class="tips">
						<p> Here you can find all our tickets for the Italian Grand Prix. Choose and buy the Formula 1
						</p>
						<p>tickets of your choice and secure your visit to the Autodromo Nazionale Monza. </p>
					</div>
					<div class="item-li">
						<div class="text">
							<img src="~assets/images/icon/icon7.png" />
							<div class="info">
								<h3>Inner Ingresso Parabolic GF tickets</h3>
								<p>Friday - Sunday</p>
							</div>
							<div class="icon-img">
								<img src="~assets/images/icon/icon6.png" />
								<img src="~assets/images/icon/icon5.png" />
							</div>
						</div>
						<button class="button">Order - €340</button>
					</div>
					<div class="item-li">
						<div class="text">
							<img src="~assets/images/icon/icon7.png" />
							<div class="info">
								<h3>Inner Ingresso Parabolic GF tickets</h3>
								<p>Friday - Sunday</p>
							</div>
							<div class="icon-img">
								<img src="~assets/images/icon/icon6.png" />
								<img src="~assets/images/icon/icon5.png" />
							</div>
						</div>
						<button class="button">Order - €340</button>
					</div>
					<div class="item-li">
						<div class="text">
							<img src="~assets/images/icon/icon7.png" />
							<div class="info">
								<h3>Inner Ingresso Parabolic GF tickets</h3>
								<p>Friday - Sunday</p>
							</div>
							<div class="icon-img">
								<img src="~assets/images/icon/icon6.png" />
								<img src="~assets/images/icon/icon5.png" />
							</div>
						</div>
						<button class="button">Order - €340</button>
					</div>
					<div class="item-li">
						<div class="text">
							<img src="~assets/images/icon/icon7.png" />
							<div class="info">
								<h3>Inner Ingresso Parabolic GF tickets</h3>
								<p>Friday - Sunday</p>
							</div>
							<div class="icon-img">
								<img src="~assets/images/icon/icon6.png" />
								<img src="~assets/images/icon/icon5.png" />
							</div>
						</div>
						<button class="button">Order - €340</button>
					</div>
				</div>
				<div class="right">
					<img src="~assets/images/pm.png" />
				</div>
			</div>
			<div class="footer">
				<div class="logo">
					<img src="~assets/images/logo-white.png" alt='logo' />
					<p>Kenta Tech Ltd. 2021-2024</p>
					<div class="icon">
						<div class="icon-li">
							<img src="~assets/images/icon/icon9.png" />
						</div>
						<div class="icon-li">
							<img src="~assets/images/icon/icon8.png" />
						</div>
					</div>
				</div>
				<div class="footer-item">
					<div class="name">
						Secure payment
					</div>
					<div class="img">
						<img src="~assets/images/icon/img4.png" />
						<img src="~assets/images/icon/img1.png" />
						<img src="~assets/images/icon/img5.png" />
						<img src="~assets/images/icon/img2.png" />
						<img src="~assets/images/icon/img3.png" />
					</div>
				</div>
				<div class="footer-item">
					<div class="name">
						Making Contact
					</div>
					<div class="text">
						<p>
							<img src="~assets/images/icon/icon10.png" />03-888-5555
						</p>
						<p>
							<img src="~assets/images/icon/icon11.png" />support@kenta.co.il
						</p>
						<p>
							<img src="~assets/images/icon/icon12.png" /> 054-5455-888
						</p>
					</div>
				</div>
				<div class="footer-item">
					<div class="name">
						Links
					</div>
					<div class="Links-li">
						<p>About</p>
						<p>Terms of Use</p>
					</div>
					<div class="Links-li">
						<p>Tickets</p>
						<p>Privacy Policy</p>
					</div>
					<div class="Links-li">
						<p>Making contact</p>
						<p>Accessibility statement</p>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	export default {
		name: 'engPage',
		data() {
			return {

			}

		},
		methods: {

		}
	}
</script>
<style lang="scss" scoped>
	.footer {
		background-color: rgba(26, 26, 26, 1);
		padding: 0.6rem 0.32rem;
		display: flex;

		.footer-item {
			flex: 1;

			.Links-li {
				display: flex;
				align-items: center;
				margin-bottom: 0.2rem;

				p {
					flex: 1;
					font-size: 0.14rem;
					font-weight: 400;
					color: #fff;
				}
			}

			.text {
				color: #fff;

				p {
					display: flex;
					align-items: center;
					margin-bottom: 0.2rem;
				}

				img {
					width: 0.16rem;
					height: 0.16rem;
					margin-right: 0.1rem;
				}
			}

			.name {
				font-size: 0.2rem;
				font-weight: 400;
				color: #fff;
				margin-bottom: 0.2rem;
			}

			.img {
				display: flex;
				align-items: center;
				flex-wrap: wrap;
				width: 2rem;

				img {
					width: 0.5rem;
					height: auto;
					margin-right: 0.10rem;
					margin-bottom: 0.10rem;
				}
			}
		}

		.logo {
			flex: 1;

			img {
				width: 0.77rem;
				height: 0.24rem;
			}

			.icon {
				display: flex;
				align-items: center;

				.icon-li {
					border: 1px solid rgba(254, 254, 254, 0.16);
					width: 0.4rem;
					height: 0.4rem;
					border-radius: 8px;
					margin-right: 0.10rem;
					display: flex;
					align-items: center;
					justify-content: center;

					img {
						width: 0.16rem;
						height: 0.16rem;
					}
				}
			}

			p {
				font-size: 0.14rem;
				font-weight: 400;
				color: rgba(254, 254, 254, 0.6);
				margin: 0.20rem 0;
			}
		}
	}

	.content {
		padding: 0.5rem 0 0.35rem 0;
		display: flex;
		flex-direction: row;
		width: 1440px;
		margin: 0 auto;

		.item-li {
			margin-top: 0.15rem;
			height: 0.76rem;
			width: 100%;
			padding: 0 0.2rem;
			display: flex;
			align-items: center;
			border: 1px solid rgba(218, 218, 218, 1);
			border-radius: 8px;

			.button {
				width: 1.34rem;
				height: 0.4rem;
				border-radius: 8px;
				background-color: rgba(255, 50, 99, 1);
				font-size: 0.14rem;
				font-weight: 400;
				color: #fff;
				border: 1px solid rgba(255, 50, 99, 1);
			}

			.info {
				margin-left: 0.05rem;
				margin-right: 0.40rem;

				h3 {
					font-size: 0.20rem;
					font-weight: 500;
					color: rgba(26, 26, 26, 1);
				}

				p {
					margin-top: 0.05rem;
					font-size: 0.12rem;
					font-weight: 500;
					color: rgba(26, 26, 26, 0.6);
				}
			}

			.text {
				flex: 1;
				display: flex;
				align-items: flex-start;

				.icon-img {
					display: flex;
					align-items: center;
				}

				img {
					width: 0.24rem;
					margin-right: 0.15rem;
				}

			}
		}

		.left {
			flex: 1;

			.tips {
				width: 100%;
				font-size: 0.16rem;
				font-weight: 400;
				color: rgba(26, 26, 26, 0.6);
				margin-bottom: 0.5rem;
			}
		}

		.right {
			margin-left: 180px;
			width: 566px;

			img {
				width: 100%;
				object-fit: fill
			}

			// margin-left: 18rem;
			// width: 46.2rem;
			// height: 500px;
			// background-color: red;
		}
	}

	.banner {
		background: url('~assets/images/eng1.png') no-repeat;
		background-size: 100% 100%;
		display: flex;
		height: 4rem;
		padding: 0 0.32rem 0.6rem 0.32rem;
		box-sizing: border-box;
		align-items: flex-end;
		color: rgba(254, 254, 254, 1);

		.info {
			flex: 1;

			.time {
				display: flex;
				align-items: center;
				font-size: 0.14rem;

				.Promo {
					margin-left: 0.3rem;
					margin-right: 0.2rem;
					color: rgba(255, 50, 99, 1);
					border: 1px solid rgba(255, 50, 99, 1);
					padding: 0.05rem 0.05rem;
					background-color: rgba(255, 50, 99, 0.16);
					border-radius: 6px;
				}

				.Casino {
					color: rgba(255, 184, 0, 1);
					border: 1px solid rgba(255, 184, 0, 1);
					padding: 0.05rem 0.05rem;
					background-color: rgba(255, 184, 0, 0.16);
					border-radius: 6px;
					display: flex;
					align-items: center;
					justify-content: center;
					img {
						width: 0.12rem;
					}
				}

				img {
					width: 0.25rem;
					padding: 0 0.1rem;
				}
			}

			.name {
				padding: 0.10rem 0;
				font-size: 0.56rem;
				font-weight: 600;
				text-align: left;
			}

			.navigation {
				display: flex;
				align-items: center;
				font-size: 0.12rem;

				i {
					font-size: 0.10rem;
					padding: 0 0.05rem;
				}
			}
		}

	}
</style>