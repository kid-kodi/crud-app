import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineUser,
  AiOutlineSolution,
} from "react-icons/ai";

const Navigation = () => {
  return (
    <nav className="bg-gray-300 w-1/4 flex flex-col px-4">
      <h1 className="text-3xl p-2 mb-3 font-semibold italic">CRUD APP</h1>
      <Link className="navlink" to="/">
        <AiOutlineHome className="w-6 h-6" />
        <span> Dashboard</span>
      </Link>
      <Link className="navlink" to="users">
        <AiOutlineTeam className="w-6 h-6" />
        <span>Etudiants</span>
      </Link>
      <Link className="navlink" to="users">
        <AiOutlineSolution className="w-6 h-6" />
        <span>Staff</span>
      </Link>
      <Link className="navlink" to="users">
        <AiOutlineUser className="w-6 h-6" />
        <span>Utilisateurs</span>
      </Link>
    </nav>
  );
};

export default Navigation;
