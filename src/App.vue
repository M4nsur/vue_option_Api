<template>
  <Header />
  <div class="container">
    <Main />
  </div>
</template>

<script>
import Header from "@/components/Header-component.vue";
import Main from "@/components/Main-component.vue";
export default {
  components: {
    Header,
    Main,
  },
};
</script>
