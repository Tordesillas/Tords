<script setup lang="ts">
interface Props {
    nominee: string;
    isWinner: boolean;
}
const props = defineProps<Props>();

const filename = props.nominee.toLowerCase().split(' ')[0].replace(/[-,:]/g, '');
const imgUrl = new URL(`../assets/img/${filename}.jpg`, import.meta.url).href;
</script>

<template>
    <img :src="imgUrl" alt="nominee" />
</template>

<style scoped>
img {
    width: 100%;
    height: 100%;
}
</style>