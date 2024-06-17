<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'LoadingComponent',
});
</script>

<template>
    <v-container fluid class="screenCenter">
        <v-row class="d-flex justify-center align-center">
            <v-col
                cols="12"
                sm="6"
                md="4"
                class="d-flex justify-center align-ceneter"
            >
                <v-progress-circular
                    :size="70"
                    :width="7"
                    color="primary"
                    indeterminate
                ></v-progress-circular>
            </v-col>
        </v-row>
    </v-container>
</template>

<styled scoped lang="scss">
.screenCenter {
    position: absolute;
    top: 40%;
}
</styled>
