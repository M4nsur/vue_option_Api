<template>
  <article class="about">
    <div class="logoWrapperAbout">
      <img src="@/assets/logo2.svg" alt="logo" />
    </div>
    <div class="descrAbout">
      Наша команда состоит из высококвалифицированных разработчиков,
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
        <Slide v-for="tech in techs" :key="tech">
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
        <Slide class="slideWrapper" v-for="tech in techs" :key="tech.name">
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
import css from "@/assets/icons/css2.png";
import html from "@/assets/icons/html.png";
import angular from "@/assets/icons/angular.png";
import graph from "@/assets/icons/graph.png";
import js from "@/assets/icons/js.png";
import mysql from "@/assets/icons/mysql.png";
import nest from "@/assets/icons/nest.png";
import next from "@/assets/icons/next.png";
import node from "@/assets/icons/node.png";
import php from "@/assets/icons/php.png";
import python from "@/assets/icons/python.png";
import react from "@/assets/icons/react.png";
import vue from "@/assets/icons/vue2.png";
import ts from "@/assets/icons/ts.png";
import redux from "@/assets/icons/redux.png";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

// Ислам не забудь переделать слайдер Хамзата
export default {
  components: {
    Carousel,
    Slide,
  },
  //Почему данные для бэка не вынесены отдельно в файл. Кто их сюда закинул?
  data() {
    return {
      techs: [
        {
          name: "HTML",
          descr:
            "HTML (Hypertext Markup Language) - это стандартный язык разметки, используемый для создания веб-страниц и веб-приложений. HTML состоит из серии элементов, представленных тегами, которые определяют структуру и содержание веб-страницы.",
          url: html,
        },
        {
          name: "CSS",
          descr:
            "CSS (Cascading Style Sheets) - это язык оформления, используемый для описания внешнего вида документа, написанного на HTML или XML. CSS позволяет управлять цветом, шрифтом, расстоянием между элементами и многим другим, что позволяет разделить содержимое и оформление веб-страницы.",
          url: css,
        },
        {
          name: "js",
          descr:
            "JavaScript - это программный язык, который используется для реализации интерактивных и динамических функций на веб-страницах. JavaScript позволяет создавать эффекты анимации, валидировать формы на стороне клиента, создавать диалоговые окна и многое другое.",
          url: js,
        },
        {
          name: "",
          descr:
            "React - это JavaScript-библиотека, разработанная Facebook, для создания пользовательских интерфейсов. React использует реактивный подход, который позволяет быстро и эффективно обновлять данные в пользовательском интерфейсе при изменении данных в приложении.",
          url: react,
        },
        {
          name: "Angular",
          descr:
            "Angular - это популярный JavaScript-фреймворк, разработанный Google, для создания веб-приложений. Angular предлагает широкий набор инструментов для управления данными, роутингом, шаблонами и многим другим, что позволяет ускорить разработку и улучшить поддерживаемость кода.",
          url: angular,
        },
        {
          name: "Vue",
          descr:
            "Vue 3 представляет современный прогрессивный фреймворк, написанный на языке TypeScript и предназначенный для создания веб-приложений на уровне клиента. Основная область применения данного фреймворка - это создание и организация пользовательского интерфейса.",
          url: vue,
        },
        {
          name: "python",
          descr:
            "Python - это высокоуровневый язык программирования с открытым исходным кодом, который прославлен своей простотой и читаемостью кода. Python поддерживает множество различных приложений, включая веб-разработку, научные вычисления, анализ данных и машинное обучение.",
          url: python,
        },
        {
          name: "php",
          descr:
            "PHP (Hypertext Preprocessor) - это язык программирования для серверной части веб-приложений, который поддерживает динамическую генерацию веб-страниц. PHP является одним из самых популярных языков для веб-разработки, поскольку он легок в использовании и имеет богатую экосистему библиотек и расширений.",
          url: php,
        },
        {
          name: "typescript",
          descr:
            "TypeScript - это язык программирования, который является суперсетом JavaScript и добавляет поддержку типов данных и других функций, которые повышают стабильность и производительность кода. TypeScript компилируется в JavaScript, что позволяет работать с большинством существующих библиотек и фреймворков.",
          url: ts,
        },
        {
          name: "redux",
          descr:
            "Redux - это популярная библиотека JavaScript для управления состоянием приложения. Она предлагает простой и эффективный способ управления данными и состоянием в многокомпонентных приложениях. Redux основан на паттерне Flux и используется в комбинации с фреймворками, такими как React и Angular.",
          url: redux,
        },
        {
          name: "next",
          descr:
            "Next.js - это фреймворк для React, который предоставляет удобный инструментарий для создания производительных и эффективных веб-приложений. Next.js оптимизирует код на стороне сервера и клиента, что повышает скорость загрузки и отображения страниц.",
          url: next,
        },
        {
          name: "node",
          descr:
            "Node.js - это платформа на основе JavaScript, которая позволяет создавать серверные приложения используя JavaScript. Node.js использует движок V8 JavaScript, разработанный Google, и является простым и гибким средством для разработки высокопроизводительных сетевых приложений.",
          url: node,
        },
        {
          name: "nest",
          descr:
            "Nest.js - это фреймворк для Node.js, который предлагает модульный и гибкий подход к разработке приложений на основе сервера. Он основан на TypeScript и вдохновлен паттернами проектирования, используемыми в Angular.",
          url: nest,
        },
        {
          name: "mysql",
          descr:
            "MySQL - это одна из самых популярных открытых систем управления реляционными базами данных (RDBMS). Она позволяет хранить, обрабатывать и извлекать данные из базы данных, используя язык запросов SQL.",
          url: mysql,
        },
        {
          name: "graph",
          descr:
            "GraphQL - это язык запросов и описания данных для API, разработанный компанией Facebook. Он предлагает более эффективный, эластичный и удобный способ управления запросами к API, чем обычные REST API.",
          url: graph,
        },
      ],
      currentSlide: 0,
    };
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
  },
};
</script>

<style>
img {
  width: 50px;
}
</style>
