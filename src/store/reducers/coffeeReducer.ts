import {coffeeAction, coffeeState} from "../../types/coffee";

const initialState: coffeeState = {
    listCoffee: [],
}

export const coffeeReducer = (state = initialState, action: coffeeAction): coffeeState => {
    switch (action.type) {
        default:
            return state;
    }
}