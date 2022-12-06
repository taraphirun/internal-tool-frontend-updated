<script setup>
import { mdiThemeLightDark } from '@mdi/js'
import CardBox from '@/components/CardBox.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import SectionMain from '@/components/SectionMain.vue'
import StyleSwitcher from '@/components/StyleSwitcher.vue'
import SectionBottomOtherPages from '@/components/SectionBottomOtherPages.vue'
import BaseButton from '@/components/BaseButton.vue'
import { useStyleStore } from '@/stores/style.js'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'

const darkModeToggle = () => {
  useStyleStore().setDarkMode()
}
</script>

<template>
  <LayoutAuthenticated>
    <SectionTitle>
      Sidebar Colors
    </SectionTitle>

    <SectionMain>
      <CardBox
        class="xl:w-8/12 md:mx-auto"
      >
        <StyleSwitcher use-label />
      </CardBox>
    </SectionMain>

    <SectionTitle>
      Dark mode
    </SectionTitle>

    <SectionMain>
      <CardBox
        class="md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto"
      >
        <div class="text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400">
          <BaseButton
            label="Toggle light/dark"
            :icon="mdiThemeLightDark"
            color="contrast"
            @click="darkModeToggle"
          />
        </div>
      </CardBox>
    </SectionMain>

    <SectionBottomOtherPages />
  </LayoutAuthenticated>
</template>
