import React from "react";
import './Inspire.css'
import image1 from '../Assets/image1.png'

const Inspire = () => {
    return(
        <React.Fragment>
            <div className="na pt">
                <h1 className="our text-center">Inspiration For your First Order</h1>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-md-3">
                        <button className="bo">
                        <img src={image1} alt="img1" />
                        <p className="our">Locals</p>
                        </button>

                        </div> 



                        <div className="col-md-3">

                        </div>
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-3">

                        </div>

                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}
export default Inspire;