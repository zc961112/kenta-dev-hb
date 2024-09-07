<template>
  <div class="page" @click="closePop">
    <kt-header></kt-header>
    <main>
      <!-- banner start

      <header class="banner" :style="{backgroundImage: `url(${homePage[10]?.dictValue})`}"> -->
      <header class="banner" >
        <div class="tab">
          <div class="item" :class="tabIndex == 0 ? 'active' : ''" @click="handleTab(0)">Casino Hotels</div>
          <div class="item" :class="tabIndex == 1 ? 'active' : ''" @click="handleTab(1)">Customized</div>
        </div>
        <div class="tab-con" v-show="tabIndex == 0">
          <h1 v-if="homePage[0]">{{ homePage[0].dictValue }}</h1>
          <p class="banner-tip" v-if="homePage[1]">{{ homePage[1].dictValue }}</p>
          <div class="search-box animate__animated" ref="animatedBox" :class="searchValited?'':'animate__shakeX'">
            <destination-search ref="destinationSearch" v-bind:tabIndex="tabIndex" v-model="form.location" :style="colorAddressChange()"></destination-search>
            <div class="inp-box" :style="dateColorChange()">
              <i class="icon icon-date">
                <img src="~assets/images/icon-date.png" alt="">
              </i>
              <el-popover placement="bottom-start" style="width:100%" trigger="manual" :visible-arrow="false" popper-class="select-date-wrap" v-model="visible3">
                <div class="select-date-con">
                  <div class="tabs">
                    <div class="tab" :class="dateType == 0 ? 'active' : ''" @click="handleDateType(0)">
                      Select your
                      dates
                    </div>
                    <div class="tab" :class="dateType == 1 ? 'active' : ''" @click="handleDateType(1)">
                      <span>New:&nbsp;</span> I’m flexible
                    </div>
                  </div>
                  <div class="tab-con" v-if="dateType == 0">
                    <date-picker ref="myDatePicker" v-model="form.dates" type="daterange" @pick="confirmDateRange" popperClass="date-content" value-format="yyyy-MM-dd" range-separator="至" start-placeholder="" end-placeholder="">
                    </date-picker>
                    <div class="exact-dates">
                      <div class="item" :class="dayRageIndex==0?'active':''" @click="handleDateRange(0)">Exact dates
                      </div>
                      <div class="item" :class="dayRageIndex==1?'active':''" @click="handleDateRange(1)">± 1 day</div>
                      <div class="item" :class="dayRageIndex==2?'active':''" @click="handleDateRange(2)">± 2 days</div>
                      <div class="item" :class="dayRageIndex==3?'active':''" @click="handleDateRange(3)">± 3 days</div>
                      <div class="item" :class="dayRageIndex==7?'active':''" @click="handleDateRange(7)">± 7 days</div>
                    </div>
                  </div>
                  <div class="tab-con" v-if="dateType == 1">
                    <div class="travel-type">
                      <div class="type-hd">Travel for...</div>
                      <div class="item-list">
                        <div class="item" :class="travelTypeIndex==0?'active':''" @click="handleTravelType(0,'A short weekend')">
                          <div class="item-icon">
                            <img src="~assets/images/date-type-1.png" alt="">
                          </div>
                          <div class="item-text">A short weekend</div>
                          <div class="item-desc">Fri-Sun</div>
                          <div class="item-radio"></div>
                        </div>
                        <div class="item" :class="travelTypeIndex==1?'active':''" @click="handleTravelType(1,'A long weekend')">
                          <div class="item-icon">
                            <img src="~assets/images/date-type-2.png" alt="">
                          </div>
                          <div class="item-text">a long weekend</div>
                          <div class="item-desc">Thu-Mon</div>
                          <div class="item-radio"></div>
                        </div>
                        <div class="item" :class="travelTypeIndex==2?'active':''" @click="handleTravelType(2,'A week')">
                          <div class="item-icon">
                            <img src="~assets/images/date-type-3.png" alt="">
                          </div>
                          <div class="item-text">A week</div>
                          <div class="item-desc">7 days</div>
                          <div class="item-radio"></div>
                        </div>
                        <div class="item" :class="travelTypeIndex==3?'active':''" @click="handleTravelType(3,'Two weeks')">
                          <div class="item-icon">
                            <img src="~assets/images/date-type-4.png" alt="">
                          </div>
                          <div class="item-text">Two weeks</div>
                          <div class="item-desc">14 days</div>
                          <div class="item-radio"></div>
                        </div>
                      </div>
                    </div>
                    <div class="travel-month">
                      <div class="type-hd">Travel in...</div>
                      <!-- <div class="item-list">
                          <div class="item" v-for="(item, index) in monthList" :key="index">
                              <div class="item-month">{{ item.month }}</div>
                              <div class="item-year">{{ item.year }}</div>
                          </div>
                      </div> -->
                      <swiper :options="swiperOption">
                        <swiper-slide v-for="(item, index) in monthList" :key="index">
                          <div class="item" :class="item.checked?'checked':''" @click="handleMonth(index)">
                            <div class="item-month">{{ item.month }}</div>
                            <div class="item-year">{{ item.year }}</div>
                          </div>
                        </swiper-slide>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                      </swiper>
                    </div>
                  </div>
                </div>
                <div slot="reference">
                  <div v-if="dateType===0" class="date-show-inp">
                    <el-input placeholder="Add dates" v-model="form.date" v-on:change="dateColorChange()" clearable @click.stop.native="handleVisible3" @clear="handleDateClear"></el-input>
                    <div class="show-date-range" v-if="form.date&&dayRageIndex>0">±{{ dayRageIndex }}</div>
                  </div>
                  <div v-if="dateType===1" class="date-show-inp">
                    <el-input placeholder="Add dates" v-model="formDate2" v-on:change="dateColorChange()" clearable @click.stop.native="handleVisible3" @clear="handleDateClear2"></el-input>
                  </div>
                </div>
              </el-popover>
            </div>
            <div class="inp-box" :style="guestColorChange()">
              <i class="icon icon-guest">
                <img src="~assets/images/icon-guest.png" alt="">
              </i>
              <el-popover placement="bottom-start" style="width:100%" trigger="manual" :visible-arrow="false" popper-class="select-guest-wrap" v-model="visible4">
                <div class="select-guest-con">
                  <div class="item-list">
                    <div class="item" v-for="(item, index) in guestList" :key="index">
                      <div class="item-con">
                        <div class="item-title">{{ item.label }}</div>
                        <div class="item-desc">{{ item.tips }}</div>
                      </div>
                      <el-input-number v-model="item.value" :min="item.min||0"></el-input-number>
                    </div>
                  </div>
                </div>
                <el-input placeholder="Add guests" v-model="guests" v-on:change="guestColorChange()" slot="reference" @click.stop.native="handleVisible4"></el-input>
              </el-popover>
            </div>
            <el-button type="primary" class="search-btn" @click="goToDestination(form.location,1)">Search</el-button>
          </div>
        </div>
        <div class="tab-con tab-2" v-show="tabIndex == 1">
          <h1 v-if="homePage[2]">{{ homePage[2].dictValue }}</h1>
          <p class="banner-tip" v-if="homePage[3]">{{ homePage[3].dictValue }}</p>
          <div class="search-box animate__animated" :class="searchValited2?'':'animate__shakeX'">
            <destination-search ref="destinationSearch2" v-bind:tabIndex="tabIndex" v-model="form.location"></destination-search>
            <el-button type="primary" class="search-btn" @click="toCustom">Search</el-button>
          </div>
        </div>
        <div class="nav-type">
          <div class="item" @click="handleTab(0)" :class="tabIndex == 0 ? 'active' : ''">Casino Hotels</div>
          <div class="item" @click="handleTab(1)" :class="tabIndex == 1 ? 'active' : ''">Concierge Trips</div>
        </div>
      </header>
      <!-- banner end -->

      <!-- hot start -->
      <section class="hot-box">
        <h2 class="box-hd" v-if="homePage[4]">{{ homePage[4].dictValue }}</h2>
        <p class="box-desc" v-if="homePage[5]">{{ homePage[5].dictValue }}</p>
        <div class="list-wrap">
          <div class="item-list">
            <div class="item" @click="goToDestination(item,2)" v-for="(item,index) in destinationList" :key="index">
              <div class="item-pic">
                <img :src="item.destinationPic" alt="">
              </div>
              <h3 class="item-title">
                {{ item.city }}
              </h3>
              <p class="item-address">
                {{ item.country }}
              </p>
              <p class="item-num">
                {{ item.casinoNums }}+ Casinos
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- hot end -->

      <section class="flow-box">
        <h2 class="box-hd">How it works?</h2>
        <div class="item-list">
          <div class="item">
            <div class="item-pic">
              <img src="https://kenta-vip-text.b-cdn.net/step%201.svg" alt="">
            </div>
            <h3 class="item-title line-1">
              Personalized Experience
            </h3>
            <p class="item-desc line-2">
              Pick your hotel, finalize your flight, and curate your casino-centric attractions.
            </p>
          </div>
          <div class="item">
            <div class="item-pic">
              <img src="https://kenta-vip-text.b-cdn.net/step%202.svg" alt="">
            </div>
            <h3 class="item-title line-1">
              Exclusive Deals & Cashbacks
            </h3>
            <p class="item-desc line-2">
              Seize unbeatable offers and rewards that ensure maximized value for each trip.
            </p>
          </div>
          <div class="item">
            <div class="item-pic">
              <img src="https://kenta-vip-text.b-cdn.net/step%203.svg" alt="">
            </div>
            <h3 class="item-title line-1">
              Rack Up & Use Your Points
            </h3>
            <p class="item-desc line-2">
              Amplify your Kenta status with every booking and trade in points for rewards and privileges.
            </p>
          </div>
        </div>
      </section>

      <travel-expert></travel-expert>

      <section class="spec-box hot-box">
        <h2 class="box-hd2">
          Featured Casinos
        </h2>
        <div class="item-list">
          <div class="item" v-for="(item,index) in casinoList" :key="index">
            <div class="item-pic" v-if="item.isSave == 1">
              <img @click="toCasino(item)" v-if="item.casinoImages&&item.casinoImages[0]" :src="item.casinoImages[0].url" alt="">
              <i class="icon-mark-saved" @click="collection(item)"></i>
            </div>
            <div class="item-pic" v-else>
              <img @click="toCasino(item)" v-if="item.casinoImages&&item.casinoImages[0]" :src="item.casinoImages[0].url" alt="">
              <i class="icon-mark" @click="collection(item)"></i>
            </div>
            <h3 class="item-title line-1">
              {{ item.name }}
            </h3>
            <p class="item-address">
              {{item.cityName}},&nbsp;{{ item.countryName? `${item.countryName}` : '' }}
            </p>
            <!-- <div class="item-views">
                <div class="item-1">
                    {{item.views}}
                </div>
                <div class="item-2">
                    112K Reviews
                </div>
            </div> -->
          </div>
        </div>
      </section>

      <section class="article-box">
        <div class="box-hd">
          <h2 class="box-hd-text">Latest Reads </h2>
          <div class="box-hd-more" @click="toBlogList">
            View More
          </div>
        </div>
        <div class="art-layout">
          <div class="art-left" @click="toBlog(firstArticle)">
            <div class="art-pic">
              <!-- <img src="~assets/images/temp/pic-9.png" alt=""> -->
              <img :src="firstArticle.thumbnail" alt="">
            </div>
            <div class="art-content">
              <div class="art-msg">
                <span class="art-type">{{ firstArticle.ccategoryName }}</span>
                <span class="art-time">{{ firstArticle.publishTime }}</span>
              </div>
              <h3 class="art-title line-2">{{ firstArticle.articleTitle }}
              </h3>
              <p class="art-desc line-3">
                {{ firstArticle.articleSummary }}
              </p>
            </div>
          </div>
          <div class="art-center">
            <div class="item" @click="toBlog(secArticle)">
              <div class="art-pic">
                <!-- <img src="~assets/images/temp/pic-10.png" alt=""> -->
                <img :src="secArticle.thumbnail" alt="">
              </div>
              <div class="art-content">
                <div class="art-msg">
                  <span class="art-type">{{ secArticle.ccategoryName }}</span>
                  <span class="art-time">{{ secArticle.publishTime }}</span>
                </div>
                <h3 class="art-title line-2">{{ secArticle.articleTitle }}</h3>
              </div>
            </div>
            <div class="item" @click="toBlog(thirdArticle)">
              <div class="art-pic">
                <!-- <img src="~assets/images/temp/pic-11.png" alt=""> -->
                <img :src="thirdArticle.thumbnail" alt="">
              </div>
              <div class="art-content">
                <div class="art-msg">
                  <span class="art-type">{{ thirdArticle.ccategoryName }}</span>
                  <span class="art-time">{{ thirdArticle.publishTime }}</span>
                </div>
                <h3 class="art-title line-2">{{ thirdArticle.articleTitle }}</h3>
              </div>
            </div>
          </div>
          <div class="art-center">
            <div class="item" @click="toBlog(fourArticle)">
              <div class="art-pic">
                <img :src="fourArticle.thumbnail" alt="">
              </div>
              <div class="art-content">
                <div class="art-msg">
                  <span class="art-type">{{ fourArticle.ccategoryName }}</span>
                  <span class="art-time">{{ fourArticle.publishTime }}</span>
                </div>
                <h3 class="art-title line-2">{{ fourArticle.articleTitle }}</h3>
              </div>
            </div>
            <div class="item" @click="toBlog(fiveArticle)">
              <div class="art-pic">
                <img :src="fiveArticle.thumbnail" alt="">
              </div>
              <div class="art-content">
                <div class="art-msg">
                  <span class="art-type">{{ fiveArticle.ccategoryName }}</span>
                  <span class="art-time">{{ fiveArticle.publishTime }}</span>
                </div>
                <h3 class="art-title line-2">{{ fiveArticle.articleTitle }}</h3>
              </div>
            </div>
          </div>
          <!-- <div class="art-right">
              <div class="art-hd">
                  LATEST ANNOUNCEMENTS
              </div>
              <div class="item-list">
                  <div class="item" v-for="(item,index) in articleList.slice(0,4)">
                      <div class="item-title line-1">{{item.articleTitle}}</div>
                      <div class="item-time">{{item.publishTime}}</div>
                      <div class="item-desc line-2">{{item.articleSummary}}</div>
                  </div>
              </div>
          </div> -->
        </div>
      </section>

      <subscribe></subscribe>
    </main>

    <kt-footer></kt-footer>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { getClientArticleList, getIndexData, dictList, saveCasino, cancelSaveCasino } from '@/api/index';
