<script lang="ts">
import Vue from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default Vue.extend({
    name: 'App',
    components: {
        HeaderComponent,
    },
});
</script>

<template>
    <v-app>
        <HeaderComponent />
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<style>
* {
    box-sizing: border-box;
}
p {
    margin: 0 !important;
}
body,
html {
    height: 100%;
}
.v-main {
    height: 100%;
}
.v-main__wrap {
    height: 100%;
}
</style>
