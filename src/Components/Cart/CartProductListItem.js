import React from "react"


const CartProductListItem = ({
    product,
    productCount
}) => {
    return (
        <div>
            {product.name}:{productCount}
        </div>
    )
}
export default CartProductListItem