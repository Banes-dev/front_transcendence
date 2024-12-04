<script setup>
	import LoopVideo from '../LoopVideo.vue'
	import ImageUpload from './ImageUpload.vue'
</script>

<template>
	<!-- <div v-if="GetRegisterState" class="fixed inset-0 flex flex-col items-center justify-center"> -->
	<div class="fixed inset-0 flex flex-col items-center justify-center">
		<LoopVideo/>
		<div class="relative bg-gray-900 w-full sm:max-w-md max-w-xs p-8 rounded-md">
			<div class="absolute top-3 right-3">
				<router-link to="/" @click="return_home" class="text-yellow-400 px-1.5 py-0.5 rounded-md bg-red-600 hover:bg-red-700">✘</router-link>
			</div>
			<!-- <h2 class="flex items-center justify-center text-white">{{$t('Register')}}</h2> -->
			<form @submit.prevent="submitRegister">
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
				<div class="mb-4">
					<label for="password" class="block text-sm font-medium text-gray-300">{{$t('Password')}}</label>
					<input
					type="password"
					id="password"
					v-model="password"
					required
					class="w-full mt-1 p-2 rounded-md bg-gray-700 border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
					/>
				</div>
				<div class="mb-4">
					<label for="confirm_password" class="block text-sm font-medium text-gray-300">{{$t('Confirm_Password')}}</label>
					<input
					type="password"
					id="confirm_password"
					v-model="confirm_password"
					required
					class="w-full mt-1 p-2 rounded-md bg-gray-700 border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
					/>
				</div>
				<h2 v-if="password !== confirm_password" class="mb-4 flex items-center justify-center text-red-700 font-bold">{{$t('Error_Doublemdp')}}</h2>
				<div class="mb-6">
					<label for="confirm_password" class="block text-sm font-medium text-gray-300">{{$t('Profile_Image')}}</label>
					<ImageUpload @image-selected="handleImageSelected"/>
				</div>
				<div class="mb-6">
					<input type="checkbox" id="checkbox" v-model="check_conditions"/>
					<label class="text-sm font-medium text-gray-300 ml-2" for="checkbox">{{$t('Conditions1')}}<a href="/conditions" class="text-blue-500">{{$t('Conditions2')}}</a>{{$t('Conditions3')}}</label>
				</div>
				<h2 v-if="!check_conditions" class="mb-4 flex items-center justify-center text-red-700 font-bold">{{$t('Error_Conditions')}}</h2>
				<button
					v-if="password === confirm_password && check_conditions == true"
					type="submit"
					class="w-full bg-red-600 hover:bg-red-700 text-yellow-400 font-medium py-2 px-4 rounded-md"
				>{{$t('Register')}}
				</button>
			</form>
		</div>
	</div>
</template>
  
<script>
	import {mapGetters, mapActions, mapMutations} from 'vuex';
	import apiClient from '@/axios';

	export default {
		name: 'Register',
		data() {
			return {
				pseudo: '',
				password: '',
				confirm_password: '',
				img: null,
				img_link: null,
				check_conditions: false,
				table_register: {
					username: "NULL",
					password: "NULL",
					img: "NULL",
				},
			};
		},
		methods: {
			...mapActions(['CloseConnect']),
			...mapActions(['Login']),
			// api rest envoie de pseudo et password
			async submitRegister() {
				// console.log(this.pseudo);
				// console.log(this.password);
				// console.log(this.confirm_password);
				// console.log(this.img);
				this.table_register.username = this.pseudo;
				this.table_register.password = this.password;
				this.table_register.img = this.img;
				// if (this.img) {
				// 	this.table_register.img = await this.convertToBase64(this.img);
				// }
				console.log(this.table_register.username);
				console.log(this.table_register.password);
				console.log(this.table_register.img);
				const result = await this.postregister();
				if (result == 1)
				{
					this.$router.push('/');
				}
				else {
					console.log("recup erreur de register");
				}
			},
			return_home() {
				this.CloseConnect();
			},
			handleImageSelected(file) {
				this.img = file;
				this.img_link = URL.createObjectURL(file);
			},
			convertToBase64(file) {
				return new Promise((resolve, reject) => {
					const reader = new FileReader();
					reader.onloadend = () => {
						// resolve(reader.result.split(',')[1]); Retirer le préfixe base64
						resolve(reader.result); // Retirer le préfixe base64
					};
					reader.onerror = (error) => {
						reject(error);
					};
					reader.readAsDataURL(file);
				});
			},
			async postregister() {
				console.log("post register api");
				try {
					const response = await apiClient.post('register/', this.table_register);
					console.log('Données envoyées avec succès :', response.data);
					console.log(response.data);
					this.Login(response.data);
					return (1);
				} catch (error) {
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
