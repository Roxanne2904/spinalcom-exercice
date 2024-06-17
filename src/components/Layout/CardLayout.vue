<script lang="ts">
import { FrontBuilding, FrontFloor } from '@/store/services/data';
import Vue, { PropType } from 'vue';

export default Vue.extend({
    name: 'CardLayout',

    props: {
        data: {
            type: Object as PropType<FrontBuilding | FrontFloor>,
            required: true,
        },
        setAction: {
            type: Function as PropType<
                (data: FrontBuilding | FrontFloor) => void
            >,
            required: false,
        },
    },
});
</script>

<template>
    <v-row
        v-if="Boolean(setAction)"
        no-gutters
        class="card"
        @click="setAction(data)"
    >
        <v-col class="card-col pa-3"> <slot></slot> </v-col
    ></v-row>
    <v-row v-else no-gutters class="card">
        <v-col class="card-noAction card-noAction-col pa-3">
            <slot></slot> </v-col
    ></v-row>
</template>

<style scoped lang="scss">
.card {
    cursor: pointer;

    &-col {
        display: flex;
        gap: 1rem;
        background-color: var(--v-lighterBackground-base);
        margin: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 0.2rem 0.5rem var(--v-background-base);
        border: solid 1px transparent;
        scale: 1;
        transition: border 0.5s ease-in-out, scale 230ms ease-in-out;
        &:hover {
            border: solid 1px var(--v-primary-base);
            scale: 1.02;
        }
    }
    &-noAction {
        cursor: auto;
        &-col {
            display: flex;
            gap: 1rem;
            background-color: var(--v-lighterBackground-base);
            margin: 1rem;
            border-radius: 0.5rem;
            box-shadow: 0 0.2rem 0.5rem var(--v-background-base);
            border: solid 1px transparent;
        }
    }
}
</style>
