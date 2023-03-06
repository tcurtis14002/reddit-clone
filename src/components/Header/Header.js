import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <i class="fa-brands fa-reddit fa-2xl red"></i>
        reddit
      </div>
      <input type="text" placeholder="Search Reddit" />
      <div>
        <button className="login-btn">Log In</button>
        <i class="fa-regular fa-user fa-xl"></i>
      </div>
    </div>
  );
};

export default Header;
