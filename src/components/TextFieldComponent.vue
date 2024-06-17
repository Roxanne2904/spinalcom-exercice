<script lang="ts">
import Vue from 'vue';

interface Data {
    value: string;
}

export default Vue.extend({
    name: 'TextFieldComponent',
    data(): Data {
        return {
            value: '',
        };
    },
    props: {
        placeholder: {
            type: String,
            required: true,
        },
        leftIcon: {
            type: String,
            required: true,
        },
        rightIcon: {
            type: String,
            required: true,
        },
    },
    methods: {
        updateValue(event: Event) {
            const input = event.target as HTMLInputElement;
            this.value = input.value;
            this.$emit('input', this.value);
        },
    },
});
</script>

<template>
    <div class="input-content py-1 px-3 d-flex">
        <div class="d-flex input-content-icon-content">
            <v-icon class="input-content-icon-content-icon">
                {{ `${leftIcon}` }}
            </v-icon>
        </div>
        <input
            v-model="value"
            @input="updateValue"
            type="text"
            :placeholder="placeholder"
            class="input-content-input pa-2"
        />
        <div class="d-flex input-content-icon-content">
            <v-icon class="input-content-icon-content-icon">
                {{ `${rightIcon}` }}</v-icon
            >
        </div>
    </div>
</template>

<style scoped lang="scss">
.input-content {
    background-color: var(--v-greyBackground-base);
    border-radius: 1.8rem;
    width: 100%;
    justify-content: space-between;
    gap: 0.5rem;
    border: 1px solid transparent;
    box-shadow: 0 0.2rem 0.5rem var(--v-background-base);
    transition: border 0.5s ease-in-out;
    &-icon-content {
        display: flex;
        background-color: var(--v-primary-base) !important;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        padding: 0.5rem;
        height: 30px;
        width: 30px;
        position: relative;
        top: 0.3rem;

        &-icon {
            color: var(--v-white-base) !important;
            font-size: 1.1rem !important;
        }
    }
    & > .v-icon {
        color: var(--v-white-base) !important;
    }

    &-input {
        border-radius: 0.5rem;
        flex-grow: 1;
        color: var(--v-text-base);

        &:focus {
            outline: none;
        }
    }

    &:focus-within {
        border: solid 1px var(--v-primary-base);
    }
}
</style>
