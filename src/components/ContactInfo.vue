<script setup>
import BtnItem from '../components/BtnItem.vue'
</script>

<template>
    <!-- <div
        class=" d-flex flex-column flex-sm-row justify-content-start align-items-start ps-5 gap-5 gap-sm-5 fade-in-effect-contain-less">
        <div class="d-flex flex-column justify-content-center align-items-start gap-3">
            <BtnItem :text="'Info.'" :is-infor="true" />
            <div>Email：alroxccc@gmail.com</div>
            <div>Phone：<a href="tel:+886922432481">(+886)922432481</a></div>
            <div>Link Tree：TBC</div>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-start gap-3 ">
            <BtnItem :text="'Line QR-Code'" :is-infor="true" />
            <div class="line-wrapper">
                <img src="../assets/LINE_QRcode.jpg">
            </div>
        </div>
    </div> -->
    <div class="d-flex flex-wrap flex-sm-row justify-content-evenly align-items-center gap-4 gap-sm-0 mx-0">
        <div class = "d-flex flex-column justify-content-center align-items-center gap-sm-3 gap-1">
            <i class="bi bi-phone-fill"></i>
            <p class="fw-bolder">(+886) 922432481</p>
        </div>
        <div class = "d-flex flex-column justify-content-center align-items-center gap-sm-3 gap-1">
            <i class="bi bi-envelope-fill"></i>
            <p class="fw-bolder">alroxccc@gmail.com</p>
        </div>
        <div class = "d-flex flex-column justify-content-center align-items-center gap-sm-3 gap-1">
            <i class="bi bi-line"></i>
            <p class="fw-bolder">@xxxdddd</p>
        </div>
    </div>
</template>

<style scoped>

i{
    font-size: 1.5rem;
}

h3 {
    color: var(--sub-color);
    font-weight: 700
}

.line-wrapper {
    max-width: 150px;
}

.line-wrapper img {
    width: 100%;
}

.fade-in-effect-contain-less {
    animation: fadeIn-less linear both;
    animation-timeline: view(block);
    animation-range: cover 0% contain 20%;
}

@keyframes fadeIn-less {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
