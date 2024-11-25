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
                <h5 class="mb-8 text-2xl font-bold tracking-tight text-white">{{$t('Preferences_Games')}}</h5>
                <!-- <p class="mb-2 font-normal text-gray-400">{{$t('Descri_TicTacToe')}}</p> -->
                <!-- color 1 -->
                <h2 class="text-white absolute my-2">{{$t("Color1")}}</h2>
                <div v-if="$i18n.locale === 'fr'">
                    <input
                        type="color"
                        v-model="color1"
                        class="absolute w-10 h-10 mx-36 opacity-0 cursor-pointer"
                    />
                    <div
                        class="mb-3 w-10 h-10 mx-36 rounded-full border-2 border-gray-300 cursor-pointer"
                        :style="{backgroundColor: color1}"
                    >
                    </div>
				</div>
				<div v-else-if="$i18n.locale === 'en'">
                    <input
                        type="color"
                        v-model="color1"
                        class="absolute w-10 h-10 mx-24 opacity-0 cursor-pointer"
                    />
                    <div
                        class="mb-3 w-10 h-10 mx-24 rounded-full border-2 border-gray-300 cursor-pointer"
                        :style="{backgroundColor: color1}"
                    >
                    </div>
				</div>
				<div v-else-if="$i18n.locale === 'es'">
                    <input
                        type="color"
                        v-model="color1"
                        class="absolute w-10 h-10 mx-30 opacity-0 cursor-pointer"
                    />
                    <div
                        class="mb-3 w-10 h-10 mx-30 rounded-full border-2 border-gray-300 cursor-pointer"
                        :style="{backgroundColor: color1}"
                    >
                    </div>
				</div>
                <!-- color 2 -->
                <h2 class="text-white absolute my-2">{{$t("Color2")}}</h2>
                <div v-if="$i18n.locale === 'fr'">
                    <input
                        type="color"
                        v-model="color2"
                        class="absolute w-10 h-10 mx-38 opacity-0 cursor-pointer"
                    />
                    <div
                        class="mb-6 w-10 h-10 mx-38 rounded-full border-2 border-gray-300 cursor-pointer"
                        :style="{backgroundColor: color2}"
                    >
                    </div>
				</div>
				<div v-else-if="$i18n.locale === 'en'">
                    <input
                        type="color"
                        v-model="color2"
                        class="absolute w-10 h-10 mx-34 opacity-0 cursor-pointer"
                    />
                    <div
                        class="mb-6 w-10 h-10 mx-34 rounded-full border-2 border-gray-300 cursor-pointer"
                        :style="{backgroundColor: color2}"
                    >
                    </div>
				</div>
				<div v-else-if="$i18n.locale === 'es'">
                    <input
                        type="color"
                        v-model="color2"
                        class="absolute w-10 h-10 mx-34 opacity-0 cursor-pointer"
                    />
                    <div
                        class="mb-6 w-10 h-10 mx-34 rounded-full border-2 border-gray-300 cursor-pointer"
                        :style="{backgroundColor: color2}"
                    >
                    </div>
				</div>
                <!-- end color -->
                <!-- ball speed with time -->
                <label class="mb-3 inline-flex items-center cursor-pointer">
                    <span class="text-white">Accelerer la vitesse de la balle en fonction du temps passe </span>
                    <input type="checkbox" value="" class="sr-only peer">
                    <div class="relative w-11 h-6 -right-3 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
                </label>

                <!-- ball speed manual -->
                <div class="relative mb-12">
                    <label for="price-range-input" class="sr-only">Default range</label>
                    <input id="price-range-input" type="range" value="1000" min="100" max="1500" class="w-3/5 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                    <span class="text-sm text-gray-400 absolute start-0 -bottom-6">Min ($100)</span>
                    <span class="text-sm text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
                    <span class="text-sm text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span>
                    <span class="text-sm text-gray-400 absolute end-0 -bottom-6">Max ($1500)</span>
                </div>
  
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
    data() {
        return {
            color1: '#ff0000',
            color2: '#ffd200',
        };
    },
};
</script>

<style scoped>
	@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
</style>
