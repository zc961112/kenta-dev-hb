<template>
  <div
    class="c-casino-box"
    :class="{ 'active': isActive, 'mobile': isMobile }"
    @click="$emit('click')"
    @mouseenter="$emit('enter')"
    @mouseleave="$emit('leave')"
  >
    <div class="ccb-left">
      <img :src="casino.imagesList[0]?.url" class="ccb-img">
      <svg class="ccb-img-eye" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M36.6665 20C34.9999 15 27.4999 8.33331 19.9999 8.33331C12.4999 8.33331 4.99992 15 3.33325 20" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M3.33325 19.9999C4.99992 24.9999 12.4999 31.6666 19.9999 31.6666C27.4999 31.6666 34.9999 24.9999 36.6666 19.9999" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M24.577 19.912C24.577 22.4687 22.5312 24.5831 19.9999 24.5831C17.4686 24.5831 15.4084 22.4687 15.4084 19.912C15.4084 17.3553 17.4686 15.4164 19.9999 15.4164C22.5312 15.4164 24.577 17.3553 24.577 19.912Z" stroke="#FEFEFE" stroke-width="1.5"/>
      </svg>
    </div>
    <div class="ccb-right">
      <div class="ccb-star">
        <el-rate :value="casino.star" disabled />
        <span class="ccb-star-label">· {{ casino.distance || 0 }} mile from city center</span>
      </div>
      <div class="ccb-title">{{ casino.name }}</div>
      <div v-if="!isMobile" class="ccb-text">{{ parent.city }}, {{ parent.country }}</div>
      <div v-if="isMobile" class="ccb-coast">
        <span class="ccbc-label">From</span>
        <span class="ccbc-num">€{{ casino.$price || 0 }}</span>
        <span class="ccbc-label">+ Taxes and fees</span>
      </div>
      <div v-else class="ccb-coast">
        <span class="ccbc-old">€{{ casino.$oldPrice }} USD</span>
        <span class="ccbc-num">€{{ casino.$price }}</span>
        <span class="ccbc-label">+ Taxes and fees</span>
        <span class="ccbc-save">SAVE €{{ casino.$tax || 0 }}</span>
      </div>
      <div v-if="!isMobile" class="ccb-detail">{{ casino.roomView }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CasinoBox',
  props: {
    parent: Object,
    casino: Object,
    isActive: Boolean
  },
  data () {
    return {
      isMobile: window.isMobile
    }
  }
}
</script>

<style lang="scss" scoped>
.c-casino-box {
  display: flex;
  border-radius: 8px;
  border: 1px solid #DADADA;
  background: #FEFEFE;
  cursor: pointer;
  &.active,
  &:hover {
    border: 1px solid #FF3263;
    background: linear-gradient(0deg, rgba(255, 50, 99, 0.04) 0%, rgba(255, 50, 99, 0.04) 100%), #FEFEFE;
    .ccb-title {
      color: #FF3263;
    }
    .ccb-img-eye {
      display: block;
    }
  }
  &.mobile {
    padding: 0.16rem 0.2rem;
    border-radius: 0;
    border-width: 0 0 0.01rem;
    .ccb-left {
      flex: none;
      width: 0.88rem;
      height: 0.72rem;
      img {
        border-radius: 0.04rem;
      }
    }
    .ccb-title {
      font-size: 0.14rem;
    }
    .ccb-right {
      padding: 0;
      margin-left: 0.12rem;
    }
  }
  :deep(.el-rate__icon) {
    margin-right: 0;
    font-size: 0.14rem;
  }
  .ccb-left {
    width: 160px;
    position: relative;
  }
  .ccb-img {
    border-top-left-radius: 0.08rem;
    border-bottom-left-radius: 0.08rem;
  }
  .ccb-img-eye {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .ccb-right {
    flex: 1;
    min-width: 0;
    padding: 0.12rem 0.08rem 0.08rem 0.16rem;
  }
  .ccb-title {
    margin-top: 0.04rem;
    color: #1A1A1A;
    font-size: 16px;
    font-weight: 500;
  }
  .ccb-detail {
    position: relative;
    height: 0.16rem;
    margin-top: 0.04rem;
    color: rgba(26, 26, 26, 0.60);
    font-size: 20px;
    font-weight: 400;
    transform: scale(0.5) translate(-50%, 0);
  }

  .ccb-star {
    display: flex;
    align-items: center;
  }
  .ccb-star-label {
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.12rem;
  }
  .ccb-text {
    margin-top: 0.16rem;
    color: rgba(26, 26, 26, 0.40);
    font-size: 0.12rem;
  }
  .ccb-coast {
    margin-top: 0.08rem;
    display: flex;
    align-items: center;
  }
  .ccbc-old {
    color: rgba(26, 26, 26, 0.60);
    font-size: 0.12rem;
    text-decoration: line-through;
  }
  .ccbc-num {
    margin: 0 0.08rem;
    color: #1A1A1A;
    font-size: 0.16rem;
  }
  .ccbc-label {
    color: #1A1A1A;
    font-size: 0.14rem;
    font-weight: 300;
  }
  .ccbc-save {
    margin-left: 0.08rem;
    padding: 0.02rem 0.04rem;
    line-height: 1;
    border-radius: 0.04rem;
    background: #00BC93;
    color: #FEFEFE;
    font-size: 0.12rem;
  }
}
</style>
