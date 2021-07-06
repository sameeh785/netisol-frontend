import React from "react";
import { Link } from "react-router-dom";
const EmployeNav = () => {
  return (
    <nav>
      <ul className="nav flex-column pt-3">
        <li className="nav-item">
          <Link to="/admin/dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/create/product" className="nav-link">
            Create Product
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/view/products" className="nav-link">
            View Products
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/create/category" className="nav-link">
            Create Category
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/view/categories" className="nav-link">
            View Categories
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default EmployeNav;
