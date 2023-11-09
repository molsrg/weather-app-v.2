<template>
    <NavigationApp></NavigationApp>
    <MainApp></MainApp>
    <FooterApp></FooterApp>
</template>

<script>
import NavigationApp from "./components/NavigationApp.vue";
import MainApp from "./components/MainApp.vue";
import FooterApp from "./components/FooterApp.vue";
export default {
    components: {
        NavigationApp,
        MainApp,
        FooterApp,
    },
};
</script>
