import React from 'react';
import { Navbar } from 'react-bootstrap/Navbar';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <div>
      <NavBar/>
      <div style={{margin: 10, padding: 20}}>
        <p>
          <ItemListContainer greeting={'los productos estan en proceso'} />
        </p>
      </div>
    </div>
  );
}

export default App;



