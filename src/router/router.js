import { createRouter, createWebHistory } from 'vue-router'

import TodayApp from './../TodayApp.vue'
import ForecastApp from './../ForecastApp.vue'
import MonthlyApp from './../MonthlyApp.vue'

const routes = [
    {
        path:'/',
        name:'TodayApp',
        component: TodayApp,
    },
    {
        path:'/forecast',
        name:'ForecastApp',
        component: ForecastApp,
    },
    {
        path:'/monthly',
        name:'MonthlyApp',
        component: MonthlyApp,
    },
    



    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;