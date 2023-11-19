<template>
    <div class="bg-gray-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 bg-white">
            <div class="py-24">
                <div class="w-full md:w-8/12 p-4 mx-auto">
                    <div class="mb-6">
                        <h2 class="text-5xl mb-4 text-gray-900">
                            {{ post.title }}
                        </h2>
                    </div>
                    <img class="w-full h-auto object-cover" v-if="post.image && post.image.url" :src="post.image.url"
                        :alt="post.title" />
                    <div class="content py-4 markdown-body">
                        <structured-text :data="post.description" />
                    </div>
                </div>
                <section class="text-gray-600 body-font overflow-hidden pt-14 lg:pt-20">
                    <div class="w-full md:w-8/12 px-5 mx-auto">
                        <h4 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                            Read More
                        </h4>
                        <hr class="my-6" />
                        <div class="-my-8 divide-y-2 divide-gray-100">
                            <div class="py-8 flex flex-wrap md:flex-nowrap group" v-for="(item, i) in relatedPosts"
                                :key="i">
                                <div class="md:w-52 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span class="font-semibold title-font text-gray-700"
                                        v-for="(tag, index) in item.tags" :key="index">{{ tag.name }}</span>
                                    <span class="mt-1 text-gray-500 text-sm">
                                      {{ formateDate(item.updatedAt) }}
                                    </span>
                                </div>
                                <div class="md:flex-grow">
                                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
                                        <nuxt-link :to="item.slug"
                                            class="text-gray-900 group-hover:text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">
                                            {{ item.title }}
                                        </nuxt-link>
                                    </h2>
                                    <p class="leading-relaxed">
                                        {{ item.shortDescription }}
                                    </p>
                                    <nuxt-link :to="item.slug" class="text-blue-500 inline-flex items-center mt-4">
                                        Read More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor"
                                            stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14" />
                                            <path d="M12 5l7 7-7 7" />
                                        </svg>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <h2>Hello</h2>
    </div>
</template>

<script setup>
    import dayjs from "dayjs";
    import BLOG_DETAILS from "~/graphql/blog/postDetails";
    const route = useRoute();
    const { slug } = route?.params;

    const { data } = await useGraphqlQuery({
        query: BLOG_DETAILS,
        variables: { slug },
    });
    const formateDate = (data) => {
        return dayjs(data).format("D MMMM, YYYY");
    };
    const post = ref([]);
    const relatedPosts = ref([]);
    post.value = data._rawValue.post;
    console.log(data)
    relatedPosts.value = data._rawValue.allPosts;

    const title = `${post?._rawValue?.title} | Templatecookie.com`;
    const description = post?._rawValue?.shortDescription;
    const image = post?._rawValue?.image?.url;

</script>
