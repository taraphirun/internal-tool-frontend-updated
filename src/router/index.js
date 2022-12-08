import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '@/views/DashboardView.vue'
import {getCurrentUser} from "vuefire";
import {useMainStore} from "@/stores/main.js";
import axios from "@/http.js";
const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Dashboard'
    },
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    meta: {
      title: 'Onboarding'
    },
    path: '/onboarding',
    name: 'onboarding',
    component: () => import('@/views/OnboardingView.vue')
  },
  {
    meta: {
      title: 'Tables & Lists'
    },
    path: '/tables-and-lists',
    name: 'tables-and-lists',
    component: () => import('@/views/TablesListsView.vue')
  },
  {
    meta: {
      title: "Google",
    },
    path: "/onboarding/google",
    name: "Google",
    component: () =>import('@/views/IframeView.vue'),
  },
  {
    meta: {
      title: "Facebook",
    },
    path: "/onboarding/facebook",
    name: "Facebook",
    component: () =>
    import('@/views/IframeView.vue'),
  },
  {
    meta: {
      title: "Meeting",
    },
    path: "/meetings",
    name: "Meeting",
    component: () =>
    import('@/views/MeetingView.vue'),
  },
  {
    meta: {
      title: 'Forms'
    },
    path: '/forms',
    name: 'forms',
    component: () => import('@/views/FormsView.vue')
  },
  {
    meta: {
      title: 'UI Components'
    },
    path: '/ui',
    name: 'ui',
    component: () => import('@/views/UiView.vue')
  },
  {
    meta: {
      title: 'Styles',
    },
    path: '/styles',
    name: 'styles',
    component: () => import('@/views/StyleView.vue')
  },
  {
    meta: {
      title: 'Profile'
    },
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfileView.vue')
  },
  {
    meta: {
      title: 'Pricing'
    },
    path: '/pricing',
    name: 'pricing',
    component: () => import('@/views/PricingView.vue')
  },
  {
    meta: {
      title: 'Login',
    },
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    meta: {
      title: 'Sign up',
    },
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/SignupView.vue')
  },
  {
    meta: {
      title: 'Remind Password',
    },
    path: '/remind',
    name: 'remind',
    component: () => import('@/views/RemindView.vue')
  },
  {
    meta: {
      title: 'Error',
    },
    path: '/error',
    name: 'error',
    component: () => import('@/views/ErrorView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})
router.beforeEach(async (to,from,next) => {
  const user = await getCurrentUser()
  console.log("userss",user,!user,to.path,to.path != '/login')
  if(to.path != '/login') {
    if (!user) {
      next("/login");
    }else{
      const mainStore = useMainStore()
      mainStore.setFirebaseToken(user)
      const current = await axios.get("/users/current")
      mainStore.currentUser = current.data
      console.log("mainStore.currentUser", mainStore.currentUser)
      next();
    }
  }
  next();

})

export default router
