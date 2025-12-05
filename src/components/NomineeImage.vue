<script setup lang="ts">
import {ref} from "vue";

interface Props {
    nominee: string;
}
const props = defineProps<Props>();

const filename = props.nominee.toLowerCase().split(' ')[0]!.replace(/[-,:]/g, '');
const imgUrl = new URL(`../assets/img/${filename}.jpg`, import.meta.url).href;

const isImgLoaded = ref<boolean>(false);

function onImgLoad() {
    isImgLoaded.value = true;
}
</script>

<template>
    <div class="img-wrapper">
        <div v-if="!isImgLoaded" class="loading-background" />
        <img
            :src="imgUrl"
            @load="onImgLoad"
            alt="nominee"
        >
    </div>
</template>

<style scoped>
.img-wrapper {
    position: relative;
    user-select: none;
}
img {
    width: 100%;
    height: 100%;
    pointer-events: none;
}
.loading-background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    aspect-ratio: 1;
    background: linear-gradient(-45deg, transparent 35%, var(--orange) 49%, var(--orange) 51%, transparent 65%);
    background-size: 300% 300%;
    animation: gradient 1s linear infinite;
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