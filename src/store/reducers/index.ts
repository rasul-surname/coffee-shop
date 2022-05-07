import {combineReducers} from "redux";
import {coffeeReducer} from "./coffeeReducer";

export const rootReducer = combineReducers({
    coffee: coffeeReducer,
})

export type RootState = ReturnType<typeof rootReducer>;