import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const styles = {
    height: "50px",
    width: "100%",
    border: "1px solid aquamarine",
  };
  const style1 = {
    float: "left",
    width: "0px",
  };
  const style2 = {
    float: "right",
    marginRight: "20px",
  };
  return (
    <div style={styles}>
      <div style={style1}>
        <h5 style={{ color: "purple" }}>Instaclone</h5>
      </div>
      <NavLink to="/addpost">
        <div style={style2}>
          <img
            height="50px"
            src={process.env.PUBLIC_URL + "/thumb.png"}
            alt="camera"
          />
        </div>
      </NavLink>
    </div>
  );
};

export default Navbar;
