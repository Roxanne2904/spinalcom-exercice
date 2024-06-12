import Vue from 'vue';
import Vuex, { ActionContext } from 'vuex';

Vue.use(Vuex);

interface Room {
    dynamicId: number;
    staticId: string;
    name: string;
    type: string;
    children: Room[];
}

interface Floor {
    dynamicId: number;
    staticId: string;
    name: string;
    type: string;
    children: Room[];
}

interface Building {
    dynamicId: number;
    staticId: string;
    name: string;
    type: string;
    children: Floor[];
}

export interface Context {
    dynamicId: number;
    staticId: string;
    name: string;
    type: string;
    context: string;
    children: Building[];
}

interface State {
    data: null | Context[];
    error: string;
    loading: boolean;
}

export default new Vuex.Store<State>({
    state: {
        data: null,
        error: '',
        loading: false,
    },
    mutations: {
        setData(state: State, data: Context) {
            state.data = [data];
        },
        setError(state: State, error: string) {
            state.error = error;
        },
        setLoading(state: State, status: boolean) {
            state.loading = status;
        },
    },
    actions: {
        async fetchData({ commit }: ActionContext<State, State>) {
            commit('setLoading', true);
            try {
                const response = await fetch(
                    'https://api-developers.spinalcom.com/api/v1/geographicContext/space',
                    {
                        method: 'GET',
                        headers: {
                            accept: 'application/json',
                        },
                    }
                );

                if (!response.ok)
                    throw new Error('Oh no! Cannot get data correctly');

                const retrieveData = await response.json();

                commit('setData', retrieveData);
            } catch (error: Error | unknown) {
                if (error instanceof Error) commit('setError', error.message);
                commit('setError', 'there is an error for sure !');
            } finally {
                commit('setLoading', false);
            }
        },
    },
    getters: {
        data(state: State) {
            return state.data;
        },
        error(state: State) {
            return state.error;
        },
        loading(state: State) {
            return state.loading;
        },
    },
});
