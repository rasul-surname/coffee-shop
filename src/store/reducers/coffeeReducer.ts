import {CoffeeAction, CoffeeActionTypes, coffeeState} from "../../types/coffee";

const initialState: coffeeState = {
    listCoffee: [],
    loading: false,
}

export const coffeeReducer = (state = initialState, action: CoffeeAction): coffeeState => {
    switch (action.type) {
        case CoffeeActionTypes.GET_COFFEE:
            return {
                listCoffee: action.payload,
                loading: false,
            }
        case CoffeeActionTypes.GET_COFFEE_LOADING:
            return {
                ...state,
                loading: true,
            }
        default:
            return state;
    }
}