<script lang="ts">
import Vue, { PropType } from 'vue';
import BuildingSide from './BuildingSide.vue';
import { FrontBuilding, FrontFloor } from '@/store/services/data';
import FloorSide from './FloorSide.vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
    name: 'FloorSection',
    props: {
        defaultBuilding: {
            type: Object as PropType<FrontBuilding>,
            required: true,
        },
    },
    data() {
        return {
            textFieldValue: '',
        };
    },
    components: { BuildingSide, FloorSide },
    computed: {
        ...mapGetters('currentFloor', { selectedFloor: 'selectedFloor' }),
        floorsList(): FrontFloor[] {
            return this.$props.defaultBuilding.floors;
        },
    },
});
</script>
<template>
    <v-col cols="3" class="ma-2">
        <v-row no-gutters class="d-flex floorContainer-row">
            <v-col class="floorContainer-row-block floorContainer-row-block--1">
                <BuildingSide :defaultBuilding="defaultBuilding" />
            </v-col>
            <v-col class="floorContainer-row-block floorContainer-row-block--2">
                <FloorSide :floorsList="floorsList" />
            </v-col>
        </v-row>
    </v-col>
</template>
<styled scoped lang="scss">
.floorContainer {
    height: 100%;
    &-row {
        flex-direction: column;
        gap: 1rem;
        height: 100%;
        &-block {
            border-radius: 0.5rem;
            background-color: var(--v-lighterBackground-base);
            &--1 {
                flex-grow: 2;
            }
            &--2 {
                flex-grow: 7;
            }
        }
    }
}
</styled>
