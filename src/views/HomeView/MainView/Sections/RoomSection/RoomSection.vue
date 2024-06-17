<script lang="ts">
import Vue, { PropType } from 'vue';
import FloorSide from './FloorSide.vue';
import { FrontBuilding, FrontFloor, FrontRoom } from '@/store/services/data';
import { mapGetters } from 'vuex';
import RoomSide from './RoomSide.vue';

interface Data {
    currentFloor: null | FrontFloor;
}

export default Vue.extend({
    name: 'RoomSection',
    components: {
        FloorSide,
        RoomSide,
    },
    data(): Data {
        return {
            currentFloor: null,
        };
    },
    props: {
        defaultBuilding: {
            type: Object as PropType<FrontBuilding>,
            required: true,
        },
    },
    computed: {
        ...mapGetters('currentFloor', {
            selectedFloor: 'selectedFloor',
        }),
        floor(): FrontFloor {
            if (!this.currentFloor) {
                const floors: FrontFloor[] = this.$props.defaultBuilding.floors;
                return floors[0];
            }

            return this.currentFloor;
        },
        rooms(): FrontRoom[] {
            return this.floor.rooms;
        },
    },
    methods: {
        updateFloor() {
            if (this.selectedFloor) this.currentFloor = this.selectedFloor;
        },
    },
    watch: {
        selectedFloor() {
            this.updateFloor();
        },
    },
});
</script>

<template>
    <v-col class="ma-2">
        <v-row no-gutters class="d-flex roomContainer-row">
            <v-col class="roomContainer-row-block roomContainer-row-block--1">
                <v-row no-gutters class="roomContainer-row-block--1-content">
                    <v-col
                        class="roomContainer-row-block--1-content roomContainer-row-block--1-content-1"
                    >
                        <FloorSide :floor="floor" tag="infos" />
                    </v-col>
                    <v-col
                        class="roomContainer-row-block--1-content roomContainer-row-block--1-content-2"
                    >
                        <FloorSide :floor="floor" tag="total" />
                    </v-col> </v-row
            ></v-col>
            <v-col class="roomContainer-row-block roomContainer-row-block--2">
                <RoomSide :roomsList="rooms" />
            </v-col>
        </v-row>
    </v-col>
</template>
<styled scoped lang="scss">
.roomContainer {
    height: 100%;
    &-row {
        flex-direction: column;
        gap: 1rem;
        height: 100%;
        &-block {
            border-radius: 0.5rem;
            &--1 {
                flex-grow: 2;
                &-content {
                    display: flex;
                    gap: 1rem;
                    height: 100%;
                    border-radius: 0.5rem;
                    &-1 {
                        background-color: var(--v-lighterBackground-base);
                        flex-grow: 3;
                    }
                    &-2 {
                        background-color: var(--v-lighterBackground-base);
                        flex-grow: 1;
                    }
                }
            }
            &--2 {
                flex-grow: 7;
                background-color: var(--v-lighterBackground-base);
            }
        }
    }
}
</styled>
