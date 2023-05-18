import React from "react";
import { Link } from "react-router-dom";

const Advancepaymentlist = () => {
  return (
    <div>
      <div className="container-">
        <div className="row">
          <h2 className="mb-4">AdvancePayment</h2>
          <div className="col addcompany-link ">
            <Link to="/addadvancepayment">Add</Link>
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
                <th scope="col">Customer</th>
                <th scope="col">Driver</th>
                <th scope="col">Company</th>
                <th scope="col">Amount</th>
                <th scope="col">Notes </th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center fs-6">
                <td>20/02/2023</td>
                <td>jay</td>
                <td>ajay</td>
                <td>prolink</td>
                <td>10000</td>
                <td>hi</td>
                <td>
                  <Link to="/viewadvancepayment">
                    <i class="fa-sharp fa-solid fa-eye text-black"></i>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Advancepaymentlist;
