<template>
  <!-- Hero -->
  <div
    class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 ]"
    data-aos="fade-up">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
      <!-- Announcement Banner -->
      <div class="flex justify-center">
        <a class="bg-white border border-gray-200 text-sm text-gray-800 py-1 px-2 rounded-full transition hover:border-gray-300"
          href="#">
          Struggling to find the right talents?
        </a>
      </div>
      <!-- End Announcement Banner -->

      <!-- Title -->
      <div class="mt-5 max-w-2xl text-center mx-auto">
        <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
          Hunt With
          <span class="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Juggle Hire</span>
        </h1>
      </div>
      <!-- End Title -->

      <div class="mt-5 max-w-3xl text-center mx-auto">
        <p class="sm:text-xl text-base sm:leading-8  text-gray-600">
          From Small Businesses To HR Professionals, Now Anyone Can
          <u><em>Automatically</em></u> Choose The Right Candidate On Command
        </p>
      </div>

      <!-- Buttons -->
      <div class="mt-4 gap-3 flex justify-center">
        <a class="py-3 px-4 inline-flex items-center gap-x-2  font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 text-base"
          href="#">
          14 Days Free Trial Start Here
          <svg class="flex-shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </a>
      </div>
      <!-- End Buttons -->

      <div class="mt-3 flex justify-center items-center gap-x-1 sm:gap-x-3 text-gray-800 text-base">
        🚀 Start In A Minute. Cancel Anytime
      </div>
      <div class="mt-10 group">
        <h2 class="text-center sm:text-xl text-base font-semibold sm:leading-8 text-gray-800 opacity-75">
          Powering Global Visionary Leaders
        </h2>
        <div
          class="mx-auto mt-6 flex justify-center flex-wrap max-w-lg items-center md:gap-8 sm:gap-5 gap-4 sm:max-w-xl sm:grid-cols-6 sm:gap-x-6 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div class="bg-white rounded-lg px-4 py-2.5" v-for="(client, index) in clients" :key="index" data-aos="zoom-in"
            :data-aos-delay="100 * index">
            <img class="h-6 opacity-75 w-full object-contain hover:opacity-100" :src="client.logo" :alt="client.name"
              width="158" height="48" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Hero -->
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import { Dialog, DialogPanel } from "@headlessui/vue";
import {
  Bars3Icon,
  XMarkIcon,
  CheckCircleIcon,
} from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Public Roadmap", href: "/roadmap" },
  { name: "Blog", href: "/blog" },
];

const mobileMenuOpen = ref(false);

const clients = [
  {
    name: "Dorik - JuggleHire Client",
    logo: "/clients/dorik.svg",
  },
  {
    name: "Xgenious - JuggleHire Client",
    logo: "/clients/xgenious.svg",
  },
  {
    name: "Blinto - JuggleHire Client",
    logo: "/clients/blinto.svg",
  },
  {
    name: "Lomeyo - JuggleHire Client",
    logo: "/clients/lomeyo.svg",
  },
  {
    name: "Pixency - JuggleHire Client",
    logo: "/clients/pixency.png",
  },
  {
    name: "BitByte Technology - JuggleHire Client",
    logo: "/clients/bitbyte-technology.svg",
  },
  {
    name: "Microters - JuggleHire Client",
    logo: "/clients/microters.png",
  },
];
</script>
