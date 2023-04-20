<script>
export default {
    name: "ResultsMessage",
    props: {
        results: Number
    },
    data() {
        return {
        }
    },
    computed: {
        propsDrillingResultsNumber() {
            return this.results;
        }
    }
};
</script>
        
<template>
    <section class="text-white fw-bold bg-dark p-3">Found {{ propsDrillingResultsNumber }} free games</section>
</template>
    
<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.bg-dark {
    background-color: $bg-color;
}
</style>
