<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'ListLayout',
});
</script>

<template>
    <v-container class="geoList" fluid>
        <div no-gutters class="geoList-row">
            <div class="geoList-row-list pa-1">
                <div class="geoList-row-list-cards">
                    <slot></slot>
                </div>
            </div>
        </div>
    </v-container>
</template>

<style scoped lang="scss">
.geoList {
    background-color: var(--v-lighterBackground-base);
    border-radius: 0.5rem;
    flex-grow: 1;
    padding: 1rem 0.2rem 0 0.2rem;
    &-row {
        height: 100%;

        &-list {
            height: 100%;
            border-radius: 0.5rem;
            background-color: var(--v-greyBackground-base);
            &-cards {
                min-height: 100%;
                max-height: 500px;
                overflow: auto;
            }
        }
    }
}
</style>
