<template>
  <v-footer app color="#87ceeb" dark absolute :footer="footer">
    <v-spacer></v-spacer>
    <div>
      <h1>탄소중립네트워크</h1><br>
      &copy; {{ new Date().getFullYear() + ' ' + this.footer }}<br>
      email. ljy2905.92@gmail.com<br>
      고유번호. 612-80-31517<br>
      대표. 박희정<br>
    </div>
  </v-footer>
</template>
<script>
export default {
  props: ['footer']
}
</script>
