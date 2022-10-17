import {createStore} from 'vuex'
import createPersistedState from 'vuex-persistedstate';

// Create a new store instance.
export const store = createStore({
    state() {
        return {
            user_data: {
                login_state: false,
                id: null,
                name: null,
                stu_number: null,
                department: null,
                stu_rank: null,
                password: null,
                img: null
            }
        }
    },
    getters: {},
    mutations: {
        login: function (state, user_info) {
            state.user_data["login_state"] = true
            state.user_data["id"] = user_info["id"]
            state.user_data["name"] = user_info["name"]
            state.user_data["stu_number"] = user_info["stu_number"]
            state.user_data["department"] = user_info["department"]
            state.user_data["stu_rank"] = user_info["stu_rank"]
            state.user_data["password"] = user_info["password"]
            state.user_data["img"] = user_info["img"]

        },
        logout(state) {
            state.user_data["login_state"] = false
            state.user_data["id"] = null
            state.user_data["name"] = null
            state.user_data["stu_number"] = null
            state.user_data["department"] = null
            state.user_data["stu_rank"] = null
            state.user_data["password"] = null
            state.user_data["img"] = null
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    },
    plugins: [createPersistedState()]
})