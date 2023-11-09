<template>
    <nav class="nav">
        <div class="container">
            <div class="nav-row">
                <div class="nav-row__title">
                    <h1>WeatherMe</h1>
                    <span>{{ currentTime }}</span>
                </div>
                <div class="nav-row__container">
                    <router-link class="nav-row__container-item" :class="{ 'nav-row__container-item--active': $route.path === '/' }" to="/">Today</router-link>

                    <router-link class="nav-row__container-item" :class="{ 'nav-row__container-item--active': $route.path === '/forecast' }" to="/forecast">Forecast</router-link>

                    <router-link class="nav-row__container-item" :class="{ 'nav-row__container-item--active': $route.path === '/monthly' }" to="/monthly">Monthly forecast</router-link>
                    
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    mounted() {
        this.setLocalTime()
        setInterval(() => {
            this.setLocalTime()
        }, 60000);
    },
    data() {
        return {
            currentTime: '',
        };
    },
    methods: {
        setLocalTime() {
            const currentTime = new Date();
            let hours = currentTime.getHours();
            const minutes = currentTime.getMinutes();

            const amOrPm = hours < 12 ? "am" : "pm";

            if (hours > 12) {
                hours -= 12;
            }

            const formattedTime =
                (hours < 10 ? "0" : "") +
                hours +
                ":" +
                (minutes < 10 ? "0" : "") +
                minutes +
                " " +
                amOrPm;

            this.currentTime = formattedTime
        },
    },
    computed: {},
};
</script>

<style>
</style>