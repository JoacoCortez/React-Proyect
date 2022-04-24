import React from'react';
import './item-container.css';
import ItemCount from '../ButtonCounter/Counter';


const ItemListContainer = ({greeting}) =>{

    function purchasedTest(){

        console.log("Se añadio al carrito");
    }

    return(
        <div className='list'>
            <ItemCount initial={0} stock={10} onAdd={purchasedTest}/>
        
        </div>
        
    )
}

export default ItemListContainer;