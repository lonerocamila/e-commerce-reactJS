import React from 'react';
import { Navbar } from 'react-bootstrap';
import CartWidgets from './CartWidgets';


import { FaBeer } from 'react-icons/fa';

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}

 const NavBar = () => {
  return (

    <div className='container'>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href='#' >Therapy</a>
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
      <div className='cart'>
    <li className='carrito'>
       <CartWidgets />   
        </li>
    </div>
    </div>
  
  </div>
</nav>
</div>

   
  )
  

}

 


 export default NavBar;
 

