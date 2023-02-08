<template>
  <div class="feedback" id="feedbackForce">
    <form :action="sumbit" class="form" @submit.prevent>
      <h2 class="titleFeedb">Связаться с нами</h2>
      <p type="Имя:">
        <input name="name" v-model="inputValues.name" placeholder="Ваше имя" />
      </p>
      <p type="Ваш телеграм для обратной связи:">
        <input
          name="telegram"
          v-model="inputValues.telegram"
          placeholder="Например: @example"
        />
      </p>
      <p type="Сообщение:">
        <input
          name="text"
          v-model="inputValues.text"
          placeholder="Опишите максимально подробно"
        />
      </p>
      <button @click="validate" :disabled="isSend">Send Message</button>
    </form>
    <div class="errorValidate" v-if="validateKeys.generalValidate">
      Указаны некоректные данные
    </div>
    <div class="errorValidate" v-else-if="validateKeys.checkTelegram">
      Неправильный формат телеграма
    </div>
    <div class="errorValidate" v-else-if="validateKeys.checkBlackList">
      Вы были добавлены в черный список HasanTech за нарушение наших внутренних
      правил
    </div>
    <div class="errorValidate success" v-else-if="validateKeys.isSend">
      Ваш запрос был отправлен. Наш коллега свяжется с вами, если посчитаем, что
      ваше обращение нуждается в фидбеке.
    </div>
    <div class="dev">
      <h2>В разработке</h2>
      <img src="@/assets/working.gif" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sumbit: "",
      inputValues: {
        name: "",
        telegram: "",
        text: "",
      },
      validateKeys: {
        generalValidate: false,
        checkBlackList: false,
        checkTelegram: false,
        isSend: false,
      },
    };
  },
  computed: {
    addEventStore() {
      return this.$store.getters.getBlackList.values;
    },
  },
  methods: {
    clearKeys(obj) {
      Object.keys(obj).forEach((key) => delete this.inputValues[key]);
    },
    hangleKeys() {
      for (const key in this.validateKeys) {
        this.validateKeys[key] = false;
      }
    },
    //валидацию нужно переписать. Уберу заглушку, когда закончим бэкенд
    validate() {
      const firstEl = this.inputValues.telegram[0];
      if (
        !Object.values(this.inputValues).every((el) => el.trim().length > 2)
      ) {
        this.hangleKeys();
        this.validateKeys.generalValidate = true;
      } else if (firstEl !== "@") {
        this.hangleKeys();
        this.validateKeys.checkTelegram = true;
      } else if (
        this.addEventStore.find((el) => el === this.inputValues.telegram)
      ) {
        this.hangleKeys();
        this.validateKeys.checkBlackList = true;
      } else {
        this.hangleKeys();
        this.clearKeys(this.inputValues);
        this.validateKeys.isSend = true;
      }
    },
  },
};
</script>
