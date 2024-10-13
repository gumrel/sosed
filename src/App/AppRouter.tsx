import React from "react";
import { Route, Routes } from "../../node_modules/react-router-dom/dist/index";
import Home from "../Home/Home";
import Login from "../Login/Login";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
