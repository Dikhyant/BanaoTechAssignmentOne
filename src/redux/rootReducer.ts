import { combineReducers } from "redux";
import { reducer } from "./reducer";

export const rootReducer = combineReducers({
    reducer: reducer
})

export type RootState = ReturnType<typeof rootReducer>