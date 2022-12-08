import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useMainStore } from '@/stores/main.js'
import { useLayoutStore } from '@/stores/layout.js'
import { useStyleStore } from '@/stores/style.js'
import { darkModeKey, styleKey } from '@/config.js'
import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import dayjs from 'dayjs'
import { VueFire, VueFireAuth } from 'vuefire'

import './css/main.css'

/* Init Pinia */
const pinia = createPinia()

/* Create Vue app */
console.log("🌎 Running in " + import.meta.env.VITE_ENV + " mode")
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};
const firebaseApp = initializeApp(firebaseConfig);
getAuth();
// Firebase


/* Init Pinia stores */
const mainStore = useMainStore(pinia)
const layoutStore = useLayoutStore(pinia)
const styleStore = useStyleStore(pinia)

/* Responsive layout control */
layoutStore.responsiveLayoutControl()
window.onresize = () => layoutStore.responsiveLayoutControl()

/* Fetch sample data */
// mainStore.fetch('clients')
// mainStore.fetch('history')
// mainStore.fetch('products')
// mainStore.fetch('updates')

/* App style */
styleStore.setStyle(localStorage[styleKey] ?? 'white')

/* Dark mode */
if ((!localStorage[darkModeKey] && window.matchMedia('(prefers-color-scheme: dark)').matches) || localStorage[darkModeKey] === '1') {
  styleStore.setDarkMode(true)
}

/* Default title tag */
const defaultDocumentTitle = 'RA Internal Tool'

/* Collapse mobile aside menu on route change */
router.beforeEach(() => {
  layoutStore.asideMobileToggle(false)
  layoutStore.asideCompactToggle(true)
  layoutStore.secondaryMenu = null
})

router.afterEach(to => {
  /* Set document title from route meta */
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }

  layoutStore.responsiveLayoutControl()
})

createApp(App).use(pinia).use(router).use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
}).mixin({
  methods: {
    formatDate(date) {
      return dayjs(date).format("DD/MM/YYYY");
    },
  },
}).mount('#app')
