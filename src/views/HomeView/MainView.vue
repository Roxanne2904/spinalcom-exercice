<script lang="ts">
import Vue from 'vue';
// import HelloWorld from '../../components/HelloWorld.vue';
import { mapActions, mapGetters } from 'vuex';
// import { type Context } from '@/store';

export default Vue.extend({
    name: 'MainView',

    components: {},
    computed: {
        ...mapGetters({ data: 'data' }),
    },

    methods: {
        // ...mapActions({ fetch: 'fetchData' }),
    },
    created() {
        // this.fetch().then(() => {
        //     console.log(this.data);
        //     console.log(this.loading);
        // });
    },
});
</script>

<template>
    <div>
        {{ data }}
    </div>
</template>
