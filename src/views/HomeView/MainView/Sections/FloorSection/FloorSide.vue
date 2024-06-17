<script lang="ts">
import ListLayout from '@/components/Layout/ListLayout.vue';
import SearchLayout from '@/components/Layout/SearchLayout.vue';
import TextFieldComponent from '@/components/TextFieldComponent.vue';
import { FrontFloor } from '@/store/services/data';
import Vue, { PropType } from 'vue';
import FloorCard from './FloorCard.vue';

interface Data {
    filteredFloors: FrontFloor[] | null;
    textFieldValue: string;
}

export default Vue.extend({
    name: 'FloorSide',
    data(): Data {
        return {
            filteredFloors: null,
            textFieldValue: '',
        };
    },

    props: {
        floorsList: {
            type: Array as PropType<FrontFloor[]>,
            required: true,
        },
    },
    computed: {
        floors(): FrontFloor[] {
            if (this.filteredFloors) return this.filteredFloors;
            return this.$props.floorsList;
        },
    },
    methods: {
        filterFloors() {
            const searchText = this.textFieldValue.toLowerCase();
            this.filteredFloors = this.$props.floorsList.filter(
                (floor: FrontFloor) => {
                    const filterById = floor.id
                        .toLowerCase()
                        .includes(searchText);

                    const filterByName = floor.name
                        .toLowerCase()
                        .includes(searchText);

                    if (filterById || filterByName) return true;
                    return false;
                }
            );
        },
    },
    watch: {
        textFieldValue() {
            this.filterFloors();
        },
    },
    components: { TextFieldComponent, SearchLayout, ListLayout, FloorCard },
});
</script>

<template>
    <v-container fluid class="h-100">
        <SearchLayout>
            <TextFieldComponent
                v-model="textFieldValue"
                placeholder="Référence de l'étage"
                leftIcon="mdi-filter"
                rightIcon="mdi-magnify"
            />
        </SearchLayout>
        <ListLayout>
            <FloorCard
                v-for="floor in floors"
                :key="floor.id"
                :floorData="floor"
            />
        </ListLayout>
    </v-container>
</template>

<style scoped lang="scss">
.h-100 {
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