import { getDestinationList, destinationPopular } from '@/api/destination'

export default {
  name: 'IndexPage',
  async asyncData ({ params }) {
    const response = await dictList({ dictType: 'home_page' });
    // 返回数据
    return {
      pageData: {
        title: 'keta',
        description: response.data[7] ? response.data[7].dictValue : '',
      }
    };
  },
  head () {
    return {
      // title: this.pageData.title,
      meta: [
        { hid: 'description', name: 'description', content: this.pageData.description }
      ]
    };
  },
  data () {
    return {
      tabIndex: 0,
      visible3: false,
      visible4: false,
      dateType: 0,
      form: {
        location: {
          label: '',
          value: '',
          slug: ''
        },
        date: '',
      },
      searchValited: true,
      searchValited2: true,
      dayRageIndex: 0,
      destinationList: [],//地点
      casinoList: [],//赌场
      howIsWorkList: [],//
      latestReadList: [],//文章
      latestAnnouncementList: [],//最新通知
      articleList: [],//首页文章
      firstArticle: {},
      secArticle: {},
      thirdArticle: {},
      fourArticle: {},
      fiveArticle: {},
      historyList: [],
      hotList: [{
        label: 'Las Vegas, US'
      }, {
        label: 'Macau, China'
      }, {
        label: 'London, UK'
      }, {
        label: 'Monte Carlo, Monaco'
      }, {
        label: 'Singapore'
      }],
      guestList: [{
        label: 'Adults',
        tips: 'Age 13+',
        value: 0,
      }, {
        label: 'Children',
        tips: 'Age 1 to 12',
        value: 0,
      }, {
        label: 'Infants',
        tips: 'Under 1',
        value: 0,
      }, {
        label: 'Pets',
        tips: 'An extra free may apply',
        value: 0,
      }],
      monthEN: {
        month1: 'January',
        month2: 'February',
        month3: 'March',
        month4: 'April',
        month5: 'May',
        month6: 'June',
        month7: 'July',
        month8: 'August',
        month9: 'September',
        month10: 'October',
        month11: 'November',
        month0: 'December',
      },
      travelTypeIndex: 2,
      monthList: [],
      swiperOption: {
        slidesPerView: 6,
        // 设置分页器
        pagination: {
          el: '.swiper-pagination',
          // 设置点击可切换
          clickable: true
        },
        // 设置前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // 设置自动轮播
        autoplay: false,
        // 设置轮播可循环
        loop: false
      },
      selectedMonth: [],
      traveTypeText: 'A week',
      homePage: [],
      isShowAddressColor: false
    }

  },
  mounted () {
    //this.$store.dispatch("nuxtServerInit");
    this.makMonthList();
    this.init();
    if (sessionStorage.key("tabIndex") != null) {
      this.tabIndex = Number(sessionStorage.getItem("tabIndex"));
      this.handleTab(this.tabIndex);
    }
    if (sessionStorage.key("showSearch") != null) {
      if (sessionStorage.getItem("showSearch") != 'false') {
        if (sessionStorage.getItem("label") != null) {
          this.form.location.label = sessionStorage.getItem("label");
          this.form.location.value = sessionStorage.getItem("cityid");
          this.form.location.slug = sessionStorage.getItem("slug");
        }

        if (sessionStorage.getItem("dateType") != null) {
          this.dateType = Number(sessionStorage.getItem("dateType"));
          if (this.dateType == 0) {
            this.$refs.myDatePicker.minDate = sessionStorage.getItem("minDate");
            this.$refs.myDatePicker.maxDate = sessionStorage.getItem("maxDate");
            let e = [];
            e.push(this.$refs.myDatePicker.minDate);
            e.push(this.$refs.myDatePicker.maxDate);
            this.confirmDateRange(e);

          } else if (this.dateType == 1) {
            if (sessionStorage.getItem("travelTypeIndex") != null) {
              this.travelTypeIndex = sessionStorage.getItem("travelTypeIndex");
            }
            if (sessionStorage.getItem("traveTypeText") != null) {
              this.traveTypeText = sessionStorage.getItem("traveTypeText");
            }
            if (sessionStorage.getItem("monthIndex") != null) {
              this.handleMonth(sessionStorage.getItem("monthIndex"));
            }
          }
        }
        if (sessionStorage.getItem("guests") != null) {
          this.guestList = JSON.parse(sessionStorage.getItem("guests"));
        }
        sessionStorage.setItem("showSearch", false);
      }
    }
  },
  computed: {
    formDate2: {
      get () {
        if (this.selectedMonth.length > 0) {
          return `${this.traveTypeText} in ${this.selectedMonth.join(',')}`;
        } else {
          return ''
        }
      },
      set () {

      }
    },
    backgroundImageUrl() {
      // 假设768px是移动端和桌面端的分界点
      const mobileImageUrl = 'https://kenta-vip-text.b-cdn.net/Rectangle 665.png';
      const desktopImageUrl = 'https://kenta-vip-text.b-cdn.net/bellagio_desktop.webp';
      return window.innerWidth < 768 ? mobileImageUrl : desktopImageUrl;
    },
    guests: {
      get () {
        let gustText = '';
        let infantText = '';
        let petText = '';
        let gutstNum = this.guestList[0].value + this.guestList[1].value;
        let infantNum = this.guestList[2].value;
        let petNum = this.guestList[3].value;
        if (infantNum > 0 || petNum > 0) {
          this.$set(this.guestList[0], 'min', 1);
        } else {
          this.$set(this.guestList[0], 'min', 0);
        }
        if (gutstNum == 1) {
          gustText += gutstNum + ' guest'
        } else if (gutstNum > 0) {
          gustText += gutstNum + ' guests'
        }
        if (infantNum == 1) {
          infantText += ' ,' + infantNum + ' infant'
        } else if (infantNum > 1) {
          infantText += ' , ' + infantNum + ' infants'
        }
        if (petNum == 1) {
          petText += ' ,' + petNum + ' pet'
        } else if (petNum > 1) {
          petText += ' , ' + petNum + ' pets'
        }
        return `${gustText}${infantText}${petText}`;
      },
      set () {
      }
    },
  },
  watch: {
    visible3 (val) {
      if (val) {
        this.dateType = 0;
        if (this.lastDateType == 1) {
          this.$nextTick(() => {
            this.dateType = 1;
          })
        }
      } else {
        this.lastDateType = this.dateType;
      }

    }
  },
  methods: {
    getCookie (name) {
      var cookie_start = document.cookie.indexOf(name);
      var cookie_end = document.cookie.indexOf(";", cookie_start);
      return cookie_start == -1 ? '' : unescape(document.cookie.substring(cookie_start + name.length + 1, (cookie_end > cookie_start ? cookie_end : document.cookie.length)));
    },
    init () {
      getIndexData().then((res) => {
        this.destinationList = res.data.zsDestinations.slice(0, 4)
        this.casinoList = res.data.zsCasinos.slice(0, 4)
        this.howIsWorkList = res.data.howIsWork.slice(0, 3)
        // this.latestReadList=res.data.latestReads.slice(0,4)
        // this.latestAnnouncementList=res.data.latestAnnouncements.slice(0,4)
        console.log("this.casinoList", this.casinoList)
        console.log("destinationList", this.destinationList)
      })
      getClientArticleList().then((res) => {
        this.articleList = res.data
        if (res.data && res.data[0]) {
          this.firstArticle = res.data[0];
          this.firstArticle.ccategoryName = res.data[0].ccategoryName.toUpperCase()
        }
        if (res.data && res.data[1]) {
          this.secArticle = res.data[1];
          this.secArticle.ccategoryName = res.data[1].ccategoryName.toUpperCase();
        }
        if (res.data && res.data[2]) {
          this.thirdArticle = res.data[2];
          this.thirdArticle.ccategoryName = res.data[2].ccategoryName.toUpperCase();
        }

        if (res.data && res.data[3]) {
          this.fourArticle = res.data[3];
          this.fourArticle.ccategoryName = res.data[3].ccategoryName.toUpperCase();
        }
        if (res.data && res.data[4]) {
          this.fiveArticle = res.data[4];
          this.fiveArticle.ccategoryName = res.data[4].ccategoryName.toUpperCase();
        }
        console.log("this.articleList", this.articleList);
      })
      destinationPopular().then((res) => {
        let list = [];
        for (let i = 0; i < res.data.length; i++) {
          list.push({
            value: res.data[i].id,
            label: res.data[i].city
          })
        }
        this.hotList = list;
      })
      dictList({ dictType: 'home_page' }).then((res) => {
        this.homePage = res.data;
      })

    },
    handleDateRange (index) {
      this.dayRageIndex = index;
    },
    handleDateClear () {
      this.dayRageIndex = 0;
      this.$refs.myDatePicker.minDate = '';
      this.$refs.myDatePicker.maxDate = '';
      this.dateType = 0;
    },
    handleDateClear2 () {
      for (let i = 0; i < this.monthList.length; i++) {
        this.$set(this.monthList[i], 'checked', false);
      }
      this.selectedMonth = [];
      this.travelTypeIndex = 2;
      this.traveTypeText = 'A week';
      this.dateType = 0;
    },
    handleTravelType (index, text) {
      this.travelTypeIndex = index;
      this.traveTypeText = text;
    },
    makMonthList () {
      let list = [];
      let currentYear = dayjs().year();
      let currentMonth = dayjs().month() + 1;
      for (let i = currentMonth; i <= currentMonth + 20; i++) {
        let item = new Object();
        item = {
          year: i > 12 ? currentYear + 1 : currentYear,
          month: this.monthEN['month' + i % 12]
        };
        list.push(item);
      }
      this.monthList = list;
    },
    handleMonth (index) {
      console.log(index);
      console.log(this.monthList.length);
      if (this.monthList[index].checked) {
        this.monthList[index].checked = false;
      } else {
        for (let i = 0; i < this.monthList.length; i++) {
          if (this.monthList[i].checked) {
            this.monthList[i].checked = false;
            break;
          }
        }
        this.monthList[index].checked = true;
      }
      this.calcSelectMonth();
    },
    calcSelectMonth () {
      let selectedMonth = this.monthList.filter((item) => {
        return item.checked
      });
      let monthTextArr = [];
      for (let i = 0; i < selectedMonth.length; i++) {
        monthTextArr.push(selectedMonth[i].month.slice(0, 3))
      }
      this.selectedMonth = monthTextArr;
    },
    handleTab (index) {
      this.tabIndex = index;
      sessionStorage.setItem("tabIndex", this.tabIndex);
    },
    handleVisible3 () {
      if (window.isMobile) {
        this.$router.push({ path: '/mobileIndexDate' });
        return;
      }
      this.dateColorChange();
      this.visible3 = !this.visible3;
      this.visible4 = false;
    },
    handleVisible4 () {
      if (window.isMobile) {
        this.$router.push({ path: '/mobileIndexGuest' });
        return;
      }
      this.guestColorChange();
      this.visible4 = !this.visible4;
      this.visible3 = false;
    },
    selectFn3 (val) {
      this.form.date = val;
      this.visible3 = false;
    },
    handleDateType (type) {
      this.dateType = type;
    },
    confirmDateRange (e) {
      this.form.date = `${dayjs(e[0]).format('DD')} ${this.monthEN['month' + dayjs(e[0]).format('MM') % 12].slice(0, 3)} - ${dayjs(e[1]).format('DD')} ${this.monthEN['month' + dayjs(e[1]).format('MM') % 12].slice(0, 3)}`
      // this.visible3 = false;
    },
    closePop () {
      this.visible3 = false;
      this.visible4 = false;
    },
    colorAddressChange () {
      if (this.isShowAddressColor) {
        return 'border : 1px solid rgba(218, 0, 0, 0.6)';
      } else {
        return '';
      }

    },
    goToDestination (row, type) {
       if (!row.slug) {
        return;
      }

      if (!window.whiteList.includes(`/destination/${row.slug}`)) {
        window.whiteList.push(`/destination/${row.slug}`)
      }

      this.isShowAddressColor = true;
      let destinationId = '';
      let destinationName = '';

      // 从搜索框点击进入
      if (row && type === 1) {
        destinationId = row.value;
        destinationName = row.label;

        // 设置搜索框闪动效果
        if (destinationId == '' || destinationId == null || destinationId == undefined) {
          this.searchValited = false;
          setTimeout(() => {
            this.searchValited = true;
          }, 1000);
          return;
        }
      }

      // 从首页列表点入进入
      if (row && type === 2) {
        destinationId = row.id;
        destinationName = row.city;
      }

      sessionStorage.setItem('destination-params', JSON.stringify({
        destinationId: destinationId,
        destinationName: destinationName,
        dateType: this.dateType,
        date: this.form.date,
        selectedMonth: this.selectedMonth,
        guestList: JSON.stringify(this.guestList)
      }))

      const path = row ? `/destination/${row.slug}` : '/destination'

      this.$router.push(path)
    },
    toCustom () {
      if (!this.form.location.value) {
        this.searchValited2 = false;
        setTimeout(() => {
          this.searchValited2 = true;
        }, 1000);
        return;
      }
      this.$router.push({
        path: '/custom-trip', query: {
          id: this.form.location.value
        }
      })
    },
    collection (item) {
      let memberId = this.getCookie("userId");
      if (memberId == '') {
        this.$router.push({ path: '/login' })
        return;
      }
      if (item.isSave == 0) {
        saveCasino({ casinoId: item.id }).then(res => {
          //   this.$message({
          //       message: 'Collection successful',
          //       type: 'success',
          // customClass:'messageIndex'
          //   });
          item.isSave = 1
          console.log("success")
        })
      } else {
        cancelSaveCasino({ casinoId: item.id }).then(res => {
          //   this.$message({
          //       message: 'cancelSaveCasino success',
          //       type: 'success',
          // customClass:'messageIndex'
          //   });
          item.isSave = 0
          console.log("success")
        })
      }
      this.init();
    },
    cancelSave (item) {
    },
    toCustom2 () {
      this.$router.push({ path: '/custom-trip-step1' })
    },
    toBlogList () {
      this.$router.push({ path: '/blog' })
    },
    toBlog (row) {
      if (!window.whiteList.includes(`/detail/${row.slug}`)) {
        window.whiteList.push(`/detail/${row.slug}`)
      }

      sessionStorage.setItem("baid", row.id)

      this.$router.push(`/detail/${row.slug}`)
    },
    toCasino (row) {
      if (!window.whiteList.includes(`/casino-profile/${row.slug}`)) {
        window.whiteList.push(`/casino-profile/${row.slug}`)
      }

      sessionStorage.setItem('cpid', row.id)

      this.$router.push(`/casino-profile/${row.slug}`)
    },
    dateColorChange () {
      return 'border : 1px solid rgba(218, 218, 218, 0.60)';
      if (this.dateType == 0) {
        if (this.form.date == '') {
          return 'border : 1px solid rgba(218, 0, 0, 0.6)';
        } else {
          return 'border : 1px solid rgba(218, 218, 218, 0.60)';
        }
      } else if (this.dateType == 1) {
        if (this.formDate2 == '') {
          return 'border : 1px solid rgba(218, 0, 0, 0.6)';
        } else {
          return 'border : 1px solid rgba(218, 218, 218, 0.60)';
        }
      }

    },
    guestColorChange () {
      return 'border : 1px solid rgba(218, 218, 218, 0.60)';
      if (this.guests == '') {
        return 'border : 1px solid rgba(218, 0, 0, 0.6)';
      } else {
        return 'border : 1px solid rgba(218, 218, 218, 0.60)';
      }
    }
  }
}
</script>
<style lang="scss" scoped>
h2 {
  margin: 0;
}
h3 {
  margin: 0;
}
.messageIndex {
  z-index: 9999 !important;
}
.date-show-inp {
  // font-family: Rubik;
  position: relative;

  .show-date-range {
    position: absolute;
    left: 1.25rem;
    width: 0.4rem;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    border-radius: 0.3rem;
    top: 50%;
    margin-top: -0.15rem;
    border: solid 1px #ddd;
    color: #1a1a1a;
  }
}

