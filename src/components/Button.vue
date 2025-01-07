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
    </div>
</template>

<style scoped>
.button-wrapper {
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
</style>