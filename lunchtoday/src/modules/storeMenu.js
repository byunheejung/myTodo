import axios from 'axios'

export const storeMenu = {
    state: {
        menus: [],
        newMenu: [],
        updateMenu: [],
        allMenus: []
    },
    mutations: {
        SUCCESS_GET_ALL_MENUS(state, data) {
            state.allMenus = data;
            // eslint-disable-next-line no-console
            console.log('SUCCESS_GET_ALL_MENUS', data);
        },
        SUCCESS_GET_MENUS (state, data) {
            state.menus = data;
            // eslint-disable-next-line no-console
            console.log('SUCCESS_GET_MENUS', data);
            // eslint-disable-next-line no-console
            console.log('state.menus', state.menus);
        },
        FAIL_GET_MENUS () {
            // eslint-disable-next-line no-console
            console.log('ERROR');
        },
        ADD_MENU (state, data) {
            state.newMenu = data;
            // eslint-disable-next-line no-console
            console.log('ADD_MENU', data);
        },
        DELETE_MENU (state, menu_id) {
            let index = state.menus.findIndex(menu => menu.menu_id == menu_id);
            state.menus.splice(index, 1);
        },
        UPDATE_MENU (state, menu_name) {
            state.updateMenu = menu_name;
        }
    },
    actions: {
        selectMenusOneGroup ( { commit}, group_id ) {
            axios
            .get('http://42.243.134.40:3000/api/menu/menu/' + group_id)
            .then((res) => {
                // eslint-disable-next-line no-console
                console.log('selectMenusOneGroup.res', res);
                commit('SUCCESS_GET_MENUS', res.data);
            })
            .catch((res) => {
                commit('FAIL_GET_MENUS', res);
            })
        },
        // insert menu
        insertMenu ( {commit}, context ) {
            // eslint-disable-next-line no-console
            console.log('insertMenu', context);
            if (!context) {
                return;
            }

            axios
            .post('http://42.243.134.40:3000/api/menu/menu', {
                group_id: context.group_id,
                menu_name: context.menu_name
            })
            .then((res) => {
                commit('ADD_MENU', res.data);
            })
            .catch((e) => {
                // eslint-disable-next-line no-console
                console.error(e);
            })
        },
        // delete menu
        deleteMenu ( {commit}, context ) {
            if (!context) {
                return;
            }

            // axios delete 는 원칙적으로 body를 쓸 수 없다.
            // 쓰려면 data로 한번 더 감싸서 보내야 함(191231 새로 알게된 사실)
            axios
            .delete('http://42.243.134.40:3000/api/menu/menu/' + context.menu_id, {
                data: {
                    group_id: context.group_id,
                    menu_id: context.menu_id
                }
            })
            .then((res) => {
                // eslint-disable-next-line no-console
                console.log('DELETE_MENU_BEFORE', res);
                commit('DELETE_MENU', context.menu_id);
            })
        },
        // update menu
        updateMenu ( {commit}, context ) {
            if (!context) {
                return;
            }

            axios
            .put('http://42.243.134.40:3000/api/menu/menu/' + context.menu_id, {
                menu_name: context.menu_name,
                menu_id: context.menu_id,
                group_id: context.group_id
            })
            .then((res) => {
                // eslint-disable-next-line no-console
                console.log('UPDATE_MENU_BEFORE', res);
                commit('UPDATE_MENU', context.menu_name);
            })
        },
         // get all menus
         selectAllMenus ( {commit} ) {
            axios
            .get('http://42.243.134.40:3000/api/menu/menuAll')
            .then((res) => {
                commit('SUCCESS_GET_ALL_MENUS', res.data);
            })
            .catch((res) => {
                commit('FAIL_GET_ALL_GROUPS', res);
            })
        },
    }
}
