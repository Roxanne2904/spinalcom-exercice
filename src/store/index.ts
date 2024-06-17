import Vue from 'vue';
import Vuex from 'vuex';
import { dataModule, type DataState } from './data';
import { BuildingState, currentBuildingModule } from './currentBuilding';
import { FloorState, currentFloorModule } from './currentFloor';

Vue.use(Vuex);

export interface RootState {
    data: DataState;
    currentBuilding: BuildingState;
    currentFloor: FloorState;
}

export default new Vuex.Store<RootState>({
    modules: {
        data: {
            namespaced: true,
            ...dataModule,
        },
        currentBuilding: {
            namespaced: true,
            ...currentBuildingModule,
        },
        currentFloor: {
            namespaced: true,
            ...currentFloorModule,
        },
    },
});
