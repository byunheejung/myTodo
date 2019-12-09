import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lunchMenu: [],
    newMenu : null,
    saveWheel : null,
    todayLunch : null,
    randomDeg : null,
    selected: 'default',
    options: [
        {value: 'default', text: '버전을 골라주세요'},
        {value: 'lunch', text: '점심메뉴 버전'},
        {value: 'dinner', text: '석식메뉴 버전'},
        {value: 'soju', text: '회식 버전'},
        {value: 'new', text: '새롭게'}
    ],
    showPopup: false,
    currentTxtColor: '#000',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
