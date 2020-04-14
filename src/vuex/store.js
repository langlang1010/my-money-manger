import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store= new Vuex.Store({
    state: {
        tags:''
    },
    mutations: {
       setTagNew(state,v){
           state.tags=v
       }
    
    }
    

})
export default store;