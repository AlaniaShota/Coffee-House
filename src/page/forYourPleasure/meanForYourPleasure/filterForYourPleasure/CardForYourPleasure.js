// import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

import recommendation from "../../../../utils/coffeeService.json";


const CoffeeCard = () => {
  return (
    <>
      <div className="our-coffee-card__recommendation">
        {recommendation.map((item) => {
          const { image, name, price, id, country } = item;
          return (
            <div className="our-coffee-card__recommendation-content" key={id}>
              <Link to={`/forYourPleasure/${item.id}`} className="link">
                <img
                  src={image}
                  alt={name}
                  className="our-coffee-card__recommendation__image"
                />
                <h5 className="our-coffee-card__recommendation__name text">
                  {name}
                </h5>
                <h6 className="our-coffee-card__recommendation__country text">
                  {country}
                </h6>
                <h6 className="our-coffee-card__recommendation__price text">
                  {price}$
                </h6>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CoffeeCard;
