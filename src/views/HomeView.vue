<script setup>
import BrandSlider from '@/components/BrandSlider.vue';
import CategoryImgCard from '../components/CategoryImgCard.vue'
import ContactInfo from '../components/ContactInfo.vue'
import IntroCard from '../components/IntroCard.vue'
import FooterPart from '../components/Footer.vue'
import ToTop from '../components/ToTop.vue'
import BtnItem from '../components/BtnItem.vue'

import { LogoSlider_First, LogoSlider_Second } from '../assets/globalData'
import { useVideoStore } from '../stores/video'
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'

const videoStore = useVideoStore()
const topProds = ref([]);
const isShowTopProds = ref(true);
const isShowLeftBtn = ref(false);
const isShowRightBtn = ref(true);
const tracker = ref(null);
const scrollAmount = 300;
const imgSrcsFirst = ref([])
const imgSrcsSecond = ref([])

function ShowTopProds() {
    isShowTopProds.value = true;
}

function ShowCategories() {
    isShowTopProds.value = false;
}

function ClickLeftBtn() {
    tracker.value?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    updateButtons()
}

function ClickRightBtn() {
    tracker.value?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    updateButtons()
}

function updateButtons() {
    const el = tracker.value;
    if (!el) return;

    const trackerRect = el.getBoundingClientRect();
    const lastCard = el.lastElementChild;

    if (!lastCard) {
        isShowLeftBtn.value = false;
        isShowRightBtn.value = true;
        return;
    }

    const lastCardRect = lastCard?.getBoundingClientRect();

    const tolerance = 5;

    isShowLeftBtn.value = el.scrollLeft > tolerance;
    isShowRightBtn.value = lastCardRect?.right > trackerRect.right + tolerance;
}

function getLogoImagePath(name) {
    return new URL(`../assets/logoImg/${name}`, import.meta.url).href;
}

onMounted(() => {
    topProds.value = videoStore.TopProducts

    updateButtons();
    tracker.value?.addEventListener('scroll', updateButtons);
    imgSrcsFirst.value = LogoSlider_First.map(item => getLogoImagePath(item))
    imgSrcsSecond.value = LogoSlider_Second.map(item => getLogoImagePath(item))



    // setTimeout(() => {
    //     topProds.forEach(item => {
    //         const img = new Image();
    //         img.onload = () => {};
    //         img.onerror = () => {};
    //         img.src = `https://i.ytimg.com/vi/${item.videoId}/maxresdefault.jpg`;
    //     });
    // }, 100); // 延遲 100ms
});

</script>

