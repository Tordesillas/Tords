<script setup lang="ts">
import {computed} from "vue";
import {Pause, Play} from "@/components/icons";
import {useAudio} from "@/stores/audio.ts";

interface Props {
    nominee: string;
}
const props = defineProps<Props>();

const audioStore = useAudio();
const progress = computed(() => audioStore.currentAudio === props.nominee ? audioStore.progress : 0);

function onClickOnOverlay() {
    if (audioStore.currentAudio === props.nominee) {
        if (audioStore.isPlaying) {
            audioStore.pauseAudio();
        } else {
            audioStore.playAudio(props.nominee);
        }
    }

    else {
        if (audioStore.isPlaying) {
            audioStore.stopAudio();
        }
        audioStore.playAudio(props.nominee);
    }
}
</script>

<template>
    <div class="player-overlay" @click="onClickOnOverlay">
        <div class="overlay-button-wrapper">
            <Pause v-if="audioStore.isPlaying && audioStore.currentAudio === props.nominee" />
            <Play v-else />
        </div>

        <div class="progress-container">
            <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
        </div>
    </div>
</template>

<style scoped>
.player-overlay {
    position: absolute;
    inset: 0;
}
.overlay-button-wrapper {
    opacity: 0;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.8;
        transition: opacity 0.4s ease;
    }

    &:active > svg {
        transform: scale(1.5);
    }

    & > svg {
        transition: transform 0.1s ease;
    }
}
.progress-container {
    position: absolute;
    left: 1px;
    right: 0;
    bottom: 1px;
    height: 6px;
}
.progress-bar {
    height: 100%;
    background-color: var(--orange);
    border-radius: 3px;
    transition: width 0.2s ease-out;
}
</style>