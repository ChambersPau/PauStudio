<script setup>
import { ref, defineProps } from 'vue';
const props = defineProps({
    head: { type: String, required: true },
    imgName: { type: String, required: true },
    contents: { type: Array, required: true },
})

function getImagePath(iconImgName) {
    return new URL(`../assets/iconImg/${iconImgName}.png`, import.meta.url).href;
}
</script>

<template>
    <div class="d-flex flex-column justify-content-center align-items-center gap-3">
        <div class="img-warpper">
            <img :src="getImagePath(props.imgName)" alt={{props.imgName}}></img>
        </div>
        <h4 class="fs-5">{{ props.head }}</h4>
        <div class="service-wording-color d-flex flex-column justify-content-center align-items-center gap-2">
            <p>{{ props.contents[0] }}</p>
            <p>{{ props.contents[1] }}</p>
        </div>
    </div>
</template>

<style scope>
.img-warpper {
    max-width: 30px;
}

.img-warpper img {
    width: 100%;
    display: block;
}

.service-wording-color {
    color: var(--sub-word-color)
}

</style>