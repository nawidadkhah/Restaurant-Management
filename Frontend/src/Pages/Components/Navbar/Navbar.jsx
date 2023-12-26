import { useEffect, useState } from "react";
import Logo from "../../../images/logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserProfile } from "../../UserProfile/UserProfile";

import "./Navbar.css";
import { Auth } from "../../Auth/Auth";

export const Navbar = ({ setRestaurants, restaurants }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("User")));
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const profileHandle = () => {
    <Navigate to={UserProfile} />;
  };

  const handleSearch = (e) => {
    console.log(e.target.value);
    restaurants.filter((res) => {
      if (res.restaurantName.startsWith(e.target.value)) {
        setRestaurants(res);
      }
    });
  };

  const handleLogin = () => {
    navigate("/")
  };

  const handleLogout = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("User");
    setUser(null);
  };
  return (
    <div className="navbar">
      <div className="navbar-img">
        <a href="/home">
          <img src={Logo} alt="logo" />
        </a>
      </div>
      <ul className="navbar-ul">
        <i>
          <a href="/home">Home</a>
        </i>
        {user && (
          <i>
            <a href="/profile">Profile</a>
          </i>
        )}
        <i>
          {user ? (
            <p onClick={handleLogout}>Logout</p>
          ) : (
            <p onClick={handleLogin}>Login</p>
          )}
        </i>
        <i className="search"></i>
      </ul>
      <div className="container">
        <input
          className="checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div className={`mainbox ${isChecked ? "checked" : ""}`}>
          <div className="iconContainer">
            <svg
              viewBox="0 0 512 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              className="search_icon"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
            </svg>
          </div>
          <input
            className="search_input"
            placeholder="search"
            type="text"
            onClick={(e) => handleSearch(e)}
            style={{ width: isChecked ? "0" : "170px" }}
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </div>
    </div>
  );
};
