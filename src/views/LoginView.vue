<script setup>
import {reactive, ref, computed, onMounted} from 'vue'
import { RouterLink } from 'vue-router'
import { mdiAccount, mdiHome } from '@mdi/js'
import SectionFormScreen from '@/components/SectionFormScreen.vue'
import CardBox from '@/components/CardBox.vue'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import ButtonTextLink from '@/components/ButtonTextLink.vue'
import LayoutGuest from '@/layouts/LayoutGuest.vue'
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {getCurrentUser} from "vuefire";
import router from "@/router";

const form = reactive({
  email: 'johndoe',
  password: 'secret',
  remember: ['remember']
})

const hasTip = ref(false)

setTimeout(() => {
  hasTip.value = true
}, 750)

const hasError = ref(false)

const cardClassAddon = computed(() => hasError.value ? 'animate-shake' : '')

// const submit = () => {
//   console.log("submit",form.email)
//   hasError.value = true
//   hasTip.value = false
//
//   setTimeout(() => {
//     hasError.value = false
//     passShowHideClicked.value = false
//   }, 2000)
// }

const passShowHideClicked = ref(true)
const wrongPasswordOrPassword = ref("");
const loginGoogle = (e) => {
  e.preventDefault()
  console.log("login google");
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("user", user);
      console.log("token", token);
      router.push("/");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("error", {
        errorCode,
        errorMessage,
        email,
        credential,
      });
      // ...
    });
};
const submit = async () => {
  await signInWithEmailAndPassword(getAuth(), form.email, form.password)
    .then(() => {
      router.push("/");
    })
    .catch((error) => {
      wrongPasswordOrPassword.value = "อีเมลหรือรหัสผ่านไม่ถูกต้อง";
      hasError.value = true
      console.log("signInWithEmailAndPassword", error);
    });
};
onMounted( async ()=>{
  console.log("Mounted")
  const user = await getCurrentUser();
  if(user){
    await router.push("/");
  }
  console.log("user", user);

})
</script>

<template>
  <LayoutGuest>
    <SectionFormScreen
      v-slot="{ cardClass, cardRounded }"
      bg="login"
      promo
    >
      <CardBox
        :class="[cardClass, cardClassAddon]"
        :rounded="cardRounded"
        form
        @submit.prevent="submit"
      >
        <div

        >
          <h1 class="text-4xl font-medium">Login</h1>
          <p class="text-slate-500">Hi, Welcome back 👋</p>
        </div>
        <div class="my-5">
          <button
            class="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
            @click="loginGoogle"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              class="w-6 h-6"
              alt=""
            />

            <span>Login with Google</span>
          </button>
        </div>
        <FormField
          label="Email"
          :error="hasError"
          help="Please enter your email"
        >
          <FormControl
            v-model="form.email"
            :error="hasError"
            :icon-right="mdiAccount"
            name="login"
            placeholder="user@example.com"
            autocomplete="email"
          />
        </FormField>

        <FormField
          label="Password"
          :error="hasError"
          help="Click icon to show/hide"
        >
          <FormControl
            v-model="form.password"
            :error="hasError"
            :tip-right="passShowHideClicked ? null : 'Click to show/hide'"
            type="password"
            name="password"
            placeholder="Password"
            autocomplete="current-password"
            @right-icon-click="passShowHideClicked = true"
          />
        </FormField>

        <BaseLevel mobile>
          <FormCheckRadioPicker
            v-model="form.remember"
            name="remember"
            :options="{ remember: 'Remember' }"
            spaced
          />
          <RouterLink
            to="/remind"
            class="text-sm"
          >
            Forgot password?
          </RouterLink>
        </BaseLevel>

        <template #footer>
          <BaseLevel mobile>
            <BaseButtons>
              <BaseButton
                label="Login"
                type="submit"
                color="info"
              />
              <BaseButton
                label="Sign up"
                to="/signup"
                color="info"
                outline
              />
            </BaseButtons>
            <ButtonTextLink
              to="/"
              :icon="mdiHome"
              label="Home"
              small
            />
          </BaseLevel>
        </template>
      </CardBox>
    </SectionFormScreen>
  </LayoutGuest>
</template>
