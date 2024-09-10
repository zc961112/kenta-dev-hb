<template>
	<div class="page">
		<new-header />
		<div class="banner">
			<div class="info">
				<div class="navigation">
					<span>בית</span>
					<i class="el-icon-arrow-right"></i>
					<span>אירועים</span>
					<i class="el-icon-arrow-right"></i>
					<span>Dutch Grand Prix</span>
				</div>
				<h1 class="name">
					Celta de Vigo vs Valencia CF
				</h1>
				<div class="time">
					<img style="padding-right: 0;" src="~assets/images/icon/icon1.png" />
					<span>אוג’ 23, 2024 - אוג’ 25, 2024</span>
					<img src="~assets/images/icon/icon2.png" />
					<span>Estadio Municipal de Balaídos Vigo (ESP)</span>
					<img src="~assets/images/icon/icon3.png" />
					<span>לה ליגה 24/25 </span>
					<!-- <span class="Promo">Exclusive Promo</span>
						<span class="Casino"><img src="~assets/images/icon/icon4.png" />Sponsored by Asper Casino</span> -->
				</div>
			</div>
		</div>
		<div class="content">
			<div class="left">
				<div class="tips">
					<p> כאן תוכלו למצוא את כל הכרטיסים שלנו לגראנד פרי האיטלקי. בחרו וקנו את כרטיסי הפורמולה 1
					</p>
					<p>לבחירתכם והבטיחו את ביקורכם ב-Autodromo Nazionale Monza. </p>
				</div>
				<div class="item-li">
					<div class="text">
						<img src="~assets/images/icon/icon7.png" />
						<div class="info">
							<h3>Inner Ingresso Parabolic GF tickets</h3>
							<p>שישי - ראשון</p>
						</div>
						<div class="icon-img">
							<img src="~assets/images/icon/icon6.png" />
							<img src="~assets/images/icon/icon5.png" />
						</div>
					</div>
					<router-link :to="'/tripPage'" tag="button" class="button">Order - €340</router-link>
					<!-- <button class="button">Order - €340</button> -->
				</div>
				<div class="item-li">
					<div class="text">
						<img src="~assets/images/icon/icon7.png" />
						<div class="info">
							<h3>Inner Parabolic (23a)</h3>
							<p>שישי - ראשון</p>
						</div>
						<div class="icon-img">
							<img src="~assets/images/icon/icon6.png" />
							<img src="~assets/images/icon/icon5.png" />
						</div>
					</div>
					<router-link :to="'/tripPage'" tag="button" class="button">Order - €340</router-link>
				</div>
				<div class="item-li">
					<div class="text">
						<img src="~assets/images/icon/icon7.png" />
						<div class="info">
							<h3>Lateral Parabolic (21e)</h3>
							<p>ראשון</p>
						</div>
						<div class="icon-img">
							<img src="~assets/images/icon/icon6.png" />
							<img src="~assets/images/icon/icon5.png" />
						</div>
					</div>
					<router-link :to="'/tripPage'" tag="button" class="button">Order - €340</router-link>
				</div>
				<div class="item-li">
					<div class="text">
						<img src="~assets/images/icon/icon7.png" />
						<div class="info">
							<h3>Inner Ingresso Parabolic GF tickets</h3>
							<p>שישי - ראשון</p>
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
		<new-footer />
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
	.content {
		padding: 0.5rem 0 0.35rem 0;
		display: flex;
		flex-direction: row;
		width: 1440px;
		margin: 0 auto 0.8rem auto;
		direction: rtl;

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
				margin-right: 0.20rem;

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
					// margin-right: 0.15rem;
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
			margin-right: 180px;
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
		direction: rtl;

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
				text-align: right;
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