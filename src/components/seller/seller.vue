<template>
    <div class="seller">
        <div class="base-content-wrapper">
            <div class="header-wrapper">
                <div class="left">
                    <h1 class="name">{{seller.name}}</h1>
                    <div class="seller-star"><div class="star-wrapper"><star :size="36" :score="seller.score"></star></div><span class="rating-count">({{seller.ratingCount}})</span><span class="sell-count">月售{{seller.sellCount}}单</span></div>
                </div>
                <div class="right">
                    <div class="favorite" @click="toggleFavorite($event)">
                        <i class="icon-favorite" :class="{'active':favorite}"></i>
                        <span>{{favoriteText}}</span>
                    </div>
                </div>
            </div>
            <ul>
                <li>
                    <h2>起送价</h2>
                    <span>20元</span>
                </li>
                <li>
                    <h2>商家配送</h2>
                    <span>20元</span>
                </li>
                <li>
                    <h2>平均送达时间</h2>
                    <span>39分钟</span>
                </li>
            </ul>
        </div>
        <split></split>
        <div class="bulletin-wrapper">
            <h1>公告与活动</h1>
            <p>{{seller.bulletin}}</p>
        </div>
        <supports :supports="seller.supports"></supports>
    </div>
</template>

<script type="text/ecmascript-6">
    import star from 'components/star/star';
    import split from 'components/split/split';
    import supports from 'components/supports/supports';
    import {saveToLocal, loadFromLocal} from 'common/js/store';

    export default {
        name: 'seller',
        props: {
            seller: {
                type: Object
            }
        },
        data() {
          return {
              favorite: (() => {
                  return loadFromLocal(this.seller.id, 'favorite', false);
              })()
          };
        },
        methods: {
            toggleFavorite(event) {
                // if (!event._constructed) {
                //     return;
                // }
                this.favorite = !this.favorite;
                saveToLocal(this.seller.id, 'favorite', this.favorite);
            }
        },
        computed: {
          favoriteText() {
              return this.favorite ? '已收藏' : '未收藏';
          }
        },
        components: {
            star,
            split,
            supports
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .seller
        .base-content-wrapper
            padding: 18px
            .header-wrapper
                display: flex
                padding-bottom: 18px
                margin-bottom: 18px
                border-bottom: 1px solid rgba(7, 17, 27, 0.1)
                .left
                    flex: 1
                    .name
                        font-weight: 700
                        padding: 8px
                    .seller-star
                        .star-wrapper
                            display: inline-block
                        .rating-count
                            margin-left: 8px
                        .sell-count
                            margin-left: 12px
                .right
                    flex: 0 0 120px
                    width: 120px
                    .favorite
                        text-align: center
                        i
                            display: block
                            &.active
                                color: rgb(240, 20, 20)
            ul
                display: flex
                li
                    flex: 1
                    text-align: center
                    h2
                        font-size: 10px
                        color: rgb(147, 153, 159)
                        line-height: 10px
                        margin-bottom: 4px
                    span
                        font-size: 24px
                        font-weight: 200
                        color: rgb(7, 17, 27)
                        line-height: 24px
        .bulletin-wrapper
            padding: 0 18px 18px 18px
            h1
                color: rgb(7, 17, 27)
                line-height: 14px
                font-weight: 700
                margin-bottom: 8px
            p
                font-size: 12px
                font-weight: 200
                color: rgb(240, 20, 20)
                line-height: 24px
                border-bottom: 1px solid rgba(7, 17, 27, 0.1)
                padding-bottom: 16px
                margin-bottom: 16px
</style>