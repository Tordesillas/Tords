<script setup lang="ts">
import {useLeaderboard} from "@/stores/leaderboards.ts";
import {storeToRefs} from "pinia";

const {leaderboardYears, changeSelectedYear} = useLeaderboard();
const {selectedYear} = storeToRefs(useLeaderboard());

function changeYear(newYear: string) {
    document.getElementById('app')!.scrollIntoView({behavior: 'smooth'});
    changeSelectedYear(newYear);
}
</script>

<template>
    <header>
        <img class="logo" src="@/assets/img/T.svg" alt="T" />

        <p class="app-name">Tords</p>

        <div
            v-for="year in leaderboardYears"
            :key="year"
            :class="['button', year === selectedYear ? 'button-selected' : 'button-selectable']"
            @click="changeYear(year)"
        >
            <p class="button-text">{{ year }}</p>
        </div>
    </header>
</template>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 5rem;
    padding: 0 5rem;
    z-index: 100;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #0A0E13B0;
    backdrop-filter: blur(15px);
}
.logo {
    height: 3rem;
    margin-left: 2rem;
}
.app-name {
    margin: 0 2rem 0 1rem;
    font-size: var(--font-size-XL);
    font-family: Outfit-Bold, sans-serif;
    color: var(--orange);
}
.button {
    padding: 0.5rem 1rem;
    margin: 0.2rem 0.5rem;
    border-radius: 0.3rem;
}
.button-selected {
    border-bottom: 1px solid var(--white);
}
.button-selectable {
    transition-duration: 0.3s;
    cursor: pointer;
    border-bottom: 1px solid transparent;

    &:hover {
        opacity: 80%;
        background-color: #FFFFFF20;
        border-bottom: 1px solid rgba(255, 255, 255, .25);
    }
    &:active {
        opacity: 50%;
        background-color: rgba(255, 255, 255, .25);
    }
}
.button-text {
    font-size: var(--font-size-M);
    font-family: Outfit-Bold, sans-serif;
    color: var(--white);
    user-select: none;
}
</style>