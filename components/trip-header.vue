<template>
	<div>
		<div class="head warp">
			<div class="logo">
				<img src="~assets/images/Logo.svg" alt='logo' />
			</div>
			<div class="celta">
				<h3>Manchester United vs Liverpool</h3>
				<div class="text">
					<span>אוגוסט 23, 2024</span>
					<span>19:00-20:45</span>
					<p class="date">
						<i class="el-icon-check"></i>
						The date is confirmed
					</p>
					<div class="line"></div>
					<span>
						Estadio Municipal de Balaídos Vigo (ESP)
					</span>
					<div class="line"></div>
					<span>
						לה ליגה 24/25
					</span>
				</div>
			</div>
			<div class="trip">
				<div class="index" :class="[index == 1 ? '' : 'no-index']">1</div>
				<span :class="[index == 1 ? '' : 'no-select']">הטיול שלך </span>
				<i class="el-icon-arrow-left"></i>
				<div class="index" :class="[index == 2 ? '' : 'no-index']">2</div>
				<span :class="[index == 2 ? '' : 'no-select']">אוגוסט </span>
				<i class="el-icon-arrow-left"></i>
				<div class="index" :class="[index == 3 ? '' : 'no-index']">3</div>
				<span :class="[index == 3 ? '' : 'no-select']">תשלום </span>
			</div>
		</div>
		<div class="head-h"></div>
	</div>
</template>

<script>
	export default {
		props: {
			index: {
				type: Number,
				default: 1
			}
		}
	}
</script>

<style lang="scss" scoped>
	.warp {
		padding: 0 32px;
	}

	.head-h {
		height: 0.64rem;
	}

	.head {
		height: 0.64rem;
		background-color: #fff;
		border-bottom: 1px solid #DADADA;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99;
		width: 100%;


		.logo {
			margin-left: 0.32rem;

			img {
				width: 0.76rem
			}
		}

		.celta {
			flex: 1;
			padding-left: 32px;
			height: 0.64rem;
			margin-left: 32px;
			display: flex;
			justify-content: center;
			flex-direction: column;
			border-right: 1px solid #DADADA;

			h3 {
				font-size: 0.16rem;
				font-weight: 600;
				text-align: right;
				padding-right: 0.15rem;

			}

			i {
				font-weight: bold;
				margin-right: 0.05rem;
				;
			}

			.text {
				display: flex;
				margin-top: 0.05rem;
				align-items: center;
				flex-direction: row;

				.line {
					height: 0.15rem;
					width: 1px;
					margin-right: 0.15rem;
					background-color: #DADADA;
				}

				.date {
					padding: 0.05rem 0.10rem;
					margin-right: 0.15rem;
					border-radius: 200px;
					background-color: rgba(0, 188, 147, 0.12);
					color: rgba(0, 188, 147, 1);
					font-size: 0.1rem;
					font-weight: 500;
					line-height: 0.12rem;


				}

				span {
					font-size: 0.12rem;
					color: rgba(26, 26, 26, 0.6);
					margin-right: 0.15rem;
					display: inline-block;
				}
			}
		}

		.trip {
			display: flex;
			align-items: center;
			flex-direction: row;

			.index {
				width: 0.28rem;
				height: 0.28rem;
				display: flex;
				line-height: 0.26rem;
				// align-items: center;
				justify-content: center;
				border: 2px solid #FF3263;
				border-radius: 50%;
				color: #FF3263;
				font-weight: 500;
				margin: 0 0.10rem;
				;
			}

			i {
				color: rgba(26, 26, 26, 0.6);
				font-size: 0.12rem;
				margin-left: 0.05rem;
				font-weight: bold;
			}

			span {
				font-size: 0.16rem;
				font-weight: 500;
			}

			.no-select {
				color: #d0d0d0;
			}

			.no-index {
				border-color: #d0d0d0;
				color: #d0d0d0;
			}
		}

	}
</style>