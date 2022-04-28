import React, {useEffect, useState} from 'react';
import './item-container.css';
import ItemCount from '../ButtonCounter/Counter';
import ItemList from '../ItemList/ItemList';

function bringProducts(){

    const productsReturn = new Promise ((resolve,reject) =>{

        const productList = [
            {id: 1, name:"Cerveza IPA Andes", description:"Lata de 473cc", price: "$200", img: "https://elbaronline.com.ar/wp-content/uploads/2021/03/Andes-Ipa-473ml-1-1024x1024.jpg"},
            {id: 2, name:"Cerveza roja Andes", description:"Lata de 473cc", price: "$180", img: "https://elbaronline.com.ar/wp-content/uploads/2021/03/Andes-Roja-473ml-1.jpg"},
            {id: 3, name:"Cerveza rubia Andes", description:"Lata de 473cc", price: "$150", img: "https://elbaronline.com.ar/wp-content/uploads/2021/03/Andes-Rubia-473ml-1-1024x1024.jpg"}
        ]

        setTimeout(()=>{
            resolve(productList);

        }, 2000);
    })   
    return productsReturn;  
}


const ItemListContainer = ({greeting}) =>{

    // function purchasedTest(){

    //     console.log("Se añadio al carrito");
    // }

    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        
        bringProducts()
        .then((res) =>{
            setProducts(res)
        });
    })
    
    return(
        <div className='item-list'>
            {/* <ItemCount initial={0} stock={10} onAdd={purchasedTest}/> */}
            <ItemList items={products}/>
        
        </div>
        
    )
};

export default ItemListContainer;