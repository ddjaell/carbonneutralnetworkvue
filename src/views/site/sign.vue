<template>
  <v-progress-circular indeterminate v-if="loading"></v-progress-circular>
  <v-menu offset-y v-else-if="!$store.state.fireUser">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on"><v-icon>mdi-account</v-icon></v-btn>
    </template>
    <v-card>
      <v-card-title>로그인</v-card-title>
      <v-divider/>
      <v-card-actions>
        <v-btn color="red" dark @click="signInWithGoogle" block><v-icon left>mdi-google</v-icon> 구글로 로그인</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
  <v-menu offset-y v-else>
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-avatar size="32">
          <v-img :src="$store.state.fireUser.photoURL"></v-img>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>{{ $store.state.fireUser.displayName }}</v-card-title>
      <v-card-actions>
        <v-btn color="" dark @click="signOut" block>로그아웃</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>
<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    async signInWithGoogle () {
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      this.loading = true
      try {
        await this.$firebase.auth().signInWithPopup(provider)
      } finally {
        this.loading = false
        const userInfo = this.$store.state.fireUser
        const { uid, email, displayName } = userInfo
        const currentDT = new Date().toString()
        const savingInfo = {
          email,
          displayName,
          createdDT: currentDT
        }
        if (userInfo != null) {
          this.$firebase.database().ref('users').child(uid).set(savingInfo)
        }
      }
    },
    signOut () {
      this.$firebase.auth().signOut()
    }
  }
}
</script>
