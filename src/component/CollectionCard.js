import React from "react";
import weth from "../assets/weth.png";
import "./CollectionCard.css";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectionCard">
      <img src={image} alt={name} />
      <div className="name">
        <div className="details">
           {name} <div className="id"> .#{id}</div>
          <div className="priceContainer">
            <img src={weth} className="wethImage" alt="" />
            <div className="price"> {traits[0]?.value}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
