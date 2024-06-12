<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import { type Context } from '@/store';
import MainView from './MainView.vue';

interface DataComponent {
    context: null | Context[];
}

export default Vue.extend({
    name: 'HomeView',
    data(): DataComponent {
        return {
            context: null,
        };
    },

    components: {
        MainView,
    },
    computed: {
        ...mapGetters({ data: 'data', loading: 'loading', error: 'error' }),
    },

    methods: {
        ...mapActions({ fetch: 'fetchData' }),
    },
    created() {
        this.fetch().then(() => {
            if (this.data) this.context = this.data;
        });
    },
});
</script>

<template>
    <div>
        <div v-if="Boolean(loading)">
            {{ 'Mettre un loading spinner ici !' }}
        </div>
        <div v-else-if="!context">{{ `${error}` }}</div>

        <MainView v-else />
    </div>
</template>
