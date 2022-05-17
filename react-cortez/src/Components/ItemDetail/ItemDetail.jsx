import React, { useContext, useState } from 'react';
// import Item from '../Item/Item';
import './ItemDetail.css';
import ItemCount from '../ButtonCounter/Counter';
import CartContext from '../../Store/Cart-context';
import { Link } from 'react-router-dom';


function ItemDetail({item}){

    const cartCtx = useContext(CartContext);
    
    
    
    function addHandler(quantityToAdd){

        cartCtx.addProduct({quantity: quantityToAdd, ...item});

    }
       
        


    
    
    return(
        <div className="itemDetail">
            <div className='detailCard'>
            <img className='detailImg' src={item?.img} alt="Product Img"/>
            <div className='content'>
                <p className='description'>
                    {item?.extraInfo}
                </p>
                <p className='price'>
                    {item?.price}
                </p>
            </div>
                <ItemCount initial={0} stock={10} onAdd={addHandler}/>

                <button onClick={() => console.log(cartCtx.products)} >Imprimir carrito</button>
                
                <button onClick={() =>cartCtx.deleteProduct(item.id)}>Borrar producto</button>
                
                <button onClick={() =>cartCtx.clear()}>Limpiar carrito</button>
                
                <button onClick={() =>console.log(cartCtx.duplicated(item.id))}>Duplicado</button>

                {cartCtx.products.length &&
                    <button onClick={() => console.log(cartCtx)}>
                        <Link to="/cart">Ir al carrito</Link>
                    </button>
                }   

            </div>
            
                
            
            
               
            
        </div>
    

    )

        
}



export default ItemDetail;