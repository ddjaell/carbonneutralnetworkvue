<template>
  <v-app>
    <v-app-bar app color="#f0f3f7" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <site-title :title="site.title"></site-title>
      <v-spacer/>
      <site-sign></site-sign>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <site-menu :items="site.menu"></site-menu>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
    <site-footer :footer="site.footer"></site-footer>
  </v-app>
</template>

<script>
import SiteTitle from '@/views/site/title'
import SiteFooter from '@/views/site/footer'
import SiteMenu from '@/views/site/menu'
import SiteSign from '@/views/site/sign'

export default {
  components: { SiteTitle, SiteFooter, SiteMenu, SiteSign },
  name: 'App',
  data () {
    return {
      drawer: false,
      site: {
        menu: [],
        title: '',
        footer: {
          email: 'email. ljy2905.92@gmail.com',
          sn: '고유번호. 612-80-31517',
          head: '대표. 박희정'
        }
      }
    }
  },
  created () {
    this.subscribe()
  },
  methods: {
    subscribe () {
      this.$firebase.database().ref().child('site').on('value', (sn) => {
        const v = sn.val()
        if (!v) {
          this.$firebase.database().ref().child('site').set(this.site)
        }
        this.site = v
        console.log(v)
      }, (e) => {
        console.log(e.message)
      })
    },
    save () {
      throw new Error('Parameter is not a number!')
    },
    read () {
      this.$firebase.database().ref().child('abcd').on('value', (sn) => {
        console.log(sn)
        console.log(sn.val())
      })
    },
    async readOne () {
      const sn = await this.$firebase.database().ref().child('abcd').once('value')
      console.log(sn.val())
    }
  }
}
</script>
