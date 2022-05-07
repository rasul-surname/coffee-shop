export interface coffeeState {
    listCoffee: any[];
    loading: boolean;
    amountCoffeePage: number;
    amountPages: number;
}

export enum CoffeeActionTypes {
    GET_COFFEE = 'GET_COFFEE',
    GET_COFFEE_LOADING = 'GET_COFFEE_LOADING',
}

interface GetCoffeeAction {
    type: CoffeeActionTypes.GET_COFFEE;
    payload: any[];
}
interface GetCoffeeLoadingAction {
    type: CoffeeActionTypes.GET_COFFEE_LOADING;
}

export type CoffeeAction = GetCoffeeAction | GetCoffeeLoadingAction;