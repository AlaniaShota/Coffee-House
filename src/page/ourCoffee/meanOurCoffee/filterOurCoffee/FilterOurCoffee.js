import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

import recommendation from "../../../../utils/coffeeService.json";

import "./FilterOurCoffee.css";

const CoffeeCard = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="our-coffee-card-content">
        <ul className="filter-search-card">
          <li className="input-search-card">
            <p className="search-text text">Lookiing for</p>
            <input
              type="text"
              placeholder="start typing here..."
              className="filter-input text"
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
          </li>
        </ul>
      </div>
      <div className="our-coffee-card__recommendation">
        {recommendation
          .filter((item) => {
            return search === ""
              ? item
              : item.name.toLocaleLowerCase().includes(search) ||
                  item.country.toLocaleLowerCase().includes(search);
          })
          .map((item) => {
            const { image, name, price, id, country } = item;
            return (
              <div className="our-coffee-card__recommendation-content" key={id}>
                <Link to={`/ourCoffee/${item.id}`} className="link">
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
