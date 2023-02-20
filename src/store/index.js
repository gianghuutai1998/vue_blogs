import axios from 'axios';
import { createStore } from 'vuex'

const url = 'https://5f55a98f39221c00167fb11a.mockapi.io/blogs';

export default createStore({
  state: {
    blogs: [],
    blog: {},
    isLogin: false
  },

  mutations: {
    blogDetail(state, blog) {
      state.blog = blog
    },

    search(state, blogs) {
      state.blogs = blogs
    },

    isLogin(state, login) {
      state.isLogin = login;
    }
  },

  actions: {
    blogDetail({ commit }, id) {
      axios.get(url + '/' + id)
        .then(response => {
          commit('blogDetail', response.data);
        }
      )
    },

    search({ commit }, value) {
      let searchUrl = `${url}?sortBy=createdAt&order=${value.order}&page=${value.currentPage}&limit=10&search=${value.search}`
      console.log(searchUrl);
      axios.get(searchUrl)
        .then(response => {
          commit('search', response.data);
        }
      )
    },

    isLogin({commit}, login) {
      commit('isLogin', login);
    }
  }
})
