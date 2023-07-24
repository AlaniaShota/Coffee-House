import { Link } from "react-router-dom";
import HeaderForYourPleasure from "../headerForYourPleasure/HeaderForYourPleasure";

import "../../SinglePage.css";
import SinglePage from "../../SinglePage";

const SinglePageForYourPleasure = () => {
  return (
    <>
      <HeaderForYourPleasure />
      <SinglePage />
      <Link to="/forYourPleasure" className="back-to text">
        Back To All
      </Link>
    </>
  );
};

export default SinglePageForYourPleasure;
