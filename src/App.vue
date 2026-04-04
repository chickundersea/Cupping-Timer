<script setup lang="ts">
import { useTimer } from './composable/useTimer'

const { displayTime, status, start, stop, reset } = useTimer()
</script>

<template>
  <div class="min-h-screen bg-olive-600 text-stone-100 flex flex-col items-center justify-center font-mono">
    <h1 class="text-2xl tracking-widest text-stone-400 mb-8 uppercase">Cupping Timer</h1>

    <div class="text-8xl font-bold tracking-widest mb-10">
      {{ displayTime }}
    </div>

    <div class="flex gap-4">
      <!-- TODO: 根據 status 決定顯示哪些按鈕 -->
        <button type="button" class="text-heading bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 box-border border border-transparent shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 cursor-pointer" @click="start">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 26"><!-- Icon from Sargam Icons by Abhimanyu Rana - https://github.com/planetabhi/sargam-icons/blob/main/LICENSE.txt --><path fill="currentColor" d="m6.192 3.67l13.568 7.633a.8.8 0 0 1 0 1.394L6.192 20.33A.8.8 0 0 1 5 19.632V4.368a.8.8 0 0 1 1.192-.697"/></svg>
         <p class="text-lg">Start</p>
        </button>
        <button type="button" class="text-heading bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 box-border border border-transparent shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 cursor-pointer" @click="stop">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 24"><!-- Icon from Sargam Icons by Abhimanyu Rana - https://github.com/planetabhi/sargam-icons/blob/main/LICENSE.txt --><path fill="currentColor" d="M20.2 3H3.8a.8.8 0 0 0-.8.8v16.4a.8.8 0 0 0 .8.8h16.4a.8.8 0 0 0 .8-.8V3.8a.8.8 0 0 0-.8-.8"/></svg>
            <p class="text-lg">Stop</p>
        </button>
        <button type="button" class="text-heading bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 box-border border border-transparent shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 cursor-pointer" @click="reset">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 24"><!-- Icon from Remix Icon by Remix Design - https://github.com/Remix-Design/RemixIcon/blob/master/License --><path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2v2a8 8 0 1 0 4.5 1.385V8h-2V2h6v2H18a9.99 9.99 0 0 1 4 8"/></svg>
            <p class="text-lg">Reset</p>
        </button>
    </div>
  </div>
</template>

<style scoped></style>