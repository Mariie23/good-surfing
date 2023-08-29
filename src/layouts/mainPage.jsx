import React, { useState } from "react";
import Sidedar from "../sidebar";
import TeamPage from "../pages/teamPage";
import { Routes, Route } from "react-router-dom";

const MainPage = () => {
  const [sidebarActive, setSidebarActive] = useState(true);
  const handleToggleSidebar = () => {
    setSidebarActive((prevState) => !prevState);
    console.log(sidebarActive);
  };
  return (
    <div className="container">
      <div
        className={
          "wrapper" + (sidebarActive ? "" : " wrapper--without-sidebar")
        }
      >
        <Sidedar
          isVisible={sidebarActive}
          onToggleSidebar={handleToggleSidebar}
        />
        <Routes>
          <Route
            path="/"
            element={<h1>Перейдите на страницу "Организация"</h1>}
          />
          <Route path="/team" element={<TeamPage />} />
          <Route
            path="/offers"
            element={<h1>Перейдите на страницу "Организация"</h1>}
          />
          <Route
            path="/requests"
            element={<h1>Перейдите на страницу "Организация"</h1>}
          />
          <Route
            path="/calendar"
            element={<h1>Перейдите на страницу "Организация"</h1>}
          />
        </Routes>
      </div>
    </div>
  );
};

export default MainPage;
