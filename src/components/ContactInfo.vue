<script setup>
</script>

<template>
    <div class="d-flex flex-wrap flex-column flex-sm-row justify-content-evenly align-items-center gap-4 gap-sm-0 mx-0">
        <div class="d-flex flex-column justify-content-center align-items-center gap-sm-3 gap-1 fix-width-item">
            <i class="bi bi-phone-fill"></i>
            <p class="fw-bolder remove-decoration"><span>0922</span>-<span>432</span>-<span>481</span></p>
        </div>
        <a href="mailto:alroxccc@gmail.com" target="_blank">
            <div class="d-flex flex-column justify-content-center align-items-center gap-sm-3 gap-1 fix-width-item">
                <i class="bi bi-envelope-fill"></i>
                <p class="fw-bolder">alroxccc@gmail.com</p>
            </div>
        </a>
        <a href="https://line.me/ti/p/drATwB8PmN" target="_blank">
            <div class="d-flex flex-column justify-content-center align-items-center gap-sm-3 gap-1 fix-width-item">
                <i class="bi bi-line"></i>
                <p class="fw-bolder">alroxcc</p>
            </div>
        </a>
    </div>
</template>

<style scoped>
a:hover {
    color: var(--main-word-color);
}

.fix-width-item {
    flex-basis: 165px;
    min-width: 165px;
}

i {
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

.decoration {
    text-decoration: none;
    color: inherit;
}

@keyframes fadeIn-less {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@media (max-width: 575.98px) {
    .fix-width-item {
        flex-basis: 0px;
    }
}
</style>
