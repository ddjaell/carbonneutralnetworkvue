<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          탄소중립 네트워크 홈페이지에 오신 것을 환영합니다.
        </h1>

        <p class="subheading font-weight-regular">
          탄소중립네트워크 설명
          <br>들어갈
          <br>장소
          <br>문구를
          <br>생각하세요
          <br>이제는~
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MainPage',

  data: () => ({

  })
}
</script>
