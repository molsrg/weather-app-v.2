<template>
<AppAlert v-if="TEXT_ALERT.length > 0"></AppAlert>
  <router-view></router-view>
</template>


<script>
import { mapGetters } from "vuex";
import AppAlert from './AppAlert.vue'
export default {
components: {
  AppAlert
},
computed: {
        ...mapGetters(["TEXT_ALERT"]),
    },

};
</script>