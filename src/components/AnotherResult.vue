<template>
    <div>
        <p>Another Result: {{getCounter}}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            getCounter() {
                return this.$store.getters.tripleCounter;
            }
        },
    }
</script>