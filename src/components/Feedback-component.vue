<template>
  <div class="feedback">
    <form action="" class="form" @submit.prevent>
      <h3>Связаться с нами</h3>
      <p type="Имя:">
        <input v-model="inputValues.name" placeholder="Ваше имя" />
      </p>
      <p type="Ваш телеграм для обратной связи:">
        <input
          v-model="inputValues.telegram"
          placeholder="Например: @example"
        />
      </p>
      <p type="Сообщение:">
        <input
          v-model="inputValues.text"
          placeholder="Мы игнорируем запросы, где нет развернутого сообщения."
        />
      </p>
      <button @click="test">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValues: {
        name: "",
        telegram: "",
        text: "",
      },
    };
  },

  computed: {
    // validate() {
    //   if (
    //     this.inputValues.name &&
    //     this.inputValues.telegram &&
    //     this.inputValues.text
    //   ) {
    //     return true;
    //   }
    //   return false;
    // },
  },
  methods: {
    test() {
      if (
        this.inputValues.name.trim() > 3 &&
        this.inputValues.telegram.trim() > 3 &&
        this.inputValues.text.trim() > 3
      ) {
        console.log("true");
      } else console.log("false");
    },
  },
};
</script>
