<template>
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 class="text-center text-lg font-semibold leading-8 text-gray-900" v-text="title" />
            <div class="mx-auto mt-10 flex flex-wrap justify-center items-center gap-12 md:gap-[5rem]">
                <img v-for="client in clients" :key="client.name" class="max-h-7 md:max-h-10 w-auto object-contain" :src="client.logo"
                    :alt="client.name" width="158" height="40" />
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String
})

const clients = [

    {
        name: 'Dorik - JuggleHire Client',
        logo: '/clients/dorik.svg'
    },
    {
        name: 'Xgenious - JuggleHire Client',
        logo: '/clients/xgenious.svg'
    },
    {
        name: 'Spagreen - JuggleHire Client',
        logo: '/spagreen-logo.png'
    },
    {
        name: 'Blinto - JuggleHire Client',
        logo: '/clients/blinto.svg'
    },
    {
        name: 'Lomeyo - JuggleHire Client',
        logo: '/clients/lomeyo.svg'
    },
    {
        name: 'Pixency - JuggleHire Client',
        logo: '/clients/pixency.png'
    },
    {
        name: 'BitByte Technology - JuggleHire Client',
        logo: '/clients/bitbyte-technology.svg'
    },
    {
        name: 'Microters - JuggleHire Client',
        logo: '/clients/microters.png'
    },
]
</script>
