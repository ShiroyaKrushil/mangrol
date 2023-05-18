import React from "react";
import { Link } from "react-router-dom";

const VehicleList = () => {
  const data = [
    { Name: "bay", VehicleNo: "a", Company: "prolink", Status: "Active" },
    { Name: "zay", VehicleNo: "b", Company: "prolink", Status: "Active" },
    { Name: "kay", VehicleNo: "c", Company: "prolink", Status: "Active" },
    { Name: "day", VehicleNo: "d", Company: "prolink", Status: "Active" },
    { Name: "eay", VehicleNo: "e", Company: "prolink", Status: "Active" },
    { Name: "fay", VehicleNo: "f", Company: "prolink", Status: "Active" },
    { Name: "gay", VehicleNo: "g", Company: "prolink", Status: "Active" },
  ];

  return (
    <div className="container- px-5 mt-5">
      <div className="row">
        <div className="col-6">
          <h2 className="mb-4">Vehicle</h2>
        </div>
        <div className="col-6 addcompany-link">
          <Link
            to="/addvehicle"
            className="px-4 py-2 rounded-5 bg-primary float-end"
          >
            <i class="fa-solid fa-plus"></i> Add
          </Link>
        </div>
      </div>
      <div className="row flex flex-col flex-auto sm:mb-18 overflow-hidden sm:overflow-y-auto ng-tns-c142-6">
        <table class="table mt-5">
          <thead>
            <tr className="text-center  fs-6">
              <th scope="col">
                Name
                <i
                  className="fa-solid fa-arrow-up"
                  style={{ paddingLeft: "3px" }}
                ></i>
              </th>
              <th scope="col">VehicleNo</th>
              <th scope="col">Company</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <>
                  <tr className="text-center fs-6">
                    <td>{item.Name}</td>
                    <td> {item.VehicleNo} </td>
                    <td>{item.Company}</td>
                    <td>{item.Status}</td>
                    <td>
                      <Link to="/viewvehicle">
                        <i class="fa-sharp fa-solid fa-eye text-black"></i>
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <nav aria-label="Page navigation example ">
            <ul class="pagination d-flex justify-content-center">
              <li class="page-item">
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
      </div>
    </div>
  );
};

export default VehicleList;
