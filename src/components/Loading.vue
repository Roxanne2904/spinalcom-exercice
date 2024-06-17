<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'RoomCard',
});
</script>

<template>
    <div class="loading">
        <v-progress-circular
            class="loading d-flex"
            :size="20"
            :width="2"
            color="primary"
            indeterminate
        ></v-progress-circular>
    </div>
</template>

<style scoped>
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
</style>
