import React from 'react';
import { Navbar } from 'react-bootstrap';
import CartWidgets from './CartWidgets';

import ItemListContainer from './ItemListContainer';


 const NavBar = () => {
  return (

    <div className='container'>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href='#' >Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
         <a className="nav-link active" aria-current="page" href='#'>INICIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#' >PRODUCTOS</a>
        </li>
      </ul>  
    </div>
  </div>
</nav>
</div>

   
  )
  

}

 
 const Main = () => {
   return (
     <main>
       <ItemListContainer greeting={'los productos estan en development'} />
     </main>
   )
 }
 

 
 export default NavBar;
 

