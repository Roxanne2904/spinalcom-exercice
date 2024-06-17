<script lang="ts">
import CardLayout from '@/components/Layout/CardLayout.vue';
import TagComponent from '@/components/TagComponent.vue';
import { type FrontRoom } from '@/store/services/data';
import {
    type RoomOccupation,
    roomDetailsDataBackToFront,
    EnumOccupationStatus,
    RoomProfil,
} from '@/store/services/roomDetails';
import Vue, { PropType } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import Loading from '../../../../../components/Loading.vue';
import StatusCard from './StatusCard.vue';

interface Data {
    roomInfos: null | RoomOccupation;
    loading: boolean;
    error: null | string;
}

export default Vue.extend({
    name: 'RoomCard',

    components: {
        CardLayout,
        TagComponent,
        Loading,
        StatusCard,
    },
    data(): Data {
        return {
            roomInfos: null,
            loading: false,
            error: null,
        };
    },
    props: {
        roomData: {
            type: Object as PropType<FrontRoom>,
            required: true,
        },
    },
    computed: {
        ...mapGetters('currentFloor', {
            selectedFloor: 'selectedFloor',
        }),
        ...mapGetters('data', {
            occupation: 'occupation',
        }),
    },
    methods: {
        ...mapActions('data', {
            incrementOccupation: 'incrementOccupation',
            resetOccupation: 'resetOccupation',
        }),
        async fetchData() {
            if (!this.roomInfos)
                await this.fetchRoomDetails(this.$props.roomData.id);
            if (this.roomInfos)
                if (this.roomInfos.occupation === EnumOccupationStatus.OCCUPIED)
                    this.incrementOccupation();
        },
        async fetchRoomDetails(roomId: number) {
            this.loading = true;
            this.error = null;
            try {
                const response = await fetch(
                    `https://api-developers.spinalcom.com/api/v1/room/${roomId}/control_endpoint_list`,
                    {
                        method: 'GET',
                        headers: {
                            accept: 'application/json',
                        },
                    }
                );

                if (!response.ok)
                    throw new Error('Error fetching room details');

                const data: RoomProfil[] = await response.json();
                this.roomInfos = roomDetailsDataBackToFront(data);
            } catch (error: Error | unknown) {
                if (error instanceof Error) this.error = error.message;
            } finally {
                this.setLoading();
            }
        },
        setLoading() {
            setTimeout(() => {
                this.loading = false;
            }, 1000);
        },
    },
    mounted() {
        this.setLoading();
        this.fetchData();
    },
    watch: {
        selectedFloor() {
            this.roomInfos = null;
            this.fetchData();
        },
    },
});
</script>

<template>
    <CardLayout :data="roomData">
        <Loading v-if="loading" />
        <div v-else-if="error">{{ error }}</div>
        <div v-else class="roomCard-infos">
            <div class="roomCard-infos-container">
                <div class="roomCard-infos-container-title">
                    <p class="roomCard-infos-container-title-name text-h6">
                        {{ roomData.name }}
                    </p>
                    <TagComponent :type="roomData.type" />
                    <em class="roomCard-infos-container-title-id">{{
                        roomData.id
                    }}</em>
                </div>
                <StatusCard v-if="roomInfos" :roomInfos="roomInfos" />
            </div>
        </div>
    </CardLayout>
</template>

<style scoped lang="scss">
.roomCard {
    &-infos {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        &-container {
            display: flex;
            justify-content: space-between;
            width: 100%;
            align-items: center;
            &-title {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                &-name {
                    font-weight: bolder;
                    color: var(--v-text-base);
                }
                &-id {
                    color: var(--v-tag-base);
                    font-size: 0.8rem;
                }
            }
        }
    }
}
</style>
