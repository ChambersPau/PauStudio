<script setup>
</script>

<template>
    <footer class="overlay-header mb-4">
        <div class="d-flex justify-content-between align-items-center px-3 px-sm-3 gap-1">
            <div>Copyright © 2025 泡創影音製作 PAU Studio All rights reserved.</div>
            <ul class="d-flex justify-content-between align-items-center gap-2 gap-sm-3">
                <li><a href="mailto:alroxccc@gmail.com" target="_blank"><i class="bi bi-envelope-fill"></i></a></li>
                <li><a href="https://line.me/ti/p/drATwB8PmN" target="_blank"><i class="bi bi-line"></i></a></li>
                <!-- <li><a href="https://www.youtube.com/@paustudio/featured"><i class="bi bi-youtube"></i></a></li> -->
            </ul>
        </div>
    </footer>
</template>

<style scoped>
.overlay-header {
    width: 100%;
    z-index: 15;
    background: linear-gradient(to bottom, var(--main-color-overlap), rgba(0, 0, 0, 0));
    background-color: var(--main-color-overlap);
    text-align: center;
    padding: 0.5rem;
    border-top: 1px solid var(--sub-word-color);
}

.overlay-header li {
    font-size: 1.5rem;
    padding: 0.5rem;
}

.overlay-header li:hover {
    animation: iconBounce 0.5s ease-out;
}

a:hover {
    color: var(--main-word-color);
}

@keyframes iconBounce {
    0% {
        transform: translateY(0);
    }

    30% {
        transform: translateY(-10px);
    }

    60% {
        transform: translateY(5px);
    }

    100% {
        transform: translateY(0);
    }
}

@media (max-width: 575.98px) {
    .overlay-header {
        padding: 0.5rem;
        font-size: 0.5rem;
    }

    .overlay-header li {
        font-size: 1.5rem;
        padding: 0rem;
    }

}
</style>