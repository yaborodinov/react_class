import React from "react"
import ProductListItem from "./ProductListItem"
import productsData from "./ProductsData"

const ProductsList = ({
    addProductToCart,
}) => {
    return (
        <div>
            <h1 className="page-title">Products List</h1>
            <div className="row">
                {
                    productsData.map(({
                        id,
                        name,
                        description,
                        type,
                        capacity,
                        price,
                        image,
                    }) => (
                        <div className="col-lg-6" key={id}>
                                <ProductListItem
                                id={id}
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addProductToCart={addProductToCart}
                            />
                        </div>
                    ))
                    
                }
                
            </div>
        </div>
    )
}
export default ProductsList