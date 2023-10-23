<template>
  <div>
    <h1>About Us</h1>
  </div>
</template>

<script setup>
const title = "About JuggleHire | Our Story, Mission, and Vision";
const description = "Learn about JuggleHire and discover our story, mission, and vision. Find out how we're revolutionizing small business hiring.";

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
