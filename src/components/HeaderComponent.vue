<script lang="ts">
import Vue from 'vue';

interface Data {
    open: boolean;
}

export default Vue.extend({
    name: 'HeaderComponent',
    data: (): Data => {
        return {
            open: false,
        };
    },
    methods: {
        toogleOpen(): void {
            this.open = !this.open;
        },
    },
});
</script>

<template>
    <header class="header">
        <p class="text-h4 header-title">Analyse de l'occupation</p>
        <div class="header-avatar">
            <v-avatar size="40">
                <img src="https://picsum.photos/200/300" alt="Profil Image" />
            </v-avatar>
            <div @click="toogleOpen" class="d-flex header-avatar-reviewer">
                <p class="text-subtitle-1 ma-0">Reviewer</p>
                <v-icon v-if="!open">mdi-chevron-down</v-icon>
                <v-icon v-else>mdi-chevron-up</v-icon>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
.header {
    background-color: var(--v-background-base);
    color: var(--v-text-base);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    & > p {
        color: var(--v-text-base);
        font-weight: 600;
    }
    &-avatar {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        & > p {
            color: var(--v-text-base);
        }
        &-reviewer {
            gap: 0.5rem;
            cursor: pointer;
        }
    }
}
</style>
