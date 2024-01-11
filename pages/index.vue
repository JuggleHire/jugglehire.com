<template>
  <div>
    <hero-section />
    <recruitment-puzzle />
    <feature-section />
    <!-- <benefit-section />
    <benefit-section2 />
    <benefit-section-3 />
    <benefit-section-4 />
    <benefit-section-5 />
    <benefit-section-6 /> -->
    <!-- <div class="bg-gray-900 py-16 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="text-base font-semibold leading-7 text-blue-400">Pricing</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">Pricing plans for teams of&nbsp;all&nbsp;sizes</p>
        </div>
        <p class="mx-auto mt-6 max-w-2xl text-center sm:text-lg text-base sm:leading-8 text-gray-300">Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
        <pricing-plans />
      </div>
    </div> -->
    <testimonial-section />
    <stats />

    <blog-section />
  </div>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
const title = "JuggleHire | Simplifying Hiring for Busy Founders & Recruiters";
const description =
  "Welcome to JuggleHire, your trusted partner in streamlining the hiring process. Discover how our recruitment software can make hiring easy for busy founders, entrepreneurs, and small business owners.";

onMounted(() => {
  AOS.init();
});
useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
});

const route = useRoute();
useHead({
  link: [
    {
      rel: "canonical",
      href: "https://www.jugglehire.com/" + route.path,
    },
  ],
});

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    },
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    },
  },
  // More posts...
];
</script>
