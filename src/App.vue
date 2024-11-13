<script setup>
import LoopVideo from './components/LoopVideo.vue'
import Header from './components/Header.vue'
import Login from './components/Login.vue';
import Footer from './components/Footer.vue'
</script>

<template>
	<div class="w-screen h-screen flex flex-col">
		<LoopVideo/>
		<Header/>
		<Login/>

		<main class="flex-1 w-full">
			<div class="h-full w-full flex items-center justify-center">
				<h2>test</h2>
			</div>
			<Footer/>
		</main>
	</div>
</template>

<style>
	body {
		overflow-x: hidden;
	}
</style>
