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
        <div class="detail-wrapper clearfix" v-show="detailShow" transition="fade">
            <div class="detail-box">
                <div class="content">
                    <h1 class="name">{{seller.name}}</h1>
                    <div class="star-wrapper">
                        <star :size="48" :score="seller.score"></star>
                    </div>
                    <div class="sub-title-wrapper">
                        <sub-title :name=`优惠信息`></sub-title>
                    </div>
                    <div class="supports">
                        <div class="support" v-for="support in seller.supports">
                            <span class="icon" :class="classMap[$index]"></span>
                            <span class="name">{{support.description}}</span>
                        </div>
                    </div>
                    <div class="sub-title-wrapper">
                        <sub-title :name=`商家公告`></sub-title>
                    </div>
                    <div class="bulletin">
                        <span class="content">{{seller.bulletin}}</span>
                    </div>
                </div>
            </div>
            <div class="detail-close">
                <i class="icon-close" @click="closeDetail"></i>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import star from 'components/star/star';
    import subTitle from 'components/subTitle/subTitle';

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
        components: {
          star, subTitle
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
                    width: 100%
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
            /*background: rgba(7, 17, 27, 0.8)*/
            transition: all 0.5s
            &.fade-transition
                /*opacity: 1*/
                background: rgba(7, 17, 27, 0.8)
            &.fade-enter
                /*opacity: 0*/
                background: rgba(7, 17, 27, 0)
                /*display: block*/
            &.fade-leave
                /*opacity: 0*/
                background: rgba(7, 17, 27, 0)
                display: none
            .detail-box
                min-height: 100%
                .content
                    padding: 20px 0 64px 0
                    text-align: center
                    h1.name
                        margin-top: 64px
                        font-size: 16px
                        font-weight: 700
                        line-height: 15px
                    .star-wrapper
                        margin-top: 16px
                    .sub-title-wrapper
                        display: flex
                        margin: 28px auto 0 auto
                        width: 80%
                    .supports
                        font-size: 12px
                        text-align: left
                        margin: 24px auto 0 auto
                        width: 80%
                        .support
                            line-height: 24px
                            .icon
                                display: inline-block
                                width: 16px
                                height: 16px
                                background-size: 16px 16px
                                vertical-align: text-top
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
                            .name
                                margin-left: 6px
                    .bulletin
                        width: 80%
                        margin: 24px auto 0 auto
                        text-align: left
                        .content
                            font-size: 12px
                            font-weight: 200
                            line-height: 24px
            .detail-close
                text-align: center
                margin-top: -64px
                i
                    font-size: 32px
</style>
