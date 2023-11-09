import axios from "axios";
import Vuex from "vuex";
const store = new Vuex.Store({
    state() {
        return {
            keyID: "dc24889d588a4c46993144838231605",
            // infoSearchCity: {},
            allSearchCity: [],
            textAlert: ''

        };
    },
    getters: {
        // CURRENT_CITY: (state) => {
        //     return state.infoSearchCity;
        // },
        INFO_CITIES: (state) => {
            return state.allSearchCity;
        },
        TEXT_ALERT: (state) => {
            return state.textAlert;
        },
    },
    mutations: {
        SET_INFO_SEARCH_CITY: (state, response) => {
            state.allSearchCity.unshift(response.data); // Добавляем response.data в массив
        },
        SET_TEXT_ALERT: (state, response) => {
            state.textAlert = response
        },
    },
    actions: {
        // доступен в бесплатной версии запрос только на 3 дня вперёд 
        GET_INFO_SEARCH_CITY({ commit }, data) {
            axios({
                method: "get",
                url: `https://api.weatherapi.com/v1/forecast.json?key=dc24889d588a4c46993144838231605&q=${data}&days=3`,
            })
                .then((response) => {
                    commit("SET_INFO_SEARCH_CITY", response);
                })
                .catch(() => {
                    const response = 'The city is not full! Try again!'
                    commit("SET_TEXT_ALERT", response);
                });


        },
    },
});

export default store;
