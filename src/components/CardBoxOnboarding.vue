<script setup>
import { computed } from 'vue'
import { mdiCashMinus, mdiCashPlus, mdiReceipt, mdiCreditCardOutline } from '@mdi/js'
import CardBox from '@/components/CardBox.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import PillTag from '@/components/PillTag.vue'
import IconRounded from '@/components/IconRounded.vue'

const props = defineProps({
    title: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  account: {
    type: String,
    required: true
  }
})

const icon = computed(() => {
   if (props.status === 'done') {
    return {
      icon: props.icon,
      type: 'success'
    }
  } else if (props.status === 'pending') {
    return {
      icon: props.icon,
      type: 'warning'
    }
  }
})
</script>

<template>
  <CardBox
    class="cursor-pointer mb-6 last:mb-0 min-h-[180px]"
    hoverable
  >
    <BaseLevel>
      <BaseLevel type="justify-start">
        <div class="text-center space-y-1 md:text-left md:mr-6">
          <h4 class="text-xl">
            {{ title }}
          </h4>
          <p class="text-gray-500 dark:text-gray-400">
            {{ description }}
          </p>
          <div>
          <PillTag
            :type="icon.type"
            :text="status"
            small
          />
        </div>
        </div>
      </BaseLevel>
      <div class="text-center md:text-right space-y-1">
        <IconRounded
          :icon="icon.icon"
          :type="icon.type"
          class="md:mr-6"
        />
      </div>
    </BaseLevel>
  </CardBox>
</template>
