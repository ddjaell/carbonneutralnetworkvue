import Vue from 'vue'
import Vuex from 'vuex'
import { isEmpty } from '@/assets/js/common/commonUtils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editable: false,
    fireUser: null,
    adminEmail: ['ljy2905.92@gmail.com'],
    adminYn: false
  },
  mutations: {
    setEdit (state, edit) {
      state.editable = edit
    },
    setFireUser (state, fu) {
      state.fireUser = fu
      state.adminYn = false
      if (!isEmpty(state.fireUser)) {
        if (state.adminEmail.includes(state.fireUser.email)) {
          state.fireUser.level = 1
          state.adminYn = true
          state.editable = true
        }
      }
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getAdminYn: function (state) {
      return state.adminYn
    }
  }
})
