import { createStore } from 'vuex'
import { router } from 'vue-router'

export const authStore = createStore({
  actions: {
    logout() {
      localStorage.removeItem('auth');
      router.push('/login')
    }
  }
})
