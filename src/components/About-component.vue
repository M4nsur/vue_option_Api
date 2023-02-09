<template>
  <article class="about">
    <div class="logoWrapperAbout">
      <img src="@/assets/logo2.svg" alt="logo" />
    </div>
    <div class="descrAbout">
      Организация HasanTech была основана тремя студентами Intocode. Сейчас наша
      команда состоит из высококвалифицированных разработчиков,
      специализирующихся на создании инновационных технологий и решений. Мы
      стремимся к постоянному развитию и улучшению своих навыков, чтобы
      обеспечить высокое качество наших продуктов. Мы верим в силу технологий и
      их возможности, чтобы решать сложные проблемы и улучшать качество жизни
      людей.
    </div>
    <div class="ourSt">
      <h2>Наш стек</h2>
    </div>
    <div class="iconsTechWrapper">
      <Carousel
        class="slideWrapperOne"
        id="thumbnails"
        :items-to-show="1"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
      >
        <Slide v-for="tech in addEventStore" :key="tech">
          <div class="carousel__item" @click="slideTo(tech - 1)">
            {{ tech.descr }}
          </div>
        </Slide>
      </Carousel>
      <Carousel
        class="slideWrapperSecond"
        id="gallery"
        :items-to-show="5"
        :wrap-around="true"
        :autoplay="3000"
        v-model="currentSlide"
      >
        <Slide
          class="slideWrapper"
          v-for="tech in addEventStore"
          :key="tech.name"
        >
          <div class="carousel__item">
            <img :src="tech.url" :alt="tech.name" />
          </div>
        </Slide>
      </Carousel>
    </div>
    <div class="aboutBgDown"><img src="@/assets/networkBg.gif" alt="bg" /></div>
  </article>
</template>
<li></li>
<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

// Ислам переделает slider, никому эти файлы не трогать.
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      currentSlide: 0,
    };
  },
  computed: {
    addEventStore() {
      return this.$store.getters.getStack.values;
    },
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
  },
};
</script>
