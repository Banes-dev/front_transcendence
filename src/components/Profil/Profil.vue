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

        <!-- Player info -->
        <!-- <div class="relative top-16 left-4 w-73/100 bg-gray-900 border border-gray-600 outline-red-600 rounded-lg shadow-lg">
			<img class="relative scale-50 rounded-xl" src="../../assets/img/default_avatar.png" alt="Notre image de profil"/>
            <div class="relative p-5">
                <h5 class="mb-6 text-2xl font-bold tracking-tight text-white">Informations personnelles</h5>
				<button
					@click="addFriend()"
					class="w-1/6 bg-red-600 hover:bg-red-700 text-yellow-400 font-semibold py-2 rounded-lg shadow-lg"
				><i class="fa-solid fa-user-plus"></i></button>
			</div>
		</div> -->
        <!-- Player info -->
        <div class="relative top-16 left-4 w-73/100 bg-gray-900 border border-gray-600 hover:border-red-600 hover:outline outline-2 outline-red-600 rounded-lg shadow-lg p-4 flex">
            <!-- Image de profil -->
            <div class="flex flex-col items-center mb-0">
                <img class="w-96 h-96 rounded-xl object-cover mr-4 mb-4" src="../../assets/img/default_avatar.png" alt="Image de profil"/>
                <button 
                    @click="replaceImage"
                    class="bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg"
                ><i class="fa-solid fa-pen-to-square mr-2"></i>Modifier l'image</button>
            </div>
            <!-- Informations -->
            <div>
                <h5 class="mb-6 text-2xl font-bold tracking-tight text-white">Informations personnelles</h5>
                <!-- pseudo -->
                <p class="text-gray-300 mb-2">Pseudo : {{pseudo}}</p>
                <button 
                    @click="replaceImage"
                    class="bg-gray-700 hover:bg-gray-600 mb-4 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg"
                ><i class="fa-solid fa-pen-to-square mr-2"></i>Modifier mon pseudo</button>
                <!-- mdp -->
                <p class="text-gray-300 mb-2">Mot de passe : {{mdp}}</p>
                <button 
                    @click="replaceImage"
                    class="bg-gray-700 hover:bg-gray-600 mb-4 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg"
                ><i class="fa-solid fa-pen-to-square mr-2"></i>Modifier mon mot de passe</button>
                <!-- status -->
                <p class="text-gray-300 mb-2">Status : </p>
                <div class="flex space-x-4 mb-6">
                    <div v-for="option in statusOptions" :key="option.value" class="flex items-center">
                        <input 
                            type="checkbox" 
                            :id="option.value" 
                            :checked="status === option.value" 
                            @change="selectStatus(option.value)"
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <label :for="option.value" class="ml-2 text-sm text-gray-300">{{option.label}}</label>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <div 
                        :class="{
                        'w-6 h-6 rounded-full': true,
                        'bg-green-600': status === 'online',
                        'bg-yellow-500': status === 'inactive',
                        'bg-red-600': status === 'offline'
                        }"
                    ></div>
                    <span class="text-white right-4">{{statusLabel}}</span>
                </div>
            </div>
        </div>

        <!-- Stats de jeux -->
        <!-- <div class="relative bottom-4 left-4 w-73/100 bg-gray-900 border border-gray-600 outline-red-600 rounded-lg shadow-lg p-4 flex">
        </div> -->
        <div class="relative -bottom-16 w-73/100 mx-4 mt-2 bg-gray-900 border border-gray-600 hover:border-red-600 hover:outline outline-2 outline-red-600 p-3 text-sm rounded-lg shadow-lg">
            <div class="flex flex-col sm:flex-row justify-between items-center sm:items-start">
                <div class="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
                    <img class="w-48 h-48 mb-2" src="../../assets/img/pong_trans.png" alt="Image du Pong"/>
                    <p class="text-white"><strong>{{$t('Win_Pong')}}</strong>{{win_pong}}</p>
                    <p class="text-white"><strong>{{$t('Lose_Pong')}}</strong>{{lose_pong}}</p>
                </div>
                <div class="flex flex-col items-center sm:items-end space-4">
                    <img class="w-48 h-48 mb-2" src="../../assets/img/morpion_trans.png" alt="Image du Morpion"/>
                    <p class="text-white"><strong>{{$t('Win_TicTacToe')}}</strong>{{win_tictactoe}}</p>
                    <p class="text-white"><strong>{{$t('Lose_TicTacToe')}}</strong>{{lose_tictactoe}}</p>
                </div>
            </div>
        </div>
        
        <!-- Amis -->
		<div class="fixed top-4 right-4 w-full max-w-md h-screen flex flex-col">
			<!-- Ajout d'amis -->
            <div class="relative w-full max-w-md mb-6 bg-gray-900 border border-gray-600 hover:border-red-600 hover:outline outline-2 outline-red-600 rounded-lg shadow-lg">
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
            <!-- Listes d'amis -->
            <div 
                class="relative flex-grow w-full max-w-md bg-gray-900 border border-gray-600 hover:border-red-600 hover:outline outline-2 outline-red-600 rounded-lg shadow-lg" 
                style="max-height: calc(100vh - 150px); margin-bottom: 36px; height: 500px;"
                >
                <div class="relative p-5 h-full flex flex-col">
                    <h5 class="mb-6 text-2xl font-bold tracking-tight text-white">Mes Amis</h5>
                    <ul 
                    class="flex-grow overflow-y-auto pr-2"
                    style="max-height: calc(100% - 50px);"
                    >
                    <li 
                        v-for="(friend, index) in friends" 
                        :key="index" 
                        class="p-2 text-white bg-gray-800 mb-3 rounded-lg shadow-lg flex justify-between items-center"
                    >
                        <span>{{friend.username}}</span>
                        <div 
                            :class="{
                                'w-4 h-4 rounded-full': true,
                                'bg-green-600': friend.status === 'online',
                                'bg-yellow-500': friend.status === 'inactive',
                                'bg-red-600': friend.status === 'offline'
                            }"
                        ></div>
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
                status: "online",
                // friends: {},
				friends: [
					{username: "test1", status: "online"},
					{username: "test2", status: "offline"},
					{username: "test3", status: "inactive"},
                    {username: "test4", status: "online"},
					{username: "test5", status: "offline"},
					{username: "test6", status: "inactive"},
                    {username: "test7", status: "online"},
					{username: "test8", status: "offline"},
					{username: "test9", status: "inactive"},
                    {username: "test10", status: "online"},
					{username: "test11", status: "offline"},
					{username: "test12", status: "inactive"},
                    {username: "test13", status: "online"},
					{username: "test14", status: "offline"},
					{username: "test15", status: "inactive"},
				],
                win_pong: null,
                lose_pong: null,
                win_tictactoe: null,
                lose_tictactoe: null,
                searchUsername: '',
                statusOptions: [
                    {value: "online", label: "En ligne"},
                    {value: "inactive", label: "Inactif"},
                    {value: "offline", label: "Hors ligne"},
                ],
			};
		},
        computed: {
            statusLabel() {
                switch (this.status) {
                    case 'online':
                    return 'En ligne';
                    case 'offline':
                    return 'Hors ligne';
                    case 'inactive':
                    return 'Inactif';
                    default:
                    return 'Aucun statut';
                }
            },
        },
        methods: {
            selectStatus(value) {
                // Permet de sélectionner uniquement une option à la fois
                this.status = this.status === value ? null : value;
                this.updateStatus();
            },
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
                    this.img = (this.img);
                    console.log(this.img);
                    this.status = response.data.data.status;
                    console.log(this.status);

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
            async updateStatus() {
                try {
                    const response = await apiClient.put('profil/', {status: this.status});
                    console.log('Status ok:', response.data);
                } catch (error) {
                    console.error('Erreur lors de la mise à jour du statut :', error.response?.data || error.message);
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