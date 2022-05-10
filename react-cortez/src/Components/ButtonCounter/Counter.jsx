import React, { useState } from 'react';
import "./CounterStyle.css";
import { Link } from 'react-router-dom';

function ItemCount({stock, initial, onAdd}){

    const [count, setCount] = useState(initial);

    function handlePlusButton (){

        if (count < stock){

           setCount(count + 1)
        }
    }

    function handleMinusButton(){

        if(count > initial){

            setCount(count - 1)
        }
    }

    return(
        <div className="cardCounter">
            <div>
                <button onClick={ () => handleMinusButton()}>-</button>
                <input readOnly value= {count}/>
                <button onClick={ () => handlePlusButton()}>+</button>
            </div>
            <Link to={"/cart"}>
                <button className="addToCart" onClick={() =>(count <= stock) && onAdd(count)}>
                    Añadir al carrito
                </button>
            </Link>    
        </div>
    )

}










export default ItemCount;