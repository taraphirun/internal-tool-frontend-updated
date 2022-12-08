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
    updatesStatus: false,
    firebase:{
      uid: '',
      email: '',
      emailVerified: false,
      displayName: '',
      photoURL: '',
      phoneNumber: '',
      isAnonymous: false,
      tenantId: '',
      providerData: [
        {
          uid: '',
          displayName: '',
          email: '',
          phoneNumber: '',
          photoURL: '',
          providerId: '',
        },
      ],
      stsTokenManager: {
        refreshToken: '',
        accessToken: '',
        expirationTime: 0,
      },
      createdAt: '',
      lastLoginAt: '',
      apiKey: '',
      appName: '',
      },
    /**
     * {
     *     "id": 12,
     *     "firstName": "Phirun Tara",
     *     "lastName": null,
     *     "profileImage": null,
     *     "email": "phirun@relevantaudience.com",
     *     "state": true,
     *     "phoneNumber": null,
     *     "address": null,
     *     "lineOA": null,
     *     "calendar": null,
     *     "externalID": "XTAmUAn51OfzyzrqXAqkHl6q1gT2",
     *     "roleType": "client",
     *     "amId": 25,
     *     "companyId": 1,
     *     "createdAt": "2022-07-29T03:59:49.396Z",
     *     "updatedAt": "2022-09-02T08:29:03.656Z",
     *     "am": {
     *         "id": 25,
     *         "firstName": "Demo",
     *         "lastName": "AM",
     *         "profileImage": null,
     *         "email": "demo.am@example.com",
     *         "state": true,
     *         "phoneNumber": "09999999",
     *         "address": "",
     *         "lineOA": "https://line.me/R/ti/p/@linedevelopers",
     *         "calendar": "https://cal.relevantaudience.com/meeting/meeting",
     *         "externalID": "04Oqw9OJzdSb8BiBVTUHfhqvRyh2",
     *         "roleType": "am",
     *         "amId": 9,
     *         "companyId": 33,
     *         "createdAt": "2022-09-02T05:00:32.229Z",
     *         "updatedAt": "2022-09-02T05:09:47.943Z"
     *     }
     * }
     */
    currentUser: {
      id: 0,
      firstName: '',
      lastName: '',
      profileImage: '',
      email: '',
      state: true,
      phoneNumber: '',
      address: '',
      lineOA: '',
      calendar: '',
      externalID: '',
      roleType: '',
      amId: 0,
      companyId: 0,
      createdAt: '',
      updatedAt: '',
      am: {
        id: 0,
        firstName: '',
        lastName: '',
        profileImage: '',
        email: '',
        state: true,
        phoneNumber: '',
        address: '',
        lineOA: '',
        calendar: '',
        externalID: '',
        roleType: '',
        amId: 0,
        companyId: 0,
        createdAt: '',
        updatedAt: '',
      },
    },
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
    setByKey (key, value) {
      this[key] = value
    },
    setFirebaseToken (payload) {
      this.firebase = payload
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
