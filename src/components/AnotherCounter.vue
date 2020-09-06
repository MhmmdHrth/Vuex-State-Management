<template>
    <div>
        <button @click="asyncIncreament({by:'100', duration:'100'})" class="btn btn-danger">Increament</button> |
        <button @click="asyncDecreament({by:'50', duration:'100'})" class="btn btn-danger">Decreament</button>
    </div>
</template>

<script>
    import { mapActions } from "vuex";

    export default {
        methods: {
            ...mapActions([
                'asyncIncreament',
                'asyncDecreament'
            ])
        },
    }
</script>

<style lang="scss" scoped
</style>