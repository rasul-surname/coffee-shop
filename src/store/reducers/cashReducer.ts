import {CashAction, CashActionTypes, cashState} from "../../types/cash";

const initialState: cashState = {
    cash: 2000,
    basket: [],
}

export const cashReducer = (state = initialState, action: CashAction): cashState => {
    switch (action.type) {
        case CashActionTypes.GET_CASH:
            return {...state}
        case CashActionTypes.BUY_PRODUCT:
            return {
                ...state,
                cash: state.cash - action.productPrice
            }
        case CashActionTypes.ADD_PRODUCT_BASKET:
            let newBasket = [];

            // если корзина пустая добавляем продукт в корзину, иначе собираем новую корзину
            if(state.basket.length === 0) {
                newBasket.push(action.payload);
            } else {
                // для проверки уникальности продукта
                let productInBasket = false;

                // если продукт не уникальный то увеличиваем его количество в корзине
                newBasket = state.basket.map((elem) => {
                    if(elem.id === action.payload.id) {
                        productInBasket = true;
                        elem.count += action.payload.count;

                        return elem;
                    } else {
                        return elem;
                    }
                });

                // если продукт уникальный добавляем в корзину
                if(!productInBasket) {newBasket.push(action.payload)}
            }

            return {
                ...state,
                basket: newBasket
            }
        case CashActionTypes.DELETE_PRODUCT_BASKET:
            const filterBasket = state.basket.filter((product) => {
                if(product.id !== action.productId) {return true}
            });

            return {
                ...state,
                basket: filterBasket
            }
        case CashActionTypes.BUY_ALL_BASKET:
            const sumAllProducts = state.basket.reduce((sum, product) => {
                return sum += product.price * product.count;
            }, 0);

            return {
                ...state,
                cash: state.cash - sumAllProducts,
                basket: []
            }
        case CashActionTypes.DELETE_ALL_BASKET:
            return {...state, basket: []}
        default:
            return state;
    }
}