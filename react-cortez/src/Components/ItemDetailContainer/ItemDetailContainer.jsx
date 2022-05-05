import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

function getProduct(Id){

   const ProductReturn = new Promise ((resolve, reject)=>{

    const productList = [
        {id: 1, name:"Cerveza IPA Andes", description:"Lata de 473cc", price: "$200", category:"IPA", img: "https://elbaronline.com.ar/wp-content/uploads/2021/03/Andes-Ipa-473ml-1-1024x1024.jpg"},
        {id: 2, name:"Cerveza roja Andes", description:"Lata de 473cc", price: "$180", category:"Roja", img: "https://elbaronline.com.ar/wp-content/uploads/2021/03/Andes-Roja-473ml-1.jpg"},
        {id: 3, name:"Cerveza rubia Andes", description:"Lata de 473cc", price: "$150", category:"Rubia", img: "https://elbaronline.com.ar/wp-content/uploads/2021/03/Andes-Rubia-473ml-1-1024x1024.jpg"}
    ]
    
    
    const item = productList.filter(item => item.id === parseInt(Id));
        

    
    
    setTimeout(()=>{

        resolve(item[0]);
    },2000)

   });
   return ProductReturn;
}


function ItemDetailContainer() {

    const[item, setItem] = useState({});
    const { Id } = useParams();

    useEffect(()=>{

        getProduct(Id)
        .then((res)=>{

            setItem(res);
        })
    },[Id])
    
    return(
        <>
            <ItemDetail item={item}/>
        </>
    )


}

export default ItemDetailContainer;