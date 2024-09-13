<template>
	<!-- <div class="c-casino-box" :class="{ 'active': isActive, 'mobile': isMobile }" @click="$emit('click')"
		@mouseenter="$emit('enter')" @mouseleave="$emit('leave')"> -->
	<div @click="toHotel(casino.hid)" class="c-casino-box" :class="{ 'active': isActive, 'mobile': isMobile }">

		<div class="ccb-right">
			<div class="title">
				<div class="index">9</div>
				<div class="name">
					<h3>{{casino.name}}</h3>
					<p>{{casino.address}}</p>
				</div>
			</div>
			<div class="see">
				<div class="number">
					<div class="top">
						<span></span>
						<span class="current"></span>
						<span class="current"></span>
						<span class="current"></span>
						<span class="current"></span>
						<img src="~assets/images/icon/image 1.png" />
					</div>
					<div class="text">
						14,256 ביקורות
					</div>
				</div>
				<div class="xx">
					<div class="top">
						<el-rate void-color="#FFB800" :value="casino.star_rating" />
						<div class="disabled"></div>
					</div>
					<div class="text">0.0 ק״מ ממרכז העיר</div>
				</div>
			</div>
			<div class="price">
				<div class="num">₪ {{casino.daily_prices?casino.daily_prices[0]:0}}</div>
				<div class="text">
					<p>עבור 2 לילות, 2 אורחים</p>
					<div class="laber">
						ביטול ללא עלות<img src="~assets/images/icon/secure-shield.png" />
					</div>
				</div>
			</div>
			<!-- <div class="ccb-star">
				<el-rate :value="casino.star" disabled />
				<span class="ccb-star-label">· {{ casino.distance || 0 }} mile from city center</span>
			</div>
			<div class="ccb-title">{{ casino.name }}</div>
			<div v-if="!isMobile" class="ccb-text">{{ parent.city }}, {{ parent.country }}</div>
			<div v-if="isMobile" class="ccb-coast">
				<span class="ccbc-label">From</span>
				<span class="ccbc-num">€{{ casino.$price || 0 }}</span>
				<span class="ccbc-label">+ Taxes and fees</span>
			</div>
			<div v-else class="ccb-coast">
				<span class="ccbc-old">€{{ casino.$oldPrice }} USD</span>
				<span class="ccbc-num">€{{ casino.$price }}</span>
				<span class="ccbc-label">+ Taxes and fees</span>
				<span class="ccbc-save">SAVE €{{ casino.$tax || 0 }}</span>
			</div>
			<div v-if="!isMobile" class="ccb-detail">{{ casino.roomView }}</div> -->
		</div>

		<div class="ccb-left">
			<img :src="casino.first_image" class="ccb-img">
			<svg class="ccb-img-eye" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"
				fill="none">
				<path d="M36.6665 20C34.9999 15 27.4999 8.33331 19.9999 8.33331C12.4999 8.33331 4.99992 15 3.33325 20"
					stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" />
				<path
					d="M3.33325 19.9999C4.99992 24.9999 12.4999 31.6666 19.9999 31.6666C27.4999 31.6666 34.9999 24.9999 36.6666 19.9999"
					stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" />
				<path
					d="M24.577 19.912C24.577 22.4687 22.5312 24.5831 19.9999 24.5831C17.4686 24.5831 15.4084 22.4687 15.4084 19.912C15.4084 17.3553 17.4686 15.4164 19.9999 15.4164C22.5312 15.4164 24.577 17.3553 24.577 19.912Z"
					stroke="#FEFEFE" stroke-width="1.5" />
			</svg>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CasinoBox',
		props: {
			parent: Object,
			casino: Object,
			isActive: Boolean
		},
		data() {
			return {
				isMobile: window.isMobile
			}
		},
		methods: {
			toHotel(id) {
				this.$router.push({
					name: 'hotelPage',
					query: {
						id: id
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.c-casino-box {
		display: flex;
		border-top: 1px solid rgba(218, 218, 218, 1);
		cursor: pointer;
		padding: 0.16rem 0;

		&.active,
		&:hover {
			// border: 1px solid #FF3263;
			// background: linear-gradient(0deg, rgba(255, 50, 99, 0.04) 0%, rgba(255, 50, 99, 0.04) 100%), #FEFEFE;

			// .ccb-title {
			// 	color: #FF3263;
			// }

			// .ccb-img-eye {
			// 	display: block;
			// }
		}

		&.mobile {
			padding: 0.16rem 0.2rem;
			border-radius: 0;
			border-width: 0 0 0.01rem;

			.ccb-left {
				flex: none;
				width: 0.88rem;
				height: 0.72rem;

				img {
					border-radius: 0.04rem;
				}
			}

			.ccb-title {
				font-size: 0.14rem;
			}

			.ccb-right {
				padding: 0;
				margin-left: 0.12rem;

			}
		}

		:deep(.el-rate__icon) {
			margin-right: 0;
			font-size: 0.18rem;
		}

		.ccb-left {
			width: 2.15rem;
			height: 1.62rem;
			position: relative;
		}

		.ccb-img-eye {
			display: none;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		.ccb-right {
			flex: 1;
			padding: 0 0.16rem;

			.price {
				margin-top: 0.41rem;

				.num {
					font-size: 0.16rem;
					font-weight: 600;
				}

				.text {
					display: flex;
					align-items: center;

					.laber {
						border-radius: 6px;
						padding: 2.5px 8px;
						background-color: rgba(255, 184, 0, 0.16);
						display: flex;
						align-items: center;
						font-size: 0.12rem;
						font-weight: 400;

						img {
							width: 0.12rem;
							height: auto;
							margin-left: 4px;
						}
					}

					p {
						font-size: 0.12rem;
						font-weight: 400;
						flex: 1;
						color: rgba(26, 26, 26, 0.6);
					}
				}
			}

			.see {
				margin-top: 0.16rem;
				display: flex;

				.xx {
					text-align: right;
					position: relative;

					.disabled {
						width: 102px;
						height: 20px;
						position: absolute;
						top: 0;
						left: 0;
						z-index: 1;
					}

					.text {
						font-size: 0.12rem;
						font-weight: 400;
						color: rgba(26, 26, 26, 0.6);
					}
				}

				.number {
					flex: 1;

					.text {
						margin-top: 4px;
						font-size: 0.12rem;
						font-weight: 400;
					}

					.top {
						display: flex;
						align-items: center;

						img {
							width: 0.2rem;
							height: auto;
							margin-left: 4px;
						}

						.current {
							background-color: rgba(0, 188, 147, 1);
						}

						span {
							width: 8px;
							height: 8px;
							box-sizing: border-box;
							border: 1px solid rgba(0, 188, 147, 1);
							border-radius: 50%;
							display: inline-block;
							margin-right: 4px;
						}
					}
				}
			}

			.title {
				display: flex;
				align-items: center;

				.index {
					width: 0.24rem;
					height: 0.32rem;
					background: url("~assets/images/icon/Vector.png");
					background-size: 100% 100%;
					text-align: center;
					font-size: 0.16rem;
					font-weight: 600;
					line-height: 0.3rem;
					color: rgba(254, 254, 254, 1);
				}

				.name {
					flex: 1;
					text-align: right;
					padding-left: 0.16rem;

					h3 {
						width: 261px;
						font-size: 0.16rem;
						font-weight: 600;
						text-align: right;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}

					p {
						margin-top: 0.04rem;
						font-size: 0.12rem;
						font-weight: 400;
						color: rgba(26, 26, 26, 0.6);
					}
				}
			}
		}

		.ccb-title {
			margin-top: 0.04rem;
			color: #1A1A1A;
			font-size: 16px;
			font-weight: 500;
		}

		.ccb-detail {
			position: relative;
			height: 0.16rem;
			margin-top: 0.04rem;
			color: rgba(26, 26, 26, 0.60);
			font-size: 20px;
			font-weight: 400;
			transform: scale(0.5) translate(-50%, 0);
		}

		.ccb-star {
			display: flex;
			align-items: center;
		}

		.ccb-star-label {
			color: rgba(26, 26, 26, 0.60);
			font-size: 0.12rem;
		}

		.ccb-text {
			margin-top: 0.16rem;
			color: rgba(26, 26, 26, 0.40);
			font-size: 0.12rem;
		}

		.ccb-coast {
			margin-top: 0.08rem;
			display: flex;
			align-items: center;
		}

		.ccbc-old {
			color: rgba(26, 26, 26, 0.60);
			font-size: 0.12rem;
			text-decoration: line-through;
		}

		.ccbc-num {
			margin: 0 0.08rem;
			color: #1A1A1A;
			font-size: 0.16rem;
		}

		.ccbc-label {
			color: #1A1A1A;
			font-size: 0.14rem;
			font-weight: 300;
		}

		.ccbc-save {
			margin-left: 0.08rem;
			padding: 0.02rem 0.04rem;
			line-height: 1;
			border-radius: 0.04rem;
			background: #00BC93;
			color: #FEFEFE;
			font-size: 0.12rem;
		}
	}
</style>