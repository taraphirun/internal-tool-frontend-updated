<script setup>
import { mdiAccountMultiple } from "@mdi/js";
import CardBox from '@/components/CardBox.vue'
import {useMainStore} from '@/stores/main.js'
const mainStore = useMainStore()

import SectionMain from '@/components/SectionMain.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
</script>

<template>
  <LayoutAuthenticated>
    <!--  <title-bar :title-stack="titleStack" />-->
    <!--  <hero-bar>{{ $route.meta.title }}</hero-bar>-->
    <SectionMain>
      <CardBox class="mb-6" title="Meeting" :icon="mdiAccountMultiple" header-icon="">
        <!-- <iframe :src="user.am.calendar" width="100%" height="800px" /> -->
        <iframe v-show="$route.path == '/meetings'" :src="mainStore.currentUser.am.calendar" width="100%" height="800px" />

      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
