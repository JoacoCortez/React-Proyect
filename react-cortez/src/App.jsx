import './App.css';
import NavBar from './Components/NavBar-folder/NavBar';
import ItemListContainer from './Components/ItemListContainer/index'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {Routes, Route} from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';


function App() {
  return (
    <div className="App">
        
          <NavBar/>
            <Routes>
                  <Route path='/' element={<ItemListContainer/>}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                  <Route path='/Item/:Id' element={<ItemDetailContainer/>}/>
                  <Route path="/Cart" element={<Cart/>}/>
                  <Route path="/Checkout" element={<Checkout/>}/>
            </Routes>
          
          
          
        
    </div>
    
  );
}



export default App;
