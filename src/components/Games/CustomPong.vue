<script setup>
	import LoopVideo from '../LoopVideo.vue'
</script>

<template>
    <div class="fixed inset-0 flex flex-col items-center justify-center">
        <LoopVideo/>
        <div class="relative w-3/5 bg-gray-900 border border-gray-600 hover:border-red-600 hover:outline outline-2 outline-red-600 rounded-lg">
            <img class="rounded-t-lg relative z-20" src="../../assets/img/lantern_empty.png" alt="Lanterne qui contient TicTacToe"/>
            <img class="absolute -top-24 left-0 w-full h-full object-contain scale-40 z-10" src="../../assets/img/morpion_trans.png" alt="Image du Pong"/>
            <div class="p-5 relative z-20">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{{$t('TicTacToe')}}</h5>
                <p class="mb-3 font-normal text-gray-400">{{$t('Descri_TicTacToe')}}</p>
                <div class="flex justify-between items-center flex-col md:flex-row space-y-4 md:space-y-0">
                    <router-link
                        to="/"
                        class="text-white bg-gradient-to-br from-red-800 to-red-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-3 py-2 text-center"
                    ><i class="fa-solid fa-xmark"></i> {{$t('Cancel')}}
                    </router-link>
                    <router-link
                        to="/"
                        class="text-white bg-gradient-to-br from-green-800 to-green-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-3 py-2 text-center"
                    ><i class="fa-solid fa-check"></i> {{$t('Apply')}}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: "CustomPong",
};
</script>

<style scoped>
	@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>
