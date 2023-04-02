import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoList = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        create: (state, action) => [...state, action.payload],
        // useRef 없을 시...
        // create: (state, action) => [...state,
        // {
        //     id: state[0]?.id ? state[state.length - 1]?.id + 1 : 1,
        //     content: action.payload.content,
        //     done: false
        // }
        // ],
        update: (state, action) => state.map(it => it.id === action.payload.id
            ? { ...it, done: !action.payload.done }
            : it),
        remove: (state, action) => state.filter(it => it.id !== action.payload.id),
    },
})

export const { create, update, remove } = todoList.actions;


const store = configureStore({
    reducer: {
        todoList: todoList.reducer
    }
});

export default store;

