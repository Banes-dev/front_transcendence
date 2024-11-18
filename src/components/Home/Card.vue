<template>
	<div v-if="type === 'pong'" class="max-w-sm bg-gray-900 border border-gray-600 rounded-lg">
		<img class="rounded-t-lg" src="../../assets/img/lantern_empty.png" alt="Image du Pong" />
		<div class="p-5">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Pong</h5>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Une description bien courte pas comme le code en c++</p>
			<div class="flex justify-between items-center">
				<router-link
					to="/play_pong"
					class="text-white bg-gradient-to-br from-red-600 to-yellow-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-3 py-2 text-center"
				><i class="fa-solid fa-gamepad"></i> {{$t('Play')}}
				</router-link>
				<router-link
					to="/custom_pong"
					class="text-white bg-gradient-to-br from-gray-600 to-gray-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-2 py-1 text-center"
				><i class="fa-solid fa-sliders"></i> {{$t('Preferences')}}
				</router-link>
			</div>
		</div>
	</div>

	<div v-if="type === 'tictactoe'" class="max-w-sm bg-gray-900 border border-gray-600 rounded-lg">
		<img class="rounded-t-lg" src="../../assets/img/lantern_empty.png" alt="Image du TicTacToe" />
		<div class="p-5">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TicTacToe</h5>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Une description bien courte pas comme le code en c++</p>
			<div class="flex justify-between items-center">
				<router-link
					to="/play_tictactoe"
					class="text-white bg-gradient-to-br from-red-600 to-yellow-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-3 py-2 text-center"
				><i class="fa-solid fa-gamepad"></i> {{$t('Play')}}
				</router-link>
				<router-link
					to="/custom_tictactoe"
					class="text-white bg-gradient-to-br from-gray-600 to-gray-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-2 py-1 text-center"
				><i class="fa-solid fa-sliders"></i> {{$t('Preferences')}}
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Card",
	props: {
		type: {
			type: String,
		},
	},
};
</script>

<style scoped>
	@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>
