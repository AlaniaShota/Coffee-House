import CoffeeCard from "./filterOurCoffee/FilterOurCoffee";
import "./MeanOurCoffee.css";

const MeanOurCoffee = () => {
  return (
    <>
      <div className="our-coffee__main">
        <img
          src={"img/girl-865304_1920 (1).jpg"}
          alt="Girl&Coffee"
          className="our-coffee-main__image"
        />
        <div className="our-coffee-main__about">
          <h2 className="our-coffee-main__title text">About our beans</h2>
          <hr className="main-title-decoration-line" />
          <p className="our-coffee-main__paragraph text">
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. <br /> <br />
            Afraid at highly months do things on at. Situation recommend
            objection do intention so questions. <br /> <br />
            As greatly removed calling pleased improve an. Last ask him cold
            feel met spot shy want. Children me laughing we prospect answered
            followed. At it went is song that held help face.
          </p>
        </div>
      </div>
      <hr className="main-decoration-line" />
      <CoffeeCard />
    </>
  );
};

export default MeanOurCoffee;
