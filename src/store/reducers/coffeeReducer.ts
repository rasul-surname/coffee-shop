import {CoffeeAction, CoffeeActionTypes, coffeeState} from "../../types/coffee";

const initialState: coffeeState = {
    listCoffee: [],
    loading: false,
    amountCoffeePage: 4,
    amountPages: 0,
}

export const coffeeReducer = (state = initialState, action: CoffeeAction): coffeeState => {
    switch (action.type) {
        case CoffeeActionTypes.GET_COFFEE:
            const size = state.amountCoffeePage;
            const amountPages = Math.ceil(action.payload.length/size);
            const subListCoffee = [];

            for (let i = 0; i < amountPages; i++){
                subListCoffee[i] = action.payload.slice((i*size), (i*size) + size);
            }

            return {
                ...state,
                listCoffee: subListCoffee,
                loading: false,
                amountPages: amountPages,
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