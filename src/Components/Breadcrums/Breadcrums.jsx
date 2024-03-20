import React from "react";
import "./Breadcrums.css";
import arraw_icon from "../Assets/breadcrum_arrow.png";
export const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrums">
      HOME <img src={arraw_icon} />
      SHOP <img src={arraw_icon} alt="" />
      {product.category}
      <img src={arraw_icon} alt="" />
      {product.name}
    </div>
  );
};
