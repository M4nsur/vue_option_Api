<template>
  <aside>
    <div class="titleWrapper">
      <h1>HasanTech</h1>
      <h2>Технологии для будущего, созданные сегодня</h2>
    </div>
    <div class="descrWrapper">
      <div class="descrText">
        Мы специализируемся на разработке высоконагруженных и сложных систем,
        обеспечивая высокую производительность, надежность и масштабируемость.
        Наша команда занята созданием инновационных программных решений для
        бизнеса или потребительского рынка. Мы используем передовые технологии и
        методологии разработки программного обеспечения, чтобы создавать
        высококачественные и эффективные приложения. Наша команда работает над
        проектами различной сложности и масштаба, включая мобильные приложения,
        веб-приложения, системы управления базами данных.
      </div>
      <div class="descrImg">
        <img src="@/assets/descr2.png" alt="descr2" />
      </div>
    </div>
    <div class="arrowWrapper">
      <div class="arrowText">Наш код без пороков</div>
      <img src="@/assets/arrow1.png" alt="arrowDown" />
      <div class="arrowText">Кодируем мечты в реальность</div>
    </div>
    <div class="videoItem" style="padding: 56.25% 0 0 0; position: relative">
      <iframe
        src="https://player.vimeo.com/video/795180899?h=660db6fc55&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=1&muted=1"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <!-- <div class="mainContent">
      <div class="promoImg">
        <img src="@/assets/networkBg.gif" alt="promo" />
      </div>
    </div> -->
    <div class="descrSecond">
      Наши эксперты гарантируют качественное выполнение проектов и заботу о
      поддержании и развитии систем.
    </div>
    <!-- <video
      id="rootVideo"
      class="videoItem"
      src="@/assets/promo.mp4"
      muted
      promo="@/assets/abs4.jpg"
    ></video>
    <button @click="test()">txxxg</button> -->
  </aside>
</template>

<!-- <script>
export default {
  data() {
    return {
      srcValue:
        "https://player.vimeo.com/video/795180899?h=660db6fc55&autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=1&muted=1",
      isMuted: false,
    };
  },
  methods: {
    test() {
      this.isMuted = !this.isMuted;
      this.srcValue = `${this.srcValue}${this.isMuted}`;
      console.log(this.srcValue);
    },
  },
};
</script> -->
