<template>
  <!-- <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-vertical.svg" style="width: 200px; height: 200px">{{$q.version}}
  </q-page> -->


  <!-- <div class="q-pa-md">
    <q-table title="Treats" :rows="rows" :columns="columns" row-key="name" />
  </div> -->

  <q-page class="q-pa-md">
    <q-card>
      <q-table :title="'Update Time:    ' + (rows.length>0 ? rows[0].createTime : '')" :rows="rows" :columns="columns" row-key="name" v-model:pagination="pagination">
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
    rowsPerPage: 30,
    // rowsNumber: xx if getting data from a server
  })

  const columns = ref([
    {
      name: 'name',
      required: true,
      label: 'NAME',
      align: 'center',
      field: row => row.name,
      format: val => `${val}`,
      // headerStyle: 'font-size: 16px; font-weight: 500; color: #000000;',
      // headerClasses: 'headerCls'
      // sortable: true
    },
    {
      name: 'price', align: 'center', label: 'PRICE', field: 'price', sortable: true, format: val => `＄ ${val}`,
    },
    {
      name: 'changeRate', label: '24H%', field: 'changeRate', sortable: true,
      format: val => `${val}%`,
      style: row => {
        if (row.changeRate > 0) {
          return 'color: var(--q-positive)!important;'
        } else if (row.changeRate < 0) {
          return 'color: var(--q-negative)!important;'
        } else {
          return 'color: #000000;'
        }
      }
    },
    { name: 'market', label: 'MARKET CAP', field: 'market', format: val => `＄ ${addCommasToNumber(val)}` },
    { name: 'volume', label: 'VOLUME(24H)', field: 'volume', format: val => `＄ ${addCommasToNumber(val)}` },
    { name: 'supply', label: 'SUPPLY', field: 'supply', format: val => `${addCommasToNumber(val)}` },
    { name: 'holders', label: 'HOLDERS', field: 'holders', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  ])

  const rows = ref([])

  function addCommasToNumber(numberString) {
    numberString = numberString + ''
    // 先将字符串反转，方便后续每隔三位插入逗号
    var reversedString = numberString.split('').reverse().join('');

    // 使用正则表达式，在每隔三位后面插入逗号
    var numberWithCommas = reversedString.replace(/(\d{3})(?=\d)/g, '$1,');

    // 最后再次反转字符串并返回结果
    return numberWithCommas.split('').reverse().join('');
  }

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

<style scoped>
  /* ::v-deep */
  :deep(.headerCls) {
    font-size: 16px;
    font-weight: 500;
    color: #000000;
  }

  :deep(.q-table thead th) {
    color: var(--q-meta);
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    text-transform: uppercase;
  }

  :deep(.q-table tbody tr td) {
    border-bottom-width: 0 !important;
    font-size: 15px !important;
    font-weight: 700;
    line-height: 1.5rem !important;
    padding-bottom: 1rem;
    padding-top: 1rem;
  }

  :deep(.q-table__title) {
    font-size: 16px;
    color: #7d7d7d;
  }
</style>