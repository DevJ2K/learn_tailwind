<template>
  <header style="height: 80px;" class="fixed top-0 z-50 flex w-screen shadow-lg backdrop-blur-md">
    <div class="mx-auto flex w-full max-w-3xl flex-row items-center justify-between px-8">
      <div>
        <h1>DevJ2K</h1>
      </div>
      <div
        class="">
        <ul v-bind:class="{ 'hidden': !showMenu, 'flex': showMenu }" class="flex-col gap-3 font-bold md:flex md:flex-row md:gap-8 ">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#"><i class="fa-regular fa-moon"></i></a>
          </li>
        </ul>
      </div>
      <button
        class="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none md:hidden"
        type="button" v-on:click="toggleNavbar()">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const showMenu = ref(null);

function toggleNavbar() {
  showMenu.value = !showMenu.value
}
</script>
