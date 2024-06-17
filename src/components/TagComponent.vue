<script lang="ts">
import { TypeUpperCase } from '@/store/services/data';
import Vue, { PropType } from 'vue';

type GeoTag =
    | TypeUpperCase.GEOGRAPHIC_BUILDING
    | TypeUpperCase.GEOGRAPHIC_FLOOR
    | TypeUpperCase.GEOGRAPHIC_ROOM;

export default Vue.extend({
    name: 'TagComponent',
    props: {
        type: {
            type: String as PropType<GeoTag>,
            required: true,
        },
    },
});
</script>

<template>
    <p class="type">
        {{ type }}
    </p>
</template>

<style scoped lan="scss">
.type {
    font-size: 0.75rem;
    padding: 0.2rem 0.4rem;
    border-radius: 0.2rem;
    background-color: var(--v-tag-base);
    color: var(--v-white-base);
    width: fit-content;
}
</style>
