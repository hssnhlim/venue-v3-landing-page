<template>
    <header class="w-full bg-white shadow-md sticky top-0 z-20">
        <div class="max-w-4xl md:flex justify-center mx-auto mobile-menu">
            <nav class="w-full xs:p-4 ">
                <div class="flex items-center justify-between ">
                    <!-- Mobile navbar -->
                    <RouterLink :to="{ name: 'home' }">
                        <img class="h-10" src="../../assets/img/brand-logo/logo.png" alt="Venue logo">
                    </RouterLink>

                    <button @click="toggleMenu"
                        class="relative md:hidden bg-white border-2 border-gray-100 p-1.5 rounded-lg">
                        <div
                            class="absolute inset-0 bg-white opacity-0">
                        </div>
                        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>

                        <svg v-if="menuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <!-- End of mobile navbar -->

                    <!-- Desktop navbar -->
                    <div class="hidden md:flex flex-row gap-8 items-center font-medium">
                        <RouterLink :to="{ name: 'home' }" :class="{ 'text-primary-color': !$route.hash }"
                            class="hover:text-primary-color">
                            {{ $t('nav.home') }}
                        </RouterLink>
                        <RouterLink :to="{ name: 'home', hash: '#venue' }"
                            :class="{ 'text-primary-color': $route.hash === '#venue' }"
                            class="hover:text-primary-color">
                            {{ $t('nav.join-us') }}
                        </RouterLink>
                        <RouterLink :to="{ name: 'home', hash: '#our-aim' }"
                            :class="{ 'text-primary-color': $route.hash === '#our-aim' }"
                            class="hover:text-primary-color">
                            {{ $t('nav.our-aim') }}
                        </RouterLink>
                        <div class="relative">
                            <button @click="toggleLanguageMenu"
                                class="flex flex-row items-center gap-x-1.5 bg-white border-2 border-gray-100 p-1.5 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>

                                <h4 class="font-medium">
                                    {{ selectedLanguage }}
                                </h4>
                            </button>

                            <!-- Dropdown menu for language -->
                            <div v-if="showLanguageMenu"
                                class="absolute right-0 bg-white border mt-1 rounded-lg p-2 transition-opacity duration-300 ease-in-out"
                                style="opacity: 0.95; min-width: 100px;">
                                <div @click="selectLanguage('En')"
                                    class="p-2 cursor-pointer hover:bg-gray-200 rounded-md">
                                    English
                                </div>

                                <div @click="selectLanguage('My')"
                                    class="p-2 cursor-pointer hover:bg-gray-200 rounded-md">
                                    Malay
                                </div>
                            </div>
                            <!-- End of dropdown menu for language -->

                        </div>
                    </div>
                    <!-- End of desktop navbar -->
                </div>

                <!-- Mobile menu -->
                <div v-if="menuOpen" class=" w-full left-0 top-full absolute z-10 md:hidden flex flex-col bg-white 
                    p-4 gap-y-4 border-2 border-gray-100 font-medium">

                    <RouterLink @click="closeMenu" :to="{ name: 'home' }"
                        :class="{ 'text-primary-color': !$route.hash }" class="hover:text-primary-color">
                        {{ $t('nav.home') }}
                    </RouterLink>

                    <RouterLink @click="closeMenu" :to="{ name: 'home', hash: '#venue' }"
                        :class="{ 'text-primary-color': $route.hash === '#venue' }" class="hover:text-primary-color">
                        {{ $t('nav.join-us') }}
                    </RouterLink>

                    <RouterLink @click="closeMenu" :to="{ name: 'home', hash: '#our-aim' }"
                        :class="{ 'text-primary-color': $route.hash === '#our-aim' }" class="hover:text-primary-color">
                        {{ $t('nav.our-aim') }}
                    </RouterLink>

                    <div class="relative w-full">
                        <button @click="toggleLanguageMenu"
                            class="w-full flex items-center justify-between bg-white border-2 border-gray-100 p-1.5 rounded-lg">
                            <div class="flex flex-row items-center gap-x-1.5 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>

                                <h4>
                                    {{ selectedLanguage }}
                                </h4>
                            </div>

                        </button>
                    </div>

                    <!-- Dropdown menu for language -->
                    <div v-if="showLanguageMenu"
                        class="absolute bg-white border mt-1 rounded-lg p-2 transition-opacity duration-300 ease-in-out"
                        style="opacity: 0.95; min-width: 100px;">
                        <div @click="selectLanguage('En')" class="p-2 cursor-pointer hover:bg-gray-200 rounded-md">
                            English
                        </div>

                        <div @click="selectLanguage('My')" class="p-2 cursor-pointer hover:bg-gray-200 rounded-md">
                            Malay
                        </div>
                    </div>
                    <!-- End of dropdown menu for language -->
                </div>
                <!-- End of mobile menu -->
            </nav>
        </div>
    </header>

</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';

// State variables
const menuOpen = ref(false);
const showLanguageMenu = ref(false);
const selectedLanguage = ref(localStorage.getItem('language') || 'En'); // Default to 'En'
const { locale } = useI18n();

// Functions
function toggleMenu() {
    menuOpen.value = !menuOpen.value;
}

function toggleLanguageMenu() {
    showLanguageMenu.value = !showLanguageMenu.value;
}

function selectLanguage(language) {
    selectedLanguage.value = language;
    showLanguageMenu.value = false;
    menuOpen.value = false;
    persistLanguage(language);
    updateLanguage(language);
}

function persistLanguage(language) {
    localStorage.setItem('language', language);
}

function updateLanguage(language) {
    locale.value = language === 'My' ? 'my' : 'en'; // Map to i18n locale keys
}

function closeMenu() {
    menuOpen.value = false;
    showLanguageMenu.value = false;
}

function handleClickOutside(event) {
    const menuElement = document.querySelector('.mobile-menu');
    if (menuElement && !menuElement.contains(event.target)) {
        closeMenu();
    }
    if (!event.target.closest('.relative')) {
        showLanguageMenu.value = false;
    }
}

onMounted(() => {
    updateLanguage(selectedLanguage.value);
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>