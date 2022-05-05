import React, {useEffect, useState} from 'react';
import './item-container.css';
import ItemCount from '../ButtonCounter/Counter';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

function bringProducts(Category){

    const productsReturn = new Promise ((resolve,reject) =>{

        const productList = [
            {id: 1, name:"Cerveza IPA Andes", description:"Lata de 473cc", price: "$200", category:"IPA", img: "https://elbaronline.com.ar/wp-content/uploads/2021/03/Andes-Ipa-473ml-1-1024x1024.jpg"},
            {id: 2, name:"Cerveza roja Andes", description:"Lata de 473cc", price: "$180", category:"Roja", img: "https://elbaronline.com.ar/wp-content/uploads/2021/03/Andes-Roja-473ml-1.jpg"},
            {id: 3, name:"Cerveza rubia Andes", description:"Lata de 473cc", price: "$150", category:"Rubia", img: "https://elbaronline.com.ar/wp-content/uploads/2021/03/Andes-Rubia-473ml-1-1024x1024.jpg"}
        ]


        const productsFiltered = Category ? productList.filter(item => item.category === Category) : productList;

        setTimeout(()=>{
            resolve(productsFiltered);

        }, 2000);
    })   
    return productsReturn;  
}


const ItemListContainer = ({greeting}) =>{

    // function purchasedTest(){

    //     console.log("Se añadio al carrito");
    // }

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    
    useEffect(()=>{
        
        bringProducts(categoryId)
        .then((res) =>{
            setProducts(res)
        });
    },[categoryId])
    
    return(
        <div className='item-list'>
            {/* <ItemCount initial={0} stock={10} onAdd={purchasedTest}/> */}
            <ItemList items={products}/>
        
        </div>
        
    )
};

export default ItemListContainer;