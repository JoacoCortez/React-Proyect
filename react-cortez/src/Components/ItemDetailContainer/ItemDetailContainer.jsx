import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

function getProduct(Id){

   const ProductReturn = new Promise ((resolve, reject)=>{

    const productList = [
        {id: 1, name:"Cerveza IPA Andes", stock: 3, description:"Lata de 473cc", price: "$200", category:"IPA", extraInfo:"La Andes IPA Andina es una cerveza estilo IPA, valga la redundancia, de la escuela Inglesa. Como seguramente usted sabe, este estilo de cerveza se caracteriza por el amargor que le otorga su alto contenido de lúpulo. Lo que seguramente no sabe es que la IPA Andina contiene uva mendocina. Este ingrediente es clave para que en el paladar perciba una especie de dulzor, que a su vez hace el amargor más amigable.",  img: "https://elbaronline.com.ar/wp-content/uploads/2021/03/Andes-Ipa-473ml-1-1024x1024.jpg"},
        {id: 2, name:"Cerveza roja Andes", stock: 3, description:"Lata de 473cc", price: "$180", category:"Roja", extraInfo:"La Andes Origen Roja a es una cerveza que posee un final seco y una leve acidez que la hacen muy versátil. Es una cerveza estilo Vienna Lager, su aroma a suave caramelo y leve lúpulo logran un balance perfecto. La Andes origen Roja, color ámbar cobrizo, es una cerveza de deleite. Ideal para acompañar pescados o carnes rojas, elaborados con verduras frescas o grilladas.",  img: "https://elbaronline.com.ar/wp-content/uploads/2021/03/Andes-Roja-473ml-1.jpg"},
        {id: 3, name:"Cerveza rubia Andes", stock: 3, description:"Lata de 473cc", price: "$150", category:"Rubia", extraInfo:"La Andes Origen Rubia es una Cerveza estilo american pilsner, una Rubia con cuerpo y  carácter maltoso. Aroma leve a lúpulo, cereal y toque de levadura. Debe servirse en copa para apreciar mejor sus aromas y resaltar así su color dorado brillante. La Andes Origen Rubia es una cerveza de deleite, pero refrescante a la vez.",  img: "https://elbaronline.com.ar/wp-content/uploads/2021/03/Andes-Rubia-473ml-1-1024x1024.jpg"}
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