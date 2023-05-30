import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navleft = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload(false);
  };

  const user = localStorage.getItem("token")

  return (
    <div>
      <div className="container">
        <div className="row">
          <div class="dropdown-toggle-split">
            <i
              className="fa-solid fa-user fs-5 p-3 "
              style={{ marginLeft: "200px", color: "white", cursor: "pointer" }}
              data-toggle="dropdown"
              id="dropdownMenuButton"
            ></i>
            <div class="dropdown-menu p-0" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#" onClick={logout}>
                LogOut
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col mt-5">
            <img
              src={require("../assets/images/teacher-2.jpg")}
              className="p-img img-fluid"
            />
            <div className="row mt-3">
              <h5 className="text-center sidebar-name">kush</h5>
              <h6 className="text-center sidebar-email">{user}</h6>
            </div>
          </div>
        </div>
        <div className="row mt-5" style={{ overflowX: "hidden" }}>
          <p className="m-2 d-name">DASHBOARDS</p>
          <div className="sidebar-link">
            <ul>
              <li className="link">
                <Link to="/">Dashboard</Link>
              </li>
              <li className="link">
                <Link to="/memberlist">Member</Link>
              </li>
              <li className="link">
                <Link to="/districtlist">District</Link>
              </li>
              <li className="link">
                <Link to="/talukalist">Taluka</Link>
              </li>
              <li className="link">
                <Link to="/zonelist">Zone</Link>
              </li>
              <li className="link">
                <Link to="/businesstypelist">Business Type</Link>
              </li>
              <li className="link">
                <Link to="/powersupplylist">Power Supply</Link>
              </li>
              <li className="link">
                <Link to="/associationlist">Association</Link>
              </li>
              <li className="link">
                <Link to="/userlist">User</Link>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navleft;
