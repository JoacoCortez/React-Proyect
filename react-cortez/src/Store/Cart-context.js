import { createContext, useState } from "react";


const CartContext = createContext({
    products: [],
    addProduct: () => {},
    deleteProduct: () => {},
    clear: () => {},
    duplicated: () => {}
});


const CartContextProvider = ({children}) =>{

    const [productList, setProductList] = useState([])


    const addProduct = (product) => {

        const verifyRepeat = productList.findIndex(item => item.id === product.id)
        if(verifyRepeat !== -1){

            setProductList(productList.map(p => p.id === product.id ? {...p, quantity: p.quantity + product.quantity} : p));
        
        }else{

            setProductList([product, ...productList]);

        }

    }


    const deleteProduct = (id) =>{

        const verifyToDelete = productList.findIndex(item => item.id === id);

        if(productList[verifyToDelete].quantity === 1){

            setProductList(productList.filter(i => i.id !== id))
        
        }else{

            setProductList(productList.map(p => p.id === id ? {...p, quantity: p.quantity -1} : p))
        }
    }


    const clear = () =>{
        
        setProductList([]);

    }

    
    const duplicated = (id) =>{

        return   productList.map(item => item.id).indexOf(id) !== -1;
        
    }



    return(
        <CartContext.Provider value={{
            
            products: productList,
            addProduct,
            deleteProduct,
            clear,
            duplicated
        }}>
            {children}
        </CartContext.Provider>
    )    
}

export default CartContext;

export {CartContextProvider};