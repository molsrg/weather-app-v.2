<template>
    <NavigationApp></NavigationApp>
    <div class="weather">
        <ul v-if="INFO_CITIES.length > 0" class="weather-wrapper" style="flex-direction: column">
            <li class="forecast-day" v-for="(city, index) in INFO_CITIES" :key="index">
                <div class="forecast-day__title">
                    <h2>{{ city.location.name }}</h2>
                    <h4>{{ city.location.country }}</h4>
                </div>
                <div class="forecast-day__info-container">
                    <ul class="forecast-day__info"
                        v-for="(item, idx) in city.forecast
                            .forecastday"
                        :key="idx"
                    >
                        <h4>{{ item.date }}</h4>
                        <ul class="forecast-day__info">
                            <li>Max_t - {{ item.day.maxtemp_c }} °C</li>
                            <li>Min_t - {{ item.day.mintemp_c }} °C</li>
                            <img :src="item.day.condition.icon" alt="">

                            <!-- <li>SunRise - {{ item.day.astro.sunrise }}</li>
                            <li>SunRise - {{ item.day.astro.sunset }}</li> -->
                        </ul>

                    </ul>
                    
                </div>
            </li>
        </ul>

        <div class="cities--null" v-else>Please search your first location</div>
        </div>


    <FooterApp></FooterApp>
</template>

<script>
import NavigationApp from "./components/NavigationApp.vue";
import FooterApp from "./components/FooterApp.vue";
import { mapGetters } from "vuex";
export default {
    components: {
        NavigationApp,
        FooterApp,
    },

    computed: {
        ...mapGetters(["INFO_CITIES"]),
    },
};
</script>
