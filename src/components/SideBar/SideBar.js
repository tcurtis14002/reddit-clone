import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="feeds-title">Feeds</div>
      <hr />

      <NavLink to="/" className="sidebar-nav">
        <span>
          <i className="fa-solid fa-house feed-icon"></i>
        </span>
        <span>Home</span>

        <span>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </NavLink>

      <div className="sidebar-feed">
        <NavLink to="/popular" className="sidebar-nav">
          <span>
            <i className="fa-solid fa-fire-flame-curved feed-icon"></i>
          </span>
          <span>Popular</span>
        </NavLink>
        <span>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </div>

      <hr />

      <div className="sidebar-feed">
        <NavLink to="/" className="sidebar-nav">
          <span>
            <i className="fa-solid fa-gamepad feed-icon"></i>
          </span>
          <span>Gaming</span>
        </NavLink>
        <span>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </div>

      <div className="sidebar-feed">
        <NavLink to="/" className="sidebar-nav">
          <span>
            <i className="fa-solid fa-football feed-icon"></i>
          </span>
          <span>Sports</span>
        </NavLink>
        <span>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </div>

      <div className="sidebar-feed">
        <NavLink to="/" className="sidebar-nav">
          <span>
            <i className="fa-solid fa-chart-pie feed-icon"></i>
          </span>
          <span>Business</span>
        </NavLink>
        <span>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </div>

      <div className="sidebar-feed">
        <NavLink to="/" className="sidebar-nav">
          <span>
            <i className="fa-solid fa-coins feed-icon"></i>
          </span>
          <span>Finance</span>
        </NavLink>
        <span>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </div>

      <div className="sidebar-feed">
        <NavLink to="/" className="sidebar-nav">
          <span>
            <i className="fa-solid fa-tv feed-icon"></i>
          </span>
          <span>Television</span>
        </NavLink>
        <span>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </div>

      <div className="sidebar-feed">
        <NavLink to="/" className="sidebar-nav">
          <span>
            <i className="fa-solid fa-star feed-icon"></i>
          </span>
          <span>Celebrity</span>
        </NavLink>
        <span>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </div>

      <div className="sidebar-feed">
        <NavLink to="/" className="sidebar-nav">
          <span>
            <i className="fa-solid fa-ellipsis-vertical feed-icon"></i>
          </span>
          <span>MoreTopics</span>
        </NavLink>
        <span>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </div>
    </div>
  );
}

export default SideBar;
