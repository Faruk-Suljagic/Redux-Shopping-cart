import React, { Fragment } from "react";
import { connect } from "react-redux";
import "./cart.css";
import { productQuantity, clearProduct } from "../actions/productQuantity";

import samsung from "../Images/samsung.png";
import iphone from "../Images/iphone11.png";
import nokia from "../Images/nokia.png";
import huawei from "../Images/huawei.png";

const Cart = ({ basketProps, productQuantity, clearProduct }) => {
  console.log(basketProps);

  let productsInCart = [];

  Object.keys(basketProps.products).forEach(function (item) {
    console.log(item);
    console.log(basketProps.products[item].inCart);
    if (basketProps.products[item].inCart) {
      productsInCart.push(basketProps.products[item]);
    }
    console.log(productsInCart);
  });

  const productImages = (product) => {
    if (product.tagName === "samsung") {
      return samsung;
    } else if (product.tagName === "iphone") {
      return iphone;
    } else if (product.tagName === "nokia") {
      return nokia;
    } else if (product.tagName === "huawei") {
      return huawei;
    }
  };

  productsInCart = productsInCart.map((product, index) => {
    return (
      <Fragment className="Fragment" key={index}>
        <div className="fragment">
          <i
            onClick={() => clearProduct(product.tagName)}
            className="fas fa-times-circle"
          ></i>
          <div className="prod-position">
            <img
              width="200px"
              height="200px"
              src={productImages(product)}
              alt=""
            />

            <span>{product.name}</span>
            <div className="product-info">
              <div>${product.price},00</div>
              <div>
                <i
                  onClick={() => productQuantity("decrease", product.tagName)}
                  className="fas fa-arrow-circle-left"
                ></i>
                Quantity ({product.numbers})
                <i
                  onClick={() => productQuantity("increase", product.tagName)}
                  className="fas fa-arrow-circle-right"
                ></i>
              </div>
              <div>${product.numbers * product.price},00</div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  });
  return (
    <div className="container-products">
      <div className="product-header">
        <h5>Product</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>Total</h5>
      </div>
      <div className="products">
        <div className="prod-inside">{productsInCart}</div>
      </div>
      <div className="basketTotal">
        <h4>Basket Total:</h4>
        <h4>{basketProps.cartCost},00</h4>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { productQuantity, clearProduct })(
  Cart
);
