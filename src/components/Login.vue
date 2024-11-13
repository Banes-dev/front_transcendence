<script setup>
	import LoopVideo from './LoopVideo.vue'
</script>

<template>
	<div v-if="GetLoginState" class="fixed inset-0 flex flex-col items-center justify-center"> 
		<LoopVideo/>
		<div class="relative bg-gray-800 w-full max-w-lg h-full max-h-32 rounded-md">
			<div class="absolute top-2 right-2 px-2 py-0 rounded-md bg-yellow-400 hover:bg-yellow-600">
				<button @click="CloseLogin" class="text-red-600">x</button>
			</div>
		</div>
	</div>
</template>
  
<script>
	import {mapGetters, mapActions} from 'vuex';

	export default {
		name: 'Login',
		computed: {
			...mapGetters(['GetLoginState']),
		},
		methods: {
			...mapActions(['CloseLogin']),
		},
	};
</script>
  
<style scoped>
	@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>






<!-- <template>
	<div
		v-if="GetLoginState"
		class="fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center z-50"
		> -->
		<!-- Bouton de fermeture -->
		<!-- <div class="absolute top-4 right-4">
			<button @click="CloseLogin" class="text-gray-400 hover:text-white text-2xl">×</button>
		</div> -->
	
		<!-- Contenu principal de la page de connexion -->
		<!-- <main class="w-full max-w-md p-8 bg-gray-800 rounded-md shadow-lg">
			<h1 class="text-2xl font-bold mb-4 text-center">Login</h1>
			<form @submit.prevent="submitLogin">
			<div class="mb-4">
				<label for="email" class="block text-sm font-medium text-gray-300">Email</label>
				<input
				type="email"
				id="email"
				v-model="email"
				required
				class="w-full mt-1 p-2 rounded-md bg-gray-700 border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
				/>
			</div>
			<div class="mb-6">
				<label for="password" class="block text-sm font-medium text-gray-300">Password</label>
				<input
				type="password"
				id="password"
				v-model="password"
				required
				class="w-full mt-1 p-2 rounded-md bg-gray-700 border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
				/>
			</div>
			<button
				type="submit"
				class="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md"
			>
				Login
			</button>
			</form>
		</main>
	</div>
</template>
  
<script>
	import {mapGetters, mapActions} from 'vuex';
	
	export default {
		name: 'Login',
		data() {
		return {
			email: '',
			password: '',
		};
		},
		computed: {
		...mapGetters(['GetLoginState']), // Vérifie si le popup doit être visible
		},
		methods: {
		...mapActions(['CloseLogin']), // Permet de fermer le popup
		submitLogin() {
			// Remplacez par votre logique d'authentification
			console.log('Email:', this.email);
			console.log('Password:', this.password);
			alert('Login successful!');
			this.CloseLogin(); // Ferme le popup après une connexion réussie
		},
		},
		watch: {
			GetLoginState(newValue) {
				if (newValue) {
				document.body.classList.add('no-scroll');
				} else {
				document.body.classList.remove('no-scroll');
				}
			},
		},
	};
</script>

<style>
	body.no-scroll {
		overflow: hidden;
	}
</style> -->
