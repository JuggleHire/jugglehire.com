<template>
  <div>
    <h1>Contact Us</h1>
  </div>
</template>

<script setup>
const title = "Contact JuggleHire | Get in Touch for Recruitment Solutions";
const description = "Contact JuggleHire to get in touch with our team and explore recruitment solutions that simplify hiring for small businesses.";

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
