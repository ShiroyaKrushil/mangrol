import React from "react";
import { Link } from "react-router-dom";

const Customerlist = () => {
  return (
    <div className="container-">
      <div className="row">
        <h2 className="mb-4">Customer</h2>
        <div className="col addcompany-link ">
          <Link to="/addcustomer">Add</Link>
        </div>
        <table class="table mt-5">
          <thead
            style={{
              background: "#f8fafc",
              boxShadow: "0px 0px 2px 0px black",
            }}
          >
            <tr className="text-center  fs-5">
              <th scope="col">Name</th>
              <th scope="col">PrimaryMobileNo</th>
              <th scope="col">Email</th>
              <th scope="col">CompanyName</th>
              <th scope="col">BirthDate</th>
              <th scope="col">DrivingLicenseNo </th>
              <th scope="col">company</th>
              <th scope="col">Status</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center fs-6">
              <td>Meera</td>
              <td>8320066228</td>
              <td>meera@gmail.com</td>
              <td>Femail</td>
              <td>14/02/2003</td>
              <td>csdv545515</td>
              <td>730437606462</td>
              <td>Active</td>
              <td>
                <Link to="/viewcustomer">
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

export default Customerlist;
