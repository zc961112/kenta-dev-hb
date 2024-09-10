<template>
	<div class="page">
		<TripHeader :index="2" />
		<main>
			<div class="content">
				<div class="left">
					<div class="Change-t">
						<i class="el-icon-right"></i>
						<p>
							שנוי הזמנה
						</p>
					</div>
					<div class="ready">
						ההזמנה כמעט מוכנה!
					</div>
					<div class="form">
						<div class="form-info">
							<p class="t">פרטי המזמין/מטייל</p>
							<p class="f">נא למלא את כל הפרטים</p>
							<div class="form-li">
								<div class="form-li-f">
									<p>שם פרטי*</p>
									<el-input v-model="input" placeholder=""></el-input>
								</div>
								<div class="w"></div>
								<div class="form-li-f">
									<p>שם משפחה*</p>
									<el-input v-model="input" placeholder=""></el-input>
								</div>
							</div>
							<div class="form-li">
								<div class="form-li-f">
									<p>אזרחות*</p>
									<span style="left: 16px; top: 42px;" class="i">i</span>
									<el-select prefix-icon="el-icon-search" v-model="value"
										placeholder="בחרו באזרחות שלכם">
										<el-option v-for="item in options" :key="item.value" :label="item.label"
											:value="item.value">
										</el-option>
									</el-select>
								</div>
								<div class="w"></div>
								<div class="form-li-f">
									<p>תאריך לידה*</p>
									<div class="form-li-input">
										<div class="input">
											<el-input v-model="input" placeholder="יום"></el-input>
										</div>
										<div class="input Month">
											<el-input v-model="input" placeholder="חודש"></el-input>
										</div>
										<div class="input">
											<el-input v-model="input" placeholder="שנה"></el-input>
										</div>
									</div>
								</div>
							</div>
							<div class="form-li">
								<div class="form-li-f">
									<p>כתובת*</p>
									<span style="left: 16px; top: 42px;" class="i">i</span>
									<el-input v-model="input" placeholder=""></el-input>
								</div>
							</div>
							<div class="form-li">
								<div class="form-li-f">
									<p>מיקוד</p>
									<el-input v-model="input" placeholder=""></el-input>
								</div>
								<div class="w"></div>
								<div class="form-li-f">
									<p>עיר מגורים*</p>
									<el-input v-model="input" placeholder=""></el-input>
								</div>
							</div>
							<div class="form-li">
								<div class="form-li-f">
									<p>מדינה*</p>
									<span style="left: 16px; top: 42px;" class="i">i</span>
									<el-select v-model="value" placeholder="בחר/י את המדינה שלך">
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
							<p class="t">פרטי התקשרות</p>
							<p class="f">איך נוכל ליצור איתך קשר?</p>
							<div class="form-li">
								<div class="form-li-f">
									<p>כתובת אימייל*</p>
									<el-input v-model="input" placeholder=""></el-input>
								</div>
								<div class="w"></div>
								<div class="form-li-f">
									<p>מספר טלפון*</p>
									<el-input v-model="input" placeholder=""></el-input>
								</div>
							</div>
							<div class="form-li">
								<div class="form-li-f">
									<div class="agreement">
										<div class="icon">

										</div>
										<div class="flex">
											<p class="text">ברצוני לקבל הצעות והמלצות מיוחדות למייל.</p>

										</div>
									</div>
								</div>
								<div class="w"></div>
								<div class="form-li-f">
									<p class="text">רק למקרים של בעיות בהזמנה.</p>
								</div>
							</div>
						</div>
						<div class="voucher">
							<p>
								האם יש לך קוד קופון או שובר?
							</p>
						</div>
					</div>
					<div class="ready">
						נוסע 2
					</div>
					<div class="form">
						<div class="form-info">

							<div class="form-li" style="margin-top:0px;">
								<div class="form-li-f">
									<p>שם פרטי*</p>
									<el-input v-model="input" placeholder=""></el-input>
								</div>
								<div class="w"></div>
								<div class="form-li-f">
									<p>שם משפחה*</p>
									<el-input v-model="input" placeholder=""></el-input>
								</div>
							</div>
							<div class="form-li">
								<div class="form-li-f">
									<p>אזרחות*</p>
									<span style="left: 16px; top: 42px;" class="i">i</span>
									<el-select v-model="value" placeholder="Choose your nationality">
										<el-option v-for="item in options" :key="item.value" :label="item.label"
											:value="item.value">
										</el-option>
									</el-select>
								</div>
								<div class="w"></div>
								<div class="form-li-f">
									<p>תאריך לידה*</p>
									<div class="form-li-input">
										<div class="input">
											<el-input v-model="input" placeholder="שנה"></el-input>
										</div>
										<div class="input Month">
											<el-input v-model="input" placeholder="חודש"></el-input>
										</div>
										<div class="input">
											<el-input v-model="input" placeholder="יום"></el-input>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
					<div class="organizer">
						<div class="form-info">
							<div class="name">הגבלות וכללים של מארגן האירוע</div>
							<div class="text">
								<p>כדי למנוע אכזבה ביום האירוע, ברצוננו להביא לידיעתכם את ההגבלות הבאות:
								</p>
							</div>
							<div class="above">
								<p>
									<span>・</span>
									אוהדים מאסטון וילה אינם מורשים לבקר באירוע
								</p>
								<p>
									<span>・</span>
									במקרים מסוימים יידרש העתק זיהוי כדי למנוע כל ספק באמור לעיל. בנוסף, מארגני אירועים
								</p>
								<p>
									מסוימים עשויים לבקש טופס הצהרת קוד התנהגות חתום. ניצור איתך קשר במידת הצורך.
								</p>
							</div>
						</div>
						<div class="agree" @click="agree=!agree">
							<div class="icon">
								<img v-if="agree" src="~assets/images/icon/x.png" />
							</div>
							אני מסכים לתנאיו של מארגן האירוע.
						</div>
						<div class="payment">
							<router-link :to="'/ValenciaPage'" tag="button" >המשך לתשלום</router-link>
							<!-- <button>המשך לתשלום</button> -->
							<div class="p">
								<p>
									מוכנים לחוויה בלתי נשכחת? לחץ על המשך לתשלום כדי לנעול את
								</p>
								<p>
									ההזמנה שלך! ההזמנה שלך תושלם ולא ניתן לשנות אותה בשלב זה.
								</p>

							</div>
						</div>
					</div>
				</div>
				<div class="right">
					<div class="Summary">
						<div class="name">
							סיכום ההזמנה שלך
						</div>
						<div class="Summary-li">
							<div class="n">
								אירוע
							</div>
							<p class="p">
								Celta de Vigo vs Valencia CF
							</p>
						</div>
						<div class="Summary-li">
							<div class="n">
								תאריך
							</div>
							<p class="p">
								<span class="dec"><i class="el-icon-check"></i>
									התאריך אושר</span>
								אוגוסט 23, 2024
							</p>
						</div>
						<div class="Summary-li">
							<div class="n">
								איצטדיון
							</div>
							<p class="p">
								Estadio Municipal de Balaídos
							</p>
						</div>
						<div class="Summary-li">
							<div class="n">
								מושבים
							</div>
							<p class="p">
								Long Side
							</p>
						</div>
						<div class="Summary-li Summary-Number">
							<div class="n">
								מספר אנשים
							</div>
							<p class="p">
								2 מבוגרים
							</p>
						</div>
						<div class="Card">
							<div>כרטיס/ים</div>
							<p>2</p>
						</div>
						<div class="Card">
							<div>סה״כ מחיר לאדם</div>
							<p>€55</p>
						</div>
						<div class="Total">
							<div class="n">
								<h4>סה״כ עבור 2 מבוגרים</h4>
								<p>ללא עלויות נוספות</p>
							</div>
							<div class="num">
								€110
							</div>
						</div>
						<div class="order">
							<div class="n">
								<img src="~assets/images/icon/icon15.png" />
								הזמינו בבטחה עם קנטה
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
							למה להזמין ב-<span>Kenta</span>？
						</div>
						<div class="why-li">
							<p>
								<img src="~assets/images/icon/icon14.png" />
								כרטיסים רישמיים
							</p>
							<p>
								<img src="~assets/images/icon/icon14.png" />
								מושבים אחד-ליד-השני
							</p>
							<p>
								<img src="~assets/images/icon/icon14.png" />
								אירועים מובטחים
							</p>
							<p>
								<img src="~assets/images/icon/icon14.png" />
								זמינות בזמן אמת
							</p>
						</div>
					</div>
					<div class="padding">
						<div class="Frequently">
							<div class="name">
								שאלות נפוצות
							</div>
							<div class="checkbox">
								<el-select v-model="value" placeholder="האם תאריכי הכרטיסים מאושרים?">
									<el-option v-for="item in options" :key="item.value" :label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
							<div class="checkbox">
								<el-select v-model="value" placeholder="איך ומתי אקבל את הכרטיסים שלי?">
									<el-option v-for="item in options" :key="item.value" :label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
							<div class="checkbox">
								<el-select v-model="value" placeholder="איפה אני אשב באיצדטיון?">
									<el-option v-for="item in options" :key="item.value" :label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
						</div>
						<div class="help">
							<div class="help-name">איך נוכל לעזור?</div>
							<div class="user">
								<div class="state"></div>
								<img src="https://t10.baidu.com/it/u=666889455,569580402&fm=58" />
								<div class="text">
									<p>שירות הלקוחות שלנו ישמח לסייע לכם </p>
									<p>בימי חול בין השעות 09:00-17:00.</p>
								</div>
							</div>
							<div class="contact-li">
								<div class="icon">
									<img src="~assets/images/icon/icon11.png" />
								</div>
								<p>כתבו לנו בWhatsApp</p>
							</div>
							<div class="contact-li">
								<div class="icon">
									<img src="~assets/images/icon/icon12.png" />
								</div>
								<p>כתבו לנו אימייל</p>
								<div class="text">support@kenta.co.il</div>
							</div>
							<div class="contact-li">
								<div class="icon">
									<img src="~assets/images/icon/icon10.png" />
								</div>
								<p>התקשרו</p>
								<div class="text">03-555-8888</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="foo-h"></div>
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
				value: '',
				agree: true
			}

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.form-info::v-deep .el-input__suffix {
		left: 40px;
		right: auto;
	}

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
			margin-left: 0.19rem;
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
		cursor: pointer;

		.icon {
			width: 0.16rem;
			height: 0.16rem;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: rgba(245, 245, 245, 1);
			margin-left: 0.1rem;
			border-radius: 4px;
			border: 1px solid rgba(0, 188, 147, 1);

			img {
				width: 0.08rem;
				height: auto;
			}
		}
	}

	.form-info {
		padding: 0 0.25rem;
	}

	.above {
		margin-top: 0.2rem;
		font-family: Noto Sans Hebrew;
		font-size: 0.14rem;
		line-height: 19px;
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
			font-weight: 500;
		}

		.text {
			margin-top: 0.25rem;
			font-size: 0.16rem;
			font-weight: 500;

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
			margin-left: 0.1rem;
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
		font-weight: 600;
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
			position: relative;

			.i {
				width: 0.16rem;
				height: 0.16rem;
				text-align: center;
				line-height: 0.16rem;
				background: rgba(245, 245, 245, 1);
				display: inline-block;
				border-radius: 0.03rem;
				font-size: 0.12rem;
				position: absolute;
				z-index: 2;
			}

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
		font-weight: 500;
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
		direction: rtl;
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
					margin-left: 0.10rem;
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
					margin-left: 0.25rem;
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
					margin-left: 0.05rem;
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
		margin-right: 0.15rem;
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

	.checkbox::v-deep .el-input__suffix {
		left: 0;
		right: auto;
	}

	.checkbox::v-deep .el-input__inner {
		height: 48px;
		border: none;
		padding: 0;
		background-color: rgba(26, 26, 26, 0);
	}

	.checkbox::v-deep .el-select {
		width: 100%;
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
		// left: 40px;
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
		margin-right: 20px;
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
		margin-left: 20px;
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