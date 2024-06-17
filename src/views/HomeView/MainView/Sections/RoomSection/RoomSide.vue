<script lang="ts">
import ListLayout from '@/components/Layout/ListLayout.vue';
import SearchLayout from '@/components/Layout/SearchLayout.vue';
import TextFieldComponent from '@/components/TextFieldComponent.vue';
import { FrontFloor, FrontRoom } from '@/store/services/data';
import Vue, { PropType } from 'vue';
import RoomCard from './RoomCard.vue';
import { mapGetters } from 'vuex';

interface Data {
    filteredRooms: FrontRoom[] | null;
    textFieldValue: string;
    newFloor: FrontFloor | null;
}

export default Vue.extend({
    name: 'RoomSide',
    data(): Data {
        return {
            filteredRooms: null,
            textFieldValue: '',
            newFloor: null,
        };
    },

    props: {
        roomsList: {
            type: Array as PropType<FrontRoom[]>,
            required: true,
        },
    },
    computed: {
        ...mapGetters('currentFloor', {
            selectedFloor: 'selectedFloor',
        }),
        rooms(): FrontRoom[] {
            if (this.filteredRooms) return this.filteredRooms;
            return this.$props.roomsList;
        },
    },
    methods: {
        handleFilter(rooms: FrontRoom[]) {
            return rooms.filter((room: FrontRoom) => {
                const searchText = this.textFieldValue.toLowerCase();
                const filterById = room.id.toLowerCase().includes(searchText);

                const filterByName = room.name
                    .toLowerCase()
                    .includes(searchText);

                if (filterById || filterByName) return true;
                return false;
            });
        },
        filterRooms(newFloor: FrontFloor | null) {
            if (newFloor)
                this.filteredRooms = this.handleFilter(newFloor.rooms);

            this.filteredRooms = this.handleFilter(this.$props.roomsList);
        },
        updateFloor() {
            if (this.selectedFloor) this.newFloor = this.selectedFloor;
        },
    },
    watch: {
        textFieldValue() {
            this.filterRooms(this.newFloor);
        },
        selectedFloor() {
            this.filteredRooms = null;
            this.updateFloor();
        },
    },
    components: { TextFieldComponent, SearchLayout, ListLayout, RoomCard },
});
</script>

<template>
    <v-container fluid class="h-100">
        <SearchLayout>
            <TextFieldComponent
                v-model="textFieldValue"
                placeholder="Référence de la pièce"
                leftIcon="mdi-filter"
                rightIcon="mdi-magnify"
            />
        </SearchLayout>
        <ListLayout class="h-100">
            <RoomCard v-for="room in rooms" :key="room.id" :roomData="room" />
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
