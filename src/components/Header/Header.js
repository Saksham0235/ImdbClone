import React from "react";
import "./header.css";
// It is an element helps user to navigate through pages by clicking or tapping
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          {" "}
          <img
            className="header_icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          />
        </Link>
        
        <Link to="/movies/popular" className="Link"> <span>Popular</span></Link>
        <Link to="/movies/top_rated" className="Link" > <span>Top Rated</span></Link>
        <Link to="/movies/upcoming" className="Link"><span>Upcoming</span> </Link>
      </div>
    </div>
  );
};

export default Header;
