import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {moduleMenuGroup} from '../modules/moduleMenuGroup'
import {moduleMenu} from '../modules/moduleMenu'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

// 후에 아래 내용은 action으로 넣으면 되는것인가?
const loadLunchMenu = () => {
  try {
    const lunchState = JSON.parse(localStorage.getItem('lunch'));
    if(lunchState === null) {
      return undefined;
    }
    return lunchState;
  } catch(err) {
      return undefined;
  }
}

const saveLunch = (state) => {
  try{
    const lunchItem = JSON.stringify(state);
    localStorage.setItem('lunch', lunchItem);
  } catch(err) {
    localStorage.removeItem('lunch');
  }
}

var testOption = [
  {value: 'default', text: '버전을 골라주세요'},
  {value: 'lunch', text: '점심메뉴 버전'},
  {value: 'dinner', text: '석식메뉴 버전'},
  {value: 'soju', text: '회식 버전'},
  {value: 'new', text: '새롭게'}
]


export default new Vuex.Store({
  modules: {
    menuGroup: moduleMenuGroup,
    moduleMenu: moduleMenu
  },
  state: {
    // 전체 메뉴 초기 get
    lunchMenu: loadLunchMenu() || [],
    // options get
    // options: loadLunchGroup() || [],
    options: testOption,
    saveWheel: [],
    todayLunch: null,
    currentTxtColor: null,
    
  },
  mutations: {
    // 이건 일단 예제로 만들기
    updateCurrentSelect (state, message) {
      state.selected = message;
    },
    // lunch list add
    addLunchList(state, message) {
      state.lunchMenu = [
        ...state.lunchMenu,
        message
      ]
      saveLunch(state.lunchMenu);
    },
    updateSaveWheel(state, message) { // save 정보 state update
      state.saveWheel = message
    },
    updateResult(state, message){
      state.todayLunch = message.menu;
      state.currentTxtColor = message.color;
    },
    deleteLunch(state, message) {
      state.lunchMenu.splice(message,1);
      saveLunch(state.lunchMenu);
    },
    
  },
  actions: {
  }
})

