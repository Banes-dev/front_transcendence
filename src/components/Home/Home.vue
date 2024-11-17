<script setup>
	import LoopVideo from '../LoopVideo.vue'
	import Header from './Header.vue'
	import Footer from './Footer.vue'
</script>

<template>
	<div class="w-screen h-screen flex flex-col hidden-scrollbar">
		<LoopVideo/>
		<Header/>

		<main class="flex-1 w-full">
			<div class="h-full w-full flex items-center justify-center">
				<h2>test</h2>
			</div>
			<Footer/>
		</main>
	</div>
</template>
