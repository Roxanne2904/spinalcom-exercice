<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'SearchLayout',
});
</script>

<template>
    <v-row no-gutters class="geo-row">
        <slot></slot>
    </v-row>
</template>

<style scoped lang="scss">
.geo {
    &-row {
        border-bottom: solid 1px var(--v-greyBackground-base);
        padding-bottom: 1rem;
        flex-grow: 0;
    }
}
</style>
