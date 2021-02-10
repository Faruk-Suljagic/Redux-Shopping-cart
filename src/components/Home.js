import React from "react";
import iphone from "../Images/iphone11.png";
import samsung from "../Images/samsung.png";
import nokia from "../Images/nokia.png";
import huawei from "../Images/huawei.png";
import "./home.css";
import { connect } from "react-redux";
import { addBasket } from "../actions/addAction";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="container">
      <div className="image">
        <img width="300" height="300" src={samsung} alt="samsung" />
        <h3>$459.0</h3>
        <Link
          onClick={() => props.addBasket("samsung")}
          className="addToCart"
          to="#"
        >
          Add to Cart
        </Link>
      </div>
      <div className="image">
        <img width="300" height="300" src={iphone} alt="iphone" />
        <h3>$511.0</h3>
        <Link
          onClick={() => props.addBasket("iphone")}
          className="addToCart"
          to="#"
        >
          Add to Cart
        </Link>
      </div>
      <div className="image">
        <img width="300" height="300" src={nokia} alt="nokia" />
        <h3>$329.0</h3>
        <Link
          onClick={() => props.addBasket("nokia")}
          className="addToCart"
          to="#"
        >
          Add to Cart
        </Link>
      </div>

      <div className="image">
        <img width="300" height="300" src={huawei} alt="huawei" />
        <h3>$477.0</h3>
        <Link
          onClick={() => props.addBasket("huawei")}
          className="addToCart"
          to="#"
        >
          Add to Cart
        </Link>
      </div>
    </div>
  );
};
export default connect(null, { addBasket })(Home);
