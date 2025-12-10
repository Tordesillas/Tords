<script setup lang="ts">
import NomineeImage from "@/components/NomineeImage.vue";
import NomineePlayerOverlay from "@/components/NomineePlayerOverlay.vue";

interface Props {
    nominee: string;
    isWinner: boolean;
    hasPlayer: boolean;
}
defineProps<Props>();
</script>

<template>
    <div class="nominee-slot">
        <div :class="['nominee-card', {winner: isWinner}]">
            <NomineeImage
                :nominee="nominee"
            />
            <NomineePlayerOverlay
                v-if="hasPlayer"
                :nominee="nominee"
            />
        </div>
        <p :class="['nominee-text', {'winner-name': isWinner}]">{{ nominee }}</p>
    </div>
</template>

<style scoped>
.nominee-slot {
    display: flex;
    flex: 1;
    flex-direction: column;
    aspect-ratio: 1;
    max-width: 250px;
}
.nominee-card {
    position: relative;
    display: flex;
    flex: 1;
    aspect-ratio: 1;
    background-color: var(--blue);
    border: 3px solid transparent;
    transition: transform 1.4s ease, filter 0.8s ease;
    will-change: transform, filter;

    &:hover {
        transform: scale(1.02);
        transition: transform 0.2s ease;
        filter: brightness(1.1);
    }
}
.winner {
    border: 3px solid var(--orange);
    transform: scale(1.1);
    box-shadow: 0 3px 10px var(--orange);

    &:hover {
        transform: scale(1.12);
    }
}
.nominee-text {
    width: 100%;
    padding-top: 8px;
    padding-bottom: 12px;
    text-align: center;
    transition-duration: 1s;
    font-size: var(--font-size-M);
    font-family: Manrope-Light, sans-serif;
    color: var(--white);
}
.winner-name {
    color: var(--orange);
    padding-top: 16px;
    padding-bottom: 4px;
}
</style>