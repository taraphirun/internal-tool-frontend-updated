<script setup>
import { buttonMenuOptions } from '@/sampleButtonMenuOptions.js'
import { mdiCog } from '@mdi/js'
import PillTagTrend from '@/components/PillTagTrend.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import ButtonMenu from '@/components/ButtonMenu.vue'

defineProps({
  trend: {
    type: String,
    default: null
  },
  trendType: {
    type: String,
    default: null
  }
})
</script>

<template>
  <BaseLevel
    v-if="trend"
    class="mb-3"
    mobile
  >
    <PillTagTrend
      :trend="trend"
      :trend-type="trendType"
      small
    />
    <ButtonMenu
      :options="buttonMenuOptions"
      :icon="mdiCog"
      small
    />
  </BaseLevel>
</template>
