import axios from 'axios'

export const moduleMenu = {
    state: {
        menus: []
    },
    mutations: {
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
        }
    }
}
