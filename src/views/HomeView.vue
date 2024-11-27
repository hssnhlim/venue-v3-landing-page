<script setup>
import Home from '@/components/Home.vue';
import Venue from '@/components/Venue.vue';
import OurAim from '@/components/Our-Aim.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Home />
  <Venue />
  <OurAim />
  <Footer />
</template>

<script>
export default {
  data() {
    return {
      selectedLanguage: 'en',
    };
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.selectedLanguage;
    },
  },
};
</script>
