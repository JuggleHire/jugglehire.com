<template>
  <header ref="headerRef"
    class="bg-transparent relative z-[999] top-0  inset-x-0 w-full mx-auto border-b border-b-gray-100  transition-all duration-200 ease-linear ">
    <nav class="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
      <div class="flex lg:flex-1">
        <nuxt-link href="/" class="-m-1.5 p-1.5">
          <img src="/jugglehire.png" alt="company logo" width="130">
          <!-- <span class="text-xl text-white font-bold">JuggleHire</span> -->
        </nuxt-link>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-8">
        <template v-for="(nav, index) in navigation" :key="index">
          <Popover v-if="nav.items" class="relative z-50">
            <PopoverButton
              class="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus-visible:outline-none">
              <span>{{ nav.name }}</span>
              <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute left-1/2 z-[999] mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                <div
                  class="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5"
                  :class="{ 'lg:max-w-3xl': nav.megaMenu }">
                  <div class="p-4" :class="{
                    'grid grid-cols-1 gap-x-6 gap-y-1 lg:grid-cols-2':
                      nav.megaMenu,
                  }">
                    <div v-for="(subitem, subitemIndex) in nav.items" :key="subitemIndex"
                      class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-100">
                      <div
                        class="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <component :is="subitem.icon" class="h-6 w-6 text-gray-600 group-hover:text-blue-600"
                          aria-hidden="true" />
                      </div>
                      <div>
                        <a :href="subitem.href" class="font-semibold text-gray-900">
                          {{ subitem.name }}
                          <span class="absolute inset-0" />
                        </a>
                        <p class="mt-1 text-gray-600">
                          {{ subitem.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    <a v-for="item in callsToAction" :key="item.name" :href="item.href"
                      class="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                      <component :is="item.icon" class="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {{ item.name }}
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
          <nuxt-link v-else :to="nav.href" class="text-sm font-semibold leading-6 text-gray-900">{{ nav.name
          }}</nuxt-link>
        </template>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <!-- <a href="https://app.jugglehire.com/register" class="mr-1 flex items-center gap-x-1 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            Get Started Free
          </a> -->
        <a href="https://app.jugglehire.com/login"
          class="flex items-center gap-x-1 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 border border-gray-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white">
          Login
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
          </svg>
        </a>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-40" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
        <div class="flex items-center justify-between">
          <nuxt-link to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">JuggleHire</span>
            <img class="h-8 w-auto" src="/logo-light.svg" alt="Jugglehire.com logo - light theme" />
            <!-- <span class="text-xl text-white font-bold">JuggleHire</span> -->
          </nuxt-link>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/25">
            <div class="space-y-2 py-6">
              <nuxt-link v-for="item in navigation" :key="item.name" :to="item.href" @click="mobileMenuOpen = false"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">{{
                  item.name }}</nuxt-link>
            </div>
            <div class="py-6">
              <!-- <a href="https://facebook.com/groups/useJuggleHire" target="_blank" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800 bg-blue-700 text-center uppercase">
                  Join our Facebook Group
                </a> -->
              <a href="https://app.jugglehire.com/register"
                class="ml-auto flex items-center gap-x-1 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                <svg class="-ml-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" />
                </svg>
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/vue";
import {
  Bars3Icon,
  XMarkIcon,
  CheckCircleIcon,
} from "@heroicons/vue/24/outline";
import {
  ChevronDownIcon,
  ArrowPathIcon,
  BuildingOfficeIcon,
  ClipboardDocumentCheckIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  KeyIcon,
  UserGroupIcon,
  BriefcaseIcon,
  DocumentMagnifyingGlassIcon,
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  FunnelIcon,
  GlobeAltIcon,
  DocumentCheckIcon,
  FolderIcon,
  ArchiveBoxIcon,
  MapIcon,
  ForwardIcon,
  HeartIcon,
  AcademicCapIcon,
  PhoneIcon,
} from "@heroicons/vue/20/solid";

