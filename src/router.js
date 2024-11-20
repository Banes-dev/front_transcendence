import {createRouter, createWebHistory} from 'vue-router';
import Home from './components/Home/Home.vue';
import Login from './components/Login/Login.vue';
import Register from './components/Register/Register.vue';
import CustomPong from './components/Games/CustomPong.vue';
import CustomTicTacToe from './components/Games/CustomTicTacToe.vue';
import Pong from './components/Games/Pong.vue';
import TicTacToe from './components/Games/TicTacToe.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/login',
		component: Login,
	},
	{
		path: '/register',
		component: Register,
	},
	{
		path: '/custom_pong',
		component: CustomPong,
	},
	{
		path: '/custom_tictactoe',
		component: CustomTicTacToe,
	},
	{
		path: '/pong',
		component: Pong,
	},
	{
		path: '/tictactoe',
		component: TicTacToe,
	},
];

const router = createRouter({
	history: createWebHistory(), // Utilisation de l'historique HTML5
	routes,
});

export default router;
