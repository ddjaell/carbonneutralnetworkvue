<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Menu
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list>
      <v-list-group
        v-for="(item, i) in items"
        :key="i"
        v-model="item.active"
        :prepend-icon="item.icon"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.subItems"
          :key="subItem.title"
          :to="subItem.to"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </div>
</template>
<script>
export default {
  props: ['footer'],
  data () {
    return {
      items: [
        {
          title: '홈',
          icon: 'mdi-home',
          subItems: [
            {
              title: '소개',
              to: '/'
            },
            {
              title: '공지사항',
              to: '/board'
            },
            {
              title: 'storage',
              to: '/storage'
            },
            {
              title: 'editor',
              to: '/editor'
            }
          ]
        },
        {
          title: 'about',
          active: true,
          icon: 'mdi-account',
          subItems: [
            {
              title: 'xxx',
              to: '/xxx'
            }
          ]
        }
      ]
    }
  }
}
</script>
