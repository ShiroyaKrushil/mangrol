import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSitemap } from "react-icons/bi";
const Navleft = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  const user = localStorage.getItem("token");
  const email = localStorage.getItem("email");

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
              <h6 className="text-center sidebar-email">{email}</h6>
            </div>
          </div>
        </div>
        <div className="row mt-5" style={{ overflowX: "hidden" }}>
          <p className="m-2 d-name">DASHBOARDS</p>
          <div className="sidebar-link">
            <ul>
              <li className="link">
                <Link to="/">
                  <i class="fa-solid fa-gauge px-3"></i>Dashboard
                </Link>
              </li>
              <li className="link">
                <Link to="/memberlist">
                  <i class="fa-sharp fa-solid fa-user-group px-3"></i>Member
                </Link>
              </li>
              <li className="link">
                <Link to="/districtlist">
                  <i class="fa-sharp fa-solid fa-shield-halved px-3"></i>
                  District
                </Link>
              </li>
              <li className="link">
                <Link to="/talukalist">
                  <i class="fa-solid fa-shield px-3"></i>Taluka
                </Link>
              </li>
              <li className="link">
                <Link to="/zonelist">
                  <i class="fa-solid fa-location-crosshairs px-3"></i>Zone
                </Link>
              </li>
              <li className="link">
                <Link to="/businesstypelist">
                  <i class="fa-solid fa-briefcase px-3"></i>Business Type
                </Link>
              </li>
              <li className="link">
                <Link to="/powersupplylist">
                  <i class="fa-solid fa-power-off px-3"></i>Power Supply
                </Link>
              </li>
              <li className="link">
                <Link to="/associationlist">
                  <i class="fa-solid fa-network-wired px-3"></i>Association
                </Link>
              </li>
              <li className="link">
                <Link to="/userlist">
                  <i class="fa-solid fa-user px-3"></i>User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navleft;
