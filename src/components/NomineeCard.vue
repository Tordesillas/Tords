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
    max-width: 20rem;
    padding: 0.5rem 1rem;
}
.nominee-card {
    position: relative;
    display: flex;
    flex: 1;
    aspect-ratio: 1;
    background-color: var(--blue);
    border: 3px solid transparent;
    transition-duration: 1s;
}
.nominee-card:active {
    transform: scale(1.05);
}
.winner {
    border: 3px solid var(--orange);
    transform: scale(1.1);
    box-shadow: 0 3px 10px var(--orange);
}
.nominee-text {
    width: 100%;
    padding: 1rem;
    text-align: center;
    transition-duration: 1s;
    font-size: var(--font-size-M);
    font-family: Manrope-Light, sans-serif;
    color: var(--white);
}
.winner-name {
    color: var(--orange);
}
</style>