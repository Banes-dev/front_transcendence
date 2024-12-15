<script setup>
	import LoopVideo from '../LoopVideo.vue'
</script>

<template>
    <div class="fixed inset-0 flex flex-col items-center justify-center">
        <LoopVideo/>
        <div class="relative w-4/5 md:w-3/5 bg-gray-900 border border-gray-600 hover:border-red-600 hover:outline outline-2 outline-red-600 rounded-lg">
            <div class="absolute top-3 right-3 z-50">
                <router-link to="/" class="text-yellow-400 px-1.5 py-0.5 rounded-md bg-red-600 hover:bg-red-700">✘</router-link>
			</div>
            <div class="p-5 relative z-20">
                <h5 class="mb-6 text-2xl font-bold tracking-tight text-white">Tournois</h5>
                <!-- game choice -->
                <label class="mb-3 inline-flex items-center cursor-pointer">
                    <span class="text-white">Pong</span>
                    <input type="checkbox" v-model="game_choice" class="sr-only peer">
                    <div class="relative w-11 h-6 -mt-0 -right-3 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
                    <span class="text-white ml-6">TicTacToe</span>
                </label>

                <!-- nb players -->
                <h2 class="text-white relative sm:absolute my-4">Nombre de joueurs :</h2>
                <div class="relative mb-12 top-4 sm:left-38">
                    <label for="price-range-input" class="sr-only">Default range</label>
                    <input id="price-range-input" type="range" v-model="nb_player" min="3" max="6" class="w-3/5 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer">
                    <span class="text-sm text-gray-400 absolute start-0 -bottom-6">x3</span>
                    <span class="text-sm text-gray-400 absolute w-2/5 end-6 -bottom-6">x6</span>
                    <div class="relative mt-2">
                        <span id="range-indicator" class="text-sm text-gray-400 absolute x-1/2 -top-14 left-0 bg-gray-800 px-2 py-1 rounded-md">
                            x3
                        </span>
                    </div>
                </div>

                <!-- pseudo des joueurs -->
                <div class="mb-6">
                    <div v-for="(player, index) in players" :key="player.id" class="mb-2">
                        <label :for="'player-' + player.id" class="block text-sm font-medium text-gray-300">Joueur {{ index + 1 }}</label>
                        <input
                            :id="'player-' + player.id"
                            v-model="player.name"
                            type="text"
                            placeholder="Entrez un pseudo"
                            class="w-full mt-1 px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-red-600"
                        />
                    </div>
                </div>
                <!-- Système de tournois -->
                <div>
                    <h3 class="text-xl text-white mb-4">Matchs :</h3>
                    <ul>
                        <li v-for="(match, index) in matches" :key="index" class="text-white mb-2">
                            Match {{index + 1}} : 
                            <!-- <span v-for="player in match" :key="player.id" class="font-bold">
                                {{player.name || `Joueur ${player.id}`}}
                            </span> -->
                            <span class="font-bold">
                                {{player[1].name || `Joueur ${player[1].id}`}}
                            </span>
                            <span class="font-bold">
                                " - "{{player[2].name || `Joueur ${player[2].id}`}}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Custom_Tournaments",
        data() {
            return {
                game_choice: false,
                nb_player: 3,
                players: [],
                matches: [],
            };
        },
        watch: {
            // Met à jour les joueurs quand le nombre de joueurs change
            nb_player(newNb) {
                this.players = Array.from({ length: newNb }, (_, i) => ({
                    id: i + 1,
                    name: '',
                }));
                this.generateMatches();
            },
        },
        methods: {
            // Génère les matchs de tournoi
            generateMatches() {
                const shuffledPlayers = [...this.players].sort(() => Math.random() - 0.5);
                const matches = [];
                while (shuffledPlayers.length > 1) {
                    matches.push(shuffledPlayers.splice(0, 2));
                }
                if (shuffledPlayers.length) {
                    matches.push([shuffledPlayers[0]]);
                }
                this.matches = matches;
            },
        },
        mounted() {
            // Initialisation des joueurs
            this.players = Array.from({ length: this.nb_player }, (_, i) => ({
                id: i + 1,
                name: '',
            }));
            this.generateMatches();

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
	@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>
