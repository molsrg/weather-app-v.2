<template>
    <NavigationApp></NavigationApp>
    <div class="weather">
        <div class="cities--null">The current tariff does not allow making monthly requests</div>
        </div>

    <FooterApp></FooterApp>
</template>

<script>
import NavigationApp from "./components/NavigationApp.vue";
import FooterApp from "./components/FooterApp.vue";
export default {
    components: {
        NavigationApp,
        FooterApp,
    },

};
</script>
