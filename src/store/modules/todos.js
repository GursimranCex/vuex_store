// import axios from 'axios';

import axios from "axios";

const state = {
    todos: [
        {
            id: 1,
            title: 'Todo one'
        },
        {
            id: 2,
            title: 'Todo Two'
        },
    ]
};
const getters = {
    allTodos: (state) => state.todos
};
const actions = {
    //eslint-disable-next-line
    async fetchTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        commit('setTodos', response.data)
    },
    async addTodo({ commit }, title) {
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/todos',
            { title, completed: false }
        )
        commit('newTodo', response.data)
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('removeTodo', id)
    },
    async filterTodos({ commit }, e) {
        //Get Selected Number
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].inerText)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)

        commit('setTodos', response.data);
    },
    async updateTodo({ commit }, updTodo) {
        const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo);
        commit('updTodo', res.data)
    }
};
const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => (state.todos = state.todos.filter(x => x.id !== id)),
    updTodo: (state, updTodo) => {
        const index = state.todos.findIndex(x => x.id = updTodo.id)
        if (index !== -1) {
            state.todos.splice(index, 1, updTodo)
        }
    }
};
export default {
    state,
    getters,
    actions,
    mutations
}

// import { createStore } from 'vuex';

// const store = createStore({
//     state: {
//         todos: [
//             {
//                 id: 1,
//                 title: 'Todo one'
//             },
//             {
//                 id: 2,
//                 title: 'Todo Two'
//             },
//         ]
//     },
//     mutations: {

//     },
//     actions: {

//     },
//     getters: {
//         allTodos : (state) => state.todos
//     }
// })

// export default store

