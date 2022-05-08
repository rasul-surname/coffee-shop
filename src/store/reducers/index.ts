import {combineReducers} from "redux";
import {coffeeReducer} from "./coffeeReducer";
import {cashReducer} from "./cashReducer";

export const rootReducer = combineReducers({
    coffee: coffeeReducer,
    cash: cashReducer,
})

export type RootState = ReturnType<typeof rootReducer>;