import { ActionContext, Module } from 'vuex';
import { RootState } from '.';
import { FrontFloor } from './services/data';

export interface FloorState {
    currentFloor: null | FrontFloor;
}

const state: FloorState = {
    currentFloor: null,
};

const mutations = {
    setCurrentFloor(state: FloorState, payload: FrontFloor) {
        state.currentFloor = payload;
    },
};

const actions = {
    setFloor(
        { commit }: ActionContext<FloorState, RootState>,
        payload: FrontFloor
    ) {
        commit('setCurrentFloor', payload);
    },
};

const getters = {
    selectedFloor(state: FloorState) {
        return state.currentFloor;
    },
};

export const currentFloorModule: Module<FloorState, RootState> = {
    state,
    mutations,
    actions,
    getters,
};
