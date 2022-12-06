<script setup>
import { ref, computed } from 'vue'
import { useMainStore } from '@/stores/main.js'
import { useLayoutStore } from '@/stores/layout.js'
import {
  mdiMonitorCellphone,
  mdiSelectColor,
  mdiInformationOutline,
  mdiCheckCircleOutline,
  mdiAlertCircle,
  mdiAlertCircleOutline,
  mdiOpenInNew,
  mdiPlusCircle,
  mdiBroadcast,
  mdiLifebuoy,
  mdiClose,
  mdiBell,
  mdiUfoOutline,
  mdiChevronDown,
  mdiMenu,
  mdiUnfoldMoreHorizontal,
  mdiTrendingUp,
  mdiContrastCircle
} from '@mdi/js'
import { buttonMenuOptions } from '@/sampleButtonMenuOptions.js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import BaseButton from '@/components/BaseButton.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import ButtonMenu from '@/components/ButtonMenu.vue'
import SectionBottomOtherPages from '@/components/SectionBottomOtherPages.vue'
import CardBoxModal from '@/components/CardBoxModal.vue'
import ButtonTextLink from '@/components/ButtonTextLink.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import FormField from '@/components/FormField.vue'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
import PillTag from '@/components/PillTag.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'

const modalOneActive = ref(false)

const modalTwoActive = ref(false)

const modalThreeActive = ref(false)

const notificationSettingsModel = ref([])

const notificationsOutline = computed(() => notificationSettingsModel.value.indexOf('outline') > -1)

const buttonSettingsModel = ref(['left'])

const buttonsOutline = computed(() => buttonSettingsModel.value.indexOf('outline') > -1)

const buttonsSmall = computed(() => buttonSettingsModel.value.indexOf('small') > -1)

const buttonsDisabled = computed(() => buttonSettingsModel.value.indexOf('disabled') > -1)

const buttonsIconRight = computed(() => buttonSettingsModel.value.indexOf('right') > -1)

const buttonsIconLeft = computed(() => buttonSettingsModel.value.indexOf('left') > -1)

const buttonTip = computed(() => buttonSettingsModel.value.indexOf('tip') > -1)

const pillsSettingsModel = ref(['icon'])

const pillsOutline = computed(() => pillsSettingsModel.value.indexOf('outline') > -1)

const pillsSmall = computed(() => pillsSettingsModel.value.indexOf('small') > -1)

const pillsIcon = computed(() => pillsSettingsModel.value.indexOf('icon') > -1 ? mdiTrendingUp : null)

const flyingCardSettingsModel = ref(['hoverable'])

const flyingCardHoverable = computed(() => flyingCardSettingsModel.value.indexOf('hoverable') > -1)

const mainStore = useMainStore()

const toast = () => {
  mainStore.pushMessage('Welcome back. This is demo')
}

const layoutStore = useLayoutStore()

const asideRightToggle = () => {
  layoutStore.asideRightToggle()
}
</script>

