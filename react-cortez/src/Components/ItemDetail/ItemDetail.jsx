import React, { useState } from 'react';
// import Item from '../Item/Item';
import './ItemDetail.css';
import ItemCount from '../ButtonCounter/Counter';



function ItemDetail({item}){

    const [productQuantity, setProductQuantity] = useState(null);

    function addHandler(quantityToAdd){

        setProductQuantity(quantityToAdd)

       
        
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
                {productQuantity ?
                    
                    alert(`añadiste ${productQuantity} items`):
                    
                    <ItemCount initial={0} stock={10} onAdd={addHandler}/> 
                    
                }

            </div>
            
                
            
            
               
            
        </div>
    

    )

        
}



export default ItemDetail;