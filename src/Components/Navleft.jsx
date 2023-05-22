import React from "react";
import { Link } from "react-router-dom";

const Navleft = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div class="dropdown-toggle-split">
            <i
              className="fa-solid fa-user fs-5 p-3 "
              style={{ marginLeft: "200px", color: "white",cursor:'pointer' }}
              data-toggle="dropdown"
              id="dropdownMenuButton"
            ></i>
            <div class="dropdown-menu p-0" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
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
              <h5 className="text-center sidebar-name">meera</h5>
              <h6 className="text-center sidebar-email">meera@gmail.com</h6>
            </div>
          </div>
        </div>
        <div className="row mt-5" style={{ overflowX: "hidden" }}>
          <p className="m-2 d-name">DASHBOARDS</p>
          <div className="sidebar-link">
            <ul>
              <li className="link">
                <i class="fa-solid fa-gauge"></i>
                <Link to="/">Dashboard</Link>
              </li>
              <li className="link">
                <i class="fa-solid fa-building"></i>
                <Link to="/company">Company</Link>
              </li>
              <li className="link">
                <i class="fa-solid fa-truck"></i>
                <Link to="/Vehicle">Vehicle</Link>
              </li>
              <li className="link">
                <i class="fa-solid fa-id-card"></i>
                <Link to="/driver">Driver</Link>
              </li>
              <li className="link">
                <i class="fa-solid fa-clipboard-user"></i>
                <Link to="/driverAttendance">DriverAttendance</Link>
              </li>
              <li className="link">
                <i class="fa-solid fa-location-crosshairs"></i>
                <Link to="/driverGeoLocation">DriverGeoLocation</Link>
              </li>
              <li className="link">
                <i class="fa-solid fa-person"></i>
                <Link to="/customer">Customer</Link>
              </li>
              <li className="link">
                <i class="fa-regular fa-credit-card"></i>
                <Link to="/advancePayment">AdvancePayment</Link>
              </li>
              <li className="link">
                <i class="fa-solid fa-person"></i>
                <Link to="/taskCategory">TaskCategory</Link>
              </li>
              <li className="link">
                <i class="fa-solid fa-list-check"></i>
                <Link to="/task">Task</Link>
              </li>
              <li className="link">
                <i class="fa-solid fa-person"></i>
                <Link to="/expenseCategory">ExpenseCategory</Link>
              </li>
              <li className="link">
                <i class="fa-solid fa-person"></i>
                <Link to="/expense">Expense</Link>
              </li>
              <li className="link">
                <i class="fa-solid fa-person"></i>
                <Link to="/site">Site</Link>
              </li>
              <li className="link">
                <i class="fa-solid fa-person"></i>
                <Link to="/leadCategory">LeadCategory</Link>
              </li>
              <li className="link">
                <i class="fa-solid fa-person"></i>
                <Link to="/lead">Lead</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navleft;