.banner {
  // font-family: Rubik;
  // height: 4.80rem;
  background: url('https://kenta-vip-text.b-cdn.net/Bellagio%20Hotel%20%26%20Casino%20shutterstock_1445665004-min_20231213131454A009_20240103163143A009.webp') no-repeat;
  background-size: 100% 100%;
  display: flex;
  padding-top: 8.6em; //1.20rem;
  padding-bottom: 4em; //.56rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fefefe;

  .tab {
    display: none;
  }

  h1 {
    // font-family: Rubik;
    margin: 0;
    font-size: 0.56rem;
    font-weight: normal;
    text-align: center;
    line-height: 100%;
    letter-spacing: -2.24px;
  }
  h2 {
    margin: 0;
  }

  .banner-tip {
    color: #fefefe;
    margin-top: 0.08rem;
    font-size: 0.2rem;
    text-align: center;
    font-style: normal;
    font-weight: 300;
    line-height: 0.24rem;
  }

  .search-box {
    // margin-top: .24rem;
    margin: 0.24rem auto 0;
    display: flex;
    background: #fefefe;
    width: 9.12rem;
    height: 0.64rem;
    padding: 0.08rem;
    border-radius: 0.12rem;

    .inp-box {
      margin-right: 0.08rem;
      flex: 1;
      display: flex;
      padding-left: 0.16rem;
      align-items: center;
      border: 1px solid rgba(218, 218, 218, 0.6);
      background: #fefefe;
      border-radius: 0.08rem;

      .icon {
        width: 0.16rem;
        height: 0.16rem;
        display: block;
        flex-shrink: 0;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .inline-input {
        width: 100%;
      }

      ::v-deep .el-input__inner {
        height: 0.4rem;
        color: #1a1a1a;
        line-height: 0.4rem;
        border-radius: 0.08rem;
        font-size: 16px;
        border: none;
      }
    }

    .search-btn {
      width: 1.52rem;
      border-radius: 0.08rem;
      padding: 0.12rem 0.2rem;
      font-size: 0.16rem;
      font-weight: 400;
      flex-shrink: 0;
    }
  }

  .nav-type {
    margin-top: 0.24rem;
    border-radius: 0.4rem;
    border: 1px solid #fefefe;
    background: rgba(254, 254, 254, 0.08);
    backdrop-filter: blur(4px);

    .item {
      font-size: 0.16rem;
      font-weight: 500;
      height: 0.4rem;
      line-height: 0.4rem;
      text-align: center;
      padding: 0 0.16rem;
      border-radius: 0.4rem;
      display: inline-block;
      cursor: pointer;
    }

    .item.active {
      text-align: center;
      color: #ff3263;
      background: #fefefe;
    }
  }
}

.box-hd {
  color: #1a1a1a;
  font-style: normal;
  font-weight: 400;
  font-size: 0.32rem;
  text-align: center;
  line-height: 124%;
  letter-spacing: -1.28px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}

.box-desc {
  // font-family: Rubik;
  margin-top: 0.08rem;
  font-size: 0.2rem;
  text-align: center;
  font-weight: 300;
}

.hot-box {
  // font-family: Rubik;
  padding: 0.64rem 0.24rem;
  background: #fefefe;

  .item-list {
    margin-top: 0.4rem;
    display: flex;
    justify-content: center;

    .item {
      flex: 1;
      //max-width: 25%;
      max-width: 360px;
      margin: 0 0.08rem;

      .item-pic {
        height: 4rem;
        border-radius: 0.08rem;
        overflow: hidden;
      }

      .item-title {
        font-family: Rubik;
        margin-top: 0.16rem;
        color: rgba(26, 26, 26, 0.87);
        font-size: 0.2rem;
        font-weight: 500;
      }

      .item-address {
        position: relative;
        margin-top: 0.04rem;
        font-size: 0.14rem;
        color: rgba(26, 26, 26, 0.6);

        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -0.08rem;
          width: 0.4rem;
          height: 1px;
          background: rgba(26, 26, 26, 0.16);
        }
      }

      .item-num {
        margin-top: 0.18rem;
        font-size: 0.12rem;
        color: #1a1a1a;
        font-family: Rubik;
        font-style: normal;
        font-weight: 300;
        line-height: 0.16rem; /* 133.333% */
      }
    }
  }
}

