<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    imgSrcs: { type: Array, required: true },
    dir: { type: String, required: true }
})
</script>

<template>
    <!-- fade-in-effect-brand -->
    <div class="brands-silder-wrapper d-flex">
        <div :class="['d-flex', props.dir === 'left' ? 'brands-slider-toleft' : 'brands-slider-toright']">
            <img v-for="(imgSrc, index) in props.imgSrcs" :key="imgSrc" :src="imgSrc">
        </div>
        <div :class="[props.dir === 'left' ? 'brands-slider-toleft' : 'brands-slider-toright']">
            <img v-for="(imgSrc, index) in props.imgSrcs" :key="imgSrc" :src="imgSrc">
        </div>
    </div>
</template>

<style scoped>
.brands-silder-wrapper {
    /* overflow: hidden; */
    padding: 0rem 0rem;
    margin: 0.5rem 0rem;
    white-space: nowrap;
    position: relative;
}

.brands-silder-wrapper::-webkit-scrollbar {
    display: none;
}


.brands-silder-wrapper::before,
.brands-silder-wrapper::after {
    position: absolute;
    content: "";
    top: 0;
    width: 15%;
    height: 100%;
    z-index: 2;
}

.brands-silder-wrapper::before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), black);
}

.brands-silder-wrapper::after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), black);
}

.brands-slider-toright {
    /* display: inline-block; */
    /* display:flex; */
    animation: 100s slide-toright infinite linear;
    will-change: transform;
}

.brands-slider-toleft {
    /* display: inline-block; */
    /* display:flex; */
    animation: 100s slide-toleft infinite linear;
    will-change: transform;
}

@keyframes slide-toright {
    from {
        transform: translate3d(-100%, 0, 0);
        -webkit-transform: translate3d(-100%, 0, 0);
    }

    to {
        transform: translate3d(0, 0, 0);
        -webkit-transform: translate3d(0, 0, 0);
    }
}

@keyframes slide-toleft {
    from {
        transform: translate3d(0, 0, 0);
        -webkit-transform: translate3d(0, 0, 0);
    }

    to {
        transform: translate3d(-100%, 0, 0);
        -webkit-transform: translate3d(-100%, 0, 0);
    }
}

/* .brands-silder-wrapper:hover .brands-slider {
    animation-play-state: paused;
} */


.brands-slider-toright img {
    height: 50px;
    margin: 0rem 1rem;
    display: inline-block;
}

.brands-slider-toleft img {
    height: 50px;
    margin: 0rem 1rem;
    display: inline-block;
}

.fade-in-effect-brand {
    animation: fadeIn linear both;
    animation-timeline: view(block);
    animation-range: cover 0% contain 30%;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}


@media (max-width: 575.98px) {
    .brands-slider-toright img {
        height: 40px;
    }

    .brands-slider-toleft img {
        height: 40px;
    }
}
</style>