<script setup>
import SectionMain from "@/components/SectionMain.vue";
import BaseButton from "@/components/BaseButton.vue";
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const dismiss = () => {
  router.push("/onboarding");
};
const urls = {
  google:
    "https://app.leadsie.com/embed/connect/request/61d657cb4a433000220d5934",
  // google: "https://app.leadsie.com/connect/request/61d657cb4a433000220d5934",
  facebook:
    "https://app.leadsie.com/embed/connect/request/61d657164a433000220d58e5",
  // facebook: "https://app.leadsie.com/connect/request/61d657164a433000220d58e5",
};

const getUrl = () => {
  return route.meta.title === "Google" ? urls.google : urls.facebook;
};
</script>

<template>
    <LayoutAuthenticated>
  <!--  <title-bar :title-stack="titleStack" />-->
  <!--  <hero-bar>{{ $route.meta.title }}</hero-bar>-->

  <SectionMain>
    <div class="h-[85vh]">
      <iframe :src="getUrl()" width="100%" height="100%" style="border: 0" />
    </div>
    <div class="row customROWCLASS">
      <BaseButton class="ml-5 mt-5" label="Done" color="info" @click="dismiss" />
    </div>
  </SectionMain>
</LayoutAuthenticated>
</template>
