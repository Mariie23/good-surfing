import React from "react";
import UserItem from "../userItem/userItem";
import "./userList.css";

const UserList = ({ users, onSelect, onDelete }) => {
  return (
    <div className={"user-list" + (users.length ? "" : " user-list--empty")}>
      {users.length ? (
        users.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            city={user.address.city}
            isAdded={user.isAdded}
            onSelect={onSelect}
            onDelete={onDelete}
          />
        ))
      ) : (
        <span>Пользователи с данным email не найдены</span>
      )}
    </div>
  );
};

export default UserList;
