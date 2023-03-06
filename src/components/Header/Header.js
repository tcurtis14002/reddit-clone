import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div>
        <i class="fa-brands fa-reddit fa-2xl red"></i>
        <i class="fa-solid fa-rss fa-xl"></i>
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
