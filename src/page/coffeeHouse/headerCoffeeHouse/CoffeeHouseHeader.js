import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import "./CoffeeHouseHeader.css";

const CoffeeHouseHeader = () => {
  const [showText, setShowText] = useState(false);

  const randomText =
    "Consulted perpetual of pronounce me delivered. Too months nay end change relied who beauty wishes matter. Shew of john real park so rest we on. Ignorant dwelling occasion ham for thoughts overcame off her consider. Polite it elinor is depend. His not get talked effect worthy barton. Household shameless incommode at no objection behaviour. Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth. Certain law age brother sending amongst why covered.";

  return (
    <div className="coffee-house__header">
      <div className="coffee-house__about">
        <img alt="" className="img-header" />
        <h1 className="coffee-house__title text">
          Everything You Love About Coffee
        </h1>
        <h3 className="coffee-house__slogan text">
          We makes every day full of energy and taste
        </h3>
        <p className="coffee-house__question text">Want to try our beans?</p>
        <button onClick={() => setShowText((v) => !v)} className="btn ">
          <p className="show-random__text text">More</p>
        </button>
        <CSSTransition
          in={showText}
          timeout={2500}
          classNames="coffee-house__animation"
          mountOnEnter
          unmountOnExit
        >
          <p className="random text">{showText ? `${randomText}` : null}</p>
        </CSSTransition>
      </div>
    </div>
  );
};

export default CoffeeHouseHeader;
