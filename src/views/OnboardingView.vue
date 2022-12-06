<script setup>
import { computed,reactive } from 'vue'
import { useMainStore } from '@/stores/main.js'
import { mdiBank  } from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import CardBoxOnboarding from '@/components/CardBoxOnboarding.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import {
  mdiHandshake,
  mdiChatQuestion,
  mdiBagPersonal,
  mdiAccount,
  mdiDetails,
} from "@mdi/js";


const onboardings = reactive([
  {
    color: "text-blue-500",
    icon: mdiHandshake,
    title: "1. Welcome",
    description: "A welcome message from our CEO",
    status: "done",
    clicked: () => {
      console.log("1 clicked");
    },
  },
  {
    color: "text-blue-500",
    icon: mdiChatQuestion,
    title: "2. Communication",
    description: "How we can stay in touch",
    status: "done",
    clicked: () => {
      console.log("2 clicked");
    },
  },
  {
    color: "text-blue-500",
    icon: mdiDetails,
    title: "3. Your Brand",
    description: "Help us get to know your brand",
    status: "pending",
    clicked: () => {
      console.log("3 clicked");
    },
  },
  {
    color: "text-blue-500",
    icon: mdiBagPersonal,
    title: "4. Your customer",
    description: "Help us know your customer",
    status: "pending",
    clicked: () => {
      console.log("4 clicked");
    },
  },
  {
    color: "text-blue-500",
    icon: mdiAccount,
    title: "5. Give us access",
    description: "Give us access to manage your ads",
    status: "pending",
    clicked: () => {
      dialogLeadsie.value = true;
    },
  },
]);
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain >
      <SectionTitleLineWithButton
        :icon="mdiBank"
        title="Onboarding"
        main
      >
        
      </SectionTitleLineWithButton>
      
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        <div class="flex flex-col justify-between" v-for="(onboarding,index) in onboardings">
          <CardBoxOnboarding
            :key="index"
            :title="onboarding.title"
            :description="onboarding.description"
            :icon="onboarding.icon"
            :status="onboarding.status"
            :name="onboarding.title"
            :account="onboarding.title"
          />
        </div>
      </div>
    </SectionMain>
  </LayoutAuthenticated>
</template>
