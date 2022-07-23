import React from "react";
import { useParams } from "react-router-dom";
import CardView from "../components/CardView";

const DashboardPage = () => {
  const number = JSON.parse(localStorage.getItem("users"));

  return (
    <div>
      <CardView number={number.length} />
    </div>
  );
};

export default DashboardPage;
