import {
    configureStore
} from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

export interface IStoreItem {
    id: string,
    backgroundColor: string
}

export interface IStore {
    storeItems: Array<IStoreItem>
}

const store = configureStore({
    reducer: rootReducer,
})

export default store;