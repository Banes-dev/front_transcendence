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
                <h2 class="text-white">{{friends}}</h2>
                <h2 class="text-white">{{win_pong}}</h2>
                <h2 class="text-white">{{lose_pong}}</h2>
                <h2 class="text-white">{{win_tictactoe}}</h2>
                <h2 class="text-white">{{lose_tictactoe}}</h2>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'Profil',
        data() {
			return {
				pseudo: null,
                mdp: null,
                img: null,
                friends: {},
                win_pong: null,
                lose_pong: null,
                win_tictactoe: null,
                lose_tictactoe: null,
			};
		},
        methods: {
            async get_profil_api() {
				console.log("get profil api");
				try {
					const response = await apiClient.get('player/');
					this.items = response.data;
                    this.pseudo = response.data.username;
					console.log(JSON.parse(this.items));
                    console.log("Get profil bien effectuer");
				} catch (error) {
					console.error('Erreur lors de la récupération des données :', error);
				}
			},
        }
	};
</script>

<style scoped>
	@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>
