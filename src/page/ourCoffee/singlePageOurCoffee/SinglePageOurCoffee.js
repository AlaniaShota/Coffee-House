import { Link } from "react-router-dom";
import HeaderOurCoffee from "../../ourCoffee/headerOurCoffee/HeaderOurCoffee";

import "../../SinglePage.css";
import SinglePage from "../../SinglePage";

const SinglePageOurCoffee = () => {
  return (
    <>
      <HeaderOurCoffee />
      <SinglePage />
      <Link to="/ourCoffee" className="back-to text">
        Back To All
      </Link>
    </>
  );
};

export default SinglePageOurCoffee;
