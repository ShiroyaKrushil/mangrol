import React from "react";
import { Link } from "react-router-dom";

const Driverattendancelist = () => {
  return (
    <div className="container-">
      <div className="row">
        <h2 className="mb-4">DriverAttendance</h2>
        <div className="col addcompany-link ">
          <Link to="/adddriverattendance">Add</Link>
        </div>
        <table class="table mt-5">
          <thead
            style={{
              background: "#f8fafc",
              boxShadow: "0px 0px 2px 0px black",
            }}
          >
            <tr className="text-center  fs-5">
              <th scope="col">Date</th>
              <th scope="col">PunchInTime</th>
              <th scope="col">PunchOutTime</th>
              <th scope="col">TotalWorkingHours</th>
              <th scope="col">Driver</th>
              <th scope="col">Company </th>
              <th scope="col">Status</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center fs-6">
              <td>20/02/2023</td>
              <td>10:30</td>
              <td>11:00</td>
              <td>15</td>
              <td>ajay</td>
              <td>prolink</td>
              <td>Active</td>
              <td>
                <Link to="/viewdriverattendance">
                  <i class="fa-sharp fa-solid fa-eye text-black"></i>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Driverattendancelist;
