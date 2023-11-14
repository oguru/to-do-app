import {configureStore} from "@reduxjs/toolkit";
import toDoItemsReducer from "./toDoItemsSlice";

export const store = configureStore({
    reducer: {
        toDoItems: toDoItemsReducer
    }
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
