import React from "react";
import avatar from "./avatar.jpg";
import deleteIcon from "./delete.svg";
import "./userItem.css";

const UserItem = ({ id, name, email, city, isAdded, onSelect, onDelete }) => {
  return (
    <div className="user-item" onClick={() => onSelect(email)}>
      <img className="user-item__avatar" src={avatar} alt="" />
      <div className="user-item__info">
        <p className="user-item__email">{email}</p>
        <p className="user-item__name">{name}</p>
        <p className="user-item__city">{city}</p>
        {isAdded && (
          <button
            className="user-item__delete"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(id);
            }}
          >
            <img src={deleteIcon} alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default UserItem;
