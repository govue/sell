<template>
    <div class="star" :class="starSize">
        <span class="star-item" v-for="starClass in starClasses" :class="starClass" track-by="$index"></span>
    </div>
</template>

<script type="text/ecmascript-6">
    // const LENGTH = 5;
    const CLASS_ON = 'on';
    const CLASS_HALF = 'half';
    const CLASS_OFF = 'off';

    export default {
        name: 'star',
        props: {
            size: {
              type: Number
            },
            score: {
                type: Number
            }
        },
        computed: {
            starSize() {
                return 'star-' + this.size;
            },
            starClasses() {
                let starClasses = [].fill(CLASS_OFF);
                let score = Math.floor(this.score * 2) / 2;
                let hasDecimal = score % 1 !== 0;
                let classOnNum = Math.floor(score);
                for (let i = 0; i < classOnNum; i++) {
                    starClasses.push(CLASS_ON);
                }
                if (hasDecimal) starClasses.push(CLASS_HALF);
                return starClasses;
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">

    @import "../../common/stylus/mixin.styl"

    .star
        font-size: 0
        .star-item
            display: inline-block
            background-repeat: no-repeat
            &:last-child
                margin-right: 0
        &.star-48
            .star-item
                width: 20px
                height: 20px
                background-size: 20px 20px
                margin-right: 22px
                &.on
                    bg-image('star48_on')
                &.half
                    bg-image('star48_half')
                &.off
                    bg-image('star48_half')
        &.star-36
            .star-item
                width: 15px
                height: 15px
                background-size: 15px 15px
                margin-right: 6px
                &.on
                    bg-image('star36_on')
                &.half
                    bg-image('star36_half')
                &.off
                    bg-image('star36_half')
        &.star-24
            .star-item
                width: 10px
                height: 10px
                background-size: 10px 10px
                margin-right: 3px
                &.on
                    bg-image('star24_on')
                &.half
                    bg-image('star24_half')
                &.off
                    bg-image('star24_half')
</style>