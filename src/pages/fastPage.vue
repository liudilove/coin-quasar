<template>
  <q-page class="column q-pa-xl">

    <div class="q-px-lg q-pb-md">
      <q-timeline color="secondary">
        <!-- <q-timeline-entry heading body="Timeline heading" /> -->
        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" :body="body" />

        <q-timeline-entry title="Event Title" subtitle="February 21, 1986" :body="body" />

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" :body="body" />

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" :body="body" />

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" :body="body" />

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" :body="body" />

        <q-timeline-entry title="Event Title" subtitle="February 22, 1986" :body="body" />
      </q-timeline>
    </div>

  </q-page>

</template>

<script setup>
  import axios from 'axios'
  import { onMounted, reactive, ref, toRefs } from 'vue'
  import { api } from 'boot/axios'
  import { dateFormat } from 'boot/DateUtils'


  const body = 'xxxxxxxxxxxxxxxxxx'

  //



  const fastList = ref([])


  function getList() {

    api({
      url: 'https://www.shandian.io/_next/data/fBm4ojp-BL9ToMJpNHRHt/newsletter.json',
      method: 'get',
    }).then(res => {

      fastList.value = []

      res.data.pageProps.list.forEach(element => {

        console.log(element.publish_at);
        let time = dateFormat(new Date(element.publish_at * 1000), 'hh:mm')

        fastList.value.push({ title: element.title, time: time, content: element.content })
      });

    }, (error) => {
      console.log(error);
    })
  }


  // mount
  onMounted(() => {

    getList()
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