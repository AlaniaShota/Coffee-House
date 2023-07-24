import { NavLink } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
  const isActive = ({ isActive }) => ({
    borderBottom: isActive ? "1px solid #fff" : "inherit",
  });

  return (
    <ul className="menu">
      <li className="menu__list text">
        <NavLink style={isActive} to="/" className="text header-text">
          Coffee house
        </NavLink>
      </li>
      <li className="menu__list text">
        <NavLink style={isActive} to="/ourCoffee" className="text header-text">
          Our coffee
        </NavLink>
      </li>
      <li className="menu__list text">
        <NavLink
          style={isActive}
          to="/forYourPleasure"
          className="text header-text"
        >
          For your pleasure
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
