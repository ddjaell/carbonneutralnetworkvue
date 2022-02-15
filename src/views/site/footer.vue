<template>
  <v-footer color="primary" :footer="footer">
    <v-spacer></v-spacer>
    <div>
      Carbon Neutral Network<br>
      {{ this.footer.head }}<br>
    </div>
    <div>
      {{ this.footer.email }}<br>
      {{ this.footer.sn }}<br>
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
