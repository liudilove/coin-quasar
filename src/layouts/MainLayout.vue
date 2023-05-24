<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" /> -->

        <q-toolbar-title>
          Coin Brc20 Statistics

          <q-btn-group outline class="q-ml-lg">
            <q-btn outline color="white" label="排行" to="/" />
            <q-btn outline color="white" label="头条新闻" to="/news" />
            <q-btn outline color="white" label="实时快讯" to="/fast" />
            <q-btn outline color="white" label="数字钱包" to="/wallet" />
          </q-btn-group>

        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
        <div>
          <q-btn class="q-mr-xs bg-grey-3 q-py-xs q-px-sm custom-border" flat @click="$q.dark.toggle()" color="black" :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'" />
        </div>

        <div>
          <q-btn class="q-ml-xs bg-grey-3 q-py-xs q-px-sm custom-border" flat>
            <a href="http://www.yinhanglilv.net" target="_blank" title="Donate" style="text-decoration: none">
              <q-icon name="favorite" style="color: #eb5daa" />
            </a>
          </q-btn>
        </div>

        <div class="q-mr-xs" style="margin-left:20px;">
          <q-btn no-caps flat class="bg-grey-3 custom-border" to="/">
            <q-icon size="xs" style="color: rgb(250, 108, 14)" name="login" />
            <span class="text-black q-ml-sm">Log In</span>
          </q-btn>
        </div>

      </q-toolbar>
    </q-header>

    <q-page-container class="bg-grey-2">

      <div class="row">

        <div style="flex-grow:1;">
          <router-view />
        </div>

        <div style="width:350px;" class="q-pt-md right-card bg-grey-2">

          <div class="q-pa-md" style="border-radius: 10px;background: #fff;">
            <h4>Unisat 预计 Mint 成本</h4>
            <div class="q-pa-sm full-width">
              <div class="q-gutter-md row satCls css-1l7kogj">
                <div v-for="n in flattenedList" :key="n">{{n}}</div>

              </div>
            </div>
          </div>

          <div class=" q-pa-md q-mt-md" style="border-radius: 10px;background: #fff;">
            <h4>实时快讯</h4>
            <div class="q-pa-xs">
              <div v-for="val in fastList" :key="val.time">
                <div>{{val.time}}</div>
                <p>{{val.content}}</p>
              </div>

            </div>
          </div>

        </div>
      </div>

    </q-page-container>


    <!-- <q-footer>
      <q-toolbar>
        <q-space></q-space>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

  </q-layout>
</template>

<script>
  import { ref, onMounted, onUpdated, onUnmounted, defineComponent } from 'vue';
  import EssentialLink from 'components/EssentialLink.vue'

  const linksList = [
    {
      title: 'Docs',
      caption: 'quasar.dev',
      icon: 'school',
      link: 'https://quasar.dev'
    },
    {
      title: 'Github',
      caption: 'github.com/quasarframework',
      icon: 'code',
      link: 'https://github.com/quasarframework'
    },
    {
      title: 'Discord Chat Channel',
      caption: 'chat.quasar.dev',
      icon: 'chat',
      link: 'https://chat.quasar.dev'
    },
    {
      title: 'Forum',
      caption: 'forum.quasar.dev',
      icon: 'record_voice_over',
      link: 'https://forum.quasar.dev'
    },
    {
      title: 'Twitter',
      caption: '@quasarframework',
      icon: 'rss_feed',
      link: 'https://twitter.quasar.dev'
    },
    {
      title: 'Facebook',
      caption: '@QuasarFramework',
      icon: 'public',
      link: 'https://facebook.quasar.dev'
    },
    {
      title: 'Quasar Awesome',
      caption: 'Community Quasar projects',
      icon: 'favorite',
      link: 'https://awesome.quasar.dev'
    }
  ]

  export default defineComponent({
    name: 'MainLayout',

    components: {
      // EssentialLink
    },

    setup() {
      const leftDrawerOpen = ref(false)

      onMounted(() => {
        console.log('mounted!', unisatList.length)
      })
      onUpdated(() => {
        console.log('updated!')
      })
      onUnmounted(() => {
        console.log('unmounted!')
      })

      const unisatList = [
        { name: '费用描述', sat: 'sat 估算', eatimate: '费用预估' },
        { name: '铭文数量', sat: '546', eatimate: '~$0.15' },
        { name: '网络费用', sat: '546', eatimate: '~$0.15' }
      ]

      const flattenedList = unisatList.flatMap(obj => Object.values(obj));

      const fastList = [
        { time: '17:31', content: '多位用户反映 Multichain 跨链资产长时间未到账，MULTI 24 小时跌逾 10%' },
        { time: '17:32', content: '多位用户反映 Multichain 跨链资产长时间未到账，MULTI 24 小时跌逾 10%' },
        { time: '17:33', content: '多位用户反映 Multichain 跨链资产长时间未到账，MULTI 24 小时跌逾 10%' },
        { time: '17:33', content: '多位用户反映 Multichain 跨链资产长时间未到账，MULTI 24 小时跌逾 10%' },
        { time: '17:33', content: '多位用户反映 Multichain 跨链资产长时间未到账，MULTI 24 小时跌逾 10%' },
      ]

      return {
        essentialLinks: linksList,
        leftDrawerOpen,
        toggleLeftDrawer() {
          leftDrawerOpen.value = !leftDrawerOpen.value
        },
        unisatList,
        flattenedList,
        fastList

      }



    }
  })
</script>


<style>
  .custom-border {
    border-radius: 5px;
  }

  .right-card {
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-left: 20px;
  }

  .right-card h4 {
    font-size: 18px;
  }

  .satCls div {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    width: 70px;
    height: 22px;
  }


  .css-1l7kogj div:nth-of-type(3n+1) {
    font-family: "PingFang SC";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    text-transform: capitalize;
    color: rgb(2, 145, 190);
  }

  .css-1l7kogj div:nth-of-type(1),
  .css-1l7kogj div:nth-of-type(2),
  .css-1l7kogj div:nth-of-type(3) {
    font-family: "PingFang SC";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: rgb(51, 51, 51);
    padding: 0px;
    border-top: 1px solid rgba(85, 65, 5, 0.06);
    border-bottom: 1px solid rgba(85, 65, 5, 0.06);
  }
</style>