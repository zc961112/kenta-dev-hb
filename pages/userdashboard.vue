<template>
  <div class="page">
    <!-- header start-->
    <kt-header></kt-header>
    <!-- header end-->
    <div class="nav-box">
      <div class="container-box">
        <div class="item-list">
          <div class="item" :class="pageIndex == 0 ? 'active' : ''" @click="handleType(0)">
            Account Settings
          </div>
          <div class="item" :class="pageIndex == 1 ? 'active' : ''" @click="handleType(1)">
            Recently Viewed
          </div>
          <div class="item" :class="pageIndex == 2 ? 'active' : ''" @click="handleType(2)">
            Messages
          </div>
          <div class="item" :class="pageIndex == 3 ? 'active' : ''" @click="handleType(3)">
            Saved
          </div>
          <div class="item" :class="pageIndex == 4 ? 'active' : ''" @click="handleType(4)">
            Sign Out
          </div>
        </div>
      </div>
    </div>

    <div class="member-box container-box" v-if="pageIndex==0">
      <div class="white-box">
        <div class="hd">Account Settings</div>
        <div class="name1">
          First Name
        </div>
        <div class="input">
          <el-input v-model="form.firstName" @keyup.native.enter="toNext" placeholder="John"></el-input>
        </div>
        <div class="name">
          Last Name
        </div>
        <div class="input">
          <el-input v-model="form.lastName" @keyup.native.enter="toNext" placeholder="Smith"></el-input>
        </div>
        <div class="footer">
          <el-button type="primary" @click="update">Update Information</el-button>
          <div class="delete" @click="accountDelete">Delete my account</div>
        </div>
      </div>
    </div>

    <div class="member-box container-box" v-if="pageIndex==1">
      <div class="white-box2">
        <div class="hd">Recently Viewed</div>
        <div class="box-item" v-for="(item,index) in recentView">
          <div class="item-pic">
            <img v-if="item.imagesList&&item.imagesList[0]" :src="item.imagesList[0].url" alt="">
            <!-- <i class="icon-mark"></i> -->
			<i class="icon-mark-saved" @click="collection(item)"></i>
          </div>
          <div class="item-right">
            <div class="title">{{ item.name }}</div>
            <div class="subtitle">{{ item.addressString }}</div>
            <div class="line"></div>
            <!-- <div class="point-1">3K Reviews</div>
            <div class="point-2">112K Reviews</div> -->
            <!-- <div class="item-footer">
              <svg class="icon-mark1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                   fill="none">
                <path
                  d="M12.6667 2.66659H11.3334V1.99992C11.3334 1.82311 11.2631 1.65354 11.1381 1.52851C11.0131 1.40349 10.8435 1.33325 10.6667 1.33325C10.4899 1.33325 10.3203 1.40349 10.1953 1.52851C10.0703 1.65354 10 1.82311 10 1.99992V2.66659H6.00004V1.99992C6.00004 1.82311 5.9298 1.65354 5.80478 1.52851C5.67975 1.40349 5.51018 1.33325 5.33337 1.33325C5.15656 1.33325 4.98699 1.40349 4.86197 1.52851C4.73695 1.65354 4.66671 1.82311 4.66671 1.99992V2.66659H3.33337C2.80294 2.66659 2.29423 2.8773 1.91916 3.25237C1.54409 3.62744 1.33337 4.13615 1.33337 4.66658V12.6666C1.33337 13.197 1.54409 13.7057 1.91916 14.0808C2.29423 14.4559 2.80294 14.6666 3.33337 14.6666H12.6667C13.1971 14.6666 13.7058 14.4559 14.0809 14.0808C14.456 13.7057 14.6667 13.197 14.6667 12.6666V4.66658C14.6667 4.13615 14.456 3.62744 14.0809 3.25237C13.7058 2.8773 13.1971 2.66659 12.6667 2.66659ZM13.3334 12.6666C13.3334 12.8434 13.2631 13.013 13.1381 13.138C13.0131 13.263 12.8435 13.3333 12.6667 13.3333H3.33337C3.15656 13.3333 2.98699 13.263 2.86197 13.138C2.73695 13.013 2.66671 12.8434 2.66671 12.6666V7.99992H13.3334V12.6666ZM13.3334 6.66658H2.66671V4.66658C2.66671 4.48977 2.73695 4.3202 2.86197 4.19518C2.98699 4.07016 3.15656 3.99992 3.33337 3.99992H4.66671V4.66658C4.66671 4.8434 4.73695 5.01297 4.86197 5.13799C4.98699 5.26301 5.15656 5.33325 5.33337 5.33325C5.51018 5.33325 5.67975 5.26301 5.80478 5.13799C5.9298 5.01297 6.00004 4.8434 6.00004 4.66658V3.99992H10V4.66658C10 4.8434 10.0703 5.01297 10.1953 5.13799C10.3203 5.26301 10.4899 5.33325 10.6667 5.33325C10.8435 5.33325 11.0131 5.26301 11.1381 5.13799C11.2631 5.01297 11.3334 4.8434 11.3334 4.66658V3.99992H12.6667C12.8435 3.99992 13.0131 4.07016 13.1381 4.19518C13.2631 4.3202 13.3334 4.48977 13.3334 4.66658V6.66658Z"
                  fill="#1A1A1A"/>
              </svg>
              20/11/2023 - 27/11/2023
              <svg class="icon-mark2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                   fill="none">
                <path
                  d="M1.33337 7.99992C1.33337 4.31802 4.31814 1.33325 8.00005 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00005 14.6666C4.31814 14.6666 1.33337 11.6818 1.33337 7.99992ZM8.00005 1.99992C4.68634 1.99992 2.00005 4.68622 2.00005 7.99992C2.00005 10.2208 3.20664 12.1598 5.00005 13.1973V9.82211C5.00005 8.61158 5.717 7.56852 6.74945 7.09438C6.15369 6.69224 5.76194 6.01088 5.76194 5.238C5.76194 4.00194 6.76398 2.99991 8.00006 2.99991C9.23614 2.99991 10.2381 4.00194 10.2381 5.238C10.2381 6.01086 9.84639 6.69224 9.25059 7.09438C10.2831 7.56852 11.0001 8.61158 11.0001 9.82211V13.1973C12.7935 12.1598 14.0001 10.2208 14.0001 7.99992C14.0001 4.68622 11.3138 1.99992 8.00005 1.99992ZM10.3334 13.5293V9.82213C10.3334 8.53345 9.2887 7.4888 8.00005 7.4888C6.71139 7.4888 5.66672 8.53347 5.66672 9.82213V13.5293C6.38398 13.8324 7.17245 13.9999 8.00005 13.9999C8.82764 13.9999 9.61611 13.8324 10.3334 13.5293ZM8.00005 3.6666C7.13219 3.6666 6.42859 4.37014 6.42859 5.23802C6.42859 6.10589 7.13219 6.80945 8.00005 6.80945C8.86791 6.80945 9.57145 6.10589 9.57145 5.23802C9.57145 4.37014 8.86792 3.6666 8.00005 3.6666Z"
                  fill="black"/>
              </svg>
              2 Guests
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="member-box container-box" v-if="pageIndex==2">
      <div class="hd">Messages</div>
    </div>
    <div class="member-box container-box" v-if="pageIndex==3">
      <div class="white-box2">
        <div class="hd">Saved</div>
        <div class="box-item" v-for="(item,index) in saveList">
          <div class="item-pic">
            <img v-if="item.imagesList&&item.imagesList[0]" :src="item.imagesList[0].url" alt="">
            <!-- <i class="icon-mark"></i> -->
			<i class="icon-mark-saved" @click="collection(item)"></i>
          </div>
          <div class="item-right">
            <div class="title">{{ item.name }}</div>
            <div class="subtitle">{{ item.addressString }}</div>
            <div class="line"></div>
            <!-- <div class="point-1">3K Reviews</div>
            <div class="point-2">112K Reviews</div> -->
            <!-- <div class="item-footer">
              <svg class="icon-mark1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                   fill="none">
                <path
                  d="M12.6667 2.66659H11.3334V1.99992C11.3334 1.82311 11.2631 1.65354 11.1381 1.52851C11.0131 1.40349 10.8435 1.33325 10.6667 1.33325C10.4899 1.33325 10.3203 1.40349 10.1953 1.52851C10.0703 1.65354 10 1.82311 10 1.99992V2.66659H6.00004V1.99992C6.00004 1.82311 5.9298 1.65354 5.80478 1.52851C5.67975 1.40349 5.51018 1.33325 5.33337 1.33325C5.15656 1.33325 4.98699 1.40349 4.86197 1.52851C4.73695 1.65354 4.66671 1.82311 4.66671 1.99992V2.66659H3.33337C2.80294 2.66659 2.29423 2.8773 1.91916 3.25237C1.54409 3.62744 1.33337 4.13615 1.33337 4.66658V12.6666C1.33337 13.197 1.54409 13.7057 1.91916 14.0808C2.29423 14.4559 2.80294 14.6666 3.33337 14.6666H12.6667C13.1971 14.6666 13.7058 14.4559 14.0809 14.0808C14.456 13.7057 14.6667 13.197 14.6667 12.6666V4.66658C14.6667 4.13615 14.456 3.62744 14.0809 3.25237C13.7058 2.8773 13.1971 2.66659 12.6667 2.66659ZM13.3334 12.6666C13.3334 12.8434 13.2631 13.013 13.1381 13.138C13.0131 13.263 12.8435 13.3333 12.6667 13.3333H3.33337C3.15656 13.3333 2.98699 13.263 2.86197 13.138C2.73695 13.013 2.66671 12.8434 2.66671 12.6666V7.99992H13.3334V12.6666ZM13.3334 6.66658H2.66671V4.66658C2.66671 4.48977 2.73695 4.3202 2.86197 4.19518C2.98699 4.07016 3.15656 3.99992 3.33337 3.99992H4.66671V4.66658C4.66671 4.8434 4.73695 5.01297 4.86197 5.13799C4.98699 5.26301 5.15656 5.33325 5.33337 5.33325C5.51018 5.33325 5.67975 5.26301 5.80478 5.13799C5.9298 5.01297 6.00004 4.8434 6.00004 4.66658V3.99992H10V4.66658C10 4.8434 10.0703 5.01297 10.1953 5.13799C10.3203 5.26301 10.4899 5.33325 10.6667 5.33325C10.8435 5.33325 11.0131 5.26301 11.1381 5.13799C11.2631 5.01297 11.3334 4.8434 11.3334 4.66658V3.99992H12.6667C12.8435 3.99992 13.0131 4.07016 13.1381 4.19518C13.2631 4.3202 13.3334 4.48977 13.3334 4.66658V6.66658Z"
                  fill="#1A1A1A"/>
              </svg>
              20/11/2023 - 27/11/2023
              <svg class="icon-mark2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                   fill="none">
                <path
                  d="M1.33337 7.99992C1.33337 4.31802 4.31814 1.33325 8.00005 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8.00005 14.6666C4.31814 14.6666 1.33337 11.6818 1.33337 7.99992ZM8.00005 1.99992C4.68634 1.99992 2.00005 4.68622 2.00005 7.99992C2.00005 10.2208 3.20664 12.1598 5.00005 13.1973V9.82211C5.00005 8.61158 5.717 7.56852 6.74945 7.09438C6.15369 6.69224 5.76194 6.01088 5.76194 5.238C5.76194 4.00194 6.76398 2.99991 8.00006 2.99991C9.23614 2.99991 10.2381 4.00194 10.2381 5.238C10.2381 6.01086 9.84639 6.69224 9.25059 7.09438C10.2831 7.56852 11.0001 8.61158 11.0001 9.82211V13.1973C12.7935 12.1598 14.0001 10.2208 14.0001 7.99992C14.0001 4.68622 11.3138 1.99992 8.00005 1.99992ZM10.3334 13.5293V9.82213C10.3334 8.53345 9.2887 7.4888 8.00005 7.4888C6.71139 7.4888 5.66672 8.53347 5.66672 9.82213V13.5293C6.38398 13.8324 7.17245 13.9999 8.00005 13.9999C8.82764 13.9999 9.61611 13.8324 10.3334 13.5293ZM8.00005 3.6666C7.13219 3.6666 6.42859 4.37014 6.42859 5.23802C6.42859 6.10589 7.13219 6.80945 8.00005 6.80945C8.86791 6.80945 9.57145 6.10589 9.57145 5.23802C9.57145 4.37014 8.86792 3.6666 8.00005 3.6666Z"
                  fill="black"/>
              </svg>
              2 Guests
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="member-box container-box" v-if="pageIndex==4">
      <div class="hd">Sign Out</div>
    </div>

    <kt-footer></kt-footer>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import {recentlyViewed, dashboardSaved, accountSetting, getName,deleteAccount} from '@/api/userdashboard';
