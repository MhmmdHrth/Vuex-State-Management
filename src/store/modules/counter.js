const state = {
    counter: 0,
};

const mutations = {
    increament(state, payload){
        console.log(payload)
        state.counter += payload
    },
  
      decreament(state, payload){
        state.counter -= payload
    },
};

const actions = {
    increament({commit}, payload){
        commit('increament', payload)
      },
  
      decreament({commit}, payload){
        commit('decreament', payload)
      },
  
      asyncIncreament({commit},payload){
        setTimeout(() => {
          commit('increament',payload.by)
        }, payload.duration);
      },
  
      asyncDecreament({commit},payload){
        setTimeout(() => {
          commit('decreament',payload.by)
        }, payload.duration);
      },
};

const getters = {
    doubleCounter(state){
        return state.counter * 2
      },
  
      tripleCounter(state){
        return state.counter * 4
      },
  
      stringCounter(state){
        return state.counter + ' Clicks'
      },
};

export default {
    state,
    mutations,
    actions,
    getters
}