<template>
    <!-- FIRST SECTION -->
    <section class="h-full flex justify-center bg-custom-gradient-top-right relative">
        <div class="h-full max-w-4xl xl:grid xl:grid-cols-2 xl:gap-x-10 xl:pt-8 xl:pb-60 relative">
            <!-- First Part -->
            <div
                class="h-full w-full flex flex-col items-start justify-start px-4 xl:px-0 pt-5 z-10 xl:pt-14 xl:mt-0 xl:items-start">
                <h1 class="tracking-wide font-semibold text-start md:text-3xl text-3xl xs:mt-4">
                    {{ $t('home.section1.title') }}
                </h1>

                <h1 class="font-medium text-white rounded-lg mt-7 lg:text-3xl md:text-3xl text-2xl">
                    {{ $t('home.section1.subtitle') }}
                </h1>

                <div class="flex flex-row items-center justify-between gap-x-4 mt-6">
                    <a href="https://apps.apple.com/my/app/venue-app/id6443705242" target="blank">
                        <button>
                            <img class="h-12" src="../assets/img/brand-logo/store-logo-10.png" alt="Apple Store">
                        </button>
                    </a>

                    <a href="https://play.google.com/store/apps/details?id=my.com.venue&hl=en-MY" target="blank">
                        <button>
                            <img class="h-12" src="../assets/img/brand-logo/store-logo-08.png" alt="Google Play Store">
                        </button>
                    </a>
                </div>
            </div>
            <!-- End of First Part -->

            <!-- Second Part -->
            <div
                class=" flex flex-col justify-start items-center mt-7 xl:absolute xl:w-auto xl:h-auto xl:left-[50%] xl:top-0 xl:right-0 xl:bottom-0 xl:pt-0">
                <img class=" object-cover" src="../assets/img/iPad-iPhone-mockup.png" alt="Venue iPad">
            </div>
            <!-- End of Second Part -->
        </div>
    </section>
    <!-- END OF FIRST SECTION -->

    <!-- SECOND SECTION -->
    <section class="flex flex-col justify-between items-center gap-y-10">
        <div class="w-full flex flex-col justify-center items-center bg-white" style="height: 500px;">
            <!-- Carousel Slide Display -->
            <transition name="fade" mode="out-in">
                <CarouselSlide v-if="currentSlide" :key="currentSlide.id" :text="currentSlide.text"
                    :image="currentSlide.image" />
            </transition>
        </div>

        <!-- Slide Indicators -->
        <div class="flex flex-row justify-center gap-x-2 py-4">
            <span v-for="(item, index) in slides" :key="item.id"
                class="w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-300 md:w-2.5 md:h-2.5"
                :class="{ 'bg-primary-color': currentIndex === index, 'bg-gray-300': currentIndex !== index }"
                @click="goToSlide(index)"></span>
        </div>
    </section>
    <!-- END OF SECOND SECTION -->
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watchEffect } from 'vue';
import CarouselSlide from './widget/CarouselSlide.vue';
import { useI18n } from 'vue-i18n'; // Vue I18n for language handling

// Reactive state
const { locale } = useI18n(); // Access the current locale from Vue I18n
const slides = ref([]);
const currentIndex = ref(0);
let intervalId = null;

// Load slide data based on current language
const loadSlides = async () => {
    const slideData = await import(`../data/data-${locale.value}.json`);
    slides.value = slideData.default; // Use default export from the JSON file
};

// Computed property for the current slide
const currentSlide = computed(() => slides.value[currentIndex.value]);

// Methods to control the slides
const goToSlide = (index) => {
    currentIndex.value = index;
};

const startAutoSlide = () => {
    intervalId = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % slides.value.length;
    }, 7000); // Slide change interval
};

const stopAutoSlide = () => {
    clearInterval(intervalId);
};

// Lifecycle hooks
onMounted(() => {
    loadSlides(); // Load the slides when mounted
    startAutoSlide(); // Start auto sliding when mounted
});

onBeforeUnmount(() => {
    stopAutoSlide(); // Stop auto sliding before component unmounts
});

// Watch for language changes
watchEffect(() => {
    loadSlides(); // Reload slides when the language (locale) changes
});
</script>


<style>
/* Fade transition effect */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>