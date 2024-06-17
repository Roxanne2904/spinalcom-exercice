import { ActionContext, Module } from 'vuex';
import { RootState } from '.';
import { FrontBuilding } from './services/data';

export interface BuildingState {
    currentBuilding: null | FrontBuilding;
}

const state: BuildingState = {
    currentBuilding: null,
};

const mutations = {
    setCurrentBuilding(state: BuildingState, payload: FrontBuilding) {
        state.currentBuilding = payload;
    },
};

const actions = {
    setBuilding(
        { commit }: ActionContext<BuildingState, RootState>,
        payload: FrontBuilding
    ) {
        commit('setCurrentBuilding', payload);
    },
};

const getters = {
    selectedBuilding(state: BuildingState) {
        return state.currentBuilding;
    },
};

export const currentBuildingModule: Module<BuildingState, RootState> = {
    state,
    mutations,
    actions,
    getters,
};
