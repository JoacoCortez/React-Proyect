import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {doc, getDoc, getFirestore } from 'firebase/firestore';

function getProduct(id){
    const db = getFirestore();

    const itemRef = doc(db, "items", id)
   
    return getDoc(itemRef)
}


function ItemDetailContainer() {

    const[item, setItem] = useState({});
    const { Id } = useParams();

    useEffect(()=>{

        getProduct(Id)
            .then((snapshot)=>{

                setItem({...snapshot.data(), id: snapshot.id});
            })
    },[Id])
    
    return(
        <>
            <ItemDetail item={item}/>
        </>
    )


}

export default ItemDetailContainer;