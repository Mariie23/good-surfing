import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import UserList from "../usersComponents/userList/userList";
import UserForm from "../usersComponents/userForm/userForm";
import findUser from "../utils/findUser";

const TeamPage = () => {
  const [email, setEmail] = useState("");
  const [allUsers, setAllUsers] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const filteredUsers = email
    ? allUsers.filter(
        (user) => user.email.toLowerCase().indexOf(email.toLowerCase()) !== -1
      )
    : allUsers;

  const handleSelectUser = (email) => setEmail(email);
  const handleDeleteUser = (id) => {
    const user = allUsers.find((item) => item.id === id);
    setAllUsers((prevState) => [
      ...prevState.filter((user) => user.id !== id),
      { ...user, isAdded: false },
    ]);
  };
  const handleChangeEmail = (value) => {
    setEmail(value);
  };
  const handleAddUser = (e) => {
    e.preventDefault();
    const user = findUser(email.toLowerCase(), "email", allUsers);
    if (user.isAdded) {
      setEmail("");
      return;
    }
    setAllUsers((prevState) => [
      ...prevState.filter((item) => item.name !== user.name),
      { ...user, isAdded: true },
    ]);
    setEmail("");
  };
  return (
    <div>
      <h1>Команда организации</h1>
      <p className="">
        Владельцы команд могут добавлять участников в команду своей организации,
        добавляя их адреса электронной почты. У них должна быть учетная запись
        на сайте.
      </p>
      <UserForm
        email={email}
        users={filteredUsers}
        onChange={handleChangeEmail}
        onAddUser={handleAddUser}
      />
      <UserList
        users={filteredUsers}
        onSelect={handleSelectUser}
        onDelete={handleDeleteUser}
      />
      <button
        className="btn"
        onClick={() => {
          const addedUsers = allUsers.filter((user) => user.isAdded);
          console.log("Добавленные пользователи: ", addedUsers);
        }}
      >
        Сохранить
      </button>
    </div>
  );
};

export default TeamPage;
