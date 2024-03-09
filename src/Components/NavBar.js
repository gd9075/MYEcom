import React from 'react'
import '../Styles/NavBar.css'
import LogoImage from "../Images/Ecommers.png"
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = ({setSearch,setCount,wishlist,addcart}) => {
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();



    const handleSubmitSearch=(event)=>{
        
        event.preventDefault();
    }
    return (
        <div >
            <div className="main-navbar shadow-sm sticky-top">
                <div className="top-navbar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                                <h5 className="brand-name">GD Ecom</h5>
                            </div>
                            <div className="col-md-5 my-auto">
                                <form role="search" onSubmit={handleSubmitSearch}>
                                    <div className="input-group">
                                        <input type="search" placeholder="Search your product" className="form-control" onChange={(e)=>setSearch(e.target.value)} />
                                        <button className="btn bg-white" type="submit" >
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-5 my-auto">
                                <ul className="nav justify-content-end">

                                    <li className="nav-item">
                                        <a className="nav-link" href="#"  onClick={()=>setCount(5)}>
                                            <i className="fa fa-shopping-cart"></i> Cart {wishlist}
                                        </a>
                                    </li>
                                  
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fa fa-user"></i> {isAuthenticated?(user.name):("Guest")}
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {  isAuthenticated && <li onClick={()=>alert("page will be coming soon")}><a className="dropdown-item" href="#"><i className="fa fa-user"></i> Profile</a></li> }
                                            {
                                                 isAuthenticated?(
                                                    
                                                    <li><a className="dropdown-item" href="#"onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> <i className="fa fa-sign-out"></i>Log out</a></li>

                                                 )
                                                 :(
                                                    
                                                    <li><a className="dropdown-item" href="#" onClick={() => loginWithRedirect()}><i className="fa-solid fa-right-to-bracket"></i> Log In</a></li>
                                                 )
                                            }


                                            <li><a className="dropdown-item" href="#"><i className="fa fa-list"></i> My Orders</a></li>
                                            <li onClick={()=>setCount(5)}><a className="dropdown-item" href="#" ><i className="fa fa-shopping-cart"  ></i> My Cart</a></li>
                                            
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="#">
                            GD Ecom
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={()=>setCount(0)} >Home</a>
                                </li>
                                <li className="nav-item" >
                                    <a className="nav-link" href="#" onClick={()=>setCount(1) }>All Categories</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={()=>setCount(3) }>Fashions</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={()=>setCount(2) }>New Arrivals</a>
                                </li>
                              

        
                               
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={()=>setCount(4) }>Accessories</a>
                                </li>
                               
                             
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    )
}

export default NavBar