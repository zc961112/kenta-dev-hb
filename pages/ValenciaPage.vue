<template>
	<div class="page">
		<TripHeader :index="3" />
		<main>
			<div class="content">
				<div class="left">
					<div class="Change-t">
						<p>
							Change order<i class="el-icon-right"></i>
						</p>
					</div>
					<div class="ready">
						We have saved your personal details
					</div>
					<div class="How">
						How would you like to pay?
					</div>
					<div class="form">
						<div class="zan-li">
							<img src="~assets/images/icon/icon16.png" />
							Secure Payment - Your safety is our top priority.
						</div>
						<div class="zan-li">
							<img src="~assets/images/icon/icon16.png" />
							No hidden costs - what you see is what you pay.
						</div>
						<div class="method">
							Payment method
						</div>
						<div class="tips">
							<p> clicking the payment button, I place an order with a commitment to pay, </p>
							<p> thereby agreeing to the <span>terms of use and the site's policy.</span></p>
						</div>
						<div class="card">
							<div class="top">
								<div class="checkbox">
									<img src="~assets/images/icon/select.png" />
								</div>
								<div class="tickets">
									<span><img src="~assets/images/icon/icon17.png" /></span>
									Payment by credit
									card
								</div>
							</div>
							<div class="correctly">
								Please fill in all required fields correctly
							</div>
							<div class="form-li">
								<div class="form-li-f">
									<p>Card number</p>
									<el-input v-model="input" placeholder="1234 5678 9012 3456"></el-input>
								</div>
								<div class="imgs">
									<div>
										<img src="~assets/images/icon/imgs4.png" />
									</div>
									<div>
										<img src="~assets/images/icon/imgs2.png" />
									</div>
									<div>
										<img src="~assets/images/icon/imgs3.png" />
									</div>
								</div>
							</div>
							<div class="form-li">
								<div class="form-li-f">
									<p>Validity</p>
									<el-input v-model="input" placeholder="Choose your nationality"></el-input>
								</div>
								<div class="w"></div>
								<div class="form-li-f">
									<p>CVV</p>
									<el-input v-model="input" placeholder="3 digits on the back of the card"></el-input>
								</div>
							</div>
							<div class="form-li">
								<button class="button">Proceed to payment</button>
							</div>
						</div>
						<div class="select">
							<div class="checkbox">
								<img src="~assets/images/icon/select.png" />
							</div>
							<div class="tickets">
								<span><img src="~assets/images/icon/icon18.png" /></span>
								Payment via PayPal
							</div>
						</div>
						<div class="select">
							<div class="checkbox">
								<img src="~assets/images/icon/select.png" />
							</div>
							<div class="tickets">
								<span><img src="~assets/images/icon/icon19.png" /></span>
								Payment by credit card
							</div>
						</div>
					</div>
				</div>
				<div class="right">
					<div class="Summary">
						<div class="name">
							Frequently asked question
						</div>
						<div class="Summary-li">
							<div class="n">
								Event
							</div>
							<p class="p">
								Celta de Vigo vs Valencia CF
							</p>
						</div>
						<div class="Summary-li">
							<div class="n">
								Date
							</div>
							<p class="p">
								<span class="dec"><i class="el-icon-check"></i>
									The date is confirmed</span>
								August 23, 2024
							</p>
						</div>
						<div class="Summary-li">
							<div class="n">
								Stadium
							</div>
							<p class="p">
								Estadio Municipal de Balaídos
							</p>
						</div>
						<div class="Summary-li">
							<div class="n">
								Seats
							</div>
							<p class="p">
								Long Side
							</p>
						</div>
						<div class="Summary-li Summary-Number">
							<div class="n">
								Number of people
							</div>
							<p class="p">
								2 adults
							</p>
						</div>
						<div class="Card">
							<div>Card(s).</div>
							<p>2</p>
						</div>
						<div class="Card">
							<div>Total price per person</div>
							<p>€55</p>
						</div>
						<div class="Total">
							<div class="n">
								<h4>Total for 2 adults</h4>
								<p>Without additional costs</p>
							</div>
							<div class="num">
								€110
							</div>
						</div>
						<div class="order">
							<div class="n">
								<img src="~assets/images/icon/icon15.png" />
								Order safely with Kenta
							</div>
							<div class="img">
								<img src="~assets/images/icon/imgs1.png" />
								<img src="~assets/images/icon/imgs5.png" />
								<img src="~assets/images/icon/imgs3.png" />
								<img src="~assets/images/icon/imgs2.png" />
								<img src="~assets/images/icon/imgs4.png" />
							</div>
						</div>
					</div>
					<div class="why padding">
						<div class="name">
							Why order at<span>Kenta</span>？
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
				input: '',
				options: [{
					value: 'Choose your nationality',
					label: 'Choose your nationality'
				}],
				value: ''
			}

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.form-li::v-deep .el-input__inner,
	.form-li::v-deep .el-select {
		height: 0.48rem;
		width: 100%;
	}

	.button {
		height: 0.4rem;
		background-color: rgba(255, 50, 99, 1);
		border: none;
		border-radius: 8px;
		color: #fff;
		font-size: 0.14rem;
		flex: 1;
		cursor: pointer;
	}

	.correctly {
		font-size: 0.14rem;
		font-weight: 400;
		margin-top: 0.20rem;
		color: rgba(26, 26, 26, 0.6);
	}

	.method {
		font-size: 0.16rem;
		font-weight: 500;
		margin-top: 0.25rem;
	}

	.select {
		margin-top: 0.1rem;
		height: 0.64rem;
		cursor: pointer;
		padding: 0 0.25rem !important;
		border: 1px solid rgba(218, 218, 218, 1) !important;
		border-radius: 6px;

		.price {
			color: rgba(0, 188, 147, 1) !important;
		}
	}

	.top,
	.select {
		position: relative;
		display: flex;
		align-items: center;

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
			display: flex;
			align-items: center;
			padding-left: 0.25rem;

			span {
				width: 0.24rem;
				display: inline-block;
				height: 0.24rem;
				background-color: #fff;
				border: 1px solid rgba(218, 218, 218, 1);
				border-radius: 3.6px;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-right: 0.15rem;
			}

			img {
				width: 0.16rem;
				height: auto;
			}
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

	.card {
		padding: 0.25rem;
		display: inline-block;
		width: 100%;
		border: 1px solid rgba(218, 218, 218, 1);
		border-radius: 8px;
		background-color: rgba(245, 245, 245, 1);
		margin-bottom: 0.1rem;


	}

	.tips {
		margin: 0.15rem 0;
		font-size: 0.14rem;
		font-weight: 400;

		span {
			color: rgba(52, 81, 255, 1);
		}
	}

	.zan-li {
		display: flex;
		align-items: center;
		padding: 0.08rem 0.15rem;
		font-size: 0.16rem;
		font-weight: 400;
		border-radius: 8px;
		margin-bottom: 0.1rem;
		background-color: rgba(0, 188, 147, 0.12);

		img {
			width: 0.16rem;
			height: auto;
			margin-right: 0.05rem;
		}
	}

	.form {
		padding: 0.25rem;
		background-color: #fff;
		border: 1px solid rgba(218, 218, 218, 1);
		border-radius: 8px;

		.form-li {
			margin-top: 0.25rem;
			display: flex;
			align-items: center;
			position: relative;

			.imgs {
				display: flex;
				position: absolute;
				top: 0.40rem;
				right: 20px;
				z-index: 1;
				width: 1rem;

				div {
					flex: 1;
					margin: 0 5px;
				}

				img {
					width: 100%;
					height: auto;
				}
			}
		}

		.w {
			width: 20px;
		}

		.Month {
			margin: 0 20px;
		}

		.form-li-input {
			display: flex;
			align-items: center;

			.input {
				flex: 1;
			}
		}

		.form-li-f {
			flex: 1;
			position: relative;

			p {
				margin-bottom: 0.10rem;
				font-size: 0.14rem;
				font-weight: 400;
			}
		}
	}

	.How {
		font-size: 0.32rem;
		font-weight: 400;
		margin: 0.25rem 0;
	}

	.ready {
		margin-top: 0.05rem;
		font-size: 0.14rem;
		color: rgba(26, 26, 26, 0.6);
		font-weight: 400;
	}

	.Change-t {
		color: rgba(52, 81, 255, 1);
		font-size: 0.14rem;
		font-weight: 400;

		p {
			cursor: pointer;
			border-bottom: 1px solid rgba(52, 81, 255, 1);
			display: inline-block;
		}
	}

	.page {
		background-color: #F5F5F5;
	}

	.warp {
		padding: 0 0.32rem;
	}

	.why {
		margin: 0.20rem 0;
		padding: 0.25rem !important;
		border: 1px solid rgba(0, 188, 147, 1);
		border-radius: 8px;

		.name {
			font-size: 0.2rem;
			font-weight: 700;
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


	/* content */
	.content {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		width: 1440px;
		margin: 0.32rem auto 0 auto;
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
		position: relative;
		width: 308px;
		margin-right: 20px;
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

				img {
					width: 15%;
					height: auto;
					margin-right: 0.25rem;
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
					margin-right: 0.05rem;
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
				margin-right: 0.15rem;
				border-radius: 200px;
				background-color: rgba(0, 188, 147, 0.12);
				color: rgba(0, 188, 147, 1);
				font-size: 0.1rem;
				font-weight: 500;
				line-height: 0.12rem;
				margin-right: 0.1rem;

				i {
					font-weight: bold;
					margin-right: 0.05rem;
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