.flow-box {
  // font-family: Rubik;
  padding: 0.64rem 0.24rem;
  background: #f5f5f5;
  h2 {
    margin: 0;
  }
  h3 {
    margin: 0;
  }
  .box-hd {
    margin-left: auto;
    margin-right: auto;
  }
  .item-list {
    margin-top: 0.4rem;
    display: flex;
    justify-content: center;

    .item {
      flex: 1;
      //max-width: 33.3%;
      max-width: 484px;
      margin: 0 0.08rem;
      background: #fefefe;
      border-radius: 0.08rem;
      padding: 0.24rem 0.4rem;

      .item-pic {
        height: 2.4rem;
        background: rgba(218, 218, 218, 0.16);
      }

      .item-title {
        margin-top: 0.24rem;
        color: rgba(26, 26, 26, 0.87);
        font-weight: 500;
        font-size: 0.2rem;
        text-align: center;
      }

      .item-desc {
        margin-top: 0.08rem;
        text-align: center;
        color: rgba(26, 26, 26, 0.6);
        font-size: 0.16rem;
      }
    }
  }
}

.spec-box {
  // font-family: Rubik;
  .box-hd2 {
    padding-left: 0;
    text-align: left;
    color: #1a1a1a;
    font-family: Rubik;
    font-size: 0.32rem;
    font-style: normal;
    font-weight: 400;
    line-height: 124%; /* 39.68px */
    letter-spacing: -1.28px;
    max-width: 1480px;
    margin-left: auto;
    margin-right: auto;
  }

  .item-list {
    .item {
      .item-pic {
        position: relative;
        height: 2rem;

        .icon-mark {
          display: block;
          width: 0.32rem;
          height: 0.32rem;
          position: absolute;
          right: 0.16rem;
          top: 0.16rem;
          background: url('~assets/images/icon-mark.png');
          background-size: 100%;
        }

        .icon-mark-saved {
          display: block;
          width: 0.32rem;
          height: 0.32rem;
          position: absolute;
          right: 0.16rem;
          top: 0.16rem;
          background: url('~assets/images/icon-mark-saved.png');
          background-size: 100%;
        }
      }

      .item-views {
        margin-top: 0.16rem;

        .item-1 {
          display: inline-block;
          margin: 0.05rem 0;
          margin-right: 0.24rem;
          background: url('~assets/images/views-1.png');
          background-repeat: no-repeat;
          background-position: left center;
          height: 0.2rem;
          line-height: 0.2rem;
          background-size: auto 0.2rem;
          padding-left: 0.8rem;
          font-size: 0.12rem;
        }

        .item-2 {
          display: inline-block;
          background: url('~assets/images/views-2.png');
          background-repeat: no-repeat;
          background-size: auto 0.16rem;
          padding-left: 0.75rem;
          height: 0.16rem;
          line-height: 0.16rem;
          background-position: left center;
          font-size: 0.12rem;
        }
      }
    }
  }
}

