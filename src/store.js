import { reactive } from 'vue'

export const store = reactive({
    gamesList: [],
    apiURL: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    apiCategoryParameter: "platform",
    categoryValue: "",
    loading: true,
    maxResults: 50
});