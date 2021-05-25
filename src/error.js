import Vue from 'vue'

Vue.config.errorHandler = e => {
  alert(e.message)
}
