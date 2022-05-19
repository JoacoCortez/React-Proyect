import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../../Components/CartItem/CartItem";
import './Cart.css'
import CartContext from "../../Store/Cart-context";


function Cart() {
    
    const cartCtx = useContext(CartContext);

    return (
        <div className="cart">
            <div className="cart-items">
                {cartCtx.products.map(p => <CartItem item={p} key={p.id} />)}
            </div>
                {cartCtx.products.length !== 0 ?
            <div>
            
                <h2 className="total">
                    <p>Precio total: ${cartCtx.getTotalPrice()}</p>
                </h2>
                <button className="endBuy">
                    <Link to="/">
                        Confirmar
                    </Link>
                </button>
            
            </div>
            :
            <>
                <h2 className="emptyCart">
                
                    El carrito está vacío
                </h2>
                

            </>
            
            
            }
        </div>
    )
  }
  
  export default Cart;