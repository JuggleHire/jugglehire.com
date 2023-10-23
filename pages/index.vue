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
    <pricing-section />
    <blog-section />
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