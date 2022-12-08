<script setup>
import { ref, computed, watch, onMounted, reactive } from 'vue'
import { useMainStore } from '@/stores/main.js'
import { useLayoutStore } from '@/stores/layout.js'
import {
    mdiAccountMultiple,
    mdiCartOutline,
    mdiChartTimelineVariant,
    mdiFinance,
    mdiMonitorCellphone,
    mdiReload,
    mdiBell,
} from '@mdi/js'
import * as chartConfig from '@/components/Charts/chart.config.js'
import LineChart from '@/components/Charts/LineChart.vue'
import SectionMain from '@/components/SectionMain.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import CardBoxWidget from '@/components/CardBoxWidget.vue'
import CardBox from '@/components/CardBox.vue'
import TableSampleClients from '@/components/TableSampleClients.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
const mainStore = useMainStore()

mainStore.pushMessage('Welcome back. This is demo')

const layoutStore = useLayoutStore()

const isLg = computed(() => layoutStore.isLg)

const isMd = computed(() => layoutStore.isMd)

watch([isLg, isMd], () => {
    fillChartData()
})

const chartData = ref(null)

const fillChartData = () => {
    let points = 4

    if (isLg.value) {
        points = 9
    } else if (isMd.value) {
        points = 6
    }

    chartData.value = chartConfig.sampleChartData(points)
}

onMounted(() => {
    fillChartData()
})

const userSwitchVal = ref([])

watch(userSwitchVal, value => {
    mainStore.pushMessage(value && value.indexOf('one') > -1 ? 'Success! Now active' : 'Done! Now inactive')
})

const listBoxOptions = [
    { id: 1, label: 'Howell Hand', unavailable: false },
    { id: 2, label: 'Hope Howe', unavailable: false },
    { id: 3, label: 'Nelson Jerde', unavailable: false },
    { id: 4, label: 'Kim Weimann', unavailable: false },
    { id: 5, label: 'Lenna Smitham', unavailable: false }
]
const selectFieldOptions = [
    { id: 1, label: 'Business development' },
    { id: 2, label: 'Marketing' },
    { id: 3, label: 'Sales' }
]
const form = reactive({
    name: 'John Doe',
    email: 'john.doe@example.com',
    pass: 'secret',
    phone: '',
    amount: 1024,
    ipv6: 'fe80::/10',
    ipv4: '127.0.0.1',
    currency: 'USD',
    department: selectFieldOptions[0],
    person: listBoxOptions[0],
    question: 'Textarea',
    subject: '',
    checkboxOne: ['lorem'],
    checkboxTwo: ['lorem'],
    radioOne: 'one',
    radioTwo: 'one',
    switchOne: ['one'],
    switchTwo: ['one'],
    file: null
})
</script>

