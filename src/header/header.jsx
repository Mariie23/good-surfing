import React from "react";
import "./header.css";
import logo from "./logo.svg";
import message from "./message.svg";
import favorite from "./favorite.svg";
import avatar from "./avatar.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="language">
              <p>RU</p>
              <div className="rectangle"></div>
            </div>
          </div>
          <div className="header__right">
            <div className="icons">
              <a href="/">
                <img src={message} alt="message" />
              </a>
              <a href="/">
                <img src={favorite} alt="favorite" />
              </a>
            </div>
            <div className="login">
              <div className="login__name">Владислав</div>
              <img className="login__avatar" src={avatar} alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
