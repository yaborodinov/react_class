import React from "react"
import {Link} from "react-router-dom"
import "./menu.css"




const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/payment">Payment</Link></li>
                <li><Link to="/shipping">Shipping</Link></li>
            </ul>
        </div>
    )
}
export default Menu