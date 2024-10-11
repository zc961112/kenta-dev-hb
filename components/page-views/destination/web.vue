<template>
	<div class="page-area">
		<new-header />
		<div class="page-area-content" v-loading="loading">
			<div class="pac-left">
				<page-hotel v-if="selectedHotel" :casino="selectedHotel" :search-query="searchQuery"
					:selected-room="selectedRoom" @room-select="handleRoomSelect" />
				<div v-else class="map-container">
					<div ref="map" id="map" class="map-box"></div>
				</div>
			</div>
			<div class="pac-right">
				<div class="pac-right-top">
					<div class="pac-search">
						<div class="search-btn" @click="citysearch"></div>
						<el-autocomplete @keyup.enter.native="search" suffix-icon="el-icon-search" class="pac-input"
							v-model="searchQuery.destinationName" :fetch-suggestions="querySearch"
							@focus="searchQuery.destinationName=''" placeholder="לאס וגאס, ארה״ב"
							@select="handleSelect">
							<template slot-scope="{ item }">
								<div>{{ item.city }}</div>
							</template>
						</el-autocomplete>

						<!-- <el-autocomplete class="pac-input" v-model="searchQuery.destinationName"
							placeholder="לאס וגאס, ארה״ב" suffix-icon="el-icon-search"
							:fetch-suggestions="queryFetch" @focus="searchQuery.destinationName=''"
							@blur="handleQueryBlur" @select="handleQuerySelect" /> -->
					</div>
					<div class="pac-filters">
						<filter-datepicker @RangeTime="RangeTime" class="pacf-dp" :start-and-end-time="searchQuery.date"
							:date-type="searchQuery.dateType" :day-rage-index="dayRageIndex"
							@update:datetype="updateDateType" @update:time="updateStartEndTime"
							@update:daterange="updateDateRange" />
						<filter-member :list="searchQuery.guestList" class="pacf-mb" @change="changeGuests" />
						<button-filter :disabled="!!selectedRoom" @click="handleFilterList" />
					</div>
					<div class="map-title">
						<h2>{{cityList.length}} מלונות אטרקטיבים זמינים</h2>
						<p class="p">אנחנו מסירים אלפי תוצאות של מלונות, על מנת לחסוך לך זמן.</p>
						<p class="a">למדו על הסטנדרטים שלנו</p>
					</div>
				</div>

				<div class="pac-list">
					<!-- <template v-if="selectedRoom">
						<casino-box class="pac-item" :casino="selectedHotel" is-active :parent="form" />
						<div class="pac-item-btn">
							<el-button type="primary" plain @click="clearRoomSelected">Remove</el-button>
						</div>
						<module-price-total :room="selectedRoom" :search-query="searchQuery" class="pac-button"
							@next="openBookingModal" />
					</template> -->
					<casino-box :adults="adults" :dayTime="dayTime" v-for="item in cityList" :key="item.id" class="pac-item" :casino="item" :parent="form"
						@enter="showMapPopper(item)" @leave="hideMapPopper(item)" @click="showDetail(item)" />
				</div>
			</div>
		</div>
		<!-- <travel-expert></travel-expert> -->
		<new-footer />
		<modal-booking v-if="showModal" :casino="selectedHotel" :room="selectedRoom" :search-query="searchQuery"
			@submit="handleOrderSubmit" @close="showModal=false" />
		<modal-tip v-if="showTip" msg="Hold on, we are finalizing your casino hotel..." />
		<filter-more v-if="showFilterPanel" :filter-query="filterQuery" @close="showFilterPanel=false" />
	</div>
</template>

