<script setup>
import { ref, defineProps } from 'vue'
const props = defineProps({
    head: { type: String, required: false },
    title: { type: String, required: true },
    content: { type: String, required: false },
    btn: { type: String, required: false },
})
</script>

<template>
    <!-- <section class="row my-4"> -->
        <div
            class="contact-infor d-flex flex-column justify-content-center ps-3">
            <span v-if="props.head" class="fs-6">{{ props.head }}</span>
            <h2 class="fs-2 fw-bold">{{ props.title }}</h2>
            <p v-if="props.content" class="fs-6 mt-3 mt-sm-5">{{ props.content }}</p>
            <button v-if="props.btn" class="mt-3 btn btn-secondary">{{ props.btn }} </button>
        </div>
    <!-- </section> -->
</template>

<style scoped>
.contact-infor {
    position: relative;
}

.contact-infor p {
    max-width: 100%;
}

.contact-infor::before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0px;
    content: "";
    border-left: 4px solid var(--sub-color); 
    animation: line-draw 1.5s forwards;
}

@keyframes line-draw {
    from {
        height: 0;
    }

    to {
        height: 100%;
    } 
}

@media (max-width: 575.98px) {
}


</style>