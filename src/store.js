import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.store({
  state: {
    test: 'Test Hello!!!'
  }
})