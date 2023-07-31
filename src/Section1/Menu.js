import React from "react";
import './Menu.css'
import image1 from '../Assets/image1.png'
import image2 from '../Assets/image2.png'
import image3 from '../Assets/image3.png'
import image4 from '../Assets/image4.png'
import image5 from '../Assets/image5.png'


const Menu = () => {
    return (
        <React.Fragment>
            <div className="na">
                <h2 className="text-center   our">OUR MENUS</h2>
            
            
            <div className="container  pt-5">
                <div className="row">
                    <div className="col">
                        <button className="bo">
                        <img src={image1} alt="img1" />
                        <p className="our">Locals</p>
                        </button>
                    </div>
                    <div className="col">
                    <button className="bo">
                    <img src={image2} alt="img2" />
                    <p className="our">International</p>
                    </button>

                    </div>

                    <div className="col">
                    <button className="bo">
                    <img width={90} src={image3} alt="img3" />
                    <p className="our">Appetizers& <br />Fast Food</p>
                    </button>

                    </div>

                    <div className="col">
                    <button className="bo">
                    <img src={image4} alt="img4" />
                    <p className="our">Chicken</p>
                    </button>

                    </div>

                    <div className="col">
                        <button className="bo">
                    <img src={image5} alt="img5" />
                    <p className="our"> Veggies</p>
                    </button>
                    


                    </div>


                </div>
                
                </div>

            </div>
            

        </React.Fragment>
    )

};
export default Menu;