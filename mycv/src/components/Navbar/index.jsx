import React from "react";
import './Navbar.css'
import { Link } from 'react-router-dom'



const Navbar = () => {

 return (
    <>
    
    <nav className=" blue darken-4">
        <div className="container">
                <div className="nav-wrapper"> 
                    <Link to="/" className="brand-logo">
                        CV
                    </Link>
                    <Link to="/" data-target="menu-responsivo" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </Link>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Link to="/">
                            <i className="fas fa-home "></i> Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                            <i className="fas fa-address-card"></i> Sobre mi
                            </Link>
                        </li>
                        <li>
                            <Link to="/skill">
                            <i className="fas fa-copy"></i> Lenguajes
                            </Link>
                        </li>
                        <li>
                            <Link to="/experiences">
                            <i className="fas fa-id-badge"></i> Experiencias
                            </Link>
                        </li>
                        <li>
                            <Link to="/education">
                            <i className="fas fa-graduation-cap"></i> Educacion
                            </Link>
                        </li>                 
                        {/* <li>
                            <Link to="/portfolios">
                            <i className="fas fa-address-card"></i>Portfolios
                            </Link>
                        </li>     */}                 
                    </ul>
                </div>
                </div>
    </nav>
        
        <ul className="sidenav" id="menu-responsivo">
                        <li>
                            <Link to="/">
                            <i className="fas fa-home"></i>Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                            <i className="fas fa-address-card"></i>Sobre mi
                            </Link>
                        </li>
                        <li>
                            <Link to="/skill">
                            <i className="fas fa-copy"></i>Lenguajes
                            </Link>
                        </li>
                        <li>
                            <Link to="/experiences">
                            <i className="fas fa-id-badge"></i>Experiencia
                            </Link>
                        </li>
                        <li>
                            <Link to="/education">
                            <i className="fas fa-graduation-cap"></i>Educacion
                            </Link>
                        </li>                 
                       {/*  <li>
                            <Link to="/portfolios">
                            <i className="fas fa-address-card"></i>Portfolios
                            </Link>
                        </li>  */}                    
                    </ul>
    </>
 );

}


export { Navbar }