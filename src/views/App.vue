<script setup lang="ts">
import {computed, ref, useTemplateRef, watch} from "vue";
import Button from "@/components/Button.vue";
import FooterBar from "@/components/FooterBar.vue";
import HeaderBar from "@/components/HeaderBar.vue";
import MainContainer from "@/components/MainContainer.vue";
import NomineeCard from "@/components/NomineeCard.vue";
import TrackPlayer from "@/components/TrackPlayer.vue";
import {useLeaderboard} from "@/stores/leaderboards.ts";

const selectedLeaderboard = computed(() => useLeaderboard().selectedLeaderboard);

const revealedCategories = ref<string[]>([]);
const categoriesRef = useTemplateRef<HTMLInputElement[]>('categories');

function revealWinner(category: string) {
    revealedCategories.value.push(category);
    categoriesRef.value![selectedLeaderboard.value.findIndex(({name}) => name === category)]!.scrollIntoView({behavior: "smooth"});
}

watch(selectedLeaderboard, () => revealedCategories.value = []);
</script>

<template>
    <HeaderBar />

    <MainContainer>
        <div v-for="{name, nominees, winnerId} in selectedLeaderboard" ref="categories" class="categories">
            <p class="category">{{ name }}</p>

            <Transition name="fade" mode="out-in">
                <div class="nominees" :key="selectedLeaderboard[0]!.nominees[0]">
                    <NomineeCard
                        v-for="(nominee, index) in nominees"
                        :nominee="nominee"
                        :isWinner="index === winnerId && revealedCategories.includes(name)"
                        :hasPlayer="name.includes('Best song')"
                        :key="nominee"
                    />
                </div>
            </Transition>

            <div class="reveal-wrapper">
                <Button
                    v-if="nominees.length > 1"
                    text="Reveal the winner"
                    :visible="!revealedCategories.includes(name)"
                    @onClick="revealWinner(name)"
                />
            </div>
        </div>

        <TrackPlayer />
    </MainContainer>

    <FooterBar />
</template>

<style scoped>
.categories {
    scroll-margin: 4rem;
}
.category {
    padding: 2rem 0 1rem 0;
    font-size: var(--font-size-XL);
    font-family: Outfit-Bold, sans-serif;
    color: var(--orange);
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from, .fade-leave-to  {
    opacity: 0;
    transform: scale(0.97);
}
.nominees {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    justify-content: center;
}
.reveal-wrapper {
    display: flex;
    flex: 1;
    justify-content: center;
    height: 5rem;
}
</style>