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
                {/* <div className="container class">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>GOOD FOOD </h2>
                              <h3>  GOOD LIFE</h3>
                              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor <br />
                               congue massa. Fusce posuere, magna sed pulvinar <br />
                                ultricies, purus lectus malesuada libero, sit amet commodo magna
                                </p>
                                <input  className="in" type="text" placeholder="What are you craving" />
                                <button className="order">Order now</button>

                        </div>
                        <div className="col-md-6">
                            <img  width={450} src={Food} alt="food" />

                        </div>

                    </div>

                </div> */}



            </div>

        </React.Fragment>


    )
}
export default Navbar;