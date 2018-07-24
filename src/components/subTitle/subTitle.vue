<template>
    <div class="sub-title">
        <div class="line"></div>
        <div class="name">{{name}}</div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            name: {
                type: String
            }
        }
    };

</script>

<style lang="stylus" rel="stylesheet/stylus">

    .sub-title
        width: 100%
        .line
            flex: 1
            position: relative
            top: 7px
            border-bottom: 1px solid rgba(255, 255, 255, 0.2)
        .name
            display: inline-block
            padding: 0 12px
            font-weight: 700
            font-size: 14px
</style>