import {saveCasino,cancelSaveCasino} from '@/api/index';

export default {
  name: '',
  data() {
    return {
      isLogin: true,
      pageIndex: 0,
      form: {
        firstName: '',
        lastName: '',
        memberId: 0,
      },
      recentView: [],
      saveList: [],
    }

  },
  watch: {
    '$route': {
      handler(val) {
        console.log("val", val)
      },
    }
  },
  mounted() {
    console.log("this.$store", this.$store.state.id)
    this.form.memberId = this.$store.state.id;
    this.init()
    this.getpath()
  },
  methods: {
    init() {
      getName({memberId: this.form.memberId}).then(res => {
        this.form.lastName = res.data.lastName
        this.form.firstName = res.data.firstName
        console.log("1111", this.form);
      })
      dashboardSaved({memberId: this.form.memberId}).then(res => {
        this.saveList = res.data;
        console.log("this.saveList", this.saveList)
      })
      recentlyViewed({memberId: this.form.memberId}).then(res => {
        this.recentView = res.data;
        console.log("this.recentView", this.recentView)
      })
    },
	collection(item){
		cancelSaveCasino({casinoId:item.id}).then(res=>{
		  console.log("cancelSaveCasinosuccess")
	  })
	  this.init();
	},
    getpath() {
      console.log('路由变化了')
      if (this.$route.query.pageIndex) {
        this.pageIndex = this.$route.query.pageIndex;
      }
    },
    toHome() {
      this.$router.push({path: '/'})
    },
    handleLogOut() {
      this.$store.dispatch("FedLogOut").then(() => {
        // location.reload();
		this.$router.push({path: '/'})
      });
    },
    handleType(index) {
      this.pageIndex = index;
      if (index == 2) {
        this.$router.push({path: '/message'})
      }
      if (index == 4) {
        this.handleLogOut()
      }
    },
    update() {
      console.log("this.form", this.form)
      accountSetting(this.form).then(res => {
        this.$message({
          message: 'accountSetting ssuccess',
          type: 'success'
        });
      })
    },
	accountDelete(){
		 this.$confirm('This operation will delete your account.Do you want to continue?', 'Notice', {
		           confirmButtonText: 'Yes',
		           cancelButtonText: 'No',
		         }).then(() => {
		           deleteAccount({memberId:this.form.memberId}).then(re=>{
		           	this.$message({
		           	  message: 'account delete ssuccess',
		           	  type: 'success'
		           	});
		           	this.$router.push({path: '/'})
		           })
		         }).catch(() => {
		         });

	},
    toNext() {

    },
    validateFun() {

    },
  }
}
</script>
<style lang="scss" scoped>
	::v-deep .el-button {
	height: .48rem;
    width: 2.16rem;
    border-radius: .08rem;
    font-weight: 400;
    padding: 0.12rem 0.2rem;
    font-size: 0.14rem;
}
.page {
  background: #F5F5F5;
}

