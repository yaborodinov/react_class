import React from "react"
import CartTotal from "../../../Components/Cart/CartTotal"
import CartProductList from "../../../../src/Components/Cart/CartProductList"
import CartProductListItemExtended from "../../../Components/Cart/CartProductListItemExtended"
import { connect } from "react-redux";


    


const CartPage = ({
    productsInCart,
    removeProductFormCart,
    changeProductQuantity
})=>{
    return (
        <div>
            <h1 className="page-title">корзина</h1>
    
            <CartProductList
                productsInCart={productsInCart}
                CartItem={CartProductListItemExtended}
                removeProductFormCart={removeProductFormCart}
                changeProductQuantity={changeProductQuantity}
            />
            <CartTotal
            productsInCart={productsInCart}
            />
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.productsInCart
})

export default connect(
    mapStateToProps,
)(CartPage)

// export default CartPage;