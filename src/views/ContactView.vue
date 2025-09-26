<script setup>
import ContactInfo from '../components/ContactInfo.vue'
import IntroCard from '../components/IntroCard.vue'
import { ref, onMounted } from 'vue'
</script>

<template>
    <main class="container-fluid mt-5">
        <div class="row my-4">
            <IntroCard class="offset-1 col-11 col-sm-6 align-items-start" :title="'聯絡我們'" />
        </div>
        <div class="banner row p-0 my-4">
            <img src="../assets/categoryBanner/Contact.jpg">
        </div>
        <section class="row">
            <ContactInfo class="col-12" />
        </section>
    </main>
</template>

<style scoped>
.banner {
    max-width: 1440px;
}

.banner img {
    display: block;
    width: 100%;
}
</style>