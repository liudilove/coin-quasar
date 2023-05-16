<template>
  <!-- <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-vertical.svg" style="width: 200px; height: 200px">{{$q.version}}
  </q-page> -->


  <!-- <div class="q-pa-md">
    <q-table title="Treats" :rows="rows" :columns="columns" row-key="name" />
  </div> -->

  <q-page class="q-pa-md">
    <q-card>
      <q-table title="Coin" :rows="rows" :columns="columns" row-key="name" v-model:pagination="pagination">
        <template v-slot:top-right>
          <!-- <q-btn @click="invoiceDialog=true" flat size="lg" icon="add_circle" class="q-mr-xs q-pt-sm q-px-none q-pb-sm" /> -->
          <q-icon name="archive" size="md" class="cursor-pointer" @click="exportTable">
            <q-tooltip>
              Export to CSV
            </q-tooltip>
          </q-icon>
        </template>
      </q-table>
    </q-card>
  </q-page>




</template>

<script setup>
  import { defineComponent, ref } from 'vue'

  const pagination = ref({
    sortBy: 'name',
    descending: false,
    page: 1,
    rowsPerPage: 5
  })

  const columns = ref([
    {
      name: 'name',
      required: true,
      label: 'Dessert (100g serving)',
      align: 'left',
      field: row => row.name,
      format: val => `${val}`,
      sortable: true
    },
    { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
    { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
    { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
    { name: 'protein', label: 'Protein (g)', field: 'protein' },
    { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
    { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
    { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
  ])

  const rows = ref([
    {
      name: 'Frozen Yogurt',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      sodium: 87,
      calcium: '14%',
      iron: '1%'
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      sodium: 129,
      calcium: '8%',
      iron: '1%'
    },
    {
      name: 'Eclair',
      calories: 262,
      fat: 16.0,
      carbs: 23,
      protein: 6.0,
      sodium: 337,
      calcium: '6%',
      iron: '7%'
    },
    {
      name: 'Cupcake',
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4.3,
      sodium: 413,
      calcium: '3%',
      iron: '8%'
    },
    {
      name: 'Gingerbread',
      calories: 356,
      fat: 16.0,
      carbs: 49,
      protein: 3.9,
      sodium: 327,
      calcium: '7%',
      iron: '16%'
    },
    {
      name: 'Jelly bean',
      calories: 375,
      fat: 0.0,
      carbs: 94,
      protein: 0.0,
      sodium: 50,
      calcium: '0%',
      iron: '0%'
    },
    {
      name: 'Lollipop',
      calories: 392,
      fat: 0.2,
      carbs: 98,
      protein: 0,
      sodium: 38,
      calcium: '0%',
      iron: '2%'
    },
    {
      name: 'Honeycomb',
      calories: 408,
      fat: 3.2,
      carbs: 87,
      protein: 6.5,
      sodium: 562,
      calcium: '0%',
      iron: '45%'
    },
    {
      name: 'Donut',
      calories: 452,
      fat: 25.0,
      carbs: 51,
      protein: 4.9,
      sodium: 326,
      calcium: '2%',
      iron: '22%'
    },
    {
      name: 'KitKat',
      calories: 518,
      fat: 26.0,
      carbs: 65,
      protein: 7,
      sodium: 54,
      calcium: '12%',
      iron: '6%'
    }
  ])

  function exportTable() {
    const data = rows.value.map(row => columns.value.map(column => row[column.name]))
    const csvContent = [
      columns.value.map(column => column.label).join(','),
      ...data.map(row => row.join(','))
    ].join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', 'data.csv')
    link.style.visibility = 'hidden'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // export default defineComponent({
  //   name: 'IndexPage'
  // })
</script>