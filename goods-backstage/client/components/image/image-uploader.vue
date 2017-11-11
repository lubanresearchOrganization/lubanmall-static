<template>
  <div class="ml-image-uploader">
    <div class="ml-upload-warp">
      <div class="ml-upload">
        <div class="ml-upload-click" @click="selectFile" title="点击上传" v-show="!currentValue">
          <input type="file" ref="mlFile" @change="upload"
                 :disabled="disabled" style="display: none;" :accept="accept">
          <el-button><i class="el-icon-plus"></i><span>{{title}}</span></el-button>
        </div>
        <img v-if="currentValue" class="ml-img-model" :src="currentValue+'!/both/90x90'"
             @click="previewShow=true">
        <div class="ml-uploading" v-show="uploading">正在上传...</div>
        <div class="ml-upload-prop-a" v-show="!uploading&&currentValue">
          <a v-if="isEdit" href="javascript:void(0)" @click="selectFile">修改</a>
          <a v-if="isDelete" href="javascript:void(0)" @click="clearValue">删除</a>
        </div>
      </div>
      <div class="ml-upload-prop" v-if="prompt">
        <span>{{prompt}}</span>
      </div>
    </div>
    <ml-image-view v-if="isPreview&&currentValue" v-model="previewShow" :model="currentValue"></ml-image-view>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'image-uploader',
    props: {
      /**
       * 图片地址
       */
      value: String,
      /**
       * 限定能够通过文件上传进行提交的文件类型
       */
      accept: {
        type: String,
        default: 'image/png,image/jpeg',
      },
      /**
       * 图片最大限制，单位M
       */
      maxSize: [Number, String],
      /**
       * 加号下标题
       */
      title: {
        type: String,
        default: '上传图片',
      },
      /**
       * 限制文案提示
       */
      prompt: String,
      /**
       * 上传请求地址url
       */
      uploadUrl: {
        type: String,
        default: '/upload',
      },
      /**
       * 自定义文件后缀正则验证规则
       */
      typePattern: {
        type: String,
        default: '^png$|jpg$|jpeg$|gif$',
      },
      /**
       * 开启/关闭图片预览
       */
      isPreview: {
        type: Boolean,
        default: true,
      },
      /**
       * 开启/关闭修改按钮
       */
      isEdit: {
        type: Boolean,
        default: true,
      },
      /**
       * 开启/关闭删除按钮
       */
      isDelete: {
        type: Boolean,
        default: true,
      },
      /**
       * 点击上传图片时触发事件
       */
      onSelect: {
        type: Function,
        default: () => {
        },
      },
      /**
       * 上传图片成功调方法
       */
      onSuccess: {
        type: Function,
        default: () => {
        },
      },
      /**
       * 上传图片错误方法回调
       */
      onError: {
        type: Function,
      },
    },
    data() {
      return {
        currentValue: this.value,
        uploading: false,
        disabled: false,
        filename: '',
        previewShow: false,
      }
    },
    watch: {
      /**
       * 监听值变化
       * @param {String} val 值
       */
      value(val) {
        this.setCurrentValue(val)
      },
    },
    methods: {
      /**
       * 修改图片事件
       */
      selectFile() {
        if (!this.disabled) {
          this.onSelect()
          this.$refs.mlFile.click()
        }
      },
      /**
       * 验证文件后缀
       * @param {String} name - 文件名
       * @return {Boolean} result - 返回 true or false
       */
      checkSuffix(name) {
        const imgReg = new RegExp(this.typePattern)
        const ext = name.substr(name.lastIndexOf('.') + 1, name.length - 1)
        return imgReg.test(ext.toLowerCase())
      },
      /**
       * 文件上传
       */
      upload() {
        const file = this.$refs.mlFile.files[0]
        if (!file) return
        this.filename = file.name

        if (!this.checkSuffix(this.filename)) {
          try {
            const ss = this.typePattern.substring(1, this.typePattern.length - 1).split('$')
            let str = ''
            ss.forEach((val, idx) => {
              str += val.replace('|', '') + (idx !== ss.length - 1 ? '、' : '')
            })
            if (this.onError) this.onError(1)
            if (!this.onError) this.$message.error(`请上传${str}图片`)
          } catch (e) {
            this.log(e)
          }
          this.filename = ''
          this.$refs.mlFile.value = null
          return
        }
        if (this.maxSize && file.size > (this.maxSize * 1024 * 1024)) {
          if (this.onError) this.onError(2)
          if (!this.onError) this.$message.error(`大小超过${this.maxSize}MB，请重新上传`)
          this.filename = ''
          this.$refs.mlFile.value = null
          return
        }
        this.uploading = true
        this.disabled = true
        const form = new FormData()
        form.append('upfile', file)
        this.http.post(this.uploadUrl, form)
          .then(resp => {
            if (resp.code === '0') {
              this.setCurrentValue(resp.result.url)
              this.onSuccess(resp.result.url)
            } else {
              if (this.onError) this.onError(3)
              if (!this.onError) this.$message.error(resp.description || '网络异常')
            }
            this.uploading = false
            this.disabled = false
          })
          .catch(resp => {
            this.uploading = false
            this.disabled = false
            if (this.onError) this.onError(3)
            if (!this.onError) this.$message.error(resp.description || '网络异常')
          })
      },
      /**
       * 清除图片
       */
      clearValue() {
        this.$refs.mlFile.value = null
        this.setCurrentValue('')
      },
      /**
       *  双向绑定改变值
       * @param {String}  value 值
       */
      setCurrentValue(value) {
        if (value === this.currentValue) return
        this.$emit('input', value)
        this.currentValue = value
        this.$emit('change', value)
      },
    },
  }
</script>
<style lang="stylus" ref="stylesheet/stylus" scoped>
  .ml-image-uploader {
    min-height: 30px;
    position: relative;
    .ml-upload-warp {
      line-height: 1;
      font-size: 12px;
    }
    .ml-upload {
      box-sizing: border-box;
      min-height: 30px;
      .ml-upload-title {
        cursor: pointer;
        height: 30px;
        width: 90px;
        color: #333;
        background-color: #F2F4F7;
        border: 1px solid #bfcbd9;
        box-sizing: border-box;
        border-radius: 2px;
        line-height: 28px;
        text-align: center;
        font-size: 12px;
        i {
          font-size: 12px;
          color: #333;
          margin-right: 4px;
        }
        span {
          font-size: 12px;
          display: inline-block;
        }
      }
      .ml-img-model {
        width: 90px;
        height: 90px;
        display: inline-block;
        cursor: pointer;
        vertical-align: middle;
      }
      .ml-upload-click {
        box-sizing: border-box;
        vertical-align: middle;
        display: inline-block;
      }
    }
    .ml-image-upload-error {
      color: #ff4949;
      font-size: 12px;
      display: block;
      position: absolute;
      left: 0;
      line-height: 1;
      bottom: -28px;
    }
    .ml-upload-prop {
      font-size: 12px;
      .uploading {
        padding-bottom: 10px;
      }
      color: #ccc;
      padding-top: 10px;
      word-wrap: break-word
    }
    .ml-upload-prop-a {
      font-size: 0;
      display: inline-block;
      vertical-align: bottom;
      a {
        display: inline-block;
        font-size: 12px;
        margin-left: 10px;
      }
    }
    .ml-uploading {
      display: inline-block;
      vertical-align: bottom;
      margin-left: 10px;
      font-size: 12px;
      color: #ccc;
    }
  }
</style>
