import React from "react";
import { Link } from "react-router-dom";
const AdminNav = () => {
  return (
    <nav>
      <ul className="nav flex-column pt-3">
        <li className="nav-item">
          <Link to="/admin/dashboard" className="nav-link">
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/create/employe" className="nav-link">
            Create Employe
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/view/employes" className="nav-link">
            View Employes
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/admin/category" className="nav-link">
            Category
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/user/password" className="nav-link">
            Password
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNav;
