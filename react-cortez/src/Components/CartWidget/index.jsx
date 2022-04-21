import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import './index.css';
const CartWidget = () =>{


    return(
        <div className="cartIcon">
            <FontAwesomeIcon icon={faCartShopping}/>
        </div>
    )
}

export default CartWidget;