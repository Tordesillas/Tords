<template>
    <main>
        <span class="background" />
        <div class="main-content">
            <slot/>
        </div>
    </main>
</template>

<style scoped>
main {
    min-height: 100vh;
    min-width: 100%;
    display: flex;
}
.background {
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--blue-dark);
    background-image: url("../assets/img/background.jpg");
    background-blend-mode: multiply;
    background-position: center;
    filter: blur(4px);
}
.main-content {
    display: flex;
    margin: 0 auto;
    padding: 80px 60px;
    width: 100%;
    max-width: 1000px;
    flex-direction: column;

    @media (width <= 600px) {
        padding: 80px 20px;
    }
}
</style>