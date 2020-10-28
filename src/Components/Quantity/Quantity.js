import React from "react"


const Quantity = ({
    onDecrementClick,
    onIncrementClick,
    productCount,
    minCount
    
}) => {
    return (
        <div className="product-quantity">
            <button
                onClick={()=> onDecrementClick()}
                disabled={productCount <= minCount}
            >-</button>
            <input type="text" value={productCount} readOnly />
            <button onClick={() => onIncrementClick()} disabled={productCount >= 10}>+</button>
            

        </div>
    )
}
export default Quantity