.header {
  height: .64rem;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  padding-right: 1.12rem;
  background: #FEFEFE;
  color: rgba(26, 26, 26, 0.60);
  font-weight: 500;
  border-bottom: .01rem solid #DADADA;

  .logo {
    margin-left: .32rem;
    height: .32rem;

    img {
      height: 100%;
    }
  }

  .user-phone {
    width: .24rem;
    height: .24rem;
    display: none;
  }

  .btn-text {
    margin-left: .24rem;
    cursor: pointer;
    font-weight: 500;
  }

  .nav-bar {
    width: .88rem;
    height: .64rem;
    display: flex;
    right: 0;
    top: 0;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-left: solid .01rem #DADADA;

    .icon-bar {
      width: .32rem;
    }
  }

  .header-right {
    display: flex;
    align-items: center;

    .message {
      display: flex;
      align-items: center;
      color: rgba(26, 26, 26, 0.60);
      font-size: .08rem;
      margin-right: .24rem;

      img {
        margin-right: .08rem;
        width: .24rem;
        height: .24rem;
      }
    }

    .el-dropdown-link {
      display: flex;
      align-items: center;

      .user-name {
        width: .4rem;
        height: .4rem;
        border-radius: 50%;
        background: rgba(255, 50, 99, 0.16);
        color: #FF3263;
        font-weight: 500;
        font-size: .24rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}

.container-box {
  max-width: 7.12rem;
  margin: 0 auto 0 auto;
}

.hd {
  color: #1A1A1A;
  font-family: Rubik;
  font-size: .32rem;
  font-style: normal;
  font-weight: 400;
  line-height: 124%; /* 39.68px */
  letter-spacing: -1.28px;
}

.white-box {
  padding: .24rem;
  width: 7.12rem;
  height: 3.32rem;
  flex-shrink: 0;
  border-radius: .16rem;
  background: #FEFEFE;


  color: #1A1A1A;
  font-family: Rubik;
  font-size: .14rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
  letter-spacing: -0.56px;

  .name1 {
    margin-top: .24rem;
  }

  .name {
    margin-top: .16rem;
  }

  .input {
    margin-top: .08rem;
  }

  .footer {
    margin-top: .16rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .delete {
	  cursor: pointer;
      color: rgba(26, 26, 26, 0.40);
      font-family: Rubik;
      font-size: .14rem;
      font-style: normal;
      font-weight: 400;
      line-height: .16rem; /* 114.286% */
      letter-spacing: -0.56px;
    }
  }
}

.white-box2 {
  padding: .24rem;
  width: 7.12rem;
  //height: 9.21rem;
  flex-shrink: 0;
  border-radius: .16rem;
  background: #FEFEFE;

  .box-item {
    width: 6.64rem;
    display: flex;
    border-bottom: solid .01rem #DADADA;
    padding-bottom: .24rem;
    margin-top: .24rem;

    .item-pic {
      position: relative;
      width: 3.24rem;
      height: 2rem;
      border-radius: .04rem;
      border: 1px solid rgba(26, 26, 26, 0.16);

      .icon-mark {
        display: block;
        width: .32rem;
        height: .32rem;
        position: absolute;
        right: .12rem;
        top: .08rem;
        background: url('~assets/images/icon-mark.png');
        background-size: 100%;
      }
	  .icon-mark-saved {
	    display: block;
	    width: .32rem;
	    height: .32rem;
	    position: absolute;
	    right: .16rem;
	    top: .16rem;
	    background: url('~assets/images/icon-mark-saved.png');
	    background-size: 100%;
	  }
    }

    .item-right {
      padding: .21rem .0rem .21rem .15rem;
      // width: 3.07rem;
      display: flex;
      flex-direction: column;

      .title {
        color: #1A1A1A;
        font-family: Rubik;
        font-size: .2rem;
        font-size: .18rem;
        font-weight: 400;
        line-height: .24rem; /* 133.333% */
        letter-spacing: -0.72px;
      }

      .subtitle {
        margin-top: .04rem;
        margin-bottom: .08rem;
        color: rgba(26, 26, 26, 0.60);
        font-size: .14rem;
        font-weight: 400;
        line-height: .16rem; /* 133.333% */
      }

      .line {
        width: .4rem;
        height: .01rem;
        background: rgba(26, 26, 26, 0.16);
      }

      .point-1 {
        margin-top: .08rem;
        color: #1A1A1A;
        font-family: Rubik;
        font-style: normal;
        font-weight: 300;
        display: inline-block;
        background: url('~assets/images/views-1.png');
        background-repeat: no-repeat;
        background-position: left center;
        height: .2rem;
        line-height: .16rem;
        background-size: auto .2rem;
        padding-left: .8rem;
        font-size: .12rem;
      }

      .point-2 {
        margin-top: .08rem;
        color: #1A1A1A;
        font-family: Rubik;
        font-style: normal;
        font-weight: 300;
        display: inline-block;
        background: url('~assets/images/views-2.png');
        background-repeat: no-repeat;
        background-position: left center;
        height: .16rem;
        line-height: .16rem;
        background-size: auto .16rem;
        padding-left: .8rem;
        font-size: .12rem;
      }

      .icon-mark1 {
        margin-right: .04rem;
      }

      .icon-mark2 {
        margin-left: .16rem;
        margin-right: .04rem;
      }

      .item-footer {
        margin-top: auto;
        display: flex;
        color: rgba(26, 26, 26, 0.60);
        font-family: Rubik;
        font-size: .12rem;
        font-style: normal;
        font-weight: 400;
        line-height: .16rem; /* 133.333% */
      }
    }

    .item-views {
      margin-top: .16rem;

      .item-1 {
        display: inline-block;
        margin: .05rem 0;
        margin-right: .24rem;
        background: url('~assets/images/views-1.png');
        background-repeat: no-repeat;
        background-position: left center;
        height: .2rem;
        line-height: .2rem;
        background-size: auto .2rem;
        padding-left: .8rem;
        font-size: .12rem;
      }

      .item-2 {
        display: inline-block;
        background: url('~assets/images/views-2.png');
        background-repeat: no-repeat;
        background-size: auto .16rem;
        padding-left: .75rem;
        height: .16rem;
        line-height: .16rem;
        background-position: left center;
        font-size: .12rem;
      }
    }
  }
}

.nav-box {
  height: .48rem;
  background: #FEFEFE;
  border-bottom: solid .01rem #DADADA;

  .item-list {
    display: flex;

    .item {
      padding: 0 .16rem;
      font-size: .16rem;
      line-height: .48rem;
      cursor: pointer;
    }

    .item.active, .item:hover {
      color: #FF3263;
      border-bottom: .01rem solid #F5F5F5;
      background: #F5F5F5;
    }
  }
}

.btn-default {
  padding: .12rem .2rem;
  font-size: .14rem;
  color: #FF3263;
  border: .01rem solid #FF3263;
}

.btn-default:hover {
  background: #fafafa !important;
  color: #FF3263;
  border: .01rem solid #FF3263;
}

.member-box {
  padding: .4rem 0;
  margin: 0 auto;

  .item-list {
    .item-hd {
      margin-top: .4rem;
      margin-bottom: .24rem;
      font-size: .24rem;
    }

    .item {
      background: #FEFEFE;
      padding: .32rem .24rem;
      border-radius: .12rem;
      margin-top: .16rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .item-status {
        margin-left: .12rem;
        font-size: .12rem;

        .lab {
          color: rgba(26, 26, 26, 0.60);
          display: none;

        }
      }

      .item-state {
        padding: .04rem .08rem;
        border-radius: .04rem;
        background: rgba(26, 26, 26, 0.08);
        color: rgba(26, 26, 26, 0.60);

        label {
          display: none;
        }
      }

      .item-state.state-2 {
        color: #2C9056;
        background: rgba(44, 144, 86, 0.16);
      }

      .item-tag {
        padding: .04rem .08rem;
        border-radius: .04rem;
        color: #3451FF;
        font-size: .12rem;
        margin-right: .08rem;
        background: rgba(52, 81, 255, 0.16);

      }

      .item-flex {
        flex: 1;

        .item-title {
          font-size: .2rem;
        }

        .item-desc {
          margin-top: .08rem;
          font-size: .14rem;
          color: rgba(26, 26, 26, 0.60);
          display: flex;
          align-items: center;

          .split {
            position: relative;
            padding-left: .2rem;
          }

          .split::before {
            position: absolute;
            left: .08rem;
            top: 50%;
            margin-top: -.02rem;
            display: block;
            content: '';
            width: .04rem;
            height: .04rem;
            background: #1A1A1A;
            color: #1A1A1A;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 11.44rem) {
  .container-box {
    padding-left: .15rem;
    padding-right: .15rem;
  }
}

.mobile {
  .page {
    width: 3.75rem;
    overflow: hidden;
  }

  .header {
    height: .48rem;

    .logo {
      height: .24rem;
    }

    .header-right {
      display: none;
    }

    .nav-bar {
      border-left: none;
      width: .56rem;
      height: .48rem;

      .icon-bar {
        width: .2rem;
      }
    }
  }

  .header.login {
    position: relative;
    padding-left: 1rem;

    .header-right {
      display: flex;
      height: 100%;
      flex-direction: row-reverse;
      position: absolute;
      left: 0;
      top: 0;

      .el-dropdown-link {
        padding: .08rem;
        border-right: solid 1px #DADADA;

        .user-name {
          width: .32rem;
          height: .32rem;
          font-size: .16rem;
        }

        .el-icon-arrow-down {
          font-size: .16rem;
        }
      }

      .message {
        margin-left: .16rem;

        img {
          width: .16rem;
          height: .16rem;
        }

        span {
          display: none;
        }
      }
    }

    .user-phone {
      position: absolute;
      right: .64rem;
      display: block;
    }

    .logo {
      position: absolute;
      left: 50%;
      margin-left: 0;
      transform: translateX(-50%);
    }

    .nav-bar {
      border-left: solid 1px #DADADA;
    }
  }

  .nav-box {
    display: none;
  }

  .member-box {
    padding: 0;

    .hd {
      font-size: .24rem;
      text-align: center;
    }

    .item-list {
      .item-hd {
        margin-top: .4rem;
        margin-bottom: .16rem;
        font-size: .18rem;
      }

      .item {
        position: relative;
        padding: .16rem;
        padding-bottom: .8rem;
        border-radius: .08rem;

        .item-title {
          font-size: .16rem;
        }

        .item-desc {
          font-size: .14rem;
        }

        .item-btns {
          position: absolute;
          right: .16rem;
          bottom: .16rem;
        }

        .el-button {
          padding: .12rem .2rem;
          font-size: .14rem;
          border-radius: .08rem;
        }

        .item-status {
          position: absolute;
          left: .16rem;
          bottom: .16rem;
          display: flex;
          align-items: center;
          margin-left: 0;

          .lab {
            display: inline;
          }
        }
      }
    }
  }

  .box-hd {
    font-size: .24rem;
  }

  .box-desc {
    font-size: .16rem;
  }


  .white-box {
    padding: .32rem .24rem;
    width: 100%;
    min-height: 8.12rem;
    border-radius: 0;

    //>div{
    //  margin-left: .2rem;
    //  margin-right: .2rem;
    //}

    .footer {
      .delete{
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: .24rem;
      }
    }
  }

  .white-box2{
    width: 100%;
    height: auto;
    border-radius: 0;

    .box-item{
      flex-direction: column;
      padding-bottom: 0;
    }

  }

}
</style>
