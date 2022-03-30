import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>React Router Practice</h1>
          <div className="menu">
          <ul>
               <li> <Link to={'/home'} >Home</Link></li>
               <li> <Link to={'/Resturent'} >Resturent</Link></li>
               <li> <Link to={'/Countries'} >Countries</Link></li>
           </ul>
          </div>
        </div>
    );
};

export default Header;