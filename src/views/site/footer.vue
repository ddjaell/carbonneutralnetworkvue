<template>
  <v-footer app color="#87ceeb" dark absolute :footer="footer">
    <v-spacer></v-spacer>
    <div>
      <h1>탄소중립네트워크</h1><br>
      {{ this.footer.email }}<br>
      {{ this.footer.sn }}<br>
      {{ this.footer.head }}<br>
      &copy; {{ new Date().getFullYear() }}<br>
    </div>
  </v-footer>
</template>
<script>
export default {
  props: ['footer'],
  data () {
    return {
    }
  }
}
</script>
