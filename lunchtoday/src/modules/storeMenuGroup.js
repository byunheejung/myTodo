import axios from 'axios'

export const storeMenuGroup = {
    state: {
        groups: [],
        newGroup: [],
        updateGoup: []
    },
    mutations: {
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
            .get('http://42.243.134.40:3000/api/group/menuGroup')
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
            .post('http://42.243.134.40:3000/api/group/menuGroup', {
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
            .delete('http://42.243.134.40:3000/api/group/menuGroup/' + group_id)
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
            .put('http://42.243.134.40:3000/api/group/menuGroup/' + context.group_id, {
                group_id: context.group_id,
                group_name: context.group_name
            })
            .then((res) => {
                // eslint-disable-next-line no-console
                console.log('UPDATE_GROUP_BEFORE', res);
                commit('UPDATE_GROUP', context.group_name);
            })
        }
    }
}