.art-content {
  // font-family: Rubik;
  padding: 0.16rem;
  background: #fefefe;
  border-bottom-left-radius: 0.08rem;
  border-bottom-right-radius: 0.08rem;

  .art-msg {
    height: 0.2rem;
    display: flex;
    align-items: center;
  }

  .art-type {
    font-size: 0.12rem;
    padding: 0.04rem;
    border-radius: 0.02rem;
    background: #ffb800;
  }

  .art-type.type-2 {
    background: #3451ff;
    color: #fefefe;
  }

  .art-time {
    margin-left: 0.16rem;
    color: rgba(26, 26, 26, 0.6);
    font-size: 0.14rem;
  }

  .art-title {
    margin-top: 0.16rem;
    font-size: 0.2rem;
  }

  .art-desc {
    position: relative;
    padding-top: 0.16rem;
    color: rgba(26, 26, 26, 0.6);
    font-size: 0.14rem;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.08rem;
      width: 0.4rem;
      height: 1px;
      background: rgba(26, 26, 26, 0.16);
    }
  }
}

.article-box {
  // font-family: Rubik;
  padding: 0.64rem 0.24rem;
  background: #f5f5f5;

  .box-hd {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // padding: 0 .08rem;

    .box-hd-more {
      cursor: pointer;
      font-size: 0.16rem;
      line-height: 100%; /* 39.68px */
      border-radius: 0.08rem;
      padding: 0.12rem 0.24rem;
      border: 0.01rem solid #1a1a1a;
    }
    .box-hd-text {
      color: #1a1a1a;
      font-family: Rubik;
      font-size: 0.32rem;
      font-style: normal;
      font-weight: 400;
      line-height: 124%; /* 39.68px */
      letter-spacing: -1.28px;
    }
  }

  .art-layout {
    margin-top: 0.24rem;
    display: flex;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;

    .art-left {
      height: 5.6rem;
      background: #fefefe;
      // width: 5.64rem;
      flex: 1;
      flex-shrink: 0;
      border-bottom-left-radius: 0.08rem;
      border-bottom-right-radius: 0.08rem;

      .art-pic {
        height: 3.72rem;
        border-top-left-radius: 0.08rem;
        border-top-right-radius: 0.08rem;
        overflow: hidden;
      }

      .art-content {
        padding-top: 0.22rem;
      }
    }

    .art-center {
      width: 3.34rem;
      height: 5.6rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 0.16rem;
      flex-shrink: 0;

      .item {
        flex: 1;
        border-radius: 0.08rem;
        overflow: hidden;
        background: #fefefe;
      }

      .item + .item {
        margin-top: 0.16rem;
      }

      .art-pic {
        height: 1.6rem;
      }

      .art-title {
        margin-top: 0.08rem;
      }

      // .item+.item{
      //     margin-top: .24rem;
      // }
    }

    .art-right {
      flex: 1;
      width: 0;
      height: 5.6rem;
      margin-left: 0.16rem;
      background: #fefefe;
      border-radius: 0.08rem;
      padding: 0.24rem 0.24rem;

      .art-hd {
        color: #3451ff;
        font-size: 0.2rem;
        padding-bottom: 0.16rem;
        border-bottom: solid 1px rgba(26, 26, 26, 0.16);
      }

      .item-list {
        .item {
          padding: 0.16rem 0;
          border-bottom: solid 1px rgba(26, 26, 26, 0.16);

          .item-title {
            color: rgba(26, 26, 26, 0.87);
            font-family: Rubik;
            font-size: 0.16rem;
          }

          .item-time {
            margin-top: 2px;
            font-size: 0.14rem;
            color: rgba(26, 26, 26, 0.6);
          }

          .item-desc {
            position: relative;
            font-size: 0.14rem;
            padding-top: 0.16rem;
            color: rgba(26, 26, 26, 0.6);

            &::before {
              content: '';
              position: absolute;
              left: 0;
              top: 0.08rem;
              width: 0.4rem;
              height: 1px;
              background: rgba(26, 26, 26, 0.16);
            }
          }
        }
      }
    }
  }
}

