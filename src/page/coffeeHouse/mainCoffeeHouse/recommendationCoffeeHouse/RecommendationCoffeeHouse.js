import recommendation from "../../../../utils/coffeeHouse.json";

import "./RecommendationCoffeeHouse.css";

const RecommendationCoffeeHouse = () => {
  return (
    <div className="coffee-house-main__recommendation">
      <h1 className="coffee-house-main-recommendation__title text">Our Best</h1>
      {recommendation.map((item) => {
        const { image, name, price, id } = item;
        return (
          <div className="recommendation-card" key={id}>
            <div>
              <img src={image} alt={name} className="recommendation__image" />
              <h5 className="recommendation__name text">{name}</h5>
              <h6 className="recommendation__price text">{price}$</h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecommendationCoffeeHouse;
