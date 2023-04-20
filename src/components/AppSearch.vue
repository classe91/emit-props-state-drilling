<script>
export default {
    name: "AppSearch",
    emits: ['performSearch'],
    data() {
        return {
            categories: [
                "PC",
                "Browser",
            ],
            propsDrillingCategoryValue: ''
        }
    },
};
</script>
    
<template>
    <section class="search">

        <form class="d-flex justify-content-between align-items-center">
            <div class="form-group">
                <label class="text-light" for="platform">Platform selection:</label>
                <select id="platform" v-model="propsDrillingCategoryValue"
                    @change="$emit('performSearch', propsDrillingCategoryValue)" class="form-select search-select">
                    <option value="">All</option>
                    <option v-for="(category, index) in this.categories" :key="index" :value="category.toLowerCase()">
                        {{ category }}
                    </option>
                </select>
            </div>
        </form>

    </section>
</template>
    
<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.search {
    background-color: $bg-color;
}

.search-select {
    max-width: 200px;
}
</style>
    