<script>
	import casino from '@/mixins/casino'
	import tday from '@/utils/time.js'
	export default {
		name: 'DestinationWebPage',
		mixins: [casino],
		props: {
			query: Object,
			hid: String
		},
		data() {
			return {
				isMobile: window.isMobile,
				showFilterPanel: false,
				dayTime: tday.tdaytime(0) + '/' + tday.tdaytime(1)
			}
		},
		watch: {
			query: {
				handler(val) {
					Object.assign(this.searchQuery, val)
					if (this.searchQuery.destinationId) {
						this.handleSearch(this.searchQuery.destinationId)
					}
				},
				deep: true,
				immediate: true
			}
		},
		mounted() {
			this.initDestinations()
		},
		methods: {
			RangeTime(time) {
				this.dayTime = time
				this.getprice(this.dayTime)
			},
			showDetail(item) {
				this.selectedHotel = item
			},
			openBookingModal() {
				this.showModal = true
			},
			handleQueryBlur() {
				if (!this.searchQuery.destinationName) {
					this.searchQuery.destinationName = this.$route.query.destinationName || ''
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page-area {
		.map-title {
			padding: 0.24rem 0;
			text-align: right;

			h2 {
				font-size: 0.16rem;
				font-weight: 500;
				text-align: right;
			}

			.p {
				margin-top: 0.08rem;
				font-size: 0.14rem;
				font-weight: 400;
				color: rgba(26, 26, 26, 0.6);
			}

			.a {
				margin-top: 0.16rem;
				font-size: 0.14rem;
				font-weight: 400;
				color: rgba(52, 81, 255, 1);
				text-decoration: underline;
				cursor: pointer;

			}
		}

		.pac-search {
			position: relative;
		}

		.search-btn {
			cursor: pointer;
			width: 60px;
			height: 40px;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 10;
		}

		.pac-search ::v-deep .el-input__inner {
			text-align: right;
			padding-right: 15px;
		}

		.pac-search ::v-deep .el-input__inner::placeholder {
			color: rgba(26, 26, 26, 1);
		}

		.pac-search ::v-deep .el-input__suffix {
			left: 15px;
			right: auto;
			font-size: 18px;
			color: rgba(26, 26, 26, 1);
		}

		.page-area-content {
			display: flex;
			//padding: 0 0.32rem;
			height: calc(100vh - 64px);
			// max-width: 1440px;
			//margin: 0 auto 0.8rem auto;
		}

		.pac-left {
			flex: 7;
			min-width: 0;
			border-right: 1px solid #DADADA;
			margin-right: 0.16rem;
			z-index: 100;
		}

		.map-container {
			height:100%;

			.map-box {
				width: 100%;
				height: 100%;
			}

			:deep(.mapboxgl-popup-content) {
				padding: 0;
				width: 200px;
			}

			:deep(.map-pp-img) {
				width: 100%;
				height: 120px;
				border-radius: 6px 6px 0 0;
			}

			:deep(.map-pp-title) {
				margin: 2px 12px 0;
				font-size: 0.16rem;
				font-weight: 500;
				color: rgba(26, 26, 26, 0.87);
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			:deep(.map-pp-text) {
				margin: 8px 12px 0;
				color: rgba(26, 26, 26, 0.60);
				font-size: 0.12rem;
				font-weight: 400;
			}

			:deep(.map-pp-line) {
				margin: 8px 12px 0;
				background: rgba(26, 26, 26, 0.16);
				width: 40px;
				height: 1px;
			}

			:deep(.map-pp-price) {
				margin: 12px 12px 10px;
				text-align: right;
				color: rgba(26, 26, 26, 0.60);
				font-size: 12px;
				font-weight: 400;
			}

			:deep(.map-pp-price-no) {
				color: rgba(26, 26, 26, 0.87);
				font-size: 16px;
				font-weight: 400;
			}
		}

		.pac-right {
			position: sticky;
			top: 0.88rem;
			flex: 5.5;
			// min-width: 0;
			height: 100%;
			background: #FEFEFE;
			display: flex;
			flex-direction: column;
			// flex: 3;
			width: 6.28rem;
			
		}

		.pac-right-top {
			padding: 16px 16px 0 24px;
		}

		.pac-title {
			color: #1A1A1A;
			font-size: 0.2rem;
			font-weight: 400;
		}

		.pac-search {
			margin-top: 0.16rem;
		}

		.pac-input {
			width: 100%;
		}

		.pac-filters {
			margin-top: 0.08rem;
			display: flex;
			align-items: center;
		}

		.pacf-dp {
			flex: 4;
			min-width: 0;
		}

		.pacf-mb {
			flex: 3;
			min-width: 0;
			margin: 0 0.08rem;
		}

		.pac-list {
			flex: 1;
			padding: 0 16px;
			min-height: 0;
			overflow-y: auto;
		}

		.pac-item {
			margin-bottom: 0.08rem;
		}

		.pac-item-btn {
			margin-top: 8px;
			text-align: right;
		}

		.pac-button {
			border: solid #DADADA;
			border-width: 1px 1px 0;
			border-radius: 6px;
			margin-top: 30px;
		}
	}
</style>
