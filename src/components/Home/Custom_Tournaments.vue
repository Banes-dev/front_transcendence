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
				<h5 class="mb-6 text-2xl font-bold tracking-tight text-white">Creation de tournois</h5>
				<!-- game choice -->
				<label class="mb-3 inline-flex items-center cursor-pointer">
					<span class="text-white">Pong</span>
					<input type="checkbox" v-model="game_choice" class="sr-only peer">
					<div class="relative w-11 h-6 -mt-0 -right-3 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
					<span class="text-white ml-6">TicTacToe</span>
				</label>

				<!-- Nombre de joueurs -->
				<h2 class="text-white relative sm:absolute my-4">Nombre de joueurs :</h2>
                <div class="relative mb-12 top-4 sm:left-38">
                    <label for="price-range-input" class="sr-only">Default range</label>
                    <input id="price-range-input" type="range" v-model="nb_player" min="3" max="8" class="w-3/5 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer">
                    <span class="text-sm text-gray-400 absolute start-0 -bottom-6">x3</span>
                    <span class="text-sm text-gray-400 absolute w-2/5 end-6 -bottom-6">x8</span>
                    <div class="relative mt-2">
                        <span id="range-indicator" class="text-sm text-gray-400 absolute x-1/2 -top-14 left-0 bg-gray-800 px-2 py-1 rounded-md">
                            x3
                        </span>
                    </div>
                </div>

				<!-- Pseudos des joueurs -->
				<div class="mb-6">
					<div v-for="(player, index) in players" :key="player.id" class="mb-1">
						<label :for="'player-' + player.id" class="block text-sm font-medium text-gray-300">
						Joueur {{index + 1}}</label>
						<input
							:id="'player-' + player.id"
							v-model="player.name"
							type="text"
							placeholder="Entrez un pseudo"
							class="w-full mt-1 px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-red-600"
						/>
					</div>
				</div>

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
				<!-- Creer le tournois -->
				<div class="bottom-8 w-full flex justify-center">
					<router-link
						to="/tournaments"
						@click="save_tournament()"
						class="text-white bg-gradient-to-br from-green-800 to-green-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-3 py-2 text-center"
					><i class="fa-solid fa-plus mr-1"></i> {{$t('Create_Tournaments')}}
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapActions} from 'vuex';

	export default {
		name: 'Custom_Tournaments',
		data() {
			return {
				game_choice: false, // Toggle pour le choix du jeu
				nb_player: 3, // Nombre initial de joueurs
				players: [], // Liste des joueurs
				// rounds: [], // Arbre du tournoi
				// byePlayer: null, // Stocke le joueur qui passe un tour
			};
		},
		methods: {
			...mapActions(['CreateTournament']),
			// Sauvegarde les infos du tournois dans le vuex
			save_tournament() {
				console.log("Save tournament");
				// cree un obj tournament
				// set a l'objet tournament les infos game_choice, nb_player, players
				// Envoyer l'objet tournament dans le SetTournament du vuex

				tournament = {game_choice: this.game_choice, nb_player: this.nb_player, players: this.players};
				this.CreateTournament(tournament);
			},

			// Mélange aléatoire des joueurs
			shuffleArray(array) {
				for (let i = array.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					[array[i], array[j]] = [array[j], array[i]]; // Échange
				}
			},

			// Mise à jour de la liste des joueurs
			updatePlayers(nb) {
				this.players = Array.from({length: nb}, (_, i) => ({
					id: i + 1,
					name: '', // Nom vide par défaut
				}));
			},

			// Génération de l'arbre du tournoi
			generateTournament() {
			let currentRound = [...this.players]; // Copie de la liste des joueurs
			this.shuffleArray(currentRound); // Mélange initial des joueurs
			this.rounds = []; // Réinitialise l'arbre des tours
			this.byePlayer = null; // Réinitialise le joueur "bye"

			while (currentRound.length > 1 || this.byePlayer) {
				const matches = [];

				// Gérer le joueur "bye" uniquement au premier tour
				if (currentRound.length % 2 === 1 && !this.byePlayer) {
					const randomIndex = Math.floor(Math.random() * currentRound.length);
					this.byePlayer = currentRound.splice(randomIndex, 1)[0]; // Retire un joueur au hasard
				}

				// Crée les matchs pour le tour
				for (let i = 0; i < currentRound.length; i += 2) {
					const match = [currentRound[i], currentRound[i + 1]].filter(Boolean); // Crée des matchs
					matches.push(match);
				}
				this.rounds.push(matches); // Ajoute les matchs du tour actuel

				// Prépare les gagnants pour le prochain tour
				const nextRound = matches.map((match) =>
					match[Math.floor(Math.random() * match.length)] // Gagnant aléatoire
				);

				// Ajouter le joueur "bye" au deuxième tour
				if (this.byePlayer) {
					nextRound.push(this.byePlayer);
					this.byePlayer = null; // Réinitialise le joueur "bye"
				}

				currentRound = nextRound; // Met à jour la liste des joueurs pour le prochain tour
			}
			},
		},
		watch: {
			// Surveille les changements du nombre de joueurs
			nb_player(newNb) {
				this.updatePlayers(newNb); // Mets à jour les joueurs
				this.generateTournament(); // Mets à jour l'arbre du tournoi
			},
		},
		mounted() {
			// Initialisation
			this.updatePlayers(this.nb_player);
			this.generateTournament();

			// input
			const rangeInput = document.getElementById('price-range-input');
            const rangeIndicator = document.getElementById('range-indicator');

            rangeInput.addEventListener('input', (event) => {
                const value = event.target.value;

                // Récupérer la largeur totale de la barre de progression
                const rangeWidth = rangeInput.offsetWidth;

                // Calculer le pourcentage de la progression (entre 0 et 100)
                const percent = (value - rangeInput.min) / (rangeInput.max - rangeInput.min);

                // Calculer la position en pixels en fonction du pourcentage
                const indicatorPosition = percent * rangeWidth;

                // Ajuster la position de l'indicateur pour le centrer
                const offset = rangeIndicator.offsetWidth / 2;
                rangeIndicator.style.left = `calc(${indicatorPosition}px - ${offset}px)`;

                // Mettre à jour le texte de l'indicateur
                rangeIndicator.textContent = `x${value}`;
            });
		},
	};
</script>

<style scoped>
	@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
</style>
