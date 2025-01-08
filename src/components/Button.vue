<script setup lang="ts">
interface Props {
    text: string;
}
defineProps<Props>();

interface Emits {
    onClick: void;
}
defineEmits<Emits>();
</script>

<template>
    <div class="button-wrapper">
        <div class="button" @click="$emit('onClick')">
            <span class="button-text">{{ text }}</span>
        </div>
        <div class="animated-background" />
    </div>
</template>

<style scoped>
.button-wrapper {
    position: relative;
    height: fit-content;
    padding: 0.3rem;
    border-radius: 0.8rem;
    border: 0.1rem solid var(--orange);
}
.button {
    height: fit-content;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: var(--orange);
    transition-duration: 0.3s;

    &:hover {
        opacity: 90%;
        background-color: var(--orange-light);
    }
    &:active {
        opacity: 70%;
        background-color: var(--orange-light);
    }
}
.button-text {
    font-size: var(--font-size-M);
    font-family: Manrope-Light, sans-serif;
    color: var(--black);
}
.animated-background {
    position: absolute;
    top: 0.3rem;
    left: 0.3rem;
    bottom: 0.3rem;
    right: 0.3rem;
    border-radius: 0.5rem;
    background: linear-gradient(-45deg, transparent 35%, var(--orange-light) 49%, var(--orange-light) 51%, transparent 65%);
    background-size: 300% 300%;
    animation: gradient 2s linear infinite;
    pointer-events: none;
}
@keyframes gradient {
    0% {
        background-position: 0 0;
    }
    100% {
        background-position: 100% 100%;
    }
}
</style>