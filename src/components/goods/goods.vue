<template>
    <div class="goods">
        <div class="menu-wrapper">
            <ul class="menu-items">
                <li class="menu-item border-1px" v-for="good in goods">
                    <span class="icon" v-show="good.type != -1" :class="classMap[good.type]"></span>
                    <span class="name">{{good.name}}</span>
                </li>
            </ul>
        </div>
        <div class="goods-wrapper"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    const ERR_OK = 0;

    export default {
        props: {
            seller: {
                type: Object
            }
        },
        data() {
            return {
                goods: []
            };
        },
        created() {
            this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
            this.$http.get('/api/goods').then((response) => {
                response = response.body;
                if (response.errno === ERR_OK) {
                    this.goods = response.data;
                }
            });
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">

    @import "../../common/stylus/base.styl" //查询设备像素比
    @import "../../common/stylus/mixin.styl"

    .goods
        display: flex
        position: absolute
        top: 176px
        bottom: 46px
        width: 100%
        overflow: hidden
        .menu-wrapper
            flex: 0 0 80px
            width: 80px
            background: #f3f5f7
            padding-left: 24px
            ul.menu-items
                width: 60px
                li.menu-item
                    line-height: 32px
                    border-1px(bottom, rgba(7, 17, 27, 0.1))
                    .icon
                        display: inline-block
                        height: 12px
                        width: 12px
                        background-size: 12px 12px
                        &.decrease
                            bg-image(decrease_3)
                        &.discount
                            bg-image(discount_3)
                        &.guarantee
                            bg-image(guarantee_3)
                        &.invoice
                            bg-image(invoice_3)
                        &.special
                            bg-image(special_3)
                    .name
                        height: 14px
                        font-size: 12px
                        color: #384047
        .goods-wrapper
            flex: 1
</style>