<template>
    <div class="page">
        <div class="box">
            <div class="logo" @click="toHome">
                <img src="~assets/images/Logo.svg" alt="">
            </div>
            <div class="newuser">
                < {{ form.email }} </div>
                    <div class="prompt">
                        Enter your password
                    </div>
                    <div class="password">
                        Password
                    </div>
                    <div class="input">
                        <el-input @keyup.native.enter="handleLogin" v-model="form.password" placeholder="" show-password>
						</el-input>
                    </div>
                    <!-- <div class="button">
       <span class="text">
         Next
       </span>
     </div> -->
                    <el-button class="button" @click="handleLogin">Next</el-button>
                    <router-link :to="`recover-password?email=${form.email}`" class="warn">
                        Forgot your password?</router-link>
                    </router-link>
            </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    created() {
        this.form.email = this.$route.query.email;
    },
    methods: {
        toHome() {
            this.$router.push({ path: '/' })
        },
        handleLogin() {
            this.$store.dispatch('Login',this.form).then(async ()=>{
                await this.$store.dispatch('GetInfo')
                let redirect=this.$store.getters.redirect||'/';
                this.$router.replace(redirect)
                this.$store.commit('SET_REDIRECT','/')
            }).catch((err)=>{
                console.log(err);
                this.$message.error(err)
            })
        },
    },
}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 100%;
}
::v-deep .el-input .el-input__clear {
	margin-right: .16rem;
    color: #1A1A1A;
    font-size: .16rem;
    cursor: pointer;
    transition: color .2s cubic-bezier(.645,.045,.355,1);
}
.page {
    min-height: 100vh;
    background: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
}

.box {
    width: 4.60rem;
    height: 5.42rem;
    margin: 0 auto;

    .logo {
        width: .76rem;

        img {
            width: 100%;
        }
    }

    .newuser {
		font-weight: 400;
		line-height: 100%;
		letter-spacing: -0.64px;
        margin-top: .24rem;
        font-size: .16rem;
        color: rgba(26, 26, 26, 0.60);
    }

    .prompt {
		color: #1A1A1A;
		font-weight: 400;
		letter-spacing: -1.28px;
		margin-top: .24rem;
		font-size: .32rem;
    }

    .password {
		letter-spacing: -0.56px;
        margin-top: .24rem;
        color: #1A1A1A;
        font-size: .14rem;
        font-weight: 500;
    }

    .input {
        margin-top: .08rem;

        ::v-deep .el-input__inner {
			color: rgba(26, 26, 26, 0.40);
			font-size: .16rem;
			font-weight: 400;
			width: 4.48rem;
            height: .48rem;
        }

        // .el-icon-eye {
        //   background: url('~assets/images/icon-eye.png') center center no-repeat;
        //   background-size: 16px;
        // }
    }


    .button {
        border-radius: 8px;
        height: .48rem;
        margin-bottom: .16rem;
        background: #FF3263;
        margin-top: .24rem;
        width: 4.48rem;
        color: #FEFEFE;
        // .text {
        //   color: #FEFEFE;
        //   font-size: .14rem;
        //   line-height: .48rem;
        // }
    }

    .warn {
        margin-top: .24rem;
        color: #FF3263;
        font-size: .14rem;
        text-decoration: underline;
    }

    //   .warn:hover{
    //     color: #FF3263;
    //   }
}

.mobile{
  .page{
    align-items: flex-start;
  }

  .box {
    width: 3.36rem;
    height: 5.42rem;

    .input{
      ::v-deep .el-input__inner{
        width: 100%;
      }
    }



    .logo {
      padding-top: .64rem;
      width: .76rem;
    }

    .prompt{
      font-size: .24rem;
    }

    .button {
      width: 3.36rem;
    }
  }
}

</style>
