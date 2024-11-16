import {createRouter, createWebHistory} from 'vue-router';
import Header from './components/Home/Header.vue';
import Login from './components/Login/Login.vue';
import Register from './components/Register/Register.vue';

const routes = [
	// {
	// 	path: '/',
	// 	name: 'Home',
	// 	component: Header,
	// },
	{
		path: '/login',
		component: Login,
	},
	{
		path: '/register',
		component: Register,
	},
];

const router = createRouter({
	history: createWebHistory(), // Utilisation de l'historique HTML5
	routes,
});

export default router;
