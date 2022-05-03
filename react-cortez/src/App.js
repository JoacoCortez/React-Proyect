import './App.css';
import NavBar from './Components/NavBar-folder/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';




function App() {
  return (
    <div className="App">
        <header>
          <NavBar>
              
          </NavBar>
        </header>
        <body>
          <main>
            {/* <ItemListContainer greeting='Hello world'>

            </ItemListContainer> */}

            <ItemDetailContainer/>
       

          </main>
        </body>
    </div>
    
  );
}



export default App;
