import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand name" to="/">
              MyMovie
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav"> 
                <li className="nav-item">
                    <a href="https://www.imdb.com/" target="_blank" rel="noopener noreferrer"><span className="nav-link fab fa-imdb fa-5x"></span></a>
                </li>      
                <li className="nav-item">
                    <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer"><span className="nav-link fab fa-font-awesome fa-5x"></span></a>
                </li>     
                <li className="nav-item">
                    <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer" ><span className="nav-link fab fa-bootstrap fa-5x"></span></a>
                </li>
                <li className="nav-item">
                    <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer"><span class="iconify" data-icon="simple-icons:redux" data-inline="false"></span></a>
                </li>
                <li className="nav-item">
                   <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><span className="nav-link fab fa-react fa-5x"></span></a>
                </li>


                </ul>
            </div>
            </nav>
        </div>
    )
} 

export default Navbar