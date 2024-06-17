<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import { type Context } from '@/store/data';
import MainView from './MainView/MainView.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';
import ErrorComponent from '@/components/ErrorComponent.vue';
import { FrontBuilding } from '@/store/services/data';

interface DataComponent {
    context: null | Context[];
    buildings: null | FrontBuilding[];
}

export default Vue.extend({
    name: 'HomeView',
    data(): DataComponent {
        return {
            context: null,
            buildings: null,
        };
    },

    components: {
        MainView,
        LoadingComponent,
        ErrorComponent,
    },
    computed: {
        ...mapGetters('data', {
            contextData: 'data',
            buildingsData: 'buildingsList',
            error: 'error',
            loading: 'loading',
            requestStatus: 'requestStatus',
        }),

        initialState(): boolean {
            return (
                !this.contextData &&
                !this.error &&
                !this.loading &&
                !this.requestStatus &&
                !this.buildingsData
            );
        },
    },

    methods: {
        ...mapActions('data', ['fetchData']),
        setBuildings() {
            const buildings = this.buildingsData;
            if (buildings) this.buildings = buildings;
        },
    },
    created() {
        this.fetchData().then(() => {
            if (this.contextData) {
                this.context = this.contextData;
            }
        });
    },
    watch: {
        buildingsData(newVal) {
            if (newVal) this.setBuildings();
        },
    },
});
</script>

<template>
    <v-container fluid class="homeContainer">
        <LoadingComponent v-if="Boolean(loading) || initialState" />
        <MainView v-else-if="buildings && !error" :buildings="buildings" />
        <ErrorComponent
            v-else-if="error"
            :requestStatus="requestStatus"
            :error="error"
        />
    </v-container>
</template>

<styled scoped lang="scss">
.homeContainer {
    height: 100%;
    padding: 0;
}
.gap {
    gap: 0.5rem;
}
.errorColor {
    color: var(--v-error-base);
}
</styled>
