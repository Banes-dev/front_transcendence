<template>
	<header class="bg-gray-800 text-gray-300 py-6 mt-auto max-w-6xl mx-auto px-36 rounded-b-xl relative">
		<div class="flex items-center absolute left-5 top-3.5 space-x-1">
			<h2 class="text-white">{{$t('Tournaments')}}</h2>
			<img
				class="relative h-5 w-5"
				src="../assets/img/cup_yellow.png"
				alt="Image de la coupe du tournoi"
			/>
		</div>

		<!-- Traduction -->
		<div class="absolute justify-center space-x-1 mx-10 top-3">
			<button
				@click="showDropdown = !showDropdown"
				class="flex items-center bg-transparent text-white px-1 py-0.5"
			>
				<div v-if="$i18n.locale === 'fr'">
					<i class="fi fi-fr text-1xl mr-2"></i>
				</div>
				<div v-else-if="$i18n.locale === 'en'">
					<i class="fi fi-gb text-1xl mr-2"></i>
				</div>
				<div v-else-if="$i18n.locale === 'es'">
					<i class="fi fi-es text-1xl mr-2"></i>
				</div>
				<span>{{$t('Language', $i18n.locale)}}</span>
			</button>
			<div
				v-if="showDropdown"
				class="absolute mt-4 bg-gray-800 border border-gray-600 rounded-md w-full z-10"
			>
				<ul>
					<li
						v-for="locale in $i18n.availableLocales"
						:key="`locale-${locale}`"
						@click="changeLocale(locale)"
						class="flex items-center justify-center px-4 py-2 text-white hover:text-red-600 cursor-pointer"
					>{{$t('Language', locale)}}
					</li>
				</ul>
			</div>
		</div>
	</header>
	<!-- Profil -->
	<div class="relative flex justify-center">
		<img
			class="h-14 w-14 rounded-xl border-2 border-red-600 absolute -top-10"
			src="../assets/img/default_avatar.png"
			alt="Avatar par défaut"
		/>
		<div
			v-if="!isConnected"
			class="bg-gray-800 border border-gray-600 rounded-md w-26 absolute top-6"
		>
			<ul>
				<li
					v-for="(name, index) in items"
					:key="index"
					@click="handle(index)"
					class="flex items-center justify-center px-4 py-2 text-white hover:text-red-600 cursor-pointer"
				>{{name}}
				</li>
			</ul>
		</div>
	</div>

</template>

<script>
	import { mapActions } from 'vuex';
	export default {
		name: "Header",
		data() {
			return {
				items: [this.$t('Login'), this.$t('Register')],
				showDropdown: false,
				isConnected: false,
				// login_state: false,
				// register_state: false,
			};
		},
		methods: {
			changeLocale(locale) {
				this.$i18n.locale = locale;
				this.showDropdown = false;
			},
			// handle(index) {
			// 	if (index === 0)
			// 	{
			// 		this.login();
			// 	} else if (index === 1)
			// 	{
			// 		this.register();
			// 	}
			// },
			// login() {
			// 	this.login_state = true;
			// },
			// register() {
			// 	this.register_state = true;
			// },
			...mapActions(['OpenLogin']), // Vuex action pour ouvrir le popup
			...mapActions(['OpenRegister']), // Vuex action pour ouvrir le popup
			handle(index) {
				if (index === 0) {
					this.OpenLogin();
				} else if (index === 1) {
					this.OpenRegister();
				}
			},
		},
	};
</script>

<style scoped>
	@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
	@import url("https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css");
</style>
