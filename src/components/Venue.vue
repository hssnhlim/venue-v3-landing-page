<template>
    <section>
        <div class="w-full h-full xs:h-full bg-custom-gradient-top-left">
            <div class="max-w-4xl mx-auto px-4 pb-8">
                <!-- Title and subtitle -->
                <div class="w-full flex flex-col gap-y-5">
                    <h1 id="venue" class="text-start text-3xl font-semibold text-primary-color pt-10">{{
                        $t('home.join-us.title') }}
                    </h1>
                    <h2 class="text-start text-lg font-normal">{{ $t('home.join-us.subtitle') }}</h2>
                </div>
                <!-- End of title and subtitle -->

                <!-- Venue category -->
                <div class="w-full grid grid-cols-2 gap-x-4 justify-center items-center md:grid-cols-4 lg:grid-cols-5">
                    <VenueCategoryCard v-for="item in category" :key="item.id" :image="item.image" :text="item.text" />
                </div>
                <!-- End of venue category -->

                <!-- Button -->
                <div class="flex flex-col items-center mt-16 z-0">
                    <RouterLink :to="{ name: 'get-started' }">
                        <Button
                            class="bg-primary-color px-10 py-4 rounded-full shadow-lg flex justify-center items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95">
                            <p class="text-white font-extrabold">{{ $t('get-started-btn.title') }}</p>
                        </Button>
                    </RouterLink>
                </div>
                <!-- End of button -->
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import VenueCategoryCard from './widget/Venue-Category-Card.vue';
import categoryEn from '../data/venue-category-en.json';
import categoryMy from '../data/venue-category-my.json';

const { locale } = useI18n();

const category = ref([]);

const updateCategory = () => {
    category.value = locale.value === 'my' ? categoryMy : categoryEn;
};

watchEffect(updateCategory);
</script>
