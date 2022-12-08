<script setup>
import {useMainStore} from "@/stores/main";
const mainStore = useMainStore()
</script>

<template>
  <a
    :href="mainStore.currentUser.am.lineOA"
    class="inline-flex items-center justify-center text-blue-600"
    target="_blank"
    style="background-color: white;"
  >
    <img
      src="/assets/line.svg"
      alt="line-oa-icon"
      class="fixed bottom-8 right-8  z-50"
      style="width: 50px;height: 50px; background-color: white;border-radius: 10px;"
    >
  </a>
</template>
