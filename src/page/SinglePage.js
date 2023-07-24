import { useParams } from "react-router-dom";
import recommendation from "../utils/coffeeService.json";

import "./SinglePage.css";

const SinglePage = () => {
  const { coffeeId } = useParams();
  const { forYourPleasureId } = useParams();
  const coffee = recommendation.find(
    (item) => item.id === coffeeId || forYourPleasureId
  );

  const { name, price, country, thumbnail, description, id } = coffee;

  return (
    <>
      <div className="coffee-single-page__card" key={id}>
        <ul className="coffee-single-page__content">
          <li className="coffee-single-page__image">
            <img src={thumbnail} alt={name} className="image" />
          </li>
          <li className="coffee-single-page__about">
            <h5 className="coffee-single-page__name text">{name}</h5>
            <hr className="coffee-single-page__line" />
            <p className="coffee-single-page__span text">
              Country:
              <span className="coffee-single-page__country text">
                {country}
              </span>
            </p>
            <p className="coffee-single-page__span text">
              Description:
              <span className="coffee-single-page__description text">
                {description}
              </span>
            </p>
            <p className="coffee-single-page__span text">
              Price:
              <span className="coffee-single-page__price text">{price}$</span>
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SinglePage;
