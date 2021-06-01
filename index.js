import redirector from './redirect.vue';

export default {
    install(Vue, options) {
        Vue.component('v-redirect', redirector);
    },
};