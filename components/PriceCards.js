import React from "react";

const PriceCards = (props) => {
  const { header, headerText, price, info } = props;
  return (
    <div className="price-card">
      <h2>{header}</h2>
      <p className="headerText">{headerText}</p>
      <p className="price">
        <span>{price}</span> <span> /mo</span>
      </p>
      <p className="info">{info}</p>
    </div>
  );
};

export default PriceCards;
