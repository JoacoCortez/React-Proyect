import React, { useContext, useState } from "react";
import CartContext from "../../Store/Cart-context";
import { collection, addDoc } from "firebase/firestore";
import db from "../../Services/Firebase";



const Checkout = () =>{

const cartCtx = useContext(CartContext);

const [load, setLoad] = useState(false)

const [orderID, setOrderID] = useState()

const [buyer, setBuyer] = useState({
    
    Name: " ",
    Email: " ",
    Adress: " " 

})

const {Name, Email, Adress} = buyer


const handleInputChange = (e) =>{

    setBuyer({
        ...buyer, [e.target.name]: e.target.value

    })

}

const generateOrder = async(data) =>{
    
    setLoad(true)

    try{
        const coll = collection(db, "Orders")

        const order = await addDoc(coll,data)

        setOrderID(order.id)
        cartCtx.clear()

        setLoad(false)
    
    }   catch (err){

        console.log("algo salió mal")
    }
    
}

const handleSubmit = (e) =>{

    e.preventDefault()

    const items = cartCtx.products.map(e => {return {
        
        id: e.id,
        name: e.name,
        price: e.price,
        amount: e.amount
    }})

    const total = getTotalPrice()

    const data ={buyer, items, total}

    generateOrder(data)
}

return(
    <>
        <h2>Finalizando tu compra!</h2>
        
        <div className="cheackout-container">

            {load ? <Spinner />
                : (!orderID &&
            
                    <form onSubmit={handleSubmit}>

                        <input
                            type = "text"
                            name = "name"
                            value= {Name}
                            onChange = {handleInputChange}
                            required
                        />

                        <input
                            type = "text"
                            name = "email"
                            value = {Email}
                            onChange = {handleInputChange}
                            required        
                        />

                        <input
                            type = "text"
                            name = "adress"
                            value = {Adress}
                            onChange = {handleInputChange}
                            required       
                        />

                        <input
                            type = "submit"
                            value = "Finalizar Compra"
                        />
                    
                    </form>
                )
            }
            
            {
                orderID && (
                    <div>
                        <h3>Compra Finalizada con Exito</h3>
                        <h4>{`Tu código de compra es: ${orderID}`}</h4>
                            
                    </div>
                )
            }
        </div>
    
    </>












)






}




export default Checkout;