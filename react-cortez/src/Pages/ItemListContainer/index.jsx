import React, {useEffect, useState} from 'react';
import './item-container.css';
import ItemList from '../../Components/ItemList/ItemList';
import db from '../../Services/Firebase';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where} from 'firebase/firestore';
import Spinner from '../../Components/Spinner/Spinner';


const ItemListContainer = () =>{

    const [products, setProducts] = useState([]);
    
    const [load, setLoad] = useState(false)
    
    const { categoryId } = useParams();
    
    
    
    function bringProducts(category){
    
        setLoad(true)
        
        const itemsCollection = collection(db, "items");
        
        const q = category && query(
            itemsCollection,
            where("category", "==", category)
        )
      
       
        
        return getDocs(q || itemsCollection)
    }
    
    
    
    useEffect(()=>{
        
        bringProducts(categoryId)
            .then((snapshot) =>{
                
                setLoad(false)
                
                setProducts(snapshot.docs.map(doc => {return{...doc.data(), id: doc.id} }))
            });
    
    },[categoryId])
    
    return(
        
        <div className='item-list'>
            
            {load ? <Spinner/> : <ItemList items={products}/>}
        
        </div>
        
    )
};

export default ItemListContainer;