const navigation = [
  {
    name: "Features",
    href: "#",
    megaMenu: true,
    items: [
      {
        name: "Job Posting and Management",
        description: "Your Gateway to Exceptional Talent",
        href: "#",
        icon: BriefcaseIcon,
      },
      {
        name: "Candidate Application Management",
        description: "Effortless Job Posts, Swift Hiring",
        href: "#",
        icon: DocumentMagnifyingGlassIcon,
      },
      {
        name: "Spam Candidate Filter",
        description: "Custom Forms for Seamless Hiring",
        href: "#",
        icon: MagnifyingGlassIcon,
      },
      {
        name: "Interview Scheduler",
        description: "Filter Noise, Focus on Quality",
        href: "#",
        icon: CalendarDaysIcon,
      },
      {
        name: "Collaborative Hiring Process",
        description: "Efficient Candidate Sorting Simplified",
        href: "#",
        icon: ArrowPathIcon,
      },
      {
        name: "Applicant Tracking System",
        description: "Stay Connected, Even on Autopilot",
        href: "#",
        icon: FunnelIcon,
      },
      {
        name: "Two Way Email Communication",
        description: "Email, Meet Hiring in One Place",
        href: "#",
        icon: EnvelopeIcon,
      },
      {
        name: "Company Career Portal",
        description: "Effortless Interview Coordination",
        href: "#",
        icon: GlobeAltIcon,
      },
      {
        name: "Candidate Assessment Tracker",
        description: "Stay Connected, Even on Autopilot",
        href: "#",
        icon: DocumentCheckIcon,
      },
      {
        name: "Candidate Directory",
        description: "Email, Meet Hiring in One Place",
        href: "#",
        icon: FolderIcon,
      },
      {
        name: "Branded Domains",
        description: "Effortless Interview Coordination",
        href: "#",
        icon: ArchiveBoxIcon,
      },
      {
        name: "Team Collaboration",
        description: "Effortless Interview Coordination",
        href: "#",
        icon: ChatBubbleLeftRightIcon,
      },
    ],
  },
  {
    name: "Use Cases",
    href: "#",
    items: [
      {
        name: "Recruitment Software for SMB",
        description: "Your Gateway to Exceptional Talent",
        href: "/recruitment-software-for-small-business-owner",
        icon: BuildingOfficeIcon,
      },
      {
        name: "Talent Acquisition Management",
        description: "Effortless Job Posts, Swift Hiring",
        href: "#",
        icon: ClipboardDocumentCheckIcon,
      },
      {
        name: "Remote Hiring Solution",
        description: "Custom Forms for Seamless Hiring",
        href: "#",
        icon: DocumentTextIcon,
      },
    ],
  },
  {
    name: "Resources",
    items: [
      {
        name: "Product Roadmap",
        description: "Your Gateway to Exceptional Talent",
        href: "/roadmap",
        icon: MapIcon,
      },
      {
        name: "Changelog",
        description: "Effortless Job Posts, Swift Hiring",
        href: "/changelog",
        icon: ForwardIcon,
      },
      {
        name: "The Wall of Love",
        description: "Custom Forms for Seamless Hiring",
        href: "/the-wall-of-love",
        icon: HeartIcon,
      },
      {
        name: "About Us",
        description: "Filter Noise, Focus on Quality",
        href: "/about-us",
        icon: UserGroupIcon,
      },
      {
        name: "Contact Us",
        description: "Feel free to connect us!",
        href: "/contact-us",
        icon: PhoneIcon,
      },
      {
        name: "Knowledgebase",
        description: "Stay Connected, Even on Autopilot",
        href: "https://jugglehire.helpcenter.guide/",
        icon: AcademicCapIcon,
      },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
];

const mobileMenuOpen = ref(false);
const headerRef = ref(null);

const callsToAction = [
  {
    name: "Request Beta Access",
    href: "https://app.jugglehire.com/register",
    icon: KeyIcon,
  },
  {
    name: "Facebook Group",
    href: "https://fb.com/groups/jugglehire",
    icon: UserGroupIcon,
  },
];


</script>
