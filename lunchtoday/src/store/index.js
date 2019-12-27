import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

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
  state: {
    // 전체 메뉴 초기 get
    lunchMenu: loadLunchMenu() || [],
    // options get
    // options: loadLunchGroup() || [],
    options: testOption,
    saveWheel: [],
    todayLunch: null,
    currentTxtColor: null,
    groups: [],
    newGroup: [],
    updateGoup: []
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
    SUCCESS_GET_GROUPS (state, data) {
      state.groups = data;
      // eslint-disable-next-line no-console
      console.log('SUCCESS_GET_GROUPS', data);
    },
    FAIL_GET_GROUPS () {
      // eslint-disable-next-line no-console
      console.log('ERROR');
    },
    ADD_GROUP (state, data) {
        state.newGroup = data;
        // eslint-disable-next-line no-console
        console.log('ADD_GROUP', data);
    },
    DELETE_GROUP (state, group_id) {
      let index = state.groups.findIndex(group => group.group_id == group_id);
      state.groups.splice(index, 1);
    },
    UPDATE_GROUP (state, group_name) {
        state.updateGoup = group_name;
    }
  },
  actions: {
    // get all menuGroup
    selectAllGroups ( {commit} ) {
      axios
      .get('http://42.243.134.40:3000/api/groups/menuGroup')
      .then((res) => {
        commit('SUCCESS_GET_GROUPS', res.data);
      })
      .catch((res) => {
        commit('FAIL_GET_GROUPS', res);
      })
    },
    // insert menuGroup
    insertGroup ( {commit}, context ) {
      if (!context) {
        return;
      }

      axios
      .post('http://42.243.134.40:3000/api/groups/menuGroup', {
        group_name: context
      })
      .then((res) => {
        commit('ADD_GROUP', res.data);
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e);
      })
    },
    // delete menuGorup
    deleteGroup ( {commit}, group_id ) {
      if (!group_id) {
        return;
      }

      axios
      .delete('http://42.243.134.40:3000/api/groups/menuGroup/' + group_id)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log('DELETE_GROUP_BEFORE', res);
        commit('DELETE_GROUP', group_id);
      })
    },
    // update menuGorup
    updateGroup ( {commit}, context ) {
      if (!context) {
        return;
      }

      axios
      .put('http://42.243.134.40:3000/api/groups/menuGroup/' + context.group_id, {
        group_id: context.group_id,
        group_name: context.group_name
      })
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log('UPDATE_GROUP_BEFORE', res);
        commit('UPDATE_GROUP', context.group_name);
      })
    }
  },
  modules: {
  }
})

