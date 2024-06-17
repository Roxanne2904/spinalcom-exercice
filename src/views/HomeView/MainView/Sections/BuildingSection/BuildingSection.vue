<script lang="ts">
import Vue, { PropType } from 'vue';
import TextFieldComponent from '@/components/TextFieldComponent.vue';
import BuildingCard from './BuildingCard.vue';
import { FrontBuilding } from '@/store/services/data';
import SearchLayout from '@/components/Layout/SearchLayout.vue';
import ListLayout from '@/components/Layout/ListLayout.vue';

interface Data {
    filteredBuildings: FrontBuilding[] | null;
    textFieldValue: string;
}

export default Vue.extend({
    name: 'BuildingSection',
    props: {
        buildings: { type: Array as PropType<FrontBuilding[]>, required: true },
    },
    data(): Data {
        return {
            filteredBuildings: null,
            textFieldValue: '',
        };
    },

    components: {
        TextFieldComponent,
        BuildingCard,
        SearchLayout,
        ListLayout,
    },

    computed: {
        getBuildings(): FrontBuilding[] {
            if (this.filteredBuildings) return this.filteredBuildings;
            return this.$props.buildings;
        },
    },
    methods: {
        filterBuildings() {
            const searchText = this.textFieldValue.toLowerCase();
            this.filteredBuildings = this.$props.buildings.filter(
                (building: FrontBuilding) => {
                    const filterById = building.id
                        .toLowerCase()
                        .includes(searchText);

                    const filterByName = building.name
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
            this.filterBuildings();
        },
    },
});
</script>

<template>
    <v-col cols="3" class="ma-2 building">
        <v-container fluid class="h-100">
            <SearchLayout>
                <TextFieldComponent
                    v-model="textFieldValue"
                    placeholder="Référence du bâtiment"
                    leftIcon="mdi-filter"
                    rightIcon="mdi-magnify"
                />
            </SearchLayout>

            <ListLayout
                ><BuildingCard
                    v-for="building in getBuildings"
                    :key="building.id"
                    :buildingData="building"
            /></ListLayout>
        </v-container>
    </v-col>
</template>

<styled lang="scss" scoped>
.h-100 {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.building {
    border-radius: 0.5rem;
    background-color: var(--v-lighterBackground-base);
    &-container {
        &-row {
            border-bottom: solid 1px var(--v-greyBackground-base);
            padding-bottom: 1rem;
            flex-grow: 4;
        }
    }
}
</styled>
