<template>
  <header>
    <div class="container header_container">
      <div class="logo">
        <a href="#"
          ><img class="logoImg" src="../assets/logo1.svg" alt="logo"
        /></a>
      </div>
      <div @click="handleBurger" :class="isActiveBtnBurger">
        <span></span><span></span><span></span>
      </div>
      <nav>
        <ul :class="checkBtnBurger">
          <li :class="link.class" v-for="link in links" :key="link.main">
            <router-link @click="handleBurger" :to="link.href">{{
              link.main
            }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      burgerIsActive: true,
      links: [
        {
          main: "Главная",
          href: "/",
          class: "link",
        },
        {
          main: "О нас",
          href: "/about",
          class: "link",
        },
        {
          main: "Обратная связь",
          href: "/feedback",
          class: "link",
        },
        {
          main: "Наши вакансии",
          href: "#",
          class: "link",
        },
        {
          main: "Сообщество",
          href: "#",
          class: "link linkReset",
        },
      ],
    };
  },
  computed: {
    checkBtnBurger() {
      return this.burgerIsActive
        ? "linksWrapperNone"
        : "linksWrapperNone linksWrapper ";
    },
    isActiveBtnBurger() {
      return this.burgerIsActive ? "btnBurger" : "btnBurger btnBurgerActive";
    },
  },
  methods: {
    handleBurger() {
      this.burgerIsActive = !this.burgerIsActive;
    },
    test() {
      console.log("привет");
    },
  },
};
</script>
