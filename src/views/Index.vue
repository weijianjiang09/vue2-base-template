<template>
    <div class="index">
        <h1>{{ $Tools.secondToDuration(index) }}</h1>
        <h1>{{ $lodash.max([4, 2, 8]) }}</h1>
    </div>
</template>
<script>
export default {
    name: 'Index',
    components: {},
    props: {},
    data() {
        return {
            index: 0,
            timer: null
        }
    },
    computed: {

    },
    watch: {
    },
    created() {
        this.timer = setInterval(() => {
            this.index++
        }, 1000)
    },
    beforeDestroy() {
        clearInterval(this.timer)
        this.timer = null
    },
    mounted() {
    },
    methods: {

    }
}
</script>

<style scoped lang="scss">
.index{
    text-align: center;
}
</style>
