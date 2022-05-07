import {CoffeeAction, CoffeeActionTypes} from "../../types/coffee";
import {Dispatch} from "redux";

export const getCoffeeList = () => {
    return async (dispatch: Dispatch<CoffeeAction>) => {
        try {
            const response = await fetch("https://random-data-api.com/api/coffee/random_coffee?size=20");
            const payload = await response.json();

            dispatch({type: CoffeeActionTypes.GET_COFFEE, payload: payload});
        } catch (e) {

        }
    }
}