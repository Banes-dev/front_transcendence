<script setup>
	import LoopVideo from '../LoopVideo.vue'
</script>

<template>
	<div class="fixed inset-0 flex flex-col items-center justify-center">
		<LoopVideo/>
		<div class="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-104 lg:h-104 xl:w-112 xl:h-112 bg-black border border-gray-800 rounded-lg shadow-lg">
			<!-- differentes case -->
			<div
				v-for="(cell, index) in board"
				:key="index"
				class="w-1/3 h-1/3 flex items-center justify-center border border-gray-800 text-white text-3xl font-bold cursor-pointer hover:bg-gray-700"
				@click="makeMove(index)"
			>{{cell}}</div>
		</div>
	</div>
</template>

<script>
	import {ref} from 'vue';

	export default {
		name: 'TicTacToe',
		setup() {
			// Définir les données réactives
			const board = ref(Array(9).fill('')); // Grille 3x3 vide
			const currentPlayer = ref('X'); // Joueur actuel (X commence)
			const winner = ref(null);

			// Fonction pour effectuer un mouvement
			const makeMove = (index) => {
				if (!board.value[index] && !winner.value) {
					board.value[index] = currentPlayer.value;
					if (checkWinner()) {
					winner.value = currentPlayer.value;
					} else {
					currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X'; // Changer de joueur
					}
				}
			};

			// Fonction pour vérifier un gagnant
			const checkWinner = () => {
				const winningCombinations = [
					[0, 1, 2], [3, 4, 5], [6, 7, 8], // Lignes
					[0, 3, 6], [1, 4, 7], [2, 5, 8], // Colonnes
					[0, 4, 8], [2, 4, 6],           // Diagonales
				];
				return winningCombinations.some((combination) => {
					const [a, b, c] = combination;
					return (
					board.value[a] &&
					board.value[a] === board.value[b] &&
					board.value[a] === board.value[c]
					);
				});
			};

			// Réinitialiser le jeu
			const resetGame = () => {
				board.value = Array(9).fill('');
				currentPlayer.value = 'X';
				winner.value = null;
			};

			// Exposer les variables et fonctions au template
			return {board, currentPlayer, winner, makeMove, resetGame,};
		},
	};
</script>

<style scoped>
	@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>
