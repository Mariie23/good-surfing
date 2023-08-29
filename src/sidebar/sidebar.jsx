import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import calendar from "./calendar.svg";
import home from "./home.svg";
import organization from "./organization.svg";
import requests from "./requests.svg";
import offers from "./offers.svg";
import arrowRight from "./arrow-right.svg";
import arrowLeft from "./arrow-left.svg";

const NavItem = ({ title, icon, path }) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? "active " : "") + "nav__item"}
      to={path}
    >
      <img src={icon} alt="" />
      <span>{title}</span>
    </NavLink>
  );
};

const Sidedar = ({ isVisible, onToggleSidebar }) => {
  const navItems = [
    { title: "Рабочий стол", icon: home, path: "/" },
    { title: "Вакансии", icon: offers, path: "/offers" },
    { title: "Заявки", icon: requests, path: "/requests" },
    { title: "Календарь", icon: calendar, path: "/calendar" },
    { title: "Организация", icon: organization, path: "/team" },
  ];
  return (
    <div className={"sidebar" + (isVisible ? "" : " sidebar--invisible")}>
      <button className="sidebar__btn" onClick={onToggleSidebar}>
        <img src={isVisible ? arrowLeft : arrowRight} alt="" />
      </button>
      {isVisible && (
        <nav className="nav">
          {navItems.map((item) => (
            <NavItem
              key={item.title}
              title={item.title}
              icon={item.icon}
              path={item.path}
            />
          ))}
        </nav>
      )}
    </div>
  );
};

export default Sidedar;
