export interface coffeeState {
    listCoffee: {id: number, blend_name: string, notes: string, origin: string}[][];
    loading: boolean;
	error: null | string;
    amountCoffeePage: number;
    amountPages: number;
}

export enum CoffeeActionTypes {
    GET_COFFEE = 'GET_COFFEE',
    GET_COFFEE_LOADING = 'GET_COFFEE_LOADING',
	GET_COFFEE_ERROR = 'GET_COFFEE_ERROR',
}

interface GetCoffeeAction {
    type: CoffeeActionTypes.GET_COFFEE;
    payload: any[];
}
interface GetCoffeeLoadingAction {
    type: CoffeeActionTypes.GET_COFFEE_LOADING;
}
interface GetCoffeeErrorAction {
    type: CoffeeActionTypes.GET_COFFEE_ERROR;
	payload: null | string;
}

export type CoffeeAction = GetCoffeeAction | GetCoffeeLoadingAction | GetCoffeeErrorAction;