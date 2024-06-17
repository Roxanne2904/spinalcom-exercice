<script lang="ts">
import { FrontBuilding, FrontFloor } from '@/store/services/data';
import Vue, { PropType } from 'vue';
import { mapGetters } from 'vuex';

interface Data {
    floorOccupation: number;

    loading: boolean;
}

export default Vue.extend({
    name: 'CardInfos',
    data(): Data {
        return {
            floorOccupation: 0,

            loading: false,
        };
    },

    props: {
        data: {
            type: Object as PropType<FrontBuilding | FrontFloor>,
            required: true,
        },
        side: {
            type: String as PropType<'floor' | 'building'>,
        },
    },
    computed: {
        ...mapGetters('data', {
            occupation: 'occupation',
        }),
    },
});
</script>

<template>
    <v-container class="cardInfo">
        <v-row no-gutters class="cardInfo-title"
            ><v-col class="cardInfo-title-name text-h2">{{ data.name }}</v-col>
            <v-col class="cardInfo-title-type">
                <em>{{ data.type }}</em></v-col
            ></v-row
        >
        <v-row no-gutters>
            <v-col class="cardInfo-id">
                <p>{{ 'DYNAMICID:' }}</p>
                {{ data.id }}
            </v-col></v-row
        >
    </v-container>
</template>

<style scoped lang="scss">
.cardInfo {
    padding: 2.2rem 2rem;
    display: flex;
    flex-flow: column;
    gap: 3rem;
    height: 100%;
    &-title {
        display: flex;
        flex-flow: column;
        width: fit-content;
        gap: 0.5rem;
        &-name {
            font-weight: bolder;
            color: var(--v-text-base);
        }
        &-type {
            color: var(--v-text-base);
        }
    }
    &-id {
        display: flex;
        gap: 0.5rem;
        font-size: 0.8rem;
        font-weight: 600;
        width: fit-content;
        align-items: center;
        & > p {
            font-size: 0.8rem;
            color: var(--v-primary-base);
            font-weight: 600;
        }
    }
}
</style>
