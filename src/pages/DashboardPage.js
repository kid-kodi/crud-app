import React from "react";
import { useParams } from "react-router-dom";

const DashboardPage = () => {
  const id = useParams().id;
  return <div>DashboardPage</div>;
};

export default DashboardPage;
