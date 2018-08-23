<template>
    <div class="cartcontrol">
        <div class="decrease-wrapper" v-if="food.count>0" @click="decreaseCart($event)" transition="move">
            <div class="decrease icon-remove_circle_outline"></div>
        </div>
        <div class="count" v-if="food.count>0">{{food.count}}</div>
        <div class="add icon-add_circle" @click="addCart($event)"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import Vue from 'vue';

    export default {
        props: {
            food: {
                type: Object
            }
        },
        methods: {
            addCart(event) {
                if (!event._constructed) {
                    return;
                }
                if (!this.food.count) {
                    Vue.set(this.food, 'count', 1);
                } else {
                    this.food.count++;
                }
                this.$dispatch('cart.add', event.target);
            },
            decreaseCart(event) {
                if (!event._constructed) {
                    return;
                }
                if (this.food.count >= 1) {
                    this.food.count--;
                }
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .cartcontrol
        display: flex
        align-items: center
        justify-content: center
        font-size: 20px
        .decrease-wrapper
            display: inline-block
            &.move-transition
                transition: all 0.4s linear
                opacity: 1
                transform: translate3d(0, 0, 0)
                .decrease
                    display: inline-block
                    color: #0a81e8
                    padding: 6px
                    transition: all 0.4s linear
                    transform: rotate(0)
            &.move-enter, &.move-leave
                opacity: 0
                transform: translate3d(24px, 0, 0)
                .decrease
                    transform: rotate(180deg)
        .count
            font-size: 16px
            display: inline-block
        .add
            display: inline-block
            color: #0a81e8
            padding: 6px
</style>