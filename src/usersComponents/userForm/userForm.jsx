import React from "react";
import plus from "./plus.svg";
import findUser from "../../utils/findUser";
import "./userForm.css";
const UserForm = ({ email, users, onAddUser, onChange }) => {
  return (
    <form className="user-form">
      <div className="form-control">
        <label htmlFor="email">Введите e-mail участника</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={({ target }) => onChange(target.value)}
        />
      </div>
      <button
        className="btn"
        onClick={onAddUser}
        disabled={!(email && findUser(email.toLowerCase(), "email", users))}
      >
        <img src={plus} alt="" />
        <span>Добавить участника</span>
      </button>
    </form>
  );
};

export default UserForm;
