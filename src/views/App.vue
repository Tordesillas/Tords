<script setup lang="ts">
import {computed, ref, useTemplateRef, watch} from "vue";
import Button from "@/components/Button.vue";
import FooterBar from "@/components/FooterBar.vue";
import HeaderBar from "@/components/HeaderBar.vue";
import MainContainer from "@/components/MainContainer.vue";
import NomineeCard from "@/components/NomineeCard.vue";
import {useLeaderboard} from "@/stores/leaderboards.ts";

const selectedLeaderboard = computed(() => useLeaderboard().selectedLeaderboard);

const revealedCategories = ref<string[]>([]);
const categoriesRef = useTemplateRef<HTMLInputElement[]>('categories');

function revealWinner(category: string) {
    revealedCategories.value.push(category);
    categoriesRef.value![selectedLeaderboard.value.findIndex(({name}) => name === category)].scrollIntoView({behavior: "smooth"});
}

watch(selectedLeaderboard, () => revealedCategories.value = []);
</script>

<template>
    <HeaderBar />

    <MainContainer>
        <div v-for="{name, nominees, winnerId} in selectedLeaderboard" ref="categories" class="categories">
            <p class="category">{{ name }}</p>

            <div class="nominees">
                <NomineeCard
                    v-for="(nominee, index) in nominees"
                    :nominee="nominee"
                    :isWinner="index === winnerId && revealedCategories.includes(name)"
                    :key="nominee"
                />
            </div>

            <div class="reveal-wrapper">
                <Transition>
                    <Button
                        v-if="!revealedCategories.includes(name) && nominees.length > 1"
                        text="Reveal the winner"
                        @onClick="revealWinner(name)"
                    />
                </Transition>
            </div>
        </div>
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
.v-leave-active {
    transition: opacity 0.3s ease;
}
.v-leave-to {
    opacity: 0;
}
</style>