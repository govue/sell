<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" width="64" height="64" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div class="support" v-if="seller.supports">
                    <span class="icon" :class="classMap[seller.supports[3].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                    <span class="count" @click="showDetail">
                        {{seller.supports.length}}个<i class="icon-keyboard_arrow_right"></i>
                    </span>
                </div>
            </div>
        </div>
        <div class="bulletin-wrapper" @click="showDetail">
            <span class="icon"></span>
            <span class="text">{{seller.bulletin}}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="background-filter-wrapper">
            <img :src="seller.avatar" width="100%" height="100%" alt="">
        </div>
        <div class="detail-wrapper clearfix" v-show="detailShow">
            <div class="detail-box">
                <div class="content">
                    {{seller.bulletin}}
                    {{seller.bulletin}}
                    {{seller.bulletin}}
                    {{seller.bulletin}}
                    {{seller.bulletin}}
                    {{seller.bulletin}}{{seller.bulletin}}{{seller.bulletin}}
                    {{seller.bulletin}}{{seller.bulletin}}{{seller.bulletin}}
                    {{seller.bulletin}}{{seller.bulletin}}{{seller.bulletin}}
                </div>
            </div>
            <div class="detail-close">
                <i class="icon-close" @click="closeDetail"></i>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            seller: {
                type: Object
            }
        },
        data() {
          return {
              detailShow: false
          };
        },
        methods: {
          showDetail() {
            this.detailShow = true;
          },
          closeDetail() {
              this.detailShow = false;
          }
        },
        created() {
            this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">

    @import "../../common/stylus/mixin.styl"

    .header
        position: relative
        overflow: hidden
        color: #fff
        background: rgba(7, 17, 27, 0.2)
        .content-wrapper
            padding: 24px 12px 18px 24px
            font-size: 0
            position: relative
            .avatar
                display: inline-block
                vertical-align: top
                img
                    border-radius: 2px
            .content
                display: inline-block
                font-size: 14px
                margin-left: 16px
                .title
                    margin: 2px 0 8px 0
                    .brand
                        display: inline-block
                        vertical-align: top
                        width: 30px
                        height: 18px
                        bg-image(brand)
                        background-size: 30px 18px
                        background-repeat: no-repeat
                    .name
                        margin-left: 6px
                        font-size: 16px
                        line-height: 18px
                        font-weight: bold

                .description
                    font-size: 12px
                    font-weight: 200
                    margin-bottom: 10px
                .support
                    margin-bottom: 2px
                    width: 100%;
                    .icon
                        display: inline-block
                        height: 12px
                        width: 12px
                        vertical-align: bottom
                        background-size 12px 12px
                        &.decrease
                            bg-image(decrease_1)
                        &.discount
                            bg-image(discount_1)
                        &.guarantee
                            bg-image(guarantee_1)
                        &.invoice
                            bg-image(invoice_1)
                        &.special
                            bg-image(special_1)
                    .text
                        display: inline-block
                        font-size: 10px
                    .count
                        width: 48px
                        height: 24px
                        line-height: 24px
                        display: inline-block
                        text-align: center
                        border-radius: 12px
                        background-color: rgba(0, 0, 0, 0.2)
                        position: absolute
                        right: 12px
                        bottom: 8px
        .bulletin-wrapper
            /*width: 100%*/
            position: relative
            height: 28px
            line-height: 28px
            padding: 0 22px 0 12px
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            background-color: rgba(7, 17, 27, 0.2)
            .icon
                display: inline-block
                width: 22px
                height: 12px
                vertical-align: middle
                background-size: 22px 12px
                bg-image('bulletin')
            .text
                font-size: 12px
            i
                display: inline-block
                position: absolute
                right: 12px
                bottom: 4px

        .background-filter-wrapper
            position: absolute
            width: 100%
            height: 100%
            left: 0
            top: 0
            z-index: -1
            filter: blur(10px)
        .detail-wrapper
            position: fixed
            top: 0
            left: 0
            z-index: 100
            width: 100%
            height: 100%
            overflow: auto
            background: rgba(7, 17, 27, 0.8)
            .detail-box
                min-height: 100%
                .content
                    padding: 20px 0 64px 0
            .detail-close
                text-align: center
                margin-top: -64px
                i
                    font-size: 32px
</style>
