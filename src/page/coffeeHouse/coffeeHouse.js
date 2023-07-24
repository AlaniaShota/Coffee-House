import Footer from "../Footer";
import Menu from "../Menu";
import CoffeeHouseHeader from "../coffeeHouse/headerCoffeeHouse/CoffeeHouseHeader";
import CoffeeHouseMain from "../coffeeHouse/mainCoffeeHouse/CoffeeHouseMain";
import { Helmet } from "react-helmet";

const CoffeeHouse = () => {
  return (
    <>
      <Helmet>
        <meta name="description" content="Coffee House" />
        <title>Coffee House</title>
      </Helmet>

      <div className="coffee-house">
        <Menu />
        <CoffeeHouseHeader />
        <CoffeeHouseMain />
        <Footer />
      </div>
    </>
  );
};

export default CoffeeHouse;
