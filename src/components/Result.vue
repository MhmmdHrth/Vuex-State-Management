<template>
    <div>
        <p>Result: {{doubleCounter}}</p>
        <p>Clicks: {{stringCounter}}</p>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {

        computed: {
            ...mapGetters([
                "doubleCounter",
                "stringCounter"
            ]),
        }
    }
</script>

<style>

</style>