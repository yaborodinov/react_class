import React from "react"
import { keys } from "lodash"
import productsData,{getProductMap} from "../../App/Main/Products/ProductsData"




const CartTotal = ({
    productsInCart,
    productObject = getProductMap(productsData)
}) => {
    return (
        <div>
            Total: {
                keys(productsInCart).reduce((total, productId) => (
                    total + (productObject[productId].price * productsInCart[productId])
                ), 0)
            }$
        </div>
    )
}

export default CartTotal