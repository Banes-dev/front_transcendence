import {createStore} from 'vuex';

export default createStore({
	state: {
		login_state: false,
		register_state: false,
	},
	getters: {
		GetLoginState(state) {
			return state.login_state
		},
		GetRegisterState(state) {
			return state.register_state
		}
	},
	mutations: {
		SetLoginState(state, value) {
			state.login_state = value;
		},
		SetRegisterState(state, value) {
			state.register_state = value;
		},
	},
	actions: {
		OpenLogin({commit}) {
			commit('SetLoginState', true);
		},
		CloseLogin({commit}) {
			commit('SetLoginState', false);
		},
		OpenRegister({commit}) {
			commit('SetRegisterState', true);
		},
		CloseRegister({commit}) {
			commit('SetRegisterState', false);
		},
	},
});
