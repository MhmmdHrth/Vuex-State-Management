<template>
    <div>
        <button @click="increament(10)" class="btn btn-primary">Increament</button> |
        <button @click="decreament(5)" class="btn btn-primary">Decreament</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'increament',
                'decreament'
            ])
        }   
    }
</script>