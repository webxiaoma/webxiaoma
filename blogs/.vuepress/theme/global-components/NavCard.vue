<!--  -->
<template>
  <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4" v-if="!isHide">
    <div class="cardWrapper">
      <a target="_blank" class="aFlag" @click="jump(jumpUrl)">
        <div class="card" :title="des">
          <div class="cardTop">
            <div class="cardLogo">
              <div :class="['logoFont', className]" v-if="!logoUrl">
                {{ logoWord }}
              </div>
              <el-image
                v-if="logoUrl"
                style="height: 100%"
                :src="logoUrl"
                fit="cover"
              ></el-image>
            </div>
            <div class="cardTitle">{{ title }}</div>
          </div>
          <div class="cardDescription">{{ des }}</div>
        </div>
      </a>
    </div>
  </el-col>
</template>

<script>
import { mapState } from "vuex";

const { base } = require("../../config");
import { urlJump } from "@theme/util/electron";

export default {
  name: "NavCard",
  components: {},

  computed: {
    ...mapState(["isLogin"]),
  },
  props: {
    title: {
      type: String,
      default: "未知",
    },
    logo: {
      type: String,
      default: "",
    },
    des: {
      type: String,
      default: "暂无描述",
    },
    jumpUrl: {
      require: true,
      type: String,
    },
    login: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      logoUrl: "",
      baseImgUrl: `${base}img/website/`,
      className: "bgColor1",
      logoWord: "",
      isHide: false,
    };
  },

  created() {
    const reg = /^(http|https):/;

    if (this.logo) {
      if (reg.test(this.logo)) {
        this.logoUrl = this.logo;
      } else {
        this.logoUrl = `${this.baseImgUrl}${this.logo}`;
      }
    } else {
      var index = Math.ceil(Math.random() * 5);
      this.className = `bgColor${index}`;
      this.logoWord = this.title[0];
    }

    if (this.login && !this.isLogin) {
      this.isHide = true;
    }
  },
  methods: {
    jump(url) {
      const reg = /^(http|https):\/\/webxiaoma/;
      if (this.$root.$ele) {
        if (!reg.test(url)) {
          urlJump(url);
        }
      } else {
        try {
          window.open(url).location;
        } catch (err) {
          console.log("slef------:", err);
        }
      }
    },
  },
};
</script>

<style scoped lang="stylus">
.cardWrapper
  width 100%
  margin 10px 0
  .aFlag
    display block
    width 100%
    height 100%
    &:hover
      text-decoration none
  .card
    cursor pointer
    width 100%
    height 106px
    padding 6px
    border-radius 6px
    box-shadow 0 2px 10px 0 rgba(0,0,0,.1)
    border 1px solid #eee
    transition all .2s linear
    &:hover
      box-shadow 0 2px 10px 0 rgba(0,0,0,.3)
    .cardTop
      display flex
      justify-content space-between
      align-items center
      height 44px
      padding 0 8px
      .logoFont
        width 40px
        height 100%
        border-radius 4px
        margin-right 4px
        color #fff
        display flex
        justify-content center
        align-items center
        font-size 20px
        font-weight bold
      .bgColor1
        background #0d87ec
      .bgColor2
        background #19bc9c
      .bgColor3
        background #38579a
      .bgColor4
        background #d31c1f
      .bgColor5
        background #9b59b6
      .cardLogo
        height 100%
        .img
          height 44px
          width auto
      .cardTitle
        color #3eaf7c
        font-size 20px
        font-weight bolder
        overflow hidden
    .cardDescription
      margin 5px
      display -webkit-box
      -webkit-box-orient vertical
      -webkit-line-clamp 2
      overflow hidden
      color #999
      text-align justify
      font-size 14px
      line-height 22px


@media (max-width: $MQMobile)
  .cardWrapper
    .card
      .cardTop
        padding 0 2px
        .cardLogo
          .img
            height 42px
        .cardTitle
          font-size 16px
</style>