.mobile {
  // font-family: Rubik;
  .page {
    width: 3.75rem;
    overflow: hidden;
  }

  .banner {
    display: block;
    padding-top: 0;
    height: 6.64rem;
    background: url('https://kenta-vip-text.b-cdn.net/Rectangle%20665.png') no-repeat center bottom;
    background-size: 100% 3.93rem;

    .banner-tip {
      display: none;
    }

    .tab {
      display: flex;
      width: 100%;

      .item {
        font-weight: 500;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex: 1;
        height: 0.4rem;
        color: rgba(26, 26, 26, 0.4);
        font-size: 14px;
        border: 1px solid #dadada;
        background: #f5f5f5;
      }

      .item.active {
        font-weight: 500;
        color: #1a1a1a;
        position: relative;
        border-color: transparent;
        background: #fefefe;
      }

      .item.active::before {
        content: '';
        position: absolute;
        box-sizing: content-box;
        padding: 0 1px;
        top: -1px;
        left: -1px;
        width: 100%;
        height: 2px;
        background: #ff3263;
      }
    }

    .tab-con {
      padding: 0.24rem 0.1rem 0.16rem 0.1rem;
      width: 100%;
      background: #fefefe;
      border-bottom-left-radius: 0.2rem;
      border-bottom-right-radius: 0.2rem;
    }

    .tab-con.tab-2 {
      h1 {
        padding: 0 0.6rem;
      }

      h3 {
        display: block;
        color: #1a1a1a;
        font-size: 0.14rem;
      }
    }

    h1 {
      padding: 0 0.7rem;
      font-size: 0.24rem;
      color: #1a1a1a;
    }

    h3 {
      display: none;
      color: #1a1a1a;
      font-size: 0.14rem;
    }

    .nav-type {
      display: none;
    }
  }

  .search-box {
    // display: none;
    display: block;
    height: auto;
    width: 100%;
    margin-top: 0.1rem;

    .inp-box {
      margin-top: 0.08rem;
    }

    .search-btn {
      margin-top: 0.16rem;
      width: 100%;
    }
  }

  .box-hd {
    font-size: 0.24rem;
  }

  .box-desc {
    font-size: 0.16rem;
  }

  .hot-box {
    padding: 0.64rem 0.2rem 0.24rem 0.2rem;

    .list-wrap {
      width: 106%;
      overflow: auto;
    }

    .item-list {
      width: 10.56rem;
      display: block;
      margin-top: 0.24rem;

      .item {
        width: 2.48rem;
        float: left;
        max-width: none;

        .item-pic {
          height: 3rem;
          border-radius: 0.06rem;
          .item-title {
            color: rgba(26, 26, 26, 0.87);
            font-size: 0.2rem;
            font-style: normal;
            font-weight: 500;
            line-height: 0.24rem; /* 120% */
          }
        }
      }
    }
  }

  .flow-box {
    padding: 0.64rem 0.2rem;

    .item-list {
      margin-top: 0;
      display: block;

      .item {
        max-width: none;
        margin: 24px 0 0;
        padding: 0.16rem;

        .item-title {
          font-size: 0.18rem;
        }

        .item-desc {
          font-size: 0.14rem;
        }
      }
    }
  }

  .spec-box {
    .box-hd {
      padding-left: 0;
      .box-hd-text {
        font-size: 0.14rem;
      }

      .box-hd-more {
        font-size: 0.14rem;
      }
    }

    .item-list {
      width: 100%;

      .item {
        float: none;
        margin: 0;
        width: 100%;
        margin-top: 0.24rem;
        padding-bottom: 0.24rem;
        border-bottom: none;
        // border-bottom: solid 1px rgba(26, 26, 26, 0.16);

        .item-pic {
          height: 2rem;
        }
      }
    }
  }

  .article-box {
    padding: 0.64rem 0.2rem;

    .box-hd {
      padding-left: 0;
      .box-hd-text {
        color: #1a1a1a;
        font-weight: 400;
        font-family: Rubik;
        font-size: 24px;
        line-height: 24px;
        letter-spacing: -0.04em;
        text-align: center;
      }
      .box-hd-more {
        font-size: 0.12rem;
        padding: 0.06rem 0.12rem;
      }
    }

    .art-layout {
      margin-top: 0.16rem;
      display: block;

      .art-left {
        height: auto;

        .art-pic {
          height: 2.24rem;
        }
      }

      .art-center {
        width: auto;
        height: auto;
        margin-left: 0;

        .item {
          margin-top: 0.24rem;
        }
      }

      .art-content {
        .art-title {
          font-size: 0.18rem;
        }

        .art-desc {
          overflow: visible;
          -webkit-line-clamp: unset;
        }
      }

      .art-right {
        height: auto;
        margin-left: 0;
        margin-top: 0.24rem;
      }
    }
  }
}

