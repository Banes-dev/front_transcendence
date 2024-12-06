<script setup>
	import LoopVideo from '../LoopVideo.vue'
</script>

<template>
    <div class="fixed inset-0 flex flex-col items-center justify-center">
        <LoopVideo/>
        <div class="relative w-3/5 bg-gray-900 border border-gray-600 outline-red-600 rounded-lg">
            <div class="p-5 relative">
                <h2 class="text-white">{{pseudo}}</h2>
                <h2 class="text-white">{{mdp}}</h2>
                <h2 class="text-white">{{img}}</h2>
                <!-- <h2 class="text-white">{{friends}}</h2> -->
                <ul>
                    <li v-for="(friend, index) in friends" :key="index" class="text-white">
                        {{ friend.username }}
                    </li>
                </ul>
                <h2 class="text-white">{{win_pong}}</h2>
                <h2 class="text-white">{{lose_pong}}</h2>
                <h2 class="text-white">{{win_tictactoe}}</h2>
                <h2 class="text-white">{{lose_tictactoe}}</h2>
                <!-- Recherche d'amis -->
                <div class="mt-5">
                    <input
                        type="text"
                        v-model="searchUsername"
                        placeholder="Rechercher un joueur"
                        class="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    <button
                        @click="addFriend"
                        class="w-full bg-red-600 hover:bg-red-700 text-yellow-400 font-medium py-2 px-4 rounded-md mt-2"
                    >
                        Ajouter comme ami
                    </button>
                </div>
            </div>
            <button @click="get_profil_api()" class="flex items-center justify-center px-4 py-2 absolute top-80 text-white hover:text-red-600 cursor-pointer bg-gray-700">Test Get Api</button>
        </div>
    </div>
</template>

<script>
    import apiClient from '@/axios';

	export default {
		name: 'Profil',
        data() {
			return {
                item: null,
				pseudo: null,
                mdp: null,
                img: null,
                friends: {},
                win_pong: null,
                lose_pong: null,
                win_tictactoe: null,
                lose_tictactoe: null,
                searchUsername: '',
			};
		},
        methods: {
            async get_profil_api() {
				console.log("get profil api");
				try {
					const response = await apiClient.get('profil/');
                    console.log("Structure complète :", response);
					this.items = response.data.data;
					console.log(this.items);
                    this.pseudo = response.data.data.username;
                    console.log(this.pseudo);
                    this.mdp = this.mdp = "*".repeat(12);
                    console.log(this.mdp);
                    this.img = "gerer img";
                    console.log(this.img);

                    this.friends = response.data.data.friends;
                    console.log("friends:", this.friends);

                    this.win_pong = response.data.data.win_pong;
                    console.log(this.win_pong);
                    this.lose_pong = response.data.data.lose_pong;
                    console.log(this.lose_pong);
                    this.win_tictactoe = response.data.data.win_tictactoe;
                    console.log(this.win_tictactoe);
                    this.lose_tictactoe = response.data.data.lose_tictactoe;
                    console.log(this.lose_tictactoe);
                    console.log("Get profil bien effectuer");
				} catch (error) {
					console.error('Erreur lors de la récupération des données :', error);
				}
			},
            async addFriend() {
                try {
                    const response = await apiClient.post('AddFriends/', {friend_username: this.searchUsername});
                    console.log("AddFriends ok");
                    this.get_profil_api(); // Rafraîchit la liste des amis
                } catch (error) {
                    console.error('Erreur lors de l\'ajout d\'un ami :', error.response?.data || error.message);
                }
			},
        },
        mounted() {
            this.get_profil_api();
        },
	};
</script>

<style scoped>
	@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>