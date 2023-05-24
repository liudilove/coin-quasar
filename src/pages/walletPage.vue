<template>
  <q-page class="column q-pa-xl">

    <div>
      <h1>wallet</h1>
    </div>

    <div class="news-list">
      <div class="news-content" v-for="val in newslist" :key="val.title">
        <div class="news-head">{{val.title}}</div>
        <div class="css-ruud20">{{val.time}}</div>
        <div class="news-text">{{val.content}}</div>
        <div class="ant-divider css-ph9edi ant-divider-horizontal css-14e5vs5 e1qawwz22" role="separator"></div>
      </div>
    </div>
  </q-page>

</template>

<script setup>
  import axios from 'axios'
  import { onMounted, reactive, ref, toRefs } from 'vue'
  import { api } from 'boot/axios'


  const newslist = ref([
    { title: '金融监督、隐私和 CBDC：为什么政府要无现金化？', time: '9 分钟前· Cointelegraph', content: '加密货币和公民自由律师 Marta Belcher 加入 The Agenda 播客，剖析金融监管基础设施，并警告央行数字货币的潜在后果。 Belcher 担任 Filecoin 基金会主席和协议实验室的总法律顾问和政策负责人。她警告称，央行数字' },
  ])

  const copiedNewslist = [];
  for (let i = 0; i < 5; i++) {
    copiedNewslist.push({ ...newslist.value[0] });
  }

  newslist.value = copiedNewslist;

  console.log('newslist:', newslist.value);





  // mount
  onMounted(() => {


  })

</script>

<style scoped>
  .news-head {
    font-family: "PingFang SC";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: rgb(51, 51, 51);
  }

  .css-ruud20 {
    font-family: "PingFang SC";
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.3);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .news-text {
    font-family: "PingFang SC";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 180%;
    -webkit-box-align: center;
    align-items: center;
    color: rgba(0, 0, 0, 0.65);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .news-content {
    display: flex;
    flex-flow: column nowrap;
    gap: 14px;
    margin-top: 20px;
  }

  .news-list {
    display: flex;
    gap: 24px;
    flex-direction: column;
    margin-top: 4px;
  }
</style>