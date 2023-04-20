<script>
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import { apikey } from '../apikey'

export default {
    components: {
        AppHeader,
        AppMain,
    },
    data() {
        return {
            apiURL: "https://free-to-play-games-database.p.rapidapi.com/api/games",
            propsDrillingApiRequestResults: [],
            apiCategoryParameter: "platform",
            loading: true,
            maxResults: 50
        }
    },
    methods: {
        getGames(propsDrillingParam = "") {

            this.loading = true;
            let myUrl = this.apiURL;

            if (propsDrillingParam) {
                myUrl += `?${this.apiCategoryParameter}=${propsDrillingParam}`;
            }

            const config = {
                headers: {
                    'X-RapidAPI-Key': apikey.key,
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };

            axios.get(myUrl, config)
                .then((res) => {
                    const maxNumber = res.data.length < this.maxResults ? res.data.length : this.maxResults;
                    const shortArray = res.data.slice(0, maxNumber);

                    this.propsDrillingApiRequestResults = shortArray;
                    this.loading = false;
                })
                .catch((err) => {
                    console.log("Error", err);
                });

        },
    },
    created() {
        this.getGames();
    }
};
</script>

<template>
    <AppHeader message="Free Games API" @performSearch="getGames" />
    <AppMain :propsDrillingResults="propsDrillingApiRequestResults" :loading="loading" />
</template>


<style lang="scss">
@use './styles/partials/variables' as *;
@use './styles/general.scss';

body {
    background-color: $bg-color;
}

.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