<template>
  <LayoutAuthenticated>
    <CardBoxModal
      v-model="modalOneActive"
      title="Please confirm action"
      button-label="Confirm"
      text-link-label="Need Help?"
      :text-link-icon="mdiLifebuoy"
      has-cancel
    >
      <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
      <p>This is sample modal</p>
    </CardBoxModal>

    <CardBoxModal
      v-model="modalTwoActive"
      large-title="Unhandled exception"
      button="danger"
      text-link-label="Need Help?"
      :text-link-icon="mdiLifebuoy"
      shake
    >
      <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
      <p>This is sample modal</p>
    </CardBoxModal>

    <CardBoxModal
      v-model="modalThreeActive"
      large-title="Success"
      button="success"
    >
      <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
      <p>This is sample modal</p>
    </CardBoxModal>

    <SectionTitle>
      Account Updates
    </SectionTitle>

    <SectionMain>
      <CardBox
        class="md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto"
      >
        <div class="text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400">
          <BaseButton
            label="Toggle updates list"
            :icon="mdiBell"
            color="contrast"
            @click="asideRightToggle"
          />
        </div>
      </CardBox>
    </SectionMain>

    <SectionTitle>
      Modal examples
    </SectionTitle>

    <SectionMain>
      <div class="space-y-12">
        <CardBox
          title="Confirm modal"
          :header-icon="mdiClose"
          class="cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto"
          has-shadow
          hoverable
          @click="modalOneActive = true"
        >
          <div class="space-y-3">
            <p>Click to see in action</p>
          </div>
          <template #footer>
            <BaseLevel mobile>
              <BaseButtons>
                <BaseButton
                  label="Confirm"
                  color="info"
                />
                <BaseButton
                  label="Cancel"
                  color="info"
                  outline
                />
              </BaseButtons>

              <ButtonTextLink
                label="Need help?"
                :icon="mdiLifebuoy"
              />
            </BaseLevel>
          </template>
        </CardBox>

        <CardBox
          class="cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto"
          has-shadow
          hoverable
          @click="modalTwoActive = true"
        >
          <div class="space-y-3">
            <h1 class="text-2xl">
              Unhandled exception
            </h1>
            <p>Click to see in action</p>
          </div>
          <template #footer>
            <BaseLevel mobile>
              <BaseButtons>
                <BaseButton
                  label="Done"
                  color="danger"
                />
              </BaseButtons>

              <ButtonTextLink
                label="Need help?"
                :icon="mdiLifebuoy"
              />
            </BaseLevel>
          </template>
        </CardBox>

        <CardBox
          class="cursor-pointer md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto"
          has-shadow
          hoverable
          @click="modalThreeActive = true"
        >
          <div class="space-y-3">
            <h1 class="text-2xl">
              Success
            </h1>
            <p>Click to see in action</p>
          </div>
          <template #footer>
            <BaseLevel mobile>
              <BaseButtons>
                <BaseButton
                  label="Done"
                  color="success"
                />
              </BaseButtons>
            </BaseLevel>
          </template>
        </CardBox>
      </div>
    </SectionMain>

    <SectionTitle>Toasts</SectionTitle>

    <SectionMain>
      <CardBox
        title="Toasts"
        class="md:w-7/12 lg:w-5/12 xl:w-4/12 shadow-2xl md:mx-auto"
      >
        <BaseButtons>
          <BaseButton
            class="flex-1"
            color="info"
            label="Show toast"
            @click="toast"
          />
        </BaseButtons>
      </CardBox>
    </SectionMain>

    <SectionTitle custom>
      <h1 class="text-2xl text-gray-500 dark:text-gray-400">
        Notifications
      </h1>
      <div class="flex items-center justify-center mt-6">
        <FormCheckRadioPicker
          v-model="notificationSettingsModel"
          type="switch"
          name="notifications-switch"
          :options="{ outline: 'Outline' }"
        />
      </div>
    </SectionTitle>

    <SectionMain>
      <NotificationBar
        color="info"
        :icon="mdiInformationOutline"
        :outline="notificationsOutline"
      >
        <b>Info state</b>. Notification
        <template #right>
          <BaseButton
            :icon="mdiOpenInNew"
            label="Button"
            small
            rounded-full
          />
        </template>
      </NotificationBar>

      <NotificationBar
        color="success"
        :icon="mdiCheckCircleOutline"
        :outline="notificationsOutline"
      >
        <b>Success state</b>. Notification
        <template #right>
          <BaseButton
            :icon="mdiOpenInNew"
            label="Button"
            small
            rounded-full
          />
        </template>
      </NotificationBar>

      <NotificationBar
        color="warning"
        :icon="mdiAlertCircleOutline"
        :outline="notificationsOutline"
      >
        <b>Warning state</b>. Notification
        <template #right>
          <BaseButton
            :icon="mdiOpenInNew"
            label="Button"
            small
            rounded-full
          />
        </template>
      </NotificationBar>

      <NotificationBar
        color="danger"
        :icon="mdiAlertCircle"
        :outline="notificationsOutline"
      >
        <b>Danger state</b>. Notification
        <template #right>
          <BaseButton
            :icon="mdiOpenInNew"
            label="Button"
            small
            rounded-full
          />
        </template>
      </NotificationBar>

      <NotificationBar
        color="contrast"
        :icon="mdiContrastCircle"
        :outline="notificationsOutline"
      >
        <b>Contrast</b>. Notification
      </NotificationBar>

      <NotificationBar
        color="white"
        :icon="mdiSelectColor"
        :outline="notificationsOutline"
      >
        <b>White</b>. Notification
      </NotificationBar>
    </SectionMain>

    <SectionTitle>Buttons & dropdowns</SectionTitle>

    <SectionMain>
      <CardBox>
        <FormField label="Settings">
          <FormCheckRadioPicker
            v-model="buttonSettingsModel"
            name="buttons-switch"
            type="switch"
            :options="{ outline: 'Outline', small: 'Small', disabled: 'Disabled', left: 'Icon left', right: 'Icon right', tip: 'Tooltip' }"
          />
        </FormField>

        <BaseDivider />

        <BaseButtons>
          <BaseButton
            color="white"
            label="White"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            :icon="buttonsIconLeft ? mdiOpenInNew : null"
            :icon-right="buttonsIconRight ? mdiOpenInNew : null"
            :tip="buttonTip ? 'Left' : null"
            tip-x="left"
          />
          <BaseButton
            color="contrast"
            label="Contrast"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            :icon="buttonsIconLeft ? mdiOpenInNew : null"
            :icon-right="buttonsIconRight ? mdiOpenInNew : null"
            :tip="buttonTip ? 'Center' : null"
          />
          <BaseButton
            color="info"
            label="Info"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            :icon="buttonsIconLeft ? mdiOpenInNew : null"
            :icon-right="buttonsIconRight ? mdiOpenInNew : null"
            :tip="buttonTip ? 'Right' : null"
            tip-x="right"
          />
          <BaseButton
            color="success"
            label="Success"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            :icon="buttonsIconLeft ? mdiOpenInNew : null"
            :icon-right="buttonsIconRight ? mdiOpenInNew : null"
            :tip="buttonTip ? 'Left' : null"
            tip-x="left"
            tip-top
          />
          <BaseButton
            color="warning"
            label="Warning"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            :icon="buttonsIconLeft ? mdiOpenInNew : null"
            :icon-right="buttonsIconRight ? mdiOpenInNew : null"
            :tip="buttonTip ? 'Center' : null"
            tip-top
          />
          <BaseButton
            color="danger"
            label="Danger"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            :icon="buttonsIconLeft ? mdiOpenInNew : null"
            :icon-right="buttonsIconRight ? mdiOpenInNew : null"
            :tip="buttonTip ? 'Right' : null"
            tip-x="right"
            tip-top
          />
        </BaseButtons>

        <BaseDivider />

        <BaseButtons>
          <BaseButton
            color="white"
            label="Button"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            :icon="buttonsIconLeft ? mdiOpenInNew : null"
            :icon-right="buttonsIconRight ? mdiOpenInNew : null"
            rounded-full
          />
          <BaseButton
            color="contrast"
            label="Button"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            :icon="buttonsIconLeft ? mdiOpenInNew : null"
            :icon-right="buttonsIconRight ? mdiOpenInNew : null"
            rounded-full
          />
          <BaseButton
            color="info"
            label="Button"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            :icon="buttonsIconLeft ? mdiOpenInNew : null"
            :icon-right="buttonsIconRight ? mdiOpenInNew : null"
            rounded-full
          />
          <BaseButton
            color="success"
            label="Button"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            :icon="buttonsIconLeft ? mdiOpenInNew : null"
            :icon-right="buttonsIconRight ? mdiOpenInNew : null"
            rounded-full
          />
          <BaseButton
            color="warning"
            label="Button"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            :icon="buttonsIconLeft ? mdiOpenInNew : null"
            :icon-right="buttonsIconRight ? mdiOpenInNew : null"
            rounded-full
          />
          <BaseButton
            color="danger"
            label="Button"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            :icon="buttonsIconLeft ? mdiOpenInNew : null"
            :icon-right="buttonsIconRight ? mdiOpenInNew : null"
            rounded-full
          />
        </BaseButtons>

        <BaseDivider />

        <BaseButtons>
          <ButtonMenu
            color="white"
            label="Dropdown"
            :options="buttonMenuOptions"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            left
          />
          <ButtonMenu
            color="contrast"
            label="Icon left"
            :icon="mdiChevronDown"
            :options="buttonMenuOptions"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            left
          />
          <ButtonMenu
            color="info"
            label="Custom icon"
            :icon="mdiMenu"
            :options="buttonMenuOptions"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            left
          />
          <ButtonMenu
            color="success"
            label="Icons left/right"
            :icon="mdiMenu"
            :icon-right="mdiUnfoldMoreHorizontal"
            :options="buttonMenuOptions"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            left
          />
          <ButtonMenu
            color="warning"
            label="List right"
            :icon-right="mdiUnfoldMoreHorizontal"
            :options="buttonMenuOptions"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
          />
          <ButtonMenu
            color="danger"
            label="Dropdown"
            :options="buttonMenuOptions"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
          />
        </BaseButtons>

        <BaseDivider />

        <BaseButtons>
          <BaseButton
            color="white"
            :icon="mdiOpenInNew"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
          />
          <BaseButton
            color="contrast"
            :icon="mdiOpenInNew"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
          />
          <BaseButton
            color="info"
            :icon="mdiOpenInNew"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
          />
          <BaseButton
            color="success"
            :icon="mdiOpenInNew"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
          />
          <BaseButton
            color="warning"
            :icon="mdiOpenInNew"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
          />
          <BaseButton
            color="danger"
            :icon="mdiOpenInNew"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
          />
        </BaseButtons>

        <BaseDivider />

        <BaseButtons glue>
          <BaseButton
            color="white"
            label="1"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            no-focus-ring
            addon
            active-soft
          />
          <BaseButton
            color="white"
            label="2"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            no-focus-ring
            addon
          />
          <BaseButton
            color="white"
            label="3"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            no-focus-ring
            addon
          />
          <BaseButton
            color="white"
            label="4"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            no-focus-ring
            addon
          />
          <BaseButton
            color="white"
            label="5"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            no-focus-ring
            addon
          />
        </BaseButtons>

        <BaseDivider />

        <BaseButtons glue>
          <BaseButton
            color="white"
            label="First"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            no-focus-ring
            addon
            rounded-full
            active-soft
          />
          <BaseButton
            color="white"
            label="Second"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            no-focus-ring
            addon
            rounded-full
          />
          <BaseButton
            color="white"
            label="Third"
            :small="buttonsSmall"
            :outline="buttonsOutline"
            :disabled="buttonsDisabled"
            no-focus-ring
            addon
            rounded-full
          />
        </BaseButtons>
      </CardBox>
    </SectionMain>

    <SectionTitle>Pills</SectionTitle>

    <SectionMain>
      <CardBox>
        <FormField label="Settings">
          <FormCheckRadioPicker
            v-model="pillsSettingsModel"
            name="buttons-switch"
            type="switch"
            :options="{ outline: 'Outline', small: 'Small', icon: 'Icon' }"
          />
        </FormField>

        <BaseDivider />

        <BaseButtons>
          <PillTag
            type="white"
            text="White Pill"
            :small="pillsSmall"
            :outline="pillsOutline"
            :icon="pillsIcon"
            wrapped
          />
          <PillTag
            type="info"
            text="Info"
            :small="pillsSmall"
            :outline="pillsOutline"
            :icon="pillsIcon"
            wrapped
          />
          <PillTag
            type="success"
            text="Success"
            :small="pillsSmall"
            :outline="pillsOutline"
            :icon="pillsIcon"
            wrapped
          />
          <PillTag
            type="warning"
            text="Warning"
            :small="pillsSmall"
            :outline="pillsOutline"
            :icon="pillsIcon"
            wrapped
          />
          <PillTag
            type="danger"
            text="Danger"
            :small="pillsSmall"
            :outline="pillsOutline"
            :icon="pillsIcon"
            wrapped
          />
        </BaseButtons>
      </CardBox>
    </SectionMain>

    <SectionTitle>Cards</SectionTitle>

    <SectionMain>
      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3 ">
        <CardBox title="With Title">
          <div class="text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400">
            With title
          </div>
        </CardBox>
        <CardBox
          title="Title & Icon"
          :icon="mdiMonitorCellphone"
        >
          <div class="text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400">
            With title & icon
          </div>
        </CardBox>
        <CardBox
          title="Title, Icon & Buttons"
          :icon="mdiMonitorCellphone"
          :header-icon="mdiClose"
        >
          <div class="text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400">
            With title, close & buttons
          </div>

          <template #footer>
            <BaseLevel mobile>
              <BaseButtons>
                <BaseButton
                  color="info"
                  :icon="mdiPlusCircle"
                  label="Button"
                />
                <BaseButton
                  color="info"
                  :icon="mdiBroadcast"
                  outline
                />
              </BaseButtons>
              <ButtonTextLink
                :icon="mdiLifebuoy"
                label="Help"
              />
            </BaseLevel>
          </template>
        </CardBox>
      </div>

      <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2 ">
        <CardBox empty />
        <CardBox>
          <div class="text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400">
            Just empty
          </div>
        </CardBox>
      </div>

      <CardBox
        title="Collapsed card"
        :icon="mdiMonitorCellphone"
        collapsible
      >
        <div class="text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400">
          Collapsed card example
        </div>

        <template #footer>
          <BaseLevel mobile>
            <BaseButtons>
              <BaseButton
                color="info"
                :icon="mdiPlusCircle"
                label="Button"
              />
              <BaseButton
                color="info"
                :icon="mdiBroadcast"
                outline
              />
            </BaseButtons>
            <ButtonTextLink
              :icon="mdiLifebuoy"
              label="Help"
            />
          </BaseLevel>
        </template>
      </CardBox>
    </SectionMain>

    <SectionTitle>Flying card</SectionTitle>

    <SectionMain>
      <CardBox
        title="Flying card"
        :icon="mdiUfoOutline"
        class="md:w-7/12 lg:w-5/12 xl:w-4/12 md:mx-auto"
        :hoverable="flyingCardHoverable"
        has-shadow
      >
        <div class="text-center py-24 lg:py-12 text-gray-500 dark:text-gray-400">
          Flying card example
          <div class="flex items-center justify-center mt-6">
            <FormCheckRadioPicker
              v-model="flyingCardSettingsModel"
              type="switch"
              name="notifications-switch"
              :options="{ hoverable: 'Hoverable' }"
            />
          </div>
        </div>
      </CardBox>
    </SectionMain>

    <SectionBottomOtherPages />
  </LayoutAuthenticated>
</template>
