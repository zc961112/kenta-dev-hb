<template>
	<div class="header"
		:style="{backgroundColor:ishome?'rgba(255, 255, 255, 0)':'rgba(255, 255, 255, 1)'}">
		<div class="navs-icon">
			<img src="~assets/images/icon/icon20.png" />
		</div>
		<div class="navs">
			<div class="navs-a">
				התחברות
			</div>
			<div class="navs-a">
				הרשמה
			</div>
			<div class="navs-a">
				<el-dropdown trigger="click">
					<span class="el-dropdown-link">
						<i class="el-icon-arrow-down el-icon--right"></i>יעדים
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>יעדים</el-dropdown-item>
						<el-dropdown-item>יעדים</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</div>
		</div>
		<div class="flex"></div>
		<img v-if="ishome" class="logo" src="~assets/images/logo-white.png" />
		<img v-else class="logo" src="~assets/images/logo.png" />
	</div>
</template>

<script>
	export default {
		props: {
			ishome: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				top: 0
			}

		},
		mounted() {
			window.addEventListener('scroll', this.listenerScroll, true)
		},
		methods: {
			//滚动条改变触发该函数
			listenerScroll() {
				let value = window.pageYOffset || document.documentElement.scrollTop ||
					document.body.scrollTop
				this.top = value
				console.log(value, "88888")
			}
		}
	}
</script>
<style lang="scss" scoped>
	.header {
		padding: 0 0.32rem;
		height: 0.64rem;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9;
		display: flex;
		width: 100%;
		align-items: center;

		.navs-icon {
			margin-right: 0.76rem;

			img {
				cursor: pointer;
				width: 0.24rem;
				height: auto;
			}
		}

		.navs::v-deep .el-dropdown {
			color: rgba(254, 254, 254, 1);
			font-size: 0.14rem;
			font-weight: 500;
		}

		.navs {
			display: flex;
			align-items: center;
			color: rgba(254, 254, 254, 1);
			font-size: 0.14rem;
			font-weight: 500;

			.navs-a {
				padding: 0 0.2rem;
				cursor: pointer;

				i {
					color: rgba(254, 254, 254, 1);
					margin-right: 0.08rem;
				}
			}
		}

		.logo {
			width: 0.76rem;
			height: auto;
		}
	}
</style>
