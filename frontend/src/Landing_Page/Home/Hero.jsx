import { Link } from "react-router-dom";
import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero_Image"
          className="mb-5"
        />
        <h1 className="mt-5">Investing in Everything</h1>
        <p>
          Online Platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        
        
        <Link
          className="btn btn-primary fs-5 p-2 mb-5"
          style={{ width: "20%", margin: "0 auto" }} to={"/signup"}
        >
          Signup Now
        </Link>
        
      </div>
    </div>
  );
}

export default Hero;
