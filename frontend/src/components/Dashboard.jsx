import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="flex space-x-4">
        <Link to="/products" className="bg-blue-500 text-white p-2 rounded">
          Products
        </Link>
        <Link to="/orders" className="bg-green-500 text-white p-2 rounded">
          Orders
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;