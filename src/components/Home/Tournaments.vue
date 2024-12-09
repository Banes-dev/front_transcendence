<script setup>
import LoopVideo from '../LoopVideo.vue';
</script>

<template>
  <div class="fixed inset-0 flex flex-col items-center justify-center">
    <LoopVideo />
    <div class="relative w-4/5 md:w-3/5 bg-gray-900 border border-gray-600 hover:border-red-600 hover:outline outline-2 outline-red-600 rounded-lg">
      <div class="absolute top-3 right-3 z-50">
        <router-link to="/" class="text-yellow-400 px-1.5 py-0.5 rounded-md bg-red-600 hover:bg-red-700">✘</router-link>
      </div>
      <div class="p-5 relative z-20">
        <h5 class="mb-6 text-2xl font-bold tracking-tight text-white">Tournois</h5>

        <!-- Nombre de joueurs -->
        <h2 class="text-white relative sm:absolute my-4">Nombre de joueurs :</h2>
        <div class="relative mb-12 top-4 sm:left-38">
          <input
            id="price-range-input"
            type="range"
            v-model="nb_player"
            min="3"
            max="6"
            class="w-3/5 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <span class="text-sm text-gray-400 absolute start-0 -bottom-6">x3</span>
          <span class="text-sm text-gray-400 absolute w-2/5 end-6 -bottom-6">x6</span>
        </div>

        <!-- Pseudos des joueurs -->
        <div class="mb-6">
          <div v-for="(player, index) in players" :key="player.id" class="mb-2">
            <label
              :for="'player-' + player.id"
              class="block text-sm font-medium text-gray-300"
            >
              Joueur {{ index + 1 }}
            </label>
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
        <div>
          <ul>
            <li
              v-for="(round, roundIndex) in rounds"
              :key="'round-' + roundIndex"
              class="mb-6"
            >
              <h4 class="text-lg text-yellow-400">Tour {{ roundIndex + 1 }}</h4>
              <ul>
                <li
                  v-for="(match, matchIndex) in round"
                  :key="'match-' + roundIndex + '-' + matchIndex"
                  class="text-white"
                >
                  Match {{ matchIndex + 1 }} : 
                  <span class="font-bold">
                    {{ match[0]?.name || `Joueur ${match[0]?.id}` }}
                  </span>
                  <span> - </span>
                  <span class="font-bold">
                    {{ match[1]?.name || `Joueur ${match[1]?.id}` }}
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tournaments',
  data() {
    return {
      nb_player: 3, // Nombre initial de joueurs
      players: [],
      rounds: [], // Stocke tous les tours de l'arbre
    };
  },
  watch: {
    nb_player(newNb) {
      this.updatePlayers(newNb);
      this.generateTournament();
    },
  },
  methods: {
    // Met à jour la liste des joueurs
    updatePlayers(nb) {
      this.players = Array.from({ length: nb }, (_, i) => ({
        id: i + 1,
        name: '',
      }));
    },
    // Génère l'arbre du tournoi
    generateTournament() {
      let currentRound = [...this.players];
      const rounds = [];

      // Tant qu'il y a plus d'un joueur, créez des tours
      while (currentRound.length > 1) {
        const matches = [];
        for (let i = 0; i < currentRound.length; i += 2) {
          const match = [currentRound[i], currentRound[i + 1]].filter(Boolean);
          matches.push(match);
        }
        rounds.push(matches);

        // Simulez les gagnants aléatoires pour avancer
        currentRound = matches.map(
          (match) => match[Math.floor(Math.random() * match.length)]
        );
      }

      this.rounds = rounds;
    },
  },
  mounted() {
    this.updatePlayers(this.nb_player);
    this.generateTournament();
  },
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
</style>
