import { Helmet } from "react-helmet";
import HeaderForYourPleasure from "./headerForYourPleasure/HeaderForYourPleasure";
import MeanForYourPleasure from "./meanForYourPleasure/MeanForYourPleasure";
import Footer from "../Footer";

const ForYourPleasure = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="For Your Pleasure" />
        <title>For Your Pleasure</title>
      </Helmet>
      <HeaderForYourPleasure />
      <MeanForYourPleasure />
      <Footer />
    </>
  );
};

export default ForYourPleasure;
