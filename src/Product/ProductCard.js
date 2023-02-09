import React from "react";

export default function ProductCard(props) {
  const {img, name, price}=props;
  return (
      <div>
        <img
          className="plp-product__image"
          src={img}
          alt="product"
        />
        <h2 className="plp-product__title">
          {name}
        </h2>
        <h3 className="plp-product__price">${price}</h3>
        {props.child}
      </div>
  );
}
