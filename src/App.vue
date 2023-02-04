<template>
  <Header />
  <div class="container">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/Header-component.vue";
// import Main from "@/components/Main-component.vue";
import Footer from "@/components/Footer-component.vue";
export default {
  components: {
    Header,
    // Main,
    Footer,
  },
};
</script>
