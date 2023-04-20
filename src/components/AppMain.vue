<script>
import GameCard from './GameCard.vue';
import AppLoader from './AppLoader.vue'
import ResultsMessage from './ResultsMessage.vue'

export default {
    name: "AppMain",
    props: {
        propsDrillingResults: Array,
        loading: Boolean
    },
    components: {
        GameCard,
        AppLoader,
        ResultsMessage
    },
    data() {
        return {
        }
    },
};
</script>

<template>
    <main class="container p-2 border border-dark border-1 rounded">
        <div v-if="!loading" class="row">
            <div class="col-12 mb-5">
                <ResultsMessage :results="propsDrillingResults.length" />
            </div>
            <div class="col-12 card-container d-flex flex-wrap justify-content-between">
                <GameCard v-for="(game, index) in propsDrillingResults" :key="index" :game="game" />
            </div>
        </div>
        <AppLoader v-else label="Free Games API" />
    </main>
</template>

<style scoped lang="scss">
main {
    background-color: #3c4146;
}
</style>