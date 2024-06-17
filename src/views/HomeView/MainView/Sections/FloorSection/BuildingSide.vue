<script lang="ts">
import CardInfos from '@/components/CardInfos.vue';
import { FrontBuilding, mockedBuilding } from '@/store/services/data';
import Vue, { PropType } from 'vue';
import { mapGetters } from 'vuex';

interface Data {
    currentBuilding: FrontBuilding | null;
}

export default Vue.extend({
    name: 'BuildingSide',
    props: {
        defaultBuilding: {
            type: Object as PropType<FrontBuilding>,
            required: true,
        },
    },
    data(): Data {
        return {
            currentBuilding: null,
        };
    },
    components: { CardInfos },
    computed: {
        ...mapGetters('currentBuilding', ['selectedBuilding']),
        getBuilding(): FrontBuilding {
            if (!this.$props.defaultBuilding) return mockedBuilding;
            if (!this.currentBuilding) return this.$props.defaultBuilding;
            return this.currentBuilding;
        },
    },
    methods: {
        updateBuilding() {
            const storedBuilding: FrontBuilding =
                this.$store.getters['currentBuilding/selectedBuilding'];

            if (storedBuilding) return (this.currentBuilding = storedBuilding);
        },
    },
    watch: {
        selectedBuilding() {
            this.updateBuilding();
        },
    },
});
</script>

<template>
    <CardInfos :data="getBuilding" side="building" />
</template>
