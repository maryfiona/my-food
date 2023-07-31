import React from "react";
import './Navbar.css'





const Navbar = () => {
    return (
        <React.Fragment>
            <div className="na">
                <nav className="navbar navbar-expand-sm navbar-dark ">
                    <div className="container-fluid">
                        <a className="navbar-brand  anik" href="/">ANIK</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav me-auto line">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Menu</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Order</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Contact</a>
                                </li>
                            </ul>
                            <div className="mr">
                                Login
                            </div>
                            <button className="ml">
                                Sign up
                            </button>
        

                        </div>
                    </div>
                </nav>
                



            </div>

        </React.Fragment>


    )
}
export default Navbar;