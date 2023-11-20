<template>
    <div class="bg-white py-16 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
                <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
                <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.
                </p>
            </div>
            <div class="mx-auto mt-12 grid gap-5 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3" v-if="first3Posts.length">
                <blog-item :item="item" v-for="(item, i) in first3Posts" :key="i" />
            </div>
            <div v-else>No post found</div>
        </div>
    </div>
</template>


<script setup>
    import ALL_BLOG_QUERY from "~/graphql/blog/allBlogPosts.js";
    const route = useRoute();
    const title = `Blog - Templatecookie.com`;
    const description = "Read templatecookie blog. Updated Weekly";

    const { data } = await useGraphqlQuery({ query: ALL_BLOG_QUERY });
    console.log(data)
    const first3Posts = data._rawValue.allPosts.slice(0, 3);
    console.log(first3Posts);
</script>
