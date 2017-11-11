<template>
  <transition name="fade">
    <div class="ml-back-drop" @click.prevent="handleClick" v-show="show">
      <transition name="scale">
        <div class="ml-image-view" :style="calculationStyle()" v-show="show">
          <div class="ml-image-view-warp" v-show="loading&&!error">
            <div class="image-view-warp">
              <a href="javascript:void(0);" class="ml-image-view-close" @click.prevent="doClose">&times</a>
              <img :src="model" alt="图片预览">
            </div>
          </div>
          <div class="ml-image-view-error" v-show="error">图片地址出错！！！</div>
          <div class="ml-image-view-loading" v-show="!loading&&!error">正在加载...</div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script type="text/babel">
  export default {
    name: 'image-view',
    props: {
      /**
       * 显示/隐藏
       */
      value: {
        type: Boolean,
        default: false,
      },
      /**
       * 图片地址
       */
      model: {
        type: String,
        default: '',
      },
      /**
       * 关闭事件后执行事件
       */
      onClose: {
        type: Function,
        default: () => {
        },
      },
    },
    watch: {
      /**
       * 监控model值的变化
       * @param {Boolean} val - 路径值一旦改变会重新加载
       */
      model(val) {
        if (val) this.imageLoad()
      },
      /**
       * 监听值变化
       * @param {String} val 值
       */
      value(val) {
        this.setCurrentValue(val)
      },
    },
    data() {
      return {
        show: this.value,
        loading: false,
        image: null,
        error: false,
        width: 200,
        height: 100,
      }
    },
    created() {
      this.imageLoad()
    },
    methods: {
      /**
       * 计算样式
       * @return {Object} style - 返回计算的样式
       */
      calculationStyle() {
        const clientWidth = document.documentElement.clientWidth * 0.9
        const clientHeight = document.documentElement.clientHeight * 0.9
        const wt = this.width / clientWidth
        const ht = this.height / clientHeight
        let width = this.width
        let height = this.height
        if (wt > ht && wt > 1) {
          width = clientWidth
          height = this.height / wt
        }
        if (ht >= wt && ht > 1) {
          height = clientHeight
          width = this.width / ht
        }
        if (ht >= 1 && wt >= 1) {
          if (wt > ht) {
            width = clientWidth
            height = this.height / wt
          }
          if (ht >= wt) {
            height = clientHeight
            width = this.width / ht
          }
        }
        const style = {
          width: `${width}px`,
          height: `${height}px`,
          marginLeft: `-${width / 2}px`,
          marginTop: `-${height / 2}px`,
        }
        return style
      },
      /**
       * 加载图片
       */
      imageLoad() {
        this.image = new Image()
        this.error = false
        this.loading = false
        this.image.onload = () => {
          this.loading = true
          this.width = this.image.naturalWidth
          this.height = this.image.naturalHeight
        }

        this.image.onerror = () => {
          this.error = true
        }
        this.image.src = this.model
        this.loading = true
      },
      /**
       * 关闭图片事件
       * @param {Object} e event对象
       */
      handleClick(e) {
        if (this.$el === e.target) {
          this.setCurrentValue(false)
        }
      },
      /**
       * close图片事件
       */
      doClose() {
        this.setCurrentValue(false)
        this.onClose()
      },
      /**
       *  双向绑定改变值
       * @param {String}  value 值
       */
      setCurrentValue(value) {
        if (value === this.show) return
        this.$emit('input', value)
        this.show = value
        this.$emit('change', value)
      },
    },

  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .ml-back-drop {
    overflow auto
    position: fixed
    z-index: 1001
    left: 0
    top: 0
    right: 0
    bottom: 0
    background-color: rgba(0, 0, 0, .3)
  }

  .ml-image-view {
    position: absolute;
    top: 50%;
    left: 50%;
    .ml-image-view-warp {
      position: relative;
      height: 100%;
      width: 100%;
    }
    .ml-image-view-error, .ml-image-view-loading {
      height: 100%;
      width: 100%;
      background-color: rgba(255, 255, 255, .9)
      border-radius: 12px;
      text-align: center;
      line-height: 100px;
      vertical-align: middle;
    }
    .image-view-warp {
      height: 100%;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover
      }
    }
    .ml-image-view-close {
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 24px;
      position: absolute;
      right: -15px;
      top: -15px;
      border: 1px solid #333;
      background-color: #333;
      color: #fff;
      font-size: 26px;
      border-radius: 15px;
      -webkit-transition: all .3s;
      transition: all .3s;
    }
    .ml-image-view-close:hover {
      border: 1px solid #333;
      background-color: #fff;
      color: #333;
    }
  }

  .scale-enter-active, .scale-leave-active {
    transition: all .4s
  }

  .scale-enter, .scale-leave-active {
    transform: scale(.1)
  }

</style>