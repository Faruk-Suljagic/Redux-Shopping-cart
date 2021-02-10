import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNumbers } from "../actions/getAction";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  useEffect(() => {
    getNumbers();
  }, []);
  return (
    <div>
      <header>
        <nav>
          <h2>Redux-Task</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/cart">
                <i className="fas fa-shopping-cart"></i>
                Cart
                <span>({props.basketProps.basketNumbers})</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { getNumbers })(Navbar);
