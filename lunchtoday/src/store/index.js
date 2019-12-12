import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
const loadLunchGroup = () => {
  try {
    const lunchGroup = JSON.parse(localStorage.getItem('lunchGroup'));
    if(lunchGroup === null) {
      return undefined;
    }
    return lunchGroup;
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

export default new Vuex.Store({
  state: {
    // 전체 메뉴 초기 get
    lunchMenu: loadLunchMenu() || [],
    // options get
    options: loadLunchGroup() || []
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
    }
  },
  actions: {
  },
  modules: {
  }
})
