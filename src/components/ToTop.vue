<script setup>

function toTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

</script>

<template>
    <div class="div-position">
        <a @click.prevent="toTop"><i class="bi bi-caret-up-square-fill"></i></a>
    </div>
</template>

<style scoped>
.div-position {
    position: fixed;
    bottom: 48px;
    right: 32px;
    z-index: 50;
    text-align: center;
    padding: 0rem;
    cursor: pointer;
    font-size: 1.5rem;
}

.div-position {
    font-size: 1.5rem;
}

.div-position:hover {
    animation: iconBounce 1s linear;
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
    .div-position {
        bottom: 30px;
        right: 10px;
    }
}
</style>