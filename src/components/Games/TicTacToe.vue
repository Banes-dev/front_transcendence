<!-- <script setup>
	import LoopVideo from '../LoopVideo.vue'
</script> -->

<!-- <template>
	<div class="fixed inset-0 flex flex-col items-center justify-center">
		<LoopVideo/>
		<router-link
			to="/"
			class="absolute top-0 md:left-0 justify-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-gradient-to-br from-sky-800 to-sky-500 hover:bg-gradient-to-bl text-xl text-center px-5 py-3 rounded-b-lg md:rounded-none md:rounded-br-lg shadow-lg"
		><i class="fa-solid fa-left-long mr-3"></i> {{$t('Back')}}
		</router-link>
		<div class="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-104 lg:h-104 xl:w-112 xl:h-112 bg-black border border-gray-800 rounded-lg shadow-lg">
			<div
				v-for="(cell, index) in board"
				:key="index"
				class="w-1/3 h-1/3 flex items-center justify-center border border-gray-800 text-white text-3xl font-bold cursor-pointer hover:bg-gray-700"
				@click="makeMove(index)"
			>{{cell}}</div>
		</div>
	</div>
</template> -->

<script setup>
	import LoopVideo from '../LoopVideo.vue'

	import { ref, computed } from 'vue';

	// Grille vide (3x3)
	const board = ref(Array(9).fill(null));
	// Joueur actuel
	const currentPlayer = ref('X');
	// Gagnant
	const winner = ref(null);
	// Message de statut
	const statusMessage = computed(() => {
		if (winner.value) {
			if (currentPlayer.value === "X") {
				return "Gagnant : Joueur 1 (X) 🎉";
			}
			else {
				return "Gagnant : Joueur 2 (O) 🎉";
			}
		}
		if (board.value.every(cell => cell)) {
			return "Match nul !";
		}
		if (currentPlayer.value === "X") {
			return "C'est au Joueur 1 (X) de jouer";
		}
		else {
			return "C'est au Joueur 2 (O) de jouer";
		}
	});

	// Combinaisons gagnantes
	const winningCombinations = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // Lignes
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // Colonnes
		[0, 4, 8], [2, 4, 6],            // Diagonales
	];

	// Fonction pour vérifier un gagnant
	const checkWinner = () => {
	for (const [a, b, c] of winningCombinations) {
		if (board.value[a] && board.value[a] === board.value[b] && board.value[a] === board.value[c]) {
		winner.value = board.value[a];
		return true;
		}
	}
	return false;
	};

	// Fonction pour effectuer un mouvement
	const makeMove = (index) => {
		if (board.value[index] || winner.value) return; // Empêche de jouer sur une case occupée ou après la fin
		board.value[index] = currentPlayer.value;
		if (!checkWinner()) {
			currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X'; // Change de joueur
		}
	};

	// Fonction pour réinitialiser la partie
	const resetGame = () => {
		board.value = Array(9).fill(null);
		currentPlayer.value = 'X';
		winner.value = null;
	};
</script>

<template>
	<div class="fixed inset-0 flex flex-col items-center justify-center">
		<LoopVideo/>
		<router-link
			to="/"
			class="absolute top-0 md:left-0 justify-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-gradient-to-br from-sky-800 to-sky-500 hover:bg-gradient-to-bl text-xl text-center px-5 py-3 rounded-b-lg md:rounded-none md:rounded-br-lg shadow-lg"
		><i class="fa-solid fa-left-long mr-3"></i> {{$t('Back')}}</router-link>

		<!-- a quelle joueur de jouer -->
		<div class="relative items-center justify-center bg-gray-900 mb-8 rounded-lg shadow-lg">
			<p class="relative items-center justify-center text-white text-3xl mx-4 my-2">{{statusMessage}}</p>
		</div>
		
		<!-- Grille du Tic-Tac-Toe -->
		<div class="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-104 lg:h-104 xl:w-112 xl:h-112 bg-black border border-gray-800 rounded-lg shadow-lg">
			<!-- Barre verticale -->
			<div class="absolute left-1/3 top-4 w-1 h-72 sm:h-88 lg:h-96 xl:h-104 bg-slate-600 rounded-lg"></div>
			<div class="absolute left-2/3 top-4 w-1 h-72 sm:h-88 lg:h-96 xl:h-104 bg-slate-600 rounded-lg"></div>
			<!-- Barre horizontale -->
			<div class="absolute top-1/3 left-4 w-72 sm:w-88 lg:w-96 xl:w-104 h-1 bg-slate-600 rounded-lg"></div>
			<div class="absolute top-2/3 left-4 w-72 sm:w-88 lg:w-96 xl:w-104 h-1 bg-slate-600 rounded-lg"></div>
			
			<div class="grid grid-cols-3 w-80 h-80 sm:w-96 sm:h-96 lg:w-104 lg:h-104 xl:w-112 xl:h-112 shadow-lg">
				<div
					v-for="(cell, index) in board"
					:key="index"
					class="flex items-center justify-center w-full h-full text-8xl font-bold cursor-pointer hover:bg-slate-400"
					:class="cell === 'X' ? 'text-red-500' : 'text-blue-500'"
					@click="makeMove(index)"
				><span class="flex items-center justify-center w-full h-0">{{cell}}</span>
				</div>
			</div>
		</div>
	
		<!-- Bouton de réinitialisation -->
		<button
			@click="resetGame"
			class="mt-8 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-lg"
		><i class="fa-solid fa-rotate-right mr-3"></i>{{$t('Reset')}}</button>
	</div>
  </template>

<script>
	export default {
		name: 'TicTacToe',
	};
</script>

<style scoped>
	@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>
