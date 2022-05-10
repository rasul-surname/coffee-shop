export interface cashState {
    cash: number;
	totalPriceProducts: number;
	totalNumberProducts: number;
    basket: {id: number, title: string, price: number, count: number}[];
}

export enum CashActionTypes {
    GET_CASH = 'GET_CASH',
    BUY_PRODUCT = 'BUY_PRODUCT',
    ADD_PRODUCT_BASKET = 'ADD_PRODUCT_BASKET',
    DELETE_PRODUCT_BASKET = 'DELETE_PRODUCT_BASKET',
    BUY_ALL_BASKET = 'BUY_ALL_BASKET',
    DELETE_ALL_BASKET = 'DELETE_ALL_BASKET',
}

interface GetCashAction {
    type: CashActionTypes.GET_CASH;
    payload: {id: number, title: string, price: number, notes: string}[];
}
interface BuyCoffee {
    type: CashActionTypes.BUY_PRODUCT;
    productPrice: number;
}
interface AddProductBasket {
    type: CashActionTypes.ADD_PRODUCT_BASKET;
    payload: {id: number, title: string, price: number, count: number};
}
interface DeleteProductBasket {
    type: CashActionTypes.DELETE_PRODUCT_BASKET;
    productId: number;
}
interface BuyAllBasket {
    type: CashActionTypes.BUY_ALL_BASKET;
}
interface DeleteAllBasket {
    type: CashActionTypes.DELETE_ALL_BASKET;
    payload: number;
}

export type CashAction = GetCashAction | BuyCoffee | AddProductBasket | DeleteProductBasket | BuyAllBasket | DeleteAllBasket;