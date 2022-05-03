import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';

function getProduct(){

   const ProductReturn = new Promise ((resolve, reject)=>{

    const item = 
        {id: 1, name:"Cerveza IPA Andes", description:"Lata de 473cc", price: "$200", img: "https://elbaronline.com.ar/wp-content/uploads/2021/03/Andes-Ipa-473ml-1-1024x1024.jpg"}

    setTimeout(()=>{

        resolve(item);
    },2000)

   });
   return ProductReturn;
}


function ItemDetailContainer() {

    const[item, setItem] = useState({})

    useEffect(()=>{

        getProduct()
        .then((res)=>{

            setItem(res);
        })
    },[])
    
    return(
        <>
            <ItemDetail item={item}/>
        </>
    )


}

export default ItemDetailContainer;