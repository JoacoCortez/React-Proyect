import './App.css';
import NavBar from './Components/NavBar-folder/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
        <header>
          <NavBar/>
          <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/Category/:categoryId' element={<ItemListContainer/>}/>
                <Route path='/Item/:Id' element={<ItemDetailContainer/>}/>
          </Routes>
              
          
          
        </header>
        <body>
          <main>
            {/* <ItemListContainer greeting='Hello world'>

            </ItemListContainer> */}

            
       

          </main>
        </body>
    </div>
    
  );
}



export default App;
