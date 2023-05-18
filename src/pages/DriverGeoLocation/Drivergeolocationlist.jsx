import React from "react";
import { Link } from "react-router-dom";

const Drivergeolocationlist = () => {
  return (
    <div className="container-">
      <div className="row">
        <h2 className="mb-4">DriverGeoLocation</h2>
        <div className="col addcompany-link ">
          <Link to="/adddrivergeolocation">Add</Link>
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
              <th scope="col">Driver</th>
              <th scope="col">Lat</th>
              <th scope="col">Long</th>
              <th scope="col">Address</th>
              <th scope="col">Company </th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center fs-6">
              <td>20/02/2023</td>
              <td>jay</td>
              <td>654545</td>
              <td>5664</td>
              <td>surat</td>
              <td>prolink</td>
              <td>
                <Link to="/viewdrivergeolocation">
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

export default Drivergeolocationlist;