<template>
    <LayoutAuthenticated>
        <SectionMain>
            <SectionTitleLineWithButton :icon="mdiChartTimelineVariant" title="Overview" main>

            </SectionTitleLineWithButton>
            <div class="grid grid-cols-12 gap-6 mb-6 -mx-6 md:mx-0">
                <div class="col-span-12 sm:col-span-6 xl:col-span-3">
                    <CardBoxWidget trend="12%" trend-type="up" color="text-emerald-500" :icon="mdiAccountMultiple"
                        :number="512" label="Clients" />
                </div>
                <div class="col-span-12 sm:col-span-6 xl:col-span-3">
                    <CardBoxWidget trend="12%" trend-type="down" color="text-blue-500" :icon="mdiCartOutline"
                        :number="7770" prefix="$" label="Sales" />
                </div>
                <div class="col-span-12 sm:col-span-6 xl:col-span-3">
                    <CardBoxWidget trend="Overflow" trend-type="alert" color="text-red-500"
                        :icon="mdiChartTimelineVariant" :number="256" suffix="%" label="Performance" />
                </div>
                <div class="col-span-12 sm:col-span-6 xl:col-span-3">
                    <CardBoxWidget trend="Last 24 hours" trend-type="info" color="text-yellow-500" :icon="mdiBell"
                        :number="24" label="Alerts" />
                </div>
            </div>
            <!-- <SectionTitleLineWithButton :icon="mdiChartPie" title="Trends overview" /> -->


            <CardBox title="Performance" :icon="mdiFinance" :header-icon="mdiReload" class="mb-6"
                @header-icon-click="fillChartData">
                <div v-if="chartData" class="md:col-span-3 h-80">
                    <line-chart :data="chartData" />
                </div>
            </CardBox>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
                <div class="flex flex-col">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div class="flex flex-col">
                            <FormField help="Customized dropdown component" horizontal>
                                <FormControl v-model="form.person" type="list" :options="listBoxOptions" />
                            </FormField>
                        </div>
                        <div class="flex flex-col">
                            <FormField help="Customized dropdown component" horizontal>
                                <FormControl v-model="form.person" type="list" :options="listBoxOptions" />
                            </FormField>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <FormField help="Customized dropdown component" horizontal>
                        <FormControl v-model="form.person" type="list" :options="listBoxOptions" />
                    </FormField>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 gap-6 mb-6">
                <div class="flex flex-col">
                    <CardBoxWidget trend="12%" trend-type="up" color="text-emerald-500" :icon="mdiAccountMultiple"
                        :number="512" label="Clients" />
                </div>
                <div class="flex flex-col">
                    <CardBoxWidget trend="12%" trend-type="up" color="text-emerald-500" :icon="mdiAccountMultiple"
                        :number="512" label="Clients" />
                </div>
                <div class="flex flex-col">
                    <CardBoxWidget trend="12%" trend-type="up" color="text-emerald-500" :icon="mdiAccountMultiple"
                        :number="512" label="Clients" />
                </div>
                <div class="flex flex-col">
                    <CardBoxWidget trend="12%" trend-type="up" color="text-emerald-500" :icon="mdiAccountMultiple"
                        :number="512" label="Clients" />
                </div>
                <div class="flex flex-col">
                    <CardBoxWidget trend="12%" trend-type="up" color="text-emerald-500" :icon="mdiAccountMultiple"
                        :number="512" label="Clients" />
                </div>
                <div class="flex flex-col">
                    <CardBoxWidget trend="12%" trend-type="up" color="text-emerald-500" :icon="mdiAccountMultiple"
                        :number="512" label="Clients" />
                </div>
                <div class="flex flex-col">
                    <CardBoxWidget trend="12%" trend-type="up" color="text-emerald-500" :icon="mdiAccountMultiple"
                        :number="512" label="Clients" />
                </div>
                <div class="flex flex-col">
                    <CardBoxWidget trend="12%" trend-type="up" color="text-emerald-500" :icon="mdiAccountMultiple"
                        :number="512" label="Clients" />
                </div>
            </div>
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
                <div class="flex flex-col">

                    <CardBox title="Performance" :icon="mdiFinance" :header-icon="mdiReload" class="mb-6"
                        @header-icon-click="fillChartData">
                        <div v-if="chartData" class="md:col-span-3 h-80">
                            <line-chart :data="chartData" />
                        </div>
                    </CardBox>
                </div>
                <div class="flex flex-col">

                    <CardBox title="Performance" :icon="mdiFinance" :header-icon="mdiReload" class="mb-6"
                        @header-icon-click="fillChartData">
                        <div v-if="chartData" class="md:col-span-3 h-80">
                            <line-chart :data="chartData" />
                        </div>
                    </CardBox>
                </div>
                <div class="flex flex-col">
                    <CardBox title="Performance" :icon="mdiFinance" :header-icon="mdiReload" class="mb-6"
                        @header-icon-click="fillChartData">
                        <div v-if="chartData" class="md:col-span-3 h-80">
                            <line-chart :data="chartData" />
                        </div>
                    </CardBox>
                </div>
                <div class="flex flex-col">

                    <CardBox title="Performance" :icon="mdiFinance" :header-icon="mdiReload" class="mb-6"
                        @header-icon-click="fillChartData">
                        <div v-if="chartData" class="md:col-span-3 h-80">
                            <line-chart :data="chartData" />
                        </div>
                    </CardBox>
                </div>
            </div>
            <CardBox :icon="mdiMonitorCellphone" title="Responsive table" has-table>
                <TableSampleClients :per-page="10" />
            </CardBox>
        </SectionMain>
    </LayoutAuthenticated>
</template>
