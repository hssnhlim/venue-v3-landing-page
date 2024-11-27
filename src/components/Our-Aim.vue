<template>
    <section class="w-full bg-white">
        <div class="max-w-4xl mx-auto flex flex-col justify-center items-start px-4 pb-20">
            <!-- Title part -->
            <div class="pt-10 space-y-4">
                <h1 id="our-aim" class="text-primary-color font-semibold text-3xl">{{ $t('home.our-aim.title') }}</h1>
                <h2 class="font-semibold text-2xl">{{ $t('home.our-aim.subtitle1') }}</h2>
            </div>
            <!-- End of title part -->

            <!-- Subtitle part -->
            <div class="pt-8 flex flex-col space-y-4 font-normal text-lg">
                <p>{{ $t('home.our-aim.subtitle2') }}
                </p>
                <p>{{ $t('home.our-aim.subtitle3') }}</p>
            </div>
            <!-- End of Subtitle part -->
        </div>
    </section>
</template>

<script setup>

</script>