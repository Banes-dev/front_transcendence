import {createStore} from 'vuex';

export default createStore({
	state: {
		login_state: false,
	},
	getters: {
		GetLoginState(state) {
			return state.login_state
		}
	},
	mutations: {
		SetLoginState(state, value) {
			state.login_state = value;
		},
	},
	actions: {
		OpenLogin({commit}) {
			commit('SetLoginState', true);
		},
		CloseLogin({commit}) {
			commit('SetLoginState', false);
		},
	},
});
