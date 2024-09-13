<template>
	<div>
		<div class="header"
			:style="{backgroundColor:ishome?'rgba(255, 255, 255, 0)':'rgba(255, 255, 255, 1)',borderBottom:!ishome?'1px solid rgba(218, 218, 218, 1)':''}">
			<div class="navs-icon" v-if="ishome">
				<img src="~assets/images/icon/icon20.png" />
			</div>
			<div class="navs-icon icon" v-else>
				<img src="~assets/images/icon/Nav-icon.png" />
			</div>
			<div class="navs">
				<div class="navs-a" :class="[!ishome?'navcolor':'']">
					התחברות
				</div>
				<div class="navs-a" :class="[!ishome?'navcolor':'']">
					הרשמה
				</div>
				<div class="navs-a">
					<el-dropdown trigger="click">
						<span class="el-dropdown-link" :class="[!ishome?'navcolor':'']">
							<i class="el-icon-arrow-down el-icon--right"></i>יעדים
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>יעדים</el-dropdown-item>
							<el-dropdown-item>יעדים</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</div>
			<div class="flex" @click="toHome"></div>
			<div @click="toHome">
				<img v-if="ishome" class="logo" src="~assets/images/logo-white.png" />
				<img v-else class="logo" src="~assets/images/logo.png" />
			</div>
		</div>
		<div class="header-h" v-if="!ishome"></div>
	</div>
</template>

<script>
	export default {
		props: {
			ishome: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {}

		},

		methods: {
			toHome() {
				this.$router.push({
					path: '/'
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.header-h {
		height: 0.64rem;
	}

	.navcolor {
		color: rgba(26, 26, 26, 0.6);

		i {
			color: rgba(26, 26, 26, 0.6) !important;
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

		.icon {
			margin-right: 0.24rem !important;
			padding-right: 0.32rem;
			height: 0.64rem;

			border-right: 1px solid rgba(218, 218, 218, 1);
		}

		.navs-icon {
			margin-right: 0.76rem;
			height: 0.64rem;
			display: flex;
			align-items: center;

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