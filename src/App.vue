<script setup>
	import LoopVideo from './components/LoopVideo.vue'
	import Home from './components/Home/Home.vue'
	import Header from './components/Home/Header.vue'
	import Login from './components/Login/Login.vue';
	import Register from './components/Register/Register.vue';
	import Footer from './components/Home/Footer.vue'
</script>

<template>
	<div id="app">
		<router-view></router-view>
	</div>
	<!-- <div class="w-screen h-screen flex flex-col hidden-scrollbar">
		<LoopVideo/>
		<Header/> -->
		<!-- <Login/> -->
		<!-- <Register/> -->

		<!-- <main class="flex-1 w-full">
			<div class="h-full w-full flex items-center justify-center">
				<h2>test</h2>
			</div>
			<Footer/>
		</main>
	</div> -->
</template>

<style>
	body {
		overflow-x: hidden;
	}
	.hidden-scrollbar {
		overflow: auto;
		scrollbar-width: none;
	}
	.hidden-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>
