<script setup>
import ContactInfo from '../components/ContactInfo.vue'
import IntroCard from '../components/IntroCard.vue'
import { ref, onMounted } from 'vue'
</script>

<template>
    <main class="container-fluid mt-3">
        <div class="row mb-4">
            <IntroCard class="offset-1 col-11 col-sm-6 align-items-start" :title="'聯絡我們'" />
        </div>
        <div class="d-flex align-items-center justify-content-center">
            <div class="banner row mb-5">
                <img class="p-0" src="../assets/categoryBanner/Contact.jpg">
            </div>
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