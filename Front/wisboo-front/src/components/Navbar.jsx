import React from 'react'
import logo from '../logo.svg';
import { Link } from "react-router-dom";
 

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:"#2EA0B2", padding:"10px"}}>
                <div class="container-fluid">
                <Link to={"/"} style={{marginLeft:"5%"}}><img  src={logo}  alt="logo" /></Link> 
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav" style={{marginLeft:"75%"}}>                        
                        <Link to={"/"} style={{textDecoration:"none",fontSize:"30px", marginRight:"20px"}}><a class="nav-link " href="#">Search</a></Link>
                        <Link to={"/myimages"} style={{textDecoration:"none",fontSize:"30px"}}><a class="nav-link " href="#">My Images</a></Link>
                        
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
