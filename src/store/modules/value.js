const state = {
    value:0,
}

const mutations = {
    updateValue(state,payload){
        state.value = payload
      }
}

const actions = {
    updateValue({commit},payload){
        commit('updateValue',payload)
      }
}

const getters = {
    getValue(state){
        return state.value;
      }
}

export default {
    state,
    mutations,
    actions,
    getters
}