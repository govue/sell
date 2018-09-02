<template>
    <div class="content">
        <div class="name">{{food.name}}</div>
        <div class="description">{{food.description}}</div>
        <div class="extra">
            <span>月售{{food.sellCount}}</span>
            <span>好评率{{food.rating}}%</span>
        </div>
        <div class="price">
            <span class="new-price">¥{{food.price}}</span>
            <span class="old-price" v-if="food.oldPrice">¥{{food.oldPrice}}</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'foodbasecontent',
        props: {
            food: {
                type: Object
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .content
        flex: 1
        .name
            margin-top: 2px
            font-size: 14px
        .description
            margin-top: 8px
            font-size: 10px
            color: rgb(147, 153, 159)
        .extra
            margin-top: 8px
            font-size: 8px
            color: rgb(147, 153, 159)
            :nth-child(2)
                margin-left: 5px
        .price
            margin-top: 8px
            .new-price
                font-size: 14px
                color: red
                font-weight: 700
            .old-price
                font-size: 10px
                color: rgb(147, 153, 159)
                text-decoration: line-through
</style>