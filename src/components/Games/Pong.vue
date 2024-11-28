<script setup>
	import KeybindInfo from './KeybindInfo.vue'
</script>

<template>
	<div class="w-full h-screen flex justify-center items-center bg-gray-900">
		<canvas ref="PongCanvas" :style="{borderColor: GetColor2State}" class="relative w-11.5/12 h-11/12 border-4 rounded-lg shadow-lg"></canvas>
		<router-link
			to="/"
			class="absolute top-0 md:left-0 justify-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-gradient-to-br from-sky-800 to-sky-500 hover:bg-gradient-to-bl text-xl text-center px-5 py-3 rounded-b-lg md:rounded-none md:rounded-br-lg shadow-lg"
		><i class="fa-solid fa-left-long mr-3"></i> {{$t('Back')}}
		</router-link>

		<img
			class="absolute -left-12"
			src="../../assets/img/lantern_long.png"
			alt="Lanterne Joueur Gauche"
			:style="{filter: `drop-shadow(0px 0px 20px ${GetColor1State})`}"
		/>
		<img
			class="absolute -right-12"
			src="../../assets/img/lantern_long.png"
			alt="Lanterne Joueur Droite"
			:style="{filter: `drop-shadow(0px 0px 20px ${GetColor1State})`}"
		/>
		<KeybindInfo class="hidden md:block"/>
	</div>
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex';

	export default {
		name: "Pong",
		computed: {
			...mapGetters(['GetColor1State']),
			...mapGetters(['GetColor2State']),
			...mapGetters(['GetBallSpeedTimeState']),
			...mapGetters(['GetBallSpeedManualState']),
			...mapGetters(['GetRemoveHitState']),
		},
	};
</script>

<style scoped>
	@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>