.exact-dates {
  // font-family: Rubik;
  display: flex;
  align-items: center;

  font-family: Rubik;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;

  .item {
    color: rgba(26, 26, 26, 0.6);
    font-size: 14px;
    padding: 0 0.08rem;
    border-radius: 0.04rem;
    height: 0.32rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.08rem;
    border: 1px solid rgba(218, 218, 218, 0.6);
  }

  .item.active {
    color: #ff3263;
    border: 1px solid #ff3263;
    background: rgba(255, 50, 99, 0.16);
  }
}

.travel-type {
  font-family: Rubik;
  .type-hd {
    color: #1a1a1a;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
  }

  .item-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.16rem;

    .item + .item {
      margin-left: 0.32rem;
    }

    .item.active {
      border: 1px solid #ff3263;
      background: rgba(255, 50, 99, 0.08);

      .item-text {
        color: #ff3263;
      }

      .item-radio {
        position: relative;
        border-color: #1a1a1a;
      }

      .item-radio::after {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        content: '';
        width: 0.08rem;
        height: 0.08rem;
        background: #ff3263;
        border-radius: 50%;
      }
    }

    .item:hover {
      border: 1px solid #ff3263;
      background: rgba(255, 50, 99, 0.08);

      .item-text {
        color: #ff3263;
      }
    }

    .item {
      height: 1.6rem;
      width: 1.6rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      border: 1px solid #dadada;
      cursor: pointer;

      .item-icon {
        height: 0.56rem;
      }

      .item-text {
        color: #1a1a1a;
        margin-top: 0.08rem;

        font-family: Rubik;
        font-size: 14px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0em;
      }

      .item-desc {
        margin-top: 0.08rem;

        font-family: Rubik;
        font-size: 14px;
        font-weight: 300;
        line-height: 16px;
        letter-spacing: 0em;
      }

      .item-radio {
        width: 0.16rem;
        height: 0.16rem;
        margin-top: 0.08rem;
        border-radius: 50%;
        border: solid 1px #dadada;
      }
    }
  }
}

.travel-month {
  margin-top: 0.24rem;
  font-family: Rubik;
  .type-hd {
    color: #1a1a1a;
    font-size: 0.2rem;
    font-weight: 400;
    margin-bottom: 0.16rem;
  }

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #dadada;
    flex: 1;
    height: 1.2rem;
    margin: 0 0.12rem;
    cursor: pointer;

    .item-month {
      color: #1a1a1a;

      font-family: Rubik;
      font-size: 14px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
    }

    .item-year {
      margin-top: 0.08rem;

      font-family: Rubik;
      font-size: 14px;
      font-weight: 300;
      line-height: 16px;
      letter-spacing: 0em;
    }
  }

  .item:hover {
    border: 1px solid #ff3263;
    background: rgba(255, 50, 99, 0.08);
    opacity: 0.8;

    .item-month {
      color: #ff3263;
    }
  }

  .item.checked {
    border: 1px solid #ff3263;
    background: rgba(255, 50, 99, 0.08);
    opacity: 1;

    .item-month {
      color: #ff3263;
    }
  }

  .item + .item {
    margin-left: 0.25rem;
  }

  .item-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.16rem;
  }
}
</style>
