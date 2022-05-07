export interface coffeeState {
    listCoffee: any[];
}

export enum CoffeeActionTypes {
    GET_COFFEE = 'GET_COFFEE',
}

interface GetCoffeeAction {
    type: CoffeeActionTypes.GET_COFFEE;
    payload: any[];
}

export type CoffeeAction = GetCoffeeAction;