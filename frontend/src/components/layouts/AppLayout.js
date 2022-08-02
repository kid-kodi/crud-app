import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineUser,
  AiOutlineSolution,
} from "react-icons/ai";
import Navigation from "../Navigation";
const AppLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Navigation />
      <div className="w-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
