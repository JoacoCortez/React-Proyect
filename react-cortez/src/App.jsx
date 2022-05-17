import './App.css';
import NavBar from './Components/NavBar-folder/NavBar';
import ItemListContainer from './Components/ItemListContainer/index'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {Routes, Route} from 'react-router-dom';
import Cart from './pages/Cart/Cart';


function App() {
  return (
    <div className="App">
        
          <NavBar/>
            <Routes>
                  <Route path='/' element={<ItemListContainer/>}/>
                  <Route path="/Cart" element={<Cart/>}/>
                  <Route path='/Category/:categoryId' element={<ItemListContainer/>}/>
                  <Route path='/Item/:Id' element={<ItemDetailContainer/>}/>
            </Routes>
          
          
          
        
    </div>
    
  );
}



export default App;
