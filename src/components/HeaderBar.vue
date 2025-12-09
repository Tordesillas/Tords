<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue";
import {storeToRefs} from "pinia";
import {useLeaderboard} from "@/stores/leaderboards.ts";

const {leaderboardYears, changeSelectedYear} = useLeaderboard();
const {selectedYear} = storeToRefs(useLeaderboard());

function changeYear(newYear: string) {
    document.getElementById('app')!.scrollIntoView({behavior: 'smooth'});
    changeSelectedYear(newYear);
}

const navContainer = ref<HTMLElement | null>(null);
const yearList = ref<HTMLElement | null>(null);
const isDropdownVisible = ref(false);

const checkLayout = () => {
    if (navContainer.value && yearList.value) {
        const containerWidth = navContainer.value.offsetWidth;

        const listWidth = Array.from(yearList.value.children).reduce((totalWidth, year) => {
            return totalWidth + year.clientWidth;
        }, 0);
        const widthWithErrorMargin = listWidth * 1.08;

        isDropdownVisible.value = widthWithErrorMargin > containerWidth;
    }
};

const resizeObserver = new ResizeObserver(() => {
    checkLayout();
});

onMounted(() => {
    if (navContainer.value && yearList.value) {
        resizeObserver.observe(navContainer.value);
        checkLayout();
    }
});

onBeforeUnmount(() => {
    resizeObserver.disconnect();
});
</script>

<template>
    <header>
        <img class="logo" src="@/assets/img/T.svg" alt="T" />

        <p class="app-name">Tords</p>

        <nav ref="navContainer">
            <div ref="yearList" :style="{ visibility: isDropdownVisible ? 'hidden' : 'visible' }">
                <div
                    v-for="year in leaderboardYears"
                    :key="year"
                    :class="['button', year === selectedYear ? 'button-selected' : 'button-selectable']"
                    @click="changeYear(year)"
                >
                    <p class="button-text">{{ year }}</p>
                </div>
            </div>

            <select
                v-show="isDropdownVisible"
                :value="selectedYear"
                @input="changeYear(($event.target as HTMLSelectElement).value)"
                name="year-nav"
            >
                <option v-for="year in leaderboardYears" :value="year" :key="year">{{ year }}</option>
            </select>
        </nav>
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
nav {
    position: relative;
    width: 100%;
    overflow: hidden;

    & > div {
        display: flex;
        flex-direction: row;
    }
}
.button {
    padding: 8px 12px;
    margin: 0 4px;
    border-radius: 5px;
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
    white-space: nowrap;
}
select, ::picker(select) {
    appearance: base-select;
}
select {
    position: absolute;
    inset: 0 10%;
    font-size: var(--font-size-M);
    font-family: Outfit-Bold, sans-serif;
    color: var(--white);
    background-color: transparent;
    transition: background-color 0.2s ease;
    display: flex;
    align-items: center;
    border: none;
    border-bottom: 1px solid var(--white);
    cursor: pointer;
    padding: 0 14px;

    &:hover {
        background-color: rgba(255, 255, 255, .03);
    }

    &:active {
        background-color: rgba(255, 255, 255, .06);
    }
}
option {
    background-color: var(--blue-dark);
    color: var(--white);
    border: none;
    padding: 10px 14px;
    transition: 0.2s ease;

    &:checked {
        background-color: var(--blue);
        color: var(--blue-light);
    }

    &:hover {
        background-color: var(--blue-darker);
        color: var(--orange);
    }

    &::checkmark {
        display: none;
    }
}
</style>