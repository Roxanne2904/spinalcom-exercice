<script lang="ts">
import CardLayout from '@/components/Layout/CardLayout.vue';
import TagComponent from '@/components/TagComponent.vue';
import { FrontBuilding } from '@/store/services/data';
import Vue, { PropType } from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
    name: 'BuildingCard',

    components: {
        CardLayout,
        TagComponent,
    },
    props: {
        buildingData: {
            type: Object as PropType<FrontBuilding>,
            required: true,
        },
    },

    methods: {
        ...mapActions('currentBuilding', ['setBuilding']),
    },
});
</script>

<template>
    <CardLayout :data="buildingData" :setAction="setBuilding">
        <v-avatar tile size="60">
            <img
                class="buildingCard-image"
                :src="buildingData.picture"
                alt="building image"
            />
        </v-avatar>
        <div class="buildingCard-infos">
            <div class="buildingCard-infos-title">
                <p class="buildingCard-infos-title-name text-h6">
                    {{ buildingData.name }}
                </p>
                <TagComponent :type="buildingData.type" />
            </div>

            <em class="buildingCard-infos-id">{{ buildingData.id }}</em>
        </div>
    </CardLayout>
</template>

<style scoped lang="scss">
.buildingCard {
    &-image {
        border-radius: 0.2rem;
    }
    &-infos {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        &-title {
            &-name {
                font-weight: bolder;
                color: var(--v-text-base);
            }
        }
        &-id {
            color: var(--v-tag-base);
            font-size: 0.8rem;
        }
    }
}
</style>
