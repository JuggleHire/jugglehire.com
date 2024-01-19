<template>
    <div class="bg-gray-900 py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 class="text-center text-lg font-semibold leading-8 text-white">Trusted by the world’s most innovative
                teams</h2>
            <div
                class="mx-auto mt-10 flex flex-wrap justify-center items-center gap-x-4 gap-y-3">
                <img v-for="client in clients" class="h-12 w-auto bg-white px-3 py-2 rounded object-contain"
                    :src="client.logo" :alt="client.name"
                    width="158" height="48" />
            </div>
        </div>
    </div>
</template>

<script setup>
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
