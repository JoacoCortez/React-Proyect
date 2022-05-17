import React, { useContext } from "react";
import CartContext from "../../Store/Cart-context";
import './CartItem.css';

function CartItem({item}){

    const cartCtx = useContext(CartContext)

    
    return(
        <div className="cart-item">
            <img src={item?.img} alt="Item Img" className="item-img" />
            <h2 className="item-title">
                {item?.title}
            </h2>
            <p className="item-price">
                {item?.price}
            </p>
        </div>



    )

}


export default CartItem;