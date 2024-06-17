<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'ErrorComponent',
    props: {
        requestStatus: {
            required: true,
            type: Number,
        },
        error: {
            required: true,
            type: String,
        },
    },
});
</script>

<template>
    <v-container fluid class="screenCenter">
        <v-row class="d-flex justify-center align-center">
            <v-col
                cols="12"
                sm="6"
                md="4"
                class="d-flex justify-center align-center"
            >
                <v-card>
                    <v-card-text>
                        <v-card-title>
                            <h1 class="text-h2 errorColor">
                                {{ `Error ${requestStatus}` }}
                            </h1>
                        </v-card-title>
                        <div class="d-flex flex-column gap pa-2">
                            <p class="text-subtitle-1 text-center">
                                {{ error }}
                            </p>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
