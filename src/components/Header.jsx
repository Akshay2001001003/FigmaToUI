import React from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <div className="header">
      <div className="search">
        <SearchIcon
          style={{
            color: "#212731",
            width: "10%",
            height: "24px",
          }}
        />
        <input type="text" className="in"></input>
      </div>
      <div className="categories">
        <div>Category</div>
        <div>Website Builder</div>
        <div>Today's Deal</div>
      </div>
    </div>
  );
};

export default Header;
