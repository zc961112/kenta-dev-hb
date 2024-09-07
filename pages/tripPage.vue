<template>
	<div class="page">
		<TripHeader :ishome="false" />
		<main>
			<div class="content">
				<div class="left">
					<div class="choose">
						<div class="choose-bg">
							<h1>1. &nbsp;&nbsp;Choose a ticket or package</h1>
							<div class="text" style="margin-left: 0;">
								<img src="~assets/images/icon/icon13.png" />
								Official tickets directly from the event organizer. Real-time availability and
								guaranteed
								seating!
							</div>
							<div class="type-name">Package Type:</div>
							<div class="type">
								<div class="type-li">
									<div class="radio"></div>
									<div class="ticket">
										Ticket/s + hotel
									</div>
									<div class="tips">
										<p>Choose your seats and</p>
										<p>hotel in step 2 and 3.</p>
									</div>
								</div>
								<div class="type-li current">
									<span class="Casino"><img src="~assets/images/icon/icon4.png" />Sponsored by Asper
										Casino</span>
									<div class="radio">
										<img src="~assets/images/icon/select.png" />
									</div>
									<div class="ticket">
										Ticket/s
									</div>
									<div class="tips">
										<p>Choose your seats</p>
										<p>in step 2.</p>
									</div>
								</div>
							</div>
							<div class="people">
								<div class="type-name">Number of people:</div>
								<el-select v-model="value" placeholder="请选择">
									<el-option v-for="item in options" :key="item.value" :label="item.value"
										:value="item.value">
									</el-option>
								</el-select>

								<!-- 	<div class="select">
										<p>2 people</p>
										<img src="img/xl.png" />
									</div> -->
							</div>
						</div>
						<div class="confirm">
							<button>Confirm</button>
							<div class="confirm-text">
								<p>Confirm to see the final price. You can change the</p>
								<p>card/package details until the final order is made.</p>
							</div>
						</div>
					</div>
					<div class="item-li">
						2.Where would you like to sit
					</div>
					<div class="item-li">
						3.Personal details
					</div>
				</div>
				<div class="right">
					<div class="r-img">
						<img src="~assets/images/icon/imgs.png" />
					</div>
					<div class="why padding">
						<div class="name">
							Why order at<span> Kenta</span>？
						</div>
						<div class="why-li">
							<p>
								<img src="~assets/images/icon/icon14.png" />
								Official Tickets
							</p>
							<p>
								<img src="~assets/images/icon/icon14.png" />
								Seats next to each other
							</p>
							<p>
								<img src="~assets/images/icon/icon14.png" />
								Events Guaranteed
							</p>
							<p>
								<img src="~assets/images/icon/icon14.png" />
								Real time availability
							</p>
						</div>
					</div>
					<div class="padding">
						<div class="Frequently">
							<div class="name">
								Frequently asked question
							</div>
							<div class="checkbox">
								<p>Are the ticket dates confirmed?</p>
								<img src="~assets/images/icon/xl.png" />
							</div>
							<div class="checkbox">
								<p>How and when will I receive my tickets?</p>
								<img src="~assets/images/icon/xl.png" />
							</div>
							<div class="checkbox">
								<p>Where will I sit in the event?</p>
								<img src="~assets/images/icon/xl.png" />
							</div>
						</div>
						<div class="help">
							<div class="help-name">How can we help?</div>
							<div class="user">
								<div class="state"></div>
								<img src="https://t10.baidu.com/it/u=666889455,569580402&fm=58" />
								<div class="text">
									<p>Our customer service will be</p>
									<p>happy to assist you on weekdays </p>
									<p>between 09:00 and 17:00.</p>
								</div>
							</div>
							<div class="contact-li">
								<div class="icon">
									<img src="~assets/images/icon/icon11.png" />
								</div>
								<p>Write to us on WhatsApp</p>
							</div>
							<div class="contact-li">
								<div class="icon">
									<img src="~assets/images/icon/icon12.png" />
								</div>
								<p>Write us an email</p>
								<div class="text">support@kenta.co.il</div>
							</div>
							<div class="contact-li">
								<div class="icon">
									<img src="~assets/images/icon/icon10.png" />
								</div>
								<p>Give us a call</p>
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
					value: '2 people',
					label: '1'
				}],
				value: '2 people'
			}

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.page {
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
			font-weight: 600!important;
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
					margin-right: 0.10rem;
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
		text-align: left;
	}

	.content .left .choose .text {
		margin: 0.20rem;
		background-color: rgba(0, 188, 147, 0.12);
		font-size: 0.16rem;
		font-weight: 400;
		height: 0.4rem;
		;
		display: flex;
		align-items: center;
		border-radius: 8px;
		padding: 0 0.15rem;

	}

	.content .left .choose .text img {
		width: 0.24rem;
		height: 0.24rem;
		margin-right: 0.10rem;
	}



	.content .type-name {
		font-weight: 400;
		margin-bottom: 0.10rem;
	}

	.content .type {
		display: flex;
	}

	.content .type-li {
		width: 308px;
		margin-right: 20px;
		padding: 20px;
		border: 1px solid #DADADA;
		border-radius: 6px;
		position: relative;

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
		width: 100px;
		height: 40px;
		cursor: pointer;
		font-weight: 400;
		border: none;
		color: rgba(254, 254, 254, 1);
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
		padding-left: 20px;
		display: flex;
		align-items: center;
		font-size: 0.32rem;
		font-weight: 400;
		color: #a2a2a2;
	}

	.content .right {
		width: 4.48rem;
		margin-left: 0.15rem;
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
		left: 40px;
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
		margin-left: 20px;
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
		margin-right: 20px;
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