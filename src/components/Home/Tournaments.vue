<script setup>
	import LoopVideo from '../LoopVideo.vue';
</script>

<template>
	<!-- <div class="fixed inset-0 overflow-auto flex flex-col items-center justify-center"> -->
	<div class="w-screen h-screen flex flex-col items-center justify-start md:justify-center hidden-scrollbar">
		<LoopVideo/>
		<div class="relative w-4/5 md:w-3/5 mt-8 mb-8 bg-gray-900 border border-gray-600 hover:border-red-600 hover:outline outline-2 outline-red-600 rounded-lg">
			<div class="absolute top-3 right-3 z-50">
				<router-link to="/" class="text-yellow-400 px-1.5 py-0.5 rounded-md bg-red-600 hover:bg-red-700">✘</router-link>
			</div>
			<div class="p-5 relative z-20">
				<h5 class="mb-6 text-2xl font-bold tracking-tight text-white">Tournois</h5>
				<!-- affichage info du tournois, jeu et nb joueur -->
				<!-- <label class="mb-3 inline-flex items-center cursor-pointer">
					<span class="text-white">Pong</span>
					<input type="checkbox" v-model="game_choice" class="sr-only peer">
					<div class="relative w-11 h-6 -mt-0 -right-3 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
					<span class="text-white ml-6">TicTacToe</span>
				</label> -->

				<!-- Arbre des tournois -->
				<!-- <div>
					<ul>
						<li v-for="(round, roundIndex) in rounds" :key="'round-' + roundIndex" class="mb-6">
						<h4 class="text-lg text-yellow-400">Tour {{ roundIndex + 1 }}</h4>
							<ul>
								<li
									v-for="(match, matchIndex) in round"
									:key="'match-' + roundIndex + '-' + matchIndex"
									class="text-white"
								>Match {{ matchIndex + 1 }} : 
									<span class="font-bold">
										{{match[0]?.name || `Joueur ${match[0]?.id}`}}
									</span>
									<span> - </span>
									<span class="font-bold">
										{{match[1]?.name || `Joueur ${match[1]?.id}`}}
									</span>
								</li>
							</ul>
						</li>
					</ul>
				</div> -->
				<!-- delete or play match -->
                <div class="flex justify-between items-center flex-col md:flex-row space-y-4 md:space-y-0">
                    <router-link
                        to="/custom_tournaments"
                        class="text-white bg-gradient-to-br from-red-800 to-red-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-3 py-2 text-center"
                    ><i class="fa-solid fa-xmark mr-2"></i>Supprimer le tournois</router-link>
                    <router-link
                        to="/pong"
                        @click="play_next_match()"
                        class="text-white bg-gradient-to-br from-green-800 to-green-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-3 py-2 text-center"
                    ><i class="fa-solid fa-arrow-right mr-2"></i>Jouer le match suivant</router-link>
                </div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapActions, mapGetters} from 'vuex';

	export default {
		name: 'Tournaments',
		computed: {
            ...mapGetters(['GetTournament']),
		},
		methods: {
			...mapActions(['DeleteTournament']),
		},
		mounted() {
			console.log(this.GetTournament());
		},
	};
</script>

<style scoped>
	@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
</style>
