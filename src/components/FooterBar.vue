<script setup lang="ts">

</script>

<template>
    <footer>
        <div class="logo-wrapper">
            <img class="logo" src="@/assets/img/T.svg" alt="T" />
        </div>

        <div class="text">
            <p class="title">Tords</p>
            <p class="subtitle">The Tordesillas Awards</p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    flex-direction: row;
    height: 15rem;
    padding: 0 5%;
    background-color: var(--blue-darker);
}
.logo-wrapper {
    display: flex;
    align-items: center;
    margin-right: 1rem;
}
.logo {
    height: 6rem;
}
.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.title {
    font-size: var(--font-size-XL);
    font-family: Outfit-Bold, sans-serif;
    color: var(--orange);
}
.subtitle {
    font-size: var(--font-size-L);
    font-family: Outfit-Bold, sans-serif;
    color: var(--orange);
}
</style>