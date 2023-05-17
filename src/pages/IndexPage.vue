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
  import { defineComponent } from 'vue'
  import axios from 'axios'
  import { onMounted, reactive, ref, toRefs } from 'vue'
  import { api } from 'boot/axios'

  const pagination = ref({
    // sortBy: 'name',
    descending: false,
    page: 1,
    rowsPerPage: 10,
    // rowsNumber: xx if getting data from a server
  })

  const columns = ref([
    {
      name: 'name',
      required: true,
      label: 'Dessert (100g serving)',
      align: 'left',
      field: row => row.name,
      format: val => `${val}`,
      // sortable: true
    },
    { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
    { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
    { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
    { name: 'protein', label: 'Protein (g)', field: 'protein' },
    { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
    { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
    { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
  ])

  const rows = ref([])

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


  const getList = () => {
    api({
      method: 'get',
      url: '/brc/list',
    }).then(res => {

      rows.value = res.data.data
      // console.log(res);
    }, (error) => {
      console.log(error);
    })
  }

  // mount
  onMounted(() => {

    getList()

  })


  // export default defineComponent({
  //   name: 'IndexPage'
  // })
</script>