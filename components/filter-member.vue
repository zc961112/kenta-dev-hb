<template>
  <el-popover
    placement="bottom-start"
    trigger="click"
    :visible-arrow="false"
    popper-class="select-guest-wrap"
    v-model="show"
    @hide="hidePopper"
  >
    <div class="select-guest-con">
      <div class="item-list">
        <div class="item" v-for="(item, index) in guestList" :key="index">
          <div class="item-con">
            <div class="item-title">{{ item.label }}</div>
            <div class="item-desc">{{ item.tips }}</div>
          </div>
          <el-input-number v-model="item.value" :min="0" :max="limitMap[item.label]" @change="validPersonCount(item)" />
        </div>
      </div>
    </div>
    <div class="filter-member-point" slot="reference">
      <el-input placeholder="Add guests" v-model="guests" @click.stop.native="handleVisible4"></el-input>
    </div>
  </el-popover>
</template>

<script>
import { deepClone } from '@/utils/index'
export default {
  name: 'FilterMember',
  props: {
    list: Array
  },
  data () {
    return {
      show: false,
      limitMap: {
        Adults: 6,
        Children: 8
      },
      guestList: [
        { label: 'Adults', tips: 'Age 13+', value: 1 },
        { label: 'Children', tips: 'Age 1 to 12', value: 0 },
        { label: 'Infants', tips: 'Under 1', value: 0, },
        { label: 'Pets', tips: 'An extra free may apply', value: 0 }
      ]
    }
  },
  watch: {
    list: {
      handler (val) {
        if (val && val.length) {
          this.guestList = deepClone(val)
        }
      },
      immediate: true
    }
  },
  computed: {
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
        return `${gustText}${infantText}${petText}`
      },
      set () {}
    }
  },
  methods: {
    validPersonCount () {
      const aValue = this.guestList.find(g => g.label === 'Adults').value
      const cValue = this.guestList.find(g => g.label === 'Children').value
      this.limitMap.Adults = Math.min(6, 8 - cValue)
      this.limitMap.Children = 8 - aValue
    },
    hidePopper () {
      this.$emit('change', this.guestList)
    },
    handleVisible4 () {
      if (window.isMobile) {
        this.$router.push({ path: '/mobileIndexGuest' })
        return
      }
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-member-point {
  :deep(.el-input__inner) {
    background-color: #F5F5F5;
  }
}
</style>
