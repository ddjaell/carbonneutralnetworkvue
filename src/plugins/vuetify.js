import Vue from 'vue'
import Vuetify, { VSnackbar, VBtn, VIcon } from 'vuetify/lib/framework'
import VuetifyToast from 'vuetify-toast-snackbar'

Vue.use(Vuetify, {
  components: {
    VSnackbar,
    VBtn,
    VIcon
  }
})
Vue.use(VuetifyToast, {
  x: 'right', // default
  y: 'bottom', // default
  color: 'info', // default
  icon: 'mdi-information',
  iconColor: '', // default
  classes: [
    'body-2'
  ],
  timeout: 3000, // default
  dismissable: true, // default
  multiLine: false, // default
  vertical: false, // default
  queueable: false, // default
  showClose: false, // default
  closeText: '', // default
  closeIcon: 'close', // default
  closeColor: '', // default
  slot: [], // default
  shorts: {
    custom: {
      color: 'purple'
    }
  },
  property: '$toast' // default
})
export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        lightblue: '#14c6FF',
        yellow: '#FFCF00',
        pink: '#FF1976',
        orange: '#FF8657',
        magenta: '#C33AFC',
        darkblue: '#1E2D56',
        gray: '#909090',
        neutralgray: '#9BA6C1',
        green: '#2ED47A',
        red: '#FF5c4E',
        darkblueshade: '#308DC2',
        lightgray: '#BDBDBD',
        lightpink: '#FFCFE3',
        white: '#FFFFFF'
      }
    }
  }
})
