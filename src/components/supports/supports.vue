<template>
    <div class="supports">
        <div class="support" v-for="support in supports">
            <span class="icon" :class="classMap[$index]"></span>
            <span class="name">{{support.description}}</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'supports',
        props: {
          supports: {
              type: Array
          }
        },
        created() {
            this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin.styl"

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
</style>