<script lang="ts">
import CardLayout from '@/components/Layout/CardLayout.vue';
import TagComponent from '@/components/TagComponent.vue';
import { FrontFloor } from '@/store/services/data';

import Vue, { PropType } from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
    name: 'FloorCard',

    components: {
        CardLayout,
        TagComponent,
    },

    props: {
        floorData: {
            type: Object as PropType<FrontFloor>,
            required: true,
        },
    },

    methods: {
        ...mapActions('currentFloor', ['setFloor']),
    },
});
</script>

<template>
    <CardLayout :data="floorData" :setAction="setFloor">
        <div class="floorCard-infos">
            <div class="floorCard-infos-title">
                <p class="floorCard-infos-title-name text-h6">
                    {{ floorData.name }}
                </p>
                <TagComponent :type="floorData.type" />
            </div>

            <em class="floorCard-infos-id">{{ floorData.id }}</em>
        </div>
    </CardLayout>
</template>

<style scoped lang="scss">
.floorCard {
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
