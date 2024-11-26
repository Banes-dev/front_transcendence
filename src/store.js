import {createStore} from 'vuex';

export default createStore({
	state: {
		connect_state: false,
		color1: "#ff0000",
		color2: "#ff0000",
		ball_speed_time: false,
		ball_speed_manual: 1,
		remove_hit: false,
	},
	getters: {
		GetConnectState(state) {
			return state.connect_state
		},
	},
	mutations: {
		SetConnectState(state, value) {
			state.connect_state = value;
		},
	},
	actions: {
		OpenConnect({commit}) {
			commit('SetConnectState', true);
		},
		CloseConnect({commit}) {
			commit('SetConnectState', false);
		},
	},
});
