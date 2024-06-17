<script lang="ts">
import CardInfos from '@/components/CardInfos.vue';
import { FrontFloor } from '@/store/services/data';
import Vue, { PropType } from 'vue';

type Tag = 'infos' | 'total';

export default Vue.extend({
    name: 'FloorSide',
    props: {
        floor: {
            type: Object as PropType<FrontFloor>,
            required: true,
        },
        tag: {
            type: String as PropType<Tag>,
        },
    },

    components: { CardInfos },
});
</script>

<template>
    <CardInfos v-if="tag === 'infos'" :data="floor" side="floor" />
    <v-row no-gutters v-else class="totalRooms">
        <v-col class="totalRooms-col">
            <p class="totalRooms-col-nbs text-h2">
                {{ floor.nbsRooms }}
            </p>
            <p class="totalRooms-col-text text-h7">{{ 'Pièces' }}</p>
        </v-col>
    </v-row>
</template>

<style scoped lang="scss">
.totalRooms {
    display: flex;

    align-items: center;
    &-col {
        display: flex;
        gap: 1.5rem;
        flex-direction: column;
        align-items: center;
        &-nbs {
            font-weight: 600;
            color: var(--v-text-base);
        }
        &-text {
            color: var(--v-text-base);
            font-weight: 500;
        }
    }
}
</style>
