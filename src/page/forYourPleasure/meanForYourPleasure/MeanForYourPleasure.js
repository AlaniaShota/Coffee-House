// import CoffeeCard from "../filterOurCoffee/FilterOurCoffee";
import "./MeanForYourPleasure.css";
import CoffeeCard from "./filterForYourPleasure/CardForYourPleasure";

const MeanForYourPleasure = () => {
  return (
    <>
      <div className="pleasure__main">
        <img
          src={"img/coffee-839233_1920.jpg"}
          alt="Girl&Coffee"
          className="pleasure-main__image"
        />
        <div className="pleasure-main__about">
          <h2 className="pleasure-main__title text">About our beans</h2>
          <hr className="main-title-decoration-line" />
          <p className="pleasure-main__paragraph text">
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

export default MeanForYourPleasure;
