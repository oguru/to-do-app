import {createSlice} from "@reduxjs/toolkit";

type ToDoItem = {
    id: number,
    completed: boolean
    title: string,
}

type ToDoItems = ToDoItem[]

const toDoItems = createSlice({
    name: "toDoItems",
    initialState: [] as ToDoItems,
    reducers: {
        addToDoItem: (state, action) => {
            const id = state[state.length - 1]?.id + 1 || 1;

            const newItem = {
                id,
                title: action.payload,
                completed: false
            };

            state.push(newItem);
        },
        toggleToDoItem: (state, action) => {
            const item = state.find((toDo: ToDoItem) => toDo.id === action.payload) as ToDoItem;

            item.completed = !item.completed;
        },
        deleteToDoItem: (state, action) => {
            const itemIndex = state.findIndex((toDo: ToDoItem) => toDo.id === action.payload);

            state.splice(itemIndex, 1);
        }
    }
});

export const {
    addToDoItem,
    toggleToDoItem,
    deleteToDoItem
} = toDoItems.actions;

export default toDoItems.reducer;