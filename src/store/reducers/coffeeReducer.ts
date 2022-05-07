import {CoffeeAction, CoffeeActionTypes, coffeeState} from "../../types/coffee";

const initialState: coffeeState = {
    listCoffee: [],
}

export const coffeeReducer = (state = initialState, action: CoffeeAction): coffeeState => {
    switch (action.type) {
        case CoffeeActionTypes.GET_COFFEE:
            return {
                listCoffee: action.payload,
            }
        default:
            return state;
    }
}