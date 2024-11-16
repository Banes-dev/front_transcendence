import {createStore} from 'vuex';

export default createStore({
	state: {
		connect_state: false,
		// login_state: false,
		// register_state: false,
	},
	getters: {
		GetConnectState(state) {
			return state.connect_state
		},
		// GetLoginState(state) {
		// 	return state.login_state
		// },
		// GetRegisterState(state) {
		// 	return state.register_state
		// }
	},
	mutations: {
		SetConnectState(state, value) {
			state.connect_state = value;
		},
		// SetLoginState(state, value) {
		// 	state.login_state = value;
		// },
		// SetRegisterState(state, value) {
		// 	state.register_state = value;
		// },
	},
	actions: {
		OpenConnect({commit}) {
			commit('SetConnectState', true);
		},
		CloseConnect({commit}) {
			commit('SetConnectState', false);
		},
		// OpenLogin({commit}) {
		// 	commit('SetLoginState', true);
		// },
		// CloseLogin({commit}) {
		// 	commit('SetLoginState', false);
		// },
		// OpenRegister({commit}) {
		// 	commit('SetRegisterState', true);
		// },
		// CloseRegister({commit}) {
		// 	commit('SetRegisterState', false);
		// },
	},
});
