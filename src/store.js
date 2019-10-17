import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    test: 'TEST Hello!!',
    posts: []
  },
  actions: {
    loadPosts({commit}) {
      console.log('load posts') // eslint-disable-line
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(data => {
          console.log(data) // eslint-disable-line
          let posts = data.data
          commit('SET_POSTS', posts)
        })
        .catch(error => {
          console.log(error)  // eslint-disable-line
        })
    }
  },
  mutations: {
    SET_POSTS (state, posts) {
      state.posts = posts
    }
  }
})