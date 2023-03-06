import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <nav className="side-bar">
      <h3>Feeds</h3>
      <ul>
        <li>
          <NavLink to="/" class="nav-link">
            <i class="fa-solid fa-house"></i>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/" class="nav-link">
            <i class="fa-solid fa-fire-flame-curved"></i>
            Popular
          </NavLink>
        </li>
      </ul>
      <h3>Topics</h3>
      <ul>
        <li>
          <NavLink to="/" class="nav-link">
            <i class="fa-solid fa-gamepad"></i>
            Gaming
          </NavLink>
          <i class="fa-solid fa-chevron-down"></i>
        </li>
        <li>
          <NavLink to="/" class="nav-link">
            <i class="fa-solid fa-football"></i>
            Sports
          </NavLink>
          <i class="fa-solid fa-chevron-down"></i>
        </li>
        <li>
          <NavLink to="/" class="nav-link">
            <i class="fa-solid fa-chart-pie"></i>
            Business
          </NavLink>
          <i class="fa-solid fa-chevron-down"></i>
        </li>
        <li>
          <NavLink to="/" class="nav-link">
            <i class="fa-solid fa-coins"></i>
            Finance
          </NavLink>
          <i class="fa-solid fa-chevron-down"></i>
        </li>
        <li>
          <NavLink to="/" class="nav-link">
            <i class="fa-solid fa-tv"></i>
            Television
          </NavLink>
          <i class="fa-solid fa-chevron-down"></i>
        </li>
        <li>
          <NavLink to="/" class="nav-link">
            <i class="fa-solid fa-star"></i>
            Celebrity
          </NavLink>
          <i class="fa-solid fa-chevron-down"></i>
        </li>
        <li>
          <NavLink to="/" class="nav-link">
            {" "}
            <i class="fa-solid fa-ellipsis"></i>
            More Topics
          </NavLink>
          <i class="fa-solid fa-chevron-down"></i>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
