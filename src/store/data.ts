import { ActionContext, Module } from 'vuex';
import { RootState } from '.';
import { FrontBuilding, buildingDataBackToFront } from './services/data';

export enum Type {
    GEOGRAPHIC_CONTEXT = 'geographicContext',
    GEOGRAPHIC_BUILDING = 'geographicBuilding',
    GEOGRAPHIC_FLOOR = 'geographicFloor',
    GEOGRAPHIC_ROOM = 'geographicRoom',
}

export type SpaceType =
    | Type.GEOGRAPHIC_CONTEXT
    | Type.GEOGRAPHIC_BUILDING
    | Type.GEOGRAPHIC_FLOOR
    | Type.GEOGRAPHIC_ROOM;

export interface Room {
    dynamicId: number;
    staticId: string;
    name: string;
    type: Type.GEOGRAPHIC_ROOM;
    children: Room[];
}

export interface Floor {
    dynamicId: number;
    staticId: string;
    name: string;
    type: Type.GEOGRAPHIC_FLOOR;
    children: Room[];
}

export interface Building {
    dynamicId: number;
    staticId: string;
    name: string;
    type: Type.GEOGRAPHIC_BUILDING;
    children: Floor[];
}

export interface Context {
    dynamicId: number;
    staticId: string;
    name: string;
    type: Type.GEOGRAPHIC_CONTEXT;
    context: 'SpinalContext';
    children: Building[];
}

export interface DataState {
    data: null | Context[];
    occupation: number;
    error: null | string;
    loading: boolean;
    requestStatus: null | number;
}

const header = {
    method: 'GET',
    headers: {
        accept: 'application/json',
    },
};

const state: DataState = {
    data: null,
    occupation: 0,
    error: null,
    loading: false,
    requestStatus: null,
};

const mutations = {
    setData(state: DataState, data: Context) {
        state.data = [data];
    },
    setOccupation(state: DataState) {
        state.occupation = state.occupation += 1;
    },
    setResetOccupation(state: DataState) {
        state.occupation = 0;
    },
    setError(state: DataState, error: string) {
        state.error = error;
    },
    setLoading(state: DataState, status: boolean) {
        state.loading = status;
    },
    setRequestStatus(state: DataState, status: number) {
        state.requestStatus = status;
    },
};

const actions = {
    incrementOccupation({ commit }: ActionContext<DataState, RootState>) {
        commit('setOccupation');
    },
    resetOccupation({ commit }: ActionContext<DataState, RootState>) {
        commit('setResetOccupation');
    },
    async fetchData({ commit }: ActionContext<DataState, RootState>) {
        commit('setLoading', true);
        try {
            const response = await fetch(
                'https://api-developers.spinalcom.com/api/v1/geographicContext/space',
                header
            );

            if (!response.ok) {
                commit('setRequestStatus', response.status);
                throw new Error('Oh no! Cannot get data correctly');
            }

            const retrieveData = await response.json();

            commit('setData', retrieveData);
            commit('setRequestStatus', response.status);
        } catch (error: Error | unknown) {
            commit('setLoading', false);
            if (error instanceof Error) commit('setError', error.message);
        } finally {
            commit('setLoading', false);
        }
    },
};

const getters = {
    data(state: DataState) {
        return state.data;
    },
    buildingsList(state: DataState): FrontBuilding[] {
        if (state.data) {
            const buildingList = state.data[0].children;
            return buildingDataBackToFront(buildingList);
        }
        return [];
    },
    occupation(state: DataState): string {
        return String(state.occupation);
    },
    error(state: DataState) {
        return state.error;
    },
    loading(state: DataState) {
        return state.loading;
    },
    requestStatus(state: DataState) {
        return state.requestStatus;
    },
};

export const dataModule: Module<DataState, RootState> = {
    state,
    mutations,
    actions,
    getters,
};
