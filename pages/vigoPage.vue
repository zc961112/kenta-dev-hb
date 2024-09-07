<template>
	<div class="page">
		<TripHeader :index="2" />
		<main>
			<div class="content">
				<div class="left">
					<div class="Change-t">
						<p>
							Change order<i class="el-icon-right"></i>
						</p>
					</div>
					<div class="ready">
						The order is almost ready!
					</div>
					<div class="form">
						<div class="form-info">
							<p class="t">Details of the person ordering/traveling</p>
							<p class="f">Please fill in all the details</p>
							<div class="form-li">
								<div class="form-li-f">
									<p>First name*</p>
									<el-input v-model="input" placeholder=""></el-input>
								</div>
								<div class="w"></div>
								<div class="form-li-f">
									<p>Last name*</p>
									<el-input v-model="input" placeholder=""></el-input>
								</div>
							</div>
							<div class="form-li">
								<div class="form-li-f">
									<p>Citizenship*</p>
									<el-select v-model="value" placeholder="Choose your nationality">
										<el-option v-for="item in options" :key="item.value" :label="item.label"
											:value="item.value">
										</el-option>
									</el-select>
								</div>
								<div class="w"></div>
								<div class="form-li-f">
									<p>Date of birth*</p>
									<div class="form-li-input">
										<div class="input">
											<el-input v-model="input" placeholder="Day"></el-input>
										</div>
										<div class="input Month">
											<el-input v-model="input" placeholder="Month"></el-input>
										</div>
										<div class="input">
											<el-input v-model="input" placeholder="Year"></el-input>
										</div>
									</div>
								</div>
							</div>
							<div class="form-li">
								<div class="form-li-f">
									<p>Address*</p>
									<el-input v-model="input" placeholder=""></el-input>
								</div>
							</div>
							<div class="form-li">
								<div class="form-li-f">
									<p>Zip code</p>
									<el-input v-model="input" placeholder=""></el-input>
								</div>
								<div class="w"></div>
								<div class="form-li-f">
									<p>City ​​of residence*</p>
									<el-input v-model="input" placeholder=""></el-input>
								</div>
							</div>
							<div class="form-li">
								<div class="form-li-f">
									<p>State*</p>
									<el-select v-model="value" placeholder="Choose your country">
										<el-option v-for="item in options" :key="item.value" :label="item.label"
											:value="item.value">
										</el-option>
									</el-select>
								</div>
								<div class="w"></div>
								<div class="form-li-f">
								</div>
							</div>
						</div>
						<div class="Contact">
							<p class="t">Contact details</p>
							<p class="f">How can we contact you?</p>
							<div class="form-li">
								<div class="form-li-f">
									<p>Email address*</p>
									<el-input v-model="input" placeholder=""></el-input>
								</div>
								<div class="w"></div>
								<div class="form-li-f">
									<p>Phone number*</p>
									<el-input v-model="input" placeholder=""></el-input>
								</div>
							</div>
							<div class="form-li">
								<div class="form-li-f">
									<div class="agreement">
										<div class="icon">

										</div>
										<div class="flex">
											<p class="text">I would like to receive special offers and</p>
											<p class="text">recommendations by email.</p>
										</div>
									</div>
								</div>
								<div class="w"></div>
								<div class="form-li-f">
									<p class="text">Only in case of problems with the order.</p>
								</div>
							</div>
						</div>
						<div class="voucher">
							<p>
								Do you have a coupon code or voucher?
							</p>
						</div>
					</div>
					<div class="ready">
						Passenger 2
					</div>
					<div class="form">
						<div class="form-info">
							<p class="t">Details of the person ordering/traveling</p>
							<p class="f">Please fill in all the details</p>
							<div class="form-li">
								<div class="form-li-f">
									<p>First name*</p>
									<el-input v-model="input" placeholder=""></el-input>
								</div>
								<div class="w"></div>
								<div class="form-li-f">
									<p>Last name*</p>
									<el-input v-model="input" placeholder=""></el-input>
								</div>
							</div>
							<div class="form-li">
								<div class="form-li-f">
									<p>Date of birth*</p>
									<div class="form-li-input">
										<div class="input">
											<el-input v-model="input" placeholder="Day"></el-input>
										</div>
										<div class="input Month">
											<el-input v-model="input" placeholder="Month"></el-input>
										</div>
										<div class="input">
											<el-input v-model="input" placeholder="Year"></el-input>
										</div>
									</div>
								</div>
								<div class="w"></div>
								<div class="form-li-f">
									<p>Citizenship*</p>
									<el-select v-model="value" placeholder="Choose your nationality">
										<el-option v-for="item in options" :key="item.value" :label="item.label"
											:value="item.value">
										</el-option>
									</el-select>
								</div>
							</div>
						</div>
					</div>
					<div class="organizer">
						<div class="form-info">
							<div class="name">Restrictions and rules of the event organizer</div>
							<div class="text">
								<p>To avoid disappointment on the day of the event, we would like to inform you of
								</p>
								<p>the following restrictions:</p>
							</div>
							<div class="above">
								<p>
									<span>・</span>
									Aston Villa fans are not allowed to visit the event In some cases, an
									identification
									copy
								</p>
								<p>will be required to avoid any doubt in the above.</p>
								<p>
									<span>・</span>
									In addition, some event organizers may request a signed Code of Conduct
									Statement
								</p>
								<p>
									form. We will contact you if necessary.
								</p>
							</div>
						</div>
						<div class="agree">
							<div class="icon"></div>
							I agree to the terms of the event organizer.
						</div>
						<div class="payment">
							<button>Proceed to payment</button>
							<div class="p">
								<p>
									Ready for an unforgettable experience? Click Proceed to Payment
								</p>
								<p>
									to lock in your order! Your order will be completed and cannot be
								</p>
								<p>
									changed at this point.
								</p>
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

	.payment {
		background-color: #F5F5F5;
		padding: 0.25rem;
		margin-top: 0.3rem;
		display: flex;
		align-items: center;

		.p {
			padding-left: 0.3rem;
			font-size: 0.14rem;
			font-weight: 400;
			color: rgba(26, 26, 26, 0.6);

		}

		button {
			cursor: pointer;
			width: 1.8rem;
			height: 0.40rem;
			background-color: rgba(255, 50, 99, 1);
			color: #fff;
			border-radius: 8px;
			font-size: 0.14rem;
			border: none;
		}
	}

	.agree {
		border-top: 1px solid rgba(218, 218, 218, 1);
		display: flex;
		margin-top: 0.3rem;
		align-items: center;
		padding: 0.3rem 0.25rem 0 0.25rem;
		font-size: 0.14rem;
		font-weight: 400;

		.icon {
			width: 0.16rem;
			height: 0.16rem;
			background-color: rgba(245, 245, 245, 1);
			margin-right: 0.1rem;
			border-radius: 4px;
			border: 1px solid rgba(0, 188, 147, 1);
		}
	}

	.form-info {
		padding: 0 0.25rem;
	}

	.above {
		margin-top: 0.2rem;
		font-family: Noto Sans Hebrew;
		font-size: 0.14rem;
		line-height: 25px;
		font-weight: 400;
		color: rgba(26, 26, 26, 0.6);
	}

	.organizer {
		padding: 0.25rem 0 0 0;
		margin-top: 0.30rem;
		background-color: #fff;
		border: 1px solid rgba(218, 218, 218, 1);
		border-radius: 8px;

		.name {
			font-size: 0.32rem;
			font-weight: 400;
		}

		.text {
			margin-top: 0.25rem;
			font-size: 0.16rem;
			font-weight: 400;

		}
	}

	.voucher {
		margin-top: 0.25rem;
		padding: 0.25rem 0.25rem 0 0.25rem;
		border-top: 1px solid rgba(218, 218, 218, 1);
		text-align: right;

		p {
			font-size: 0.14rem;
			cursor: pointer;
			display: inline-block;
			border-bottom: 1px solid rgba(26, 26, 26, 1);
			color: rgba(26, 26, 26, 1);
		}
	}

	.agreement {
		display: flex;

		.icon {
			background-color: rgba(245, 245, 245, 1);
			border: 1px solid rgba(218, 218, 218, 1);
			border-radius: 4px;
			width: 0.16rem;
			height: 0.16rem;
			margin-right: 0.1rem;
		}

		.flex {
			flex: 1;
		}
	}

	.Contact {
		padding: 0.4rem 0.25rem 0 0.25rem;
		margin-top: 0.4rem;
		border-top: 1px solid rgba(218, 218, 218, 1);

		.text {
			color: rgba(26, 26, 26, 0.6);
			font-size: 0.12rem;
			font-weight: 400;
			margin-bottom: 0.05rem !important;

		}
	}

	.t {
		font-size: 0.16rem;
		font-weight: 500;
	}

	.f {
		margin-top: 0.05rem;
		font-size: 0.14rem;
		font-weight: 400;
		color: rgba(26, 26, 26, 0.6);
	}


	.form {
		padding: 0.25rem 0;
		background-color: #fff;
		border: 1px solid rgba(218, 218, 218, 1);
		border-radius: 8px;


		.form-li {
			margin-top: 0.25rem;
			display: flex;
			align-items: center;
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

			p {
				margin-bottom: 0.10rem;
				font-size: 0.14rem;
				font-weight: 400;
			}
		}


	}

	.ready {
		margin: 0.3rem 0;
		font-size: 0.32rem;
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