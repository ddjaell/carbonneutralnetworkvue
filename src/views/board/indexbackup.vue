<template>
  <v-card>
    <v-card-title>board test</v-card-title>
    <v-data-table
      :headers="headers"
      :items="items"
      v-if="!this.getAdminYn"
    >
      <template v-slot:item.createdDt="{ item }">
        {{item.createdDt.toLocaleString()}}
      </template>
    </v-data-table>
    <v-data-table
      :headers="headers"
      :items="items"
      v-if="this.getAdminYn"
    >
      <template v-slot:item.id="{ item }">
        <v-btn icon @click="openDialog(item)"><v-icon>mdi-pencil</v-icon></v-btn>
        <v-btn icon @click="remove(item)"><v-icon>mdi-delete</v-icon></v-btn>
      </template>
      <template v-slot:item.createdDt="{ item }">
        {{item.createdDt.toLocaleString()}}
      </template>
    </v-data-table>
    <v-card-actions>
      <v-btn v-if="this.getAdminYn" @click="openDialog(null)"><v-icon left>mdi-pencil</v-icon></v-btn>
    </v-card-actions>
    <v-dialog max-width="500" v-model="dialog">
      <v-card>
        <v-form>
          <v-card-text>
            <v-text-field v-model="form.title"></v-text-field>
            <v-text-field v-model="form.content"></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn @click="update" v-if="selectedItem">save</v-btn>
            <v-btn @click="add" v-else>save</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      headers: [
        { value: 'createdDt', text: '작성일' },
        { value: 'title', text: '제목' },
        { value: 'content', text: '내용' },
        { value: 'id', text: 'id' }
      ],
      items: [],
      form: {
        title: '',
        content: ''
      },
      dialog: false,
      selectedItem: null,
      unsubscribe: null,
      boardResult: []
    }
  },
  created () {
    this.subscribe()
  },
  destroyed () {
    if (this.unsubscribe) this.unsubscribe()
  },
  computed: mapGetters([
    'getAdminYn'
  ]),
  methods: {
    subscribe () {
      this.unsubscribe = this.$firebase.firestore().collection('boards').onSnapshot((sn) => {
        if (sn.empty) {
          this.items = []
          return
        }
        this.boardResult = sn.docs
        this.items = sn.docs.map(v => {
          const item = v.data()
          return {
            id: v.id,
            title: item.title,
            content: item.content,
            createdDt: item.createdDt.toDate()
          }
        })
      })
    },
    openDialog (item) {
      this.selectedItem = item
      this.dialog = true
      if (!item) {
        this.form.title = ''
        this.form.content = ''
      } else {
        this.form.title = item.title
        this.form.content = item.content
      }
    },
    async add () {
      const item = {}
      Object.assign(item, this.form)
      item.createdDt = new Date()
      await this.$firebase.firestore().collection('boards').add(item)
      this.dialog = false
    },
    async update () {
      await this.$firebase.firestore().collection('boards').doc(this.selectedItem.id).update(this.form)
      this.dialog = false
    },
    remove (item) {
      this.$firebase.firestore().collection('boards').doc(item.id).delete()
    }

  }
}
</script>
