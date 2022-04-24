import './App.css';
import NavBar from './Components/NavBar-folder/NavBar';
import ItemListContainer from './Components/ItemListContainer';



function App() {
  return (
    <div className="App">
        <header>
          <NavBar>
              
          </NavBar>
        </header>
        <body>
          <main>
            <ItemListContainer greeting='Hello world'>

            </ItemListContainer>
       
        
          </main>
        </body>
    </div>
    
  );
}



export default App;
