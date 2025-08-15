<template>
  <div class="resume block">
    <div v-if="resumeBlocks.length > 0">
      <button class="btn btn-danger" @click="$emit('clearResume')">Очистить резюме</button>
      <div v-for="block in resumeBlocks" :key="block">
        <h1 v-if="block.type === SelectName.HEADER">{{ block.content }}</h1>
        <h3 class="subheader" v-if="block.type === SelectName.SUBHEADER">{{ block.content }}</h3>
        <p v-html="block.content" v-if="block.type === SelectName.TEXT"></p>
        <img class="image" v-if="block.type === SelectName.IMAGE" :src="block.content" />
      </div>
    </div>
    <div v-else>
      <p>Заполните поля для отображения</p>
      <button class="btn btn-secondary" @click="generateResume">Сгенерировать резюме</button>
    </div>
  </div>
</template>

<script>
import { SelectName } from '../constants'

export default {
  emits: ['generateResume', 'clearResume'],
  props: ['resumeBlocks'],
  data () {
    return {
      SelectName,
      defaultTemplate: [
        { type: SelectName.HEADER, content: 'Резюме Никита' },
        { type: SelectName.IMAGE, content: 'https://cdn4.telesco.pe/file/Wa7O7oBes7V3_6NeTwxKdxbC5IvxD_2lN_b2nQDMiSdFQqqIsw_hZCU_RiKIhyElpjDPSH5Ruq8y8MzAa8jI0zRbih7Yp4Nkbjin84EAgDKVIin1Cn69wCaJkW-1oLSlJ_jng_njsyLhCFpIdtR1gUWyMTewwvFAOtb11svyTLg9x4RGBW_96rrxRp2Pg6VALg6WDXQAxRECfNmKZrr4s87p6CAwaGlKwOlSL33n3eTksNwGjszboAauFbg6BchOg4MQXKEk1yOwbtvZhCWcG6mcP1MKiH9FzNZ6GrrRXZScRwIjS3BcTmE3tEUv7LyrKxis8ZQ05mR03RkbQQGHyA.jpg' },
        { type: SelectName.SUBHEADER, content: 'О себе:' },
        { type: SelectName.TEXT, content: 'Работаю удаленно из Новосибирска. Коммерческий опыт разработки с 2020 года' },
        { type: SelectName.SUBHEADER, content: 'Образование:' },
        { type: SelectName.TEXT, content: '2014-2018: бакалавриат ОмГУПС' },
        { type: SelectName.SUBHEADER, content: 'Карьера:' },
        { type: SelectName.TEXT, content: '2020-2022: Purrweb - студия разарботки' },
        {
          type: SelectName.TEXT, content: `
          <h4>Проекты:</h4>
          <a href="https://www.purrweb.com/ru/portfolio/energo"><b>EnerGo</b></a> -  [ReactNative]
          <p>Разработка фичи - выдачи powerbank'а по QR коду для обслуживающих зарядные станции сотрудников</p>
        
          <a href="https://www.purrweb.com/ru/portfolio/healthcare"><b>HealthCare</b></a>  [React, ReactNative]
          <p>Разработка чат-бота для подбора специалиста Web/mobile</p>    
          <hr/>
        `
        },
        { type: SelectName.TEXT, content: '2022 по текущий день: Лига Цифровой Экономики' },
        {
          type: SelectName.TEXT, content: `
          <h4>Проекты: </h4>
          <a href="https://поле.рф"><b>ПолеРФ</b></a>  [React]
          <p>Разработка раздела финансов, написание фильтров для поиска и форм для обращения</p>
          <a href="http://t2.ru"><b>T2 (Tele2)</b></a>  [React]
          <p>Разработка раздела подключения домашнего интернета ШПД (интеграция с госуслугами, оформление заказов, бронирование визита мастера)</p>
          <p>Разработка и развитие проекта подписок MiXX (интеграция с апи Ростелеком - продуктовый каталог, конструктор подписок, заказы)</p>
          <hr/>

        `
        }
      ]
    }
  },
  methods: {
    generateResume () {
      this.$emit('generateResume', this.defaultTemplate)
    }
  }
}
</script>

<style>
.resume {
  .subheader {
    text-align: left;
  }

  .image {
    max-width: 300px;
    border: 4px solid salmon;
  }
}
</style>
