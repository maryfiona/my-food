import React from "react";
import './GoodFood.css'
import Food from '../Assets/Food.png'


const GoodFood = () => {

    return(
        <React.Fragment>
            <div className="na">
             <div className="container class">
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

                </div>
                </div>

        </React.Fragment>
    )
};
export default GoodFood;