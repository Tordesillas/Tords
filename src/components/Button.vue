<script setup lang="ts">
interface Props {
    text: string;
    visible: boolean;
}
defineProps<Props>();

interface Emits {
    onClick: void;
}
defineEmits<Emits>();
</script>

<template>
    <Transition>
        <div v-if="visible" class="button-wrapper">
            <div class="button" @click="$emit('onClick')">
                <span class="button-text">{{ text }}</span>
            </div>
            <div class="animated-background" />
        </div>
    </Transition>
</template>

<style scoped>
.v-leave-active {
    transition: opacity 0.3s ease;
}
.v-leave-to {
    opacity: 0;
}
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
    display: flex;
    flex: 1;
    text-align: center;

    font-size: var(--font-size-M);
    font-family: Manrope-Light, sans-serif;
    color: var(--black);
}
.animated-background {
    position: absolute;
    inset: 0.3rem;
    border-radius: 0.5rem;
    background: linear-gradient(-45deg, transparent 30%, var(--orange-light) 49%, var(--orange-light) 51%, transparent 60%);
    background-size: 300% 300%;
    animation: gradient 2s linear infinite;
    pointer-events: none;
}
@keyframes gradient {
    0% {
        background-position: 0 0;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 100% 100%;
    }
}
</style>