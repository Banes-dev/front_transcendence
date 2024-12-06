import { createStore } from 'vuex';

export default createStore({
	state: {
		user: null,
		connect_state: false,
		color1: "#ff0000",
		color2: "#ffd200",
		ball_speed_time: false,
		ball_speed_manual: 1,
		remove_hit: false,
		layout: false,
	},
	getters: {
		GetUserState(state) {
			return state.user;
		},
		GetConnectState(state) {
			return state.connect_state;
		},
		GetColor1State(state) {
			return state.color1;
		},
		GetColor2State(state) {
			return state.color2;
		},
		GetBallSpeedTimeState(state) {
			return state.ball_speed_time;
		},
		GetBallSpeedManualState(state) {
			return state.ball_speed_manual;
		},
		GetRemoveHitState(state) {
			return state.remove_hit;
		},
		GetLayoutState(state) {
			return state.layout;
		},
	},
	mutations: {
		SetUser(state, user) {
			state.user = user;
			localStorage.setItem('user', JSON.stringify(user));
		},
		ClearUser(state) {
			state.user = null;
			localStorage.removeItem('user');
		},
		SetConnectState(state, value) {
			state.connect_state = value;
		},
		SetColor1State(state, value) {
			state.color1 = value;
			localStorage.setItem('color1', value);
		},
		SetColor2State(state, value) {
			state.color2 = value;
			localStorage.setItem('color2', value);
		},
		SetBallSpeedTimeState(state, value) {
			state.ball_speed_time = value;
			localStorage.setItem('ball_speed_time', JSON.stringify(value));
		},
		SetBallSpeedManualState(state, value) {
			state.ball_speed_manual = value;
			localStorage.setItem('ball_speed_manual', JSON.stringify(value));
		},
		SetRemoveHitState(state, value) {
			state.remove_hit = value;
			localStorage.setItem('remove_hit', JSON.stringify(value));
		},
		SetLayoutState(state, value) {
			state.layout = value;
			localStorage.setItem('layout', JSON.stringify(value));
		},
	},
	actions: {
		Login({ commit }, userData) {
			commit('SetUser', userData);
		},
		Logout({ commit }) {
			commit('ClearUser');
		},
		InitializeStore({ commit }) {
			const user = localStorage.getItem('user');
			const color1 = localStorage.getItem('color1');
			const color2 = localStorage.getItem('color2');
			const ball_speed_time = localStorage.getItem('ball_speed_time');
			const ball_speed_manual = localStorage.getItem('ball_speed_manual');
			const remove_hit = localStorage.getItem('remove_hit');
			const layout = localStorage.getItem('layout');

			if (user) {
				commit('SetUser', JSON.parse(user));
				// commit('SetColor1State', color1 || "#ff0000");
				// commit('SetColor2State', color2 || "#ffd200");
				// commit('SetBallSpeedTimeState', JSON.parse(ball_speed_time) || false);
				// commit('SetBallSpeedManualState', JSON.parse(ball_speed_manual) || 1);
				// commit('SetRemoveHitState', JSON.parse(remove_hit) || false);
				// commit('SetLayoutState', JSON.parse(layout) || false);
			}
			commit('SetColor1State', color1 || "#ff0000");
			commit('SetColor2State', color2 || "#ffd200");
			commit('SetBallSpeedTimeState', JSON.parse(ball_speed_time) || false);
			commit('SetBallSpeedManualState', JSON.parse(ball_speed_manual) || 1);
			commit('SetRemoveHitState', JSON.parse(remove_hit) || false);
			commit('SetLayoutState', JSON.parse(layout) || false);
		},
		OpenConnect({commit}) {
			commit('SetConnectState', true);
		},
		CloseConnect({commit}) {
			commit('SetConnectState', false);
		},
	},
});
