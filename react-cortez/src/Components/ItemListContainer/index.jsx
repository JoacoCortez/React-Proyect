import React, {useEffect, useState} from 'react';
import './item-container.css';
import ItemCount from '../ButtonCounter/Counter';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where, limit} from 'firebase/firestore';

function bringProducts(category){
    
    const db = getFirestore();

    const itemsCollection = collection(db, "items");
    
    const q = category && query(
        itemsCollection,
        where("category", "==", category)
    )
  return getDocs(q || itemsCollection)
}


const ItemListContainer = ({greeting}) =>{

    // function purchasedTest(){

    //     console.log("Se añadio al carrito");
    // }

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    
    useEffect(()=>{
        
        // const db =getFirestore();


        // const itemCollection = collection(db, "items");

        // const q = query(
        //     itemCollection,
        //     where('category', '==', category)
        // )
        
        // getDocs(q)
  
        
        // .then((snapshot) =>{
        //         console.log(snapshot.docs.map(doc => {
        //             return {...doc.data(), id: doc.id}
        //         }))
        //     })
        //     .catch(err =>{

        //         console.log(err)
        //     })
        
        
        
        
        
        
        
        bringProducts(categoryId)
            .then((snapshot) =>{
                setProducts(snapshot.docs.map(doc => {return{...doc.data(), id: doc.id} }))
            
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