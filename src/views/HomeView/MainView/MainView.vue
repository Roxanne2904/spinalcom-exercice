<script lang="ts">
import Vue, { PropType } from 'vue';
import BuildingSection from './Sections/BuildingSection/BuildingSection.vue';
import FloorSection from './Sections/FloorSection/FloorSection.vue';
import RoomSection from './Sections/RoomSection/RoomSection.vue';
import { FrontBuilding } from '@/store/services/data';

export default Vue.extend({
    name: 'MainView',
    components: {
        BuildingSection,
        FloorSection,
        RoomSection,
    },
    props: {
        buildings: {
            type: Array as PropType<FrontBuilding[]>,
            required: true,
        },
    },
});
</script>

<template>
    <v-container fluid class="mainContent">
        <v-row no-gutters class="mainRow">
            <BuildingSection :buildings="buildings" />
            <FloorSection :defaultBuilding="buildings[0]" />
            <RoomSection :defaultBuilding="buildings[0]" />
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
.mainContent {
    box-sizing: border-box;
    background: var(--v-background-base);
    padding: 0.5rem;
    margin: 0;
    height: 100%;
}
.mainRow {
    height: 100%;
}
</style>
