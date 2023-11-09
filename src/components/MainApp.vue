<template>
    <div class="weather">
        <div class="weather-wrapper">
            <input
                type="text"
                class="weather-input"
                placeholder="Search location..."
                v-model="searchCity"
            />
            <button class="weather-button" @click="getSearchCity">
                SEARCH
            </button>
        </div>

        <Carousel class="cities-wrapper" v-if="INFO_CITIES.length > 0">
            <Slide v-for="(city, idx) in INFO_CITIES" :key="idx">
                <div class="weather__city">
                    <div class="city__location">
                        <div style="display: flex">
                            <h2>
                                {{ city.location.name }},
                                {{ city.location.country }}
                            </h2>
                            <img src="./../assets/img/location.svg" alt="" />
                                

                        </div>

                        <span class="city__date">{{
                            city.location.localtime.split(" ")[0]
                        }}</span>
                        <!-- <img  src="./../assets/img/закладка.svg" alt=""> -->
                    </div>
                    <div class="city__temp">
                        <img src="./../assets/img/temp.svg" alt="" />
                        {{ city.current.temp_c }}°C
                        <img
                            class="city__img"
                            :src="city.current.condition.icon"
                            alt=""
                        />
                    </div>

                    <ul class="city__info-container">
                        <li class="city__info-item">
                            <h3>HUMIDITY</h3>
                            <h3>{{ city.current.humidity }}%</h3>
                        </li>
                        <li class="city__info-item">
                            <h3>VISIBILITY</h3>
                            <h3>{{ city.current.vis_km }}km</h3>
                        </li>
                        <li class="city__info-item">
                            <h3>WIND</h3>
                            <h3>{{ city.current.wind_kph }}kph</h3>
                        </li>
                        <li class="city__info-item">
                            <h3>UV-INDEX</h3>
                            <h3>{{ city.current.uv }}</h3>
                        </li>
                    </ul>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel>



        <div class="cities--null" v-else>Please search your first location</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import { Carousel, Slide } from "vue3-carousel";
import { Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
export default {
    data() {
        return {
            searchCity: "",
        };
    },
    computed: {
        ...mapGetters(["INFO_CITIES"]),
    },
    methods: {
        ...mapActions(["GET_INFO_SEARCH_CITY"]),
        getSearchCity() {
            this.GET_INFO_SEARCH_CITY(this.searchCity);
            this.searchCity = "";
        },
    },
    components: {
        Carousel,
        Slide,
        Navigation,
    },
};
</script>
<style>
.carousel__prev,
.carousel__next {
    color: white;
}

@media screen and (max-width: 655px) {
.carousel__prev,
.carousel__next {
    display: none;
}
}
</style>