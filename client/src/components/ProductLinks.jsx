import React from "react";
import { Link } from "react-router-dom";
import "../css/productLinks.css";
import a from "../mainpage/watches/13.jpg";
import b from "../mainpage/bags/13.jpg";
import c from "../mainpage/20.jpg";

const ProductLinks = () => {
  return (
    <div className="prod-container">
      <div className="product-links">
        <div className="item1">
          <img src={a} alt="watch" />
          <div className="content">
            <h2>All Watches</h2>
            <div>
              <Link className="watch-link" to="/">
                Shop Men's
              </Link>
              <Link className="watch-link" to="/">
                Shop Women's
              </Link>
            </div>
          </div>
        </div>
        <div className="item2">
          <img src={b} alt="watch" />
          <div className="content">
            {" "}
            <h2>Bags</h2>
            <div>
              <Link className="bag-link" to="/">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="item3">
          <img src={c} alt="watch" />
          <div className="content">
            <h2>Denim</h2>
            <div>
              <Link className="denim-link" to="/">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLinks;
