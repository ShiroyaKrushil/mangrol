import React from "react";
import { Link } from "react-router-dom";

const Driverlist = () => {
  return (
    <div className="container- px-5 mt-5">
      <div className="row">
        <div className="col-6">
          <h2 className="mb-4">Driver</h2>
        </div>
        <div className="col-6 addcompany-link">
          <Link
            to="/adddriver"
            className="px-4 py-2 rounded-5 bg-primary float-end"
          >
            <i class="fa-solid fa-plus"></i> Add
          </Link>
        </div>
      </div>
      <div className="row">
        <table class="table mt-5">
          <thead>
            <tr className="text-center  fs-6">
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Vehicle</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">BirthDate</th>
              <th scope="col">DrivingLicenseNo </th>
              <th scope="col">AadharNo</th>
              <th scope="col">Status</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center fs-6">
              <td>Meera</td>
              <td>8320066228</td>
              <td>Car</td>
              <td>meera@gmail.com</td>
              <td>Femail</td>
              <td>14/02/2003</td>
              <td>csdv545515</td>
              <td>730437606462</td>
              <td>Active</td>
              <td>
                <Link to="/viewdriver">
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

export default Driverlist;
