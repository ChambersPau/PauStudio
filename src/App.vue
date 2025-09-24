<script setup>
import { ref,onMounted } from 'vue'
import { useRoute, RouterLink, RouterView } from 'vue-router'
import HeaderPart from './components/Header.vue'
import Loading from './components/Loading.vue'
import FooterPart from './components/Footer.vue'
import { useVideoStore } from './stores/video'

const route = useRoute()
const videoStore = useVideoStore()

onMounted(async () => {
  videoStore.fetchVideo()
})
</script>

<template>
  <Loading :is-loading="videoStore.isLoading"/>
  <HeaderPart />
  <RouterView :key="route.fullPath"/>
  <FooterPart v-if="route.path !== '/home'" />
</template>

<style scoped>

</style>
