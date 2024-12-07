<script setup>
	import LoopVideo from '../LoopVideo.vue'
</script>

<template>
    <div class="fixed inset-0 flex flex-col items-center justify-center">
        <LoopVideo/>
	</div>
        <router-link
            to="/"
            class="absolute top-0 sm:left-0 justify-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-gradient-to-br from-sky-800 to-sky-500 hover:bg-gradient-to-bl text-xl text-center px-5 py-3 rounded-b-lg md:rounded-none md:rounded-br-lg shadow-lg"
        ><i class="fa-solid fa-left-long mr-3"></i> {{$t('Back')}}</router-link>
        <!-- <div class="relative w-full max-w-xs sm:max-w-md bg-gray-900 border border-gray-600 outline-red-600 rounded-lg">
            <div class="p-5 relative">
                <h2 class="text-white">{{pseudo}}</h2>
                <h2 class="text-white">{{mdp}}</h2>
                <h2 class="text-white">{{img}}</h2>
                <ul>
                    <li v-for="(friend, index) in friends" :key="index" class="text-white">
                        {{ friend.username }}
                    </li>
                </ul>
                <h2 class="text-white">{{win_pong}}</h2>
                <h2 class="text-white">{{lose_pong}}</h2>
                <h2 class="text-white">{{win_tictactoe}}</h2>
                <h2 class="text-white">{{lose_tictactoe}}</h2>

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
                    >Ajouter comme ami</button>
                </div>
            </div>
            <button @click="get_profil_api()" class="absolute top-80 px-4 py-2  text-white hover:text-red-600 cursor-pointer bg-gray-700">Test Get Api</button>
        </div> -->
		<div class="fixed top-4 right-4 w-full max-w-xs sm:max-w-md h-screen flex flex-col">
			<div class="relative w-full max-w-xs sm:max-w-md mb-6 bg-gray-900 border border-gray-600 outline-red-600 rounded-lg shadow-lg">
				<div class="relative p-5">
					<h5 class="mb-6 text-2xl font-bold tracking-tight text-white">Ajout d'amis</h5>
					<input
						type="text"
						v-model="searchUsername"
						placeholder="Ajouter un joueur"
						class="w-4/5 p-2 bg-gray-700 border border-gray-600 text-gray-300 rounded-lg shadow-lg mr-2"
					/>
					<button
						@click="addFriend"
						class="w-1/6 bg-red-600 hover:bg-red-700 text-yellow-400 font-semibold py-2 rounded-lg shadow-lg"
					><i class="fa-solid fa-user-plus"></i></button>
				</div>
			</div>
			<div class="relative flex-grow w-full max-w-xs sm:max-w-md bg-gray-900 border border-gray-600 outline-red-600 rounded-lg shadow-lg" style="max-height: calc(100vh - 150px); margin-bottom: 36px;">
				<div class="relative p-5 h-full flex flex-col">
					<h5 class="mb-6 text-2xl font-bold tracking-tight text-white">Mes Amis</h5>
					<ul class="flex-grow overflow-y-auto pr-2">
						<li v-for="(friend, index) in friends" :key="index" class="p-2 text-white bg-gray-800 mb-3 rounded-lg shadow-lg">
							{{friend.username}}
						</li>
					</ul>
				</div>
			</div>
        </div>
    <!-- </div> -->
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
                // friends: {},
				friends: [
					{username: "test1", status: "online"},
					{username: "test2", status: "absent"},
					{username: "test1", status: "inactive"},
				],
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

    /* Scrollbar personnalisé */
    ul::-webkit-scrollbar {
        width: 8px; /* Largeur de la scrollbar */
    }
    ul::-webkit-scrollbar-thumb {
        background-color: #4a5568; /* Couleur du curseur */
        border-radius: 4px; /* Coins arrondis */
    }
    ul::-webkit-scrollbar-thumb:hover {
        background-color: #5c6a81; /* Couleur au survol */
    }
    ul::-webkit-scrollbar-track {
        background-color: #2d3748; /* Couleur de la piste */
        border-radius: 4px;
    }
</style>