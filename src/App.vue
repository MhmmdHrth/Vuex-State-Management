<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <anotherResult></anotherResult>
                <hr>
                <app-counter></app-counter>
                <anotherCounter></anotherCounter>
                <hr>
                <input type="text" v-model="value"> 
                <p>Value: {{value}}</p>
                
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import anotherCounter from './components/AnotherCounter'
    import Result from './components/Result.vue';
    import anotherResult from './components/AnotherResult'

    export default {

        computed: {
          value: {
            get(){
              return this.$store.getters.getValue;
            },
            set(value){
                this.$store.dispatch('updateValue',value)
            }
          }
        },
      
        components: {
            appCounter: Counter,
            appResult: Result,
            anotherResult,
            anotherCounter
        }
    }
</script>