import React from 'react';
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (
            <p>🌟</p>

          ))}
        </div>
      </div>
      <div className="product__rating">

      </div>

      <img
        src={image}
        alt="The Lean Startup book cover"
      />

      <button>Add to Basket</button>



    </div>
  )
}

export default Product;
