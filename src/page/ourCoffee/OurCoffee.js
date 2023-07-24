import { Helmet } from "react-helmet";

import HeaderOurCoffee from "./headerOurCoffee/HeaderOurCoffee";
import MeanOurCoffee from "./meanOurCoffee/MeanOurCoffee";
import Footer from "../Footer";

const OurCoffee = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Our Coffee" />
        <title>Our Coffee</title>
      </Helmet>
      <HeaderOurCoffee />
      <MeanOurCoffee />
      <Footer />
    </>
  );
};

export default OurCoffee;
