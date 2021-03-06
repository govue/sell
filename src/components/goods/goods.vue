<template>
    <div class="goods">
        <div class="menu-wrapper" v-el:menu-wrapper>
            <ul class="menu-items">
                <li class="menu-item border-1px" v-for="good in goods" :class="{'current':currentIndex===$index}" @click="selectMenu($index, $event)">
                    <span class="icon" v-show="good.type != -1" :class="classMap[good.type]"></span>
                    <span class="name">{{good.name}}</span>
                </li>
            </ul>
        </div>
        <div class="goods-wrapper" v-el:goods-wrapper>
            <ul class="goods-box">
                <li class="good-item" v-for="good in goods">
                    <h2 class="name">{{good.name}}</h2>
                    <ul class="foods">
                        <li class="food-item" v-for="food in good.foods" @click="showFoodDetail(food,$event)">
                            <div class="icon">
                                <img :src="food.icon" width="56" height="56" alt="">
                            </div>
                            <foodbasecontent :food="food"></foodbasecontent>
                            <div class="cartcontrol-wrapper">
                                <cart-control :food="food"></cart-control>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <food :food="selectFood" v-ref:food></food>
        <shopping-cart :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice" :select-foods="selectFoods" v-ref:shoppingcart></shopping-cart>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll';
    import shoppingCart from 'components/shoppingcart/shoppingcart';
    import cartControl from 'components/cartcontrol/cartcontrol';
    import food from 'components/food/food';
    import foodbasecontent from 'components/foodbasecontent/foodbasecontent';

    const ERR_OK = 0;

    export default {
        props: {
            seller: {
                type: Object
            }
        },
        data() {
            return {
                goods: [],
                goodHeightArr: [],
                scrollY: 0,
                selectFood: {}
            };
        },
        created() {
            this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special'];
            this.$http.get('/api/goods').then((response) => {
                response = response.body;
                if (response.errno === ERR_OK) {
                    this.goods = response.data;
                    this.$nextTick(() => {
                        this._initScroll(); // 初始化better-scroll
                        this._calculationGoodsHeight();
                    });
                }
            });
        },
        methods: {
            // 初始始化better-scroll
            _initScroll() {
                this.menuScroll = new BScroll(this.$els.menuWrapper, {
                    click: true
                });
                this.goodsScroll = new BScroll(this.$els.goodsWrapper, {
                    probeType: 3,
                    click: true
                });
                this.goodsScroll.on('scroll', (pos) => {
                    this.scrollY = Math.abs(Math.round(pos.y));
                });
            },
            // 计算goods的总高度
            _calculationGoodsHeight() {
                let tempHeight = 0;
                this.goodHeightArr.push(tempHeight);
                let goodArr = this.$els.goodsWrapper.getElementsByClassName('good-item');
                for (let i = 0; i < goodArr.length; i++) {
                   tempHeight += goodArr[i].offsetHeight + 18;
                   this.goodHeightArr.push(tempHeight);
                }
            },
            // 点击左侧菜单
            selectMenu(index, event) {
                // 屏蔽掉浏览器的click事件，只保留better-scrool的点击事件
                if (!event._constructed) {
                    return;
                }
                let el = this.$els.goodsWrapper.getElementsByClassName('good-item')[index];
                this.goodsScroll.scrollToElement(el, 300);
            },
            _drop(target) {
                this.$refs.shoppingcart.drop(target);
            },
            // 显示food详情
            showFoodDetail(food, event) {
                // 屏蔽掉浏览器的click事件，只保留better-scrool的点击事件
                if (!event._constructed) {
                    return;
                }
                this.selectFood = food; // 将选定的food赋值给this.selectFood，以便传递给food组件
                this.$refs.food.show();
            }
        },
        computed: {
            currentIndex() {
                for (let i = 0; i < this.goodHeightArr.length - 1; i++) {
                    if (this.scrollY > this.goodHeightArr[i] && this.scrollY <= this.goodHeightArr[i + 1]) {
                        return i;
                    }
                }
                return 0;
            },
            selectFoods() {
                let selectFoods = [];
                this.goods.forEach((good) => {
                    good.foods.forEach((food) => {
                        if (food.count) {
                            selectFoods.push(food);
                        }
                    });
                });
                return selectFoods;
            }
        },
        components: {
            shoppingCart,
            cartControl,
            food,
            foodbasecontent
        },
        events: {
            'cart.add'(target) {
                this._drop(target);
            }
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
            flex: 0 0 68px
            width: 68px
            background: #f3f5f7
            padding-left: 16px
            ul.menu-items
                width: 60px
                li.menu-item
                    line-height: 32px
                    border-1px(bottom, rgba(7, 17, 27, 0.1))
                    &.current
                        .name
                            font-weight: 700
                            color: #0a81e8
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
            padding-right: 10px
            .goods-box
                .good-item
                    margin-top: 18px
                    padding-bottom: 18px
                    border-1px(bottom, rgba(7, 17, 27, 0.2))
                    h2.name
                        font-size: 12px
                        color: rgb(147, 153, 159)
                        line-height: 26px
                        border-left: 2px solid #d9dde1
                        padding-left: 14px
                    .foods
                        .food-item
                            display: flex
                            margin-top: 18px
                            margin-left: 18px
                            .icon
                                flex: 0 0 66px
                                width: 66px
</style>