<template>
    <main class="container-fluid p-0 video-section-wrapper">
        <section class="video-section">
            <video autoplay muted playsinline>
                <source src="../assets/PAU_Studio_OP.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </section>
        <!-- <section class="intro-section d-flex flex-column justify-content-center align-items-start ps-5">
            <span class="fs-6">Out Now</span>
            <h2 class="fs-1 fw-bold mt-1">Pau Studio Pau Studio</h2>
            <p class="fs-6 mt-3 mt-sm-5 d-none d-lg-block">I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click
                “Edit Text” or double click me to add your own content and make changes to the font</p>
            <button class="mt-3 btn btn-secondary d-none d-lg-block">Learn More > </button>
        </section> -->

        <section class="about-section my-8 fade-in-effect">
            <div class="d-flex justify-content-center align-items-center mb-4">
                <!-- <h3 class="fs-4 title-left-border-draw">關於我們</h3> -->
                <IntroCard :title="'泡創影音製作'" />
            </div>
            <div
                class="d-flex flex-column justify-content-center align-items-start align-items-center mx-5 gap-2 about-section-color">
                <p>PAU Studio · SINCE 2007</p>
                <p>我們相信，每支影片都能說出一個「好故事」。</p>
                <p>從企劃發想、拍攝執行到後期製作，我們提供完整的影音解決方案，</p>
                <p>以專業團隊將您的想法化為高品質影像，讓故事展現更強大的力量。</p>
            </div>
        </section>

        <section class="cards-section d-flex flex-column justify-content-center gap-0 my-8 fade-in-effect "
            id="cards-section">
            <div class="cards-category d-flex justify-content-center align-items-center gap-2 mb-3">
                <h3 @click="ShowTopProds" class="fs-1 active">精選作品</h3>
                <!-- id="title" -->
                <span class='fs-1'>|</span>
                <RouterLink to="/category">
                    <h3 class="fs-1">分類作品</h3>
                </RouterLink>
            </div>
            <div class="cards-wrapper">
                <button @click="ClickLeftBtn" v-show="isShowLeftBtn" class="carousel-btn left">&#10094;</button>
                <div v-if="isShowTopProds" ref="tracker" class="cards-tracker">
                    <div v-for="(topProd, index) in topProds" :key="topProd.videoId" class="card-item">
                        <RouterLink
                            :to="{ path: '/product', query: { videoId: topProd.videoId, category: topProd.type } }">
                            <img :class="['card-image',
                                {
                                    'custom-position-right': topProd.position === 'right',
                                    'custom-position-left': topProd.position === 'left'
                                }
                            ]" :src="`https://i.ytimg.com/vi/${topProd.videoId}/maxresdefault.jpg`" alt="Image"
                                :key="`${topProd.videoId}-${index}`">
                        </RouterLink>
                    </div>
                </div>
                <!-- <div v-if="!isShowTopProds" ref="tracker" class="cards-tracker">
                    <div v-for="(category,index) in categories" :key="category.type" class="card-item">
                        <RouterLink :to="{ path: '/category', query: { type: category.type } }">
                            <CategoryImgCard :name-ch="category.nameCh" :name-en="category.nameEn"
                            :type="category.type"/>
                        </RouterLink>
                    </div>
                </div> -->
                <button @click="ClickRightBtn" v-show="isShowRightBtn" class="carousel-btn right">&#10095;</button>
            </div>
        </section>
        <section class="brands-section my-5 fade-in-effect">
            <div class="d-flex justify-content-center align-items-center mb-4">
                <!-- <h3 class="fs-4 title-left-border-draw">合作品牌</h3> -->
                <IntroCard :title="'合作品牌'" />
            </div>
            <BrandSlider :dir="'right'" :imgSrcs="imgSrcsFirst" />
            <BrandSlider :dir="'left'" :imgSrcs="imgSrcsSecond" />
        </section>

        <section class="contact-section my-8">
            <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
                <div class="logo-wrapper d-none d-sm-block">
                    <RouterLink to="/">
                        <img src="../assets/PAU STUDIO LOGO_white.png">
                    </RouterLink>
                </div>
                <!-- <div class="contact-line"></div> -->
                <div class="contac-box ps-3 d-flex flex-column justify-content-center align-items-start gap-1">
                    <p>各類影音統籌</p>
                    <p>多媒體專業團隊</p>
                    <p>客製化影音服務</p>
                </div>
                <RouterLink to="/contact">
                    <BtnItem :is-active="true" :text="'聯絡我們'" :fontSize="'fs-6'" />
                </RouterLink>
            </div>
        </section>
        <ToTop />
        <FooterPart class="mt-8" />
    </main>
</template>


<style scoped>
.video-section-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* z-index: 10; */
}

.video-section {
    width: 100%;
    position: relative;
}

.video-section video {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
}

.video-section::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 15%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    pointer-events: none;
    z-index: 2;
}


/* Section About  */
.about-section-color {
    color: var(--sub-word-color)
}

/* Section About  */

/* Section Card  */
.cards-category h3,
span {
    color: var(--main-word-color);
}

.cards-category .active {
    color: var(--sub-color);

}

.cards-category h3 {
    font-weight: 700;
}

.cards-category h3:hover {
    cursor: pointer;
    color: var(--sub-color);
    font-weight: 700;
}

.cards-wrapper {
    position: relative;
}

.card-item {
    padding: 0.5rem;
    flex: 0 0 auto;
    max-width: 400px;
    scroll-snap-align: start;
    transition: all 0.5s ease-in-out;
    position: relative;
    aspect-ratio: 4 / 5;
    overflow: hidden;
}

@media (max-width: 575.98px) {
    .card-item {
        padding: 0.1rem;
        max-width: 120px;
    }
}

.card-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}


.custom-position-right {
    object-position: right !important;
}

.custom-position-left {
    object-position: left !important;
}


.card-item:hover {
    cursor: pointer;
    transform: scale(1.1);
}

.cards-tracker {
    display: flex;
    gap: 0rem;
    margin: 0rem 0rem;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE 10+ */
    /* 手機 滑動 */
    -webkit-overflow-scrolling: touch;
    touch-action: pan-x;
}

.cards-tracker::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari */
}

.carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--main-color-overlap);
    border: none;
    color: white;
    font-size: 2rem;
    padding: 2rem 1rem;
    cursor: pointer;
    z-index: 20;
}

.carousel-btn:hover {
    color: var(--main-color);
}

.carousel-btn.left {
    left: 0px;
}

.carousel-btn.right {
    right: 0px;
}

/* Section Card  */


/* Section Brand */
/* .section-title {
    font-weight: 700;
} */

/* Section Brand */


.title-left-border-draw {
    padding: 0rem 0 0rem 0.5rem;
    border-left: 4px solid var(--sub-color);
}

.contac-box {
    border-left: 4px solid var(--sub-color);
}

.logo-wrapper {
    max-width: 150px;
}

.logo-wrapper img {
    width: 100%;
}

.contact-line {
    align-self: stretch;
    position: relative;
}

.contact-line::before {
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
</style>
