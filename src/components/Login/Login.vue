<script setup>
	import LoopVideo from '../LoopVideo.vue'
</script>

<template>
	<!-- <div v-if="GetLoginState" class="fixed inset-0 flex flex-col items-center justify-center"> -->
	<div class="fixed inset-0 flex flex-col items-center justify-center"> 
		<LoopVideo/>
		<div class="relative bg-gray-900 w-full max-w-md p-8 rounded-md">
			<div class="absolute top-3 right-3">
				<router-link to="/" @click="return_home" class="text-yellow-400 px-1.5 py-0.5 rounded-md bg-red-600 hover:bg-red-700">✘</router-link>
			</div>
			<!-- <h2 class="flex items-center justify-center text-white">{{$t('Login')}}</h2> -->
			<form @submit.prevent="submitLogin">
				<div class="mb-4">
					<label for="pseudo" class="block text-sm font-medium text-gray-300">{{$t('Pseudo')}}</label>
					<input
					type="pseudo"
					id="pseudo"
					v-model="pseudo"
					required
					class="w-full mt-1 p-2 rounded-md bg-gray-700 border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
					/>
				</div>
				<div class="mb-6">
					<label for="password" class="block text-sm font-medium text-gray-300">{{$t('Password')}}</label>
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
					class="w-full bg-red-600 hover:bg-red-700 text-yellow-400 font-medium py-2 px-4 rounded-md"
				>{{$t('Login')}}
				</button>
			</form>
		</div>
	</div>
</template>
  
<script>
	import {mapGetters, mapActions} from 'vuex';

	export default {
		name: 'Login',
		data() {
			return {
				pseudo: '',
				password: '',
				table_login: {
					username: "NULL",
					password: "NULL",
				},
			};
		},
		methods: {
			...mapActions(['CloseConnect']),
			// api rest envoie de pseudo et password
			async submitLogin() {
				console.log(this.pseudo);
				console.log(this.password);
				this.table_login.username = this.pseudo;
				this.table_login.password = this.password;
				const result = await this.postlogin();
				if (result == 1)
				{
					this.$router.push('/');
				}
				console.log("recup erreur de login");
			},
			return_home() {
				this.CloseConnect();
			},
			async postlogin() {
				console.log("post login api");
				try {
					const response = await apiClient.post('login/', this.table_login);
					console.log('Données envoyées avec succès :', response.data);
					return (1);
				} catch (error) {;
					console.error('Erreur lors de l\'envoi des données :', error.response ? error.response.data : error.message);
					return (0);
				}
			},
		},
	};
</script>

<style>
	body.no-scroll {
		overflow: hidden;
	}
</style>
