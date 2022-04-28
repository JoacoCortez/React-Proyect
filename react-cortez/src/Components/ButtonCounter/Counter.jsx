import React, { useState } from 'react';
import "./CounterStyle.css";


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
            <button className="addToCart" onClick={() =>(count <= stock) && onAdd()}>Agregar al carrito</button>
        </div>
    )

}










export default ItemCount;