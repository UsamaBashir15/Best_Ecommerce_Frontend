import React from "react";
import { Route, Routes } from "react-router-dom";
import { currentAuth } from "../auth/Current_Auth";

const ProtectedRoutes = ({ path, redirect, Component }) => {
  const auth = currentAuth();
  if (auth) {
    return (
      <Routes>
        <Route path={redirect} element={<Component />}></Route>
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path={path} element={<Component />}></Route>
      </Routes>
    );
  }
};

export default ProtectedRoutes;
