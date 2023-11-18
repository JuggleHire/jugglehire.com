<template>
  <div>
    <section class="bg-gray-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <div
          class="mx-auto mt-12 grid gap-5 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3"
          v-if="posts.length"
        >
          <post-item :item="item" v-for="(item, i) in posts" :key="i" />
        </div>
        <div v-else>No post found</div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ALL_BLOG_QUERY from "~/graphql/blog/allBlogPosts.js";
const route = useRoute();
const title = `Blog - Templatecookie.com`;
const description = "Read templatecookie blog. Updated Weekly";

const { data } = await useGraphqlQuery({ query: ALL_BLOG_QUERY });
const posts = data._rawValue.allPosts;
</script>

<style></style>
