// import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CoffeeHouse from "../page/coffeeHouse/coffeeHouse";
import OurCoffee from "../page/ourCoffee/OurCoffee";

import ForYourPleasure from "../page/forYourPleasure/ForYourPleasure";
import SinglePageOurCoffee from "../page/ourCoffee/singlePageOurCoffee/SinglePageOurCoffee";
import SinglePageForYourPleasure from "../page/forYourPleasure/singlePageForYourPleasure/SinglePageForYourPleasure";
import ErrorPage from "../page/404";

const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<CoffeeHouse />} />
          <Route path="/ourCoffee" element={<OurCoffee />} />
          <Route path="/forYourPleasure" element={<ForYourPleasure />} />
          <Route path="*" element={<ErrorPage />} />
          <Route
            path="/ourCoffee/:coffeeId"
            element={<SinglePageOurCoffee />}
          />
          <Route
            path="/forYourPleasure/:forYourPleasureId"
            element={<SinglePageForYourPleasure />}
          />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
