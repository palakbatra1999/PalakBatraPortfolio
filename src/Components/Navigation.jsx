import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/style.css';

const Navigation = () => {
  return (
    <nav className="navigation container">
      <div id="nav-name">
        <NavLink className="link" to="/">Palak Batra</NavLink>
      </div>
      <ul className="nav-items">
        <li className="list-item-inline">
          <NavLink
            className={({ isActive }) => (isActive ? "link link-active" : "link")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="list-item-inline">
          <NavLink
            className={({ isActive }) => (isActive ? "link link-active" : "link")}
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li className="list-item-inline">
          <NavLink
            className={({ isActive }) => (isActive ? "link link-active" : "link")}
            to="/Workexperience"
          >
            Work Experience
          </NavLink>
        </li>
        <li className="list-item-inline">
          <NavLink
            className={({ isActive }) => (isActive ? "link link-active" : "link")}
            to="/blog"
          >
            Blogs
          </NavLink>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navigation;
