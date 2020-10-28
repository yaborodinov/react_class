import React from "react"
import { keys } from "lodash"
import productsData, { getProductMap } from "../../App/Main/Products/ProductsData"
import CartProductListItem from "./CartProductListItem"



const CartProductList = ({
    productsInCart,
    productObject = getProductMap(productsData),
    CartItem = CartProductListItem,
    removeProductFormCart,
    changeProductQuantity
}) => {
    return (
        <div>
            {
                keys(productsInCart).map((productId) => (
                    <CartItem
                        productCount={productsInCart[productId]}
                        product={productObject[productId]}
                        key={productId}
                        removeProductFormCart={removeProductFormCart}
                        changeProductQuantity={changeProductQuantity}
                    />
                ))


            }
        </div>
    )
}
export default CartProductList