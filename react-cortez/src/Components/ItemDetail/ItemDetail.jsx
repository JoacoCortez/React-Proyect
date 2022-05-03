import React from 'react';
import Item from '../Item/Item';
import './ItemDetail.css';


function ItemDetail({item}){

    return(
        <div className="itemDetail">
            <div className='card'>
            <img className='card-img' src={item?.img} alt="Product Img"/>
            <div className='content'>
                <p className='text'>
                    {item?.description}
                </p>
                <p className='text'>
                    {item?.price}
                </p>
            </div>

            </div>

        </div>


    )


}



export default ItemDetail;