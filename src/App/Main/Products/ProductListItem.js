import React, {Component} from "react"
import PropTypes from 'prop-types';

import "./ProductListItem.css"
import Quantity from "../../../Components/Quantity/Quantity"
import { connect } from "react-redux";
// import { remove } from "lodash";




class ProductListItem extends Component{
    state = {
        productCount: 1,
        color: "green",
        
    }
    onIncrementClick = () => { 
        this.setState((prevState) => ({
            productCount: prevState.productCount + 1
        }))
    }
    onDecrementClick = () => {
        this.setState((prevState) => ({
            productCount: prevState.productCount - 1
        }))
    }
    
   

    changeColor = () => {
        this.setState((prevState) => ({
            color: prevState.color = "red"
            
        }))
    }
    

  


    // renderLike=()=>  {
    //     const {
    //         isLiked,
    //         id,
    //         removeLike,
    //         addLike,
    //     } = this.props;
    //     isLiked?removeLike(id):addLike(id)
    // }
    
    
    render() {
        
        const {
            id,
            name,
            description ="No description ...",
            capacity,
            price,
            type,
            image = "http://placehold.it/102x102",
            addProductToCart,
            isLiked = false,
            addLike,
            removeLike,
            
        } = this.props
        return (
            <div className="product-list-item">
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <button
                    onClick={() => isLiked ? removeLike(id) : addLike(id)}
                >
                    
                    {isLiked ? <span>&#9829;</span>: <span>&#9825;</span>}
                </button>
                <h2 className="product-title">{name}</h2>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity} GB</div>
                <div className="product-price">$ {price}</div>
                
                <Quantity
                    productCount={this.state.productCount}
                    onIncrementClick={this.onIncrementClick}
                    onDecrementClick={this.onDecrementClick}
                    minCount={1}
                />
                <button
                    onClick={() => addProductToCart(id,this.state.productCount, price)}
                    className="btn-add-to-cart"
                >Add to cart</button>


            </div>
        )
    }
}




ProductListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image:PropTypes.string,
}



const mapStateToProps = (state, props) => ({
    isLiked: state.productsLikeState[props.id]
})


const mapDispatchToProps = (dispatch) => ({
    addLike: (id) => dispatch({
        type: "LIKE",
        id,
    }),
    removeLike: (id) => dispatch({
        type: "DISLIKE",
        id
    }),
    addProductToCart: (id, count) => dispatch({
        type: "ADD_PRODUCT_TO_CART",
        id,
        count,
        
    }),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductListItem)