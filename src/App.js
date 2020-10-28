import React from "react"

import "./common/style/reset.css"
import "./common/style/base.css"


import Header from "./App/Header/Header"
import Main from "./App/Main/Main"
import Footer from "./App/Footer/Footer"
// import { object } from "prop-types"
import { omit } from "lodash"








class App extends React.Component{
    state = {
        productsInCart: {
            1: 1,
            2: 1,
        }
        
    }
    
   
    

    addProductToCart=(productId, count)=>{
        this.setState((prevState) => ({
            productsInCart: {
                ...prevState.productsInCart,
                [productId]: (prevState.productsInCart[productId] || 0)+count
            }
        }))
    }

    removeProductFormCart = (productId) => {
        this.setState((prevState) => ({
            productsInCart:omit(prevState.productsInCart,productId)
        }))
    }
    

    changeProductQuantity=(productId, quantity) =>{
        this.setState((prevState) => ({
            productsInCart: {
                ...prevState.productsInCart,
                [productId]: quantity
            }
        }))
    }

    
   
    render() {
        return (
        <div>
                <Header
                    productsInCart={this.state.productsInCart}
                
                />
                
                <Main
                    removeProductFormCart={this.removeProductFormCart}
                    productsInCart={this.state.productsInCart}
                    addProductToCart={this.addProductToCart}
                    changeProductQuantity={this.changeProductQuantity}
                />
                
            <Footer/>
        </div>
    )
    }
}










export default App