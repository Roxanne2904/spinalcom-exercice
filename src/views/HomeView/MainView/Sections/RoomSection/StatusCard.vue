<script lang="ts">
import {
    EnumOccupationStatus,
    StatusOccupation,
    type RoomOccupation,
} from '@/store/services/roomDetails';
import Vue, { PropType } from 'vue';

interface Data {
    status: StatusOccupation;
}

export default Vue.extend({
    name: 'RoomCard',
    data(): Data {
        return {
            status: EnumOccupationStatus.UNDEFINED as StatusOccupation,
        };
    },
    components: {},
    props: {
        roomInfos: {
            type: Object as PropType<RoomOccupation>,
            required: true,
        },
    },
    mounted() {
        this.setRoomStatus();
    },
    computed: {
        roomStatus(): StatusOccupation {
            return this.status;
        },
        occupied(): boolean {
            return this.status === EnumOccupationStatus.OCCUPIED;
        },
        unoccupied(): boolean {
            return this.status === EnumOccupationStatus.UNOCCUPIED;
        },
        undefinedValue(): boolean {
            return this.status === EnumOccupationStatus.UNDEFINED;
        },
    },
    methods: {
        setRoomStatus(): void {
            const status: StatusOccupation = this.$props.roomInfos?.occupation;
            switch (status) {
                case EnumOccupationStatus.OCCUPIED:
                    this.status = EnumOccupationStatus.OCCUPIED;
                    break;
                case EnumOccupationStatus.UNOCCUPIED:
                    this.status = EnumOccupationStatus.UNOCCUPIED;
                    break;
                case EnumOccupationStatus.UNDEFINED:
                default:
                    this.status = EnumOccupationStatus.UNDEFINED;
                    break;
            }
        },
    },
    watch: {
        roomInfos() {
            this.setRoomStatus();
        },
    },
});
</script>

<template>
    <div v-if="roomInfos">
        <p v-if="occupied" class="status status--occupied">
            {{ roomInfos.occupation }}
        </p>
        <p v-if="unoccupied" class="status status--unoccupied">
            {{ roomInfos.occupation }}
        </p>
        <p v-if="undefinedValue" class="status status--undefined">
            {{ roomInfos.occupation }}
        </p>
    </div>
</template>

<style scoped lang="scss">
.status {
    padding: 0.4rem 0.5rem 0.2rem 0.5rem;
    border-radius: 0.2rem;

    &--occupied {
        background-color: var(--v-success-base);
    }
    &--unoccupied {
        background-color: var(--v-error-base);
    }
    &--undefined {
        background-color: var(--v-warning-base);
    }
}
</style>
