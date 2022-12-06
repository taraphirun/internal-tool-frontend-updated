<script setup>
import { ref, computed } from "vue";
import { mdiAccountMultiple } from "@mdi/js";
import MainSection from "@/components/MainSection.vue";
import CardComponent from "@/components/CardComponent.vue";
import { useStore } from "vuex";
const store = useStore();

const user = computed(() => store.state.data["users/current"]);
</script>

<template>
  <!--  <title-bar :title-stack="titleStack" />-->
  <!--  <hero-bar>{{ $route.meta.title }}</hero-bar>-->
  <main-section>
    <card-component
      class="mb-6"
      title="Meeting"
      :icon="mdiAccountMultiple"
      header-icon=""
    >
      <iframe :src="user.am.calendar" width="100%" height="800px" />
    </card-component>
  </main-section>
</template>
