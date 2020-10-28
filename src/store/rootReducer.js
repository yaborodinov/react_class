import { combineReducers } from "redux";
import productLikeReducer from "./productLikeReducer";

import cartReducer from "./cartReducer"



const rootReducer = combineReducers({
    productsLikeState: productLikeReducer,
    productsInCart: cartReducer
})

export default rootReducer