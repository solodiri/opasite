import "./Dropdown.css";
import { menuItems } from "./Data";
import { Link } from "react-router-dom";

const DropDown = () => {
  // console.log(menuItems);
  return (
    <ul className="dropdownContainer">
      {menuItems.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.path} className={item.clasName}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default DropDown;
