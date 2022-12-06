import { defineStore } from 'pinia'
import axios from 'axios'

export const useMainStore = defineStore('main', {
  state: () => ({
    /* User */
    userName: null,
    userEmail: null,
    userAvatar: null,

    /* SnackBar */
    messages: [],

    /* Field focus with ctrl+k (to register only once) */
    isFieldFocusRegistered: false,

    /* Sample data (commonly used) */
    clients: [],
    history: [],
    products: [],
    updates: [],
    updatesStatus: false
  }),
  actions: {
    setUser (payload) {
      if (payload.name) {
        this.userName = payload.name
      }
      if (payload.email) {
        this.userEmail = payload.email
      }
      if (payload.avatar) {
        this.userAvatar = payload.avatar
      }
    },

    pushMessage (text) {
      this.messages.push({ ts: Date.now(), text })
    },

    shiftMessage () {
      this.messages.shift()
    },

    fetch (sampleDataKey) {
      axios
        .get(`data-sources/${sampleDataKey}.json`)
        .then((r) => {
          if (r.data) {
            if (r.data.data) {
              this[sampleDataKey] = r.data.data
            }
            if (r.data.status) {
              this[`${sampleDataKey}Status`] = r.data.status
            }
          }
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }
})
