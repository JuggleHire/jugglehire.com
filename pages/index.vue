<template>
  <div>
    <hero-section />
    <feature-section />
    <benefit-section />
    <benefit-section2 />
    <benefit-section-3 />
    <benefit-section-4 />
    <benefit-section-5 />
    <benefit-section-6 />
    <div class="bg-gray-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-4xl text-center">
          <h2 class="text-base font-semibold leading-7 text-blue-400">Pricing</h2>
          <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Pricing plans for teams of&nbsp;all&nbsp;sizes</p>
        </div>
        <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
        <pricing-plans />
      </div>
    </div>
    <home-blog-section />
    <stats />
  </div>
</template>

<script setup>
const title = "JuggleHire | Simplifying Hiring for Busy Founders & Recruiters";
const description = "Welcome to JuggleHire, your trusted partner in streamlining the hiring process. Discover how our recruitment software can make hiring easy for busy founders, entrepreneurs, and small business owners.";

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
});

const route = useRoute()
useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://www.jugglehire.com/' + route.path,
    },
  ],
})
</script>