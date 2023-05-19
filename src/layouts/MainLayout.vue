<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" /> -->

        <q-toolbar-title>
          Coin Brc20 Statistics

          <q-btn-group outline class="q-ml-lg">
            <q-btn outline color="white" label="排行" to="/" />
            <q-btn outline color="white" label="实时快讯" to="/news" />
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

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import { defineComponent, ref } from 'vue'
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

      return {
        essentialLinks: linksList,
        leftDrawerOpen,
        toggleLeftDrawer() {
          leftDrawerOpen.value = !leftDrawerOpen.value
        }
      }
    }
  })
</script>


<style>
  .custom-border {
    border-radius: 5px;
  }
</style>