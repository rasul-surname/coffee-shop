import {CashActionTypes} from "../../types/cash";

export const buyProduct = (productPrice: number) => ({type: CashActionTypes.BUY_PRODUCT, productPrice});
export const addProductBasket = (id: number, title: string, price: number, count: number) => ({type: CashActionTypes.ADD_PRODUCT_BASKET, payload: {id, title, price, count}});
export const deleteProductBasket = (id: number) => ({type: CashActionTypes.DELETE_PRODUCT_BASKET, productId: id});
export const buyAllBasket = () => ({type: CashActionTypes.BUY_ALL_BASKET});
export const deleteAllBasket = () => ({type: CashActionTypes.DELETE_ALL_BASKET});