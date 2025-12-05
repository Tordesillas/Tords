<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useAudio} from "@/stores/audio.ts";

const audioStore = useAudio();
const audioPlayer = ref<HTMLAudioElement | null>(null);

onMounted(() => {
    if (audioPlayer.value) {
        audioStore.setAudioElement(audioPlayer.value);
    }
});

const handleAudioEnd = () => {
    audioStore.stopAudio();
};
</script>

<template>
    <audio ref="audioPlayer" @ended="handleAudioEnd" autoplay />
</template>