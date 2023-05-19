import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

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
    <div className="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>Vehicle List</h2>
        </div>
        <div className="col-6">
          <Button
            name="Add"
            icon={<i class="fa-solid fa-plus p-1"></i>}
            link="/addvehicle"
            className="float-end"
          />
        </div>
      </div>

      <div className="row p-4">
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
              <th scope="col">
                Vehicle No
                <i
                  className="fa-solid fa-arrow-up"
                  style={{ paddingLeft: "3px" }}
                ></i>
              </th>
              <th scope="col">
                Company
                <i
                  className="fa-solid fa-arrow-up"
                  style={{ paddingLeft: "3px" }}
                ></i>
              </th>
              <th scope="col">
                Status
                <i
                  className="fa-solid fa-arrow-up"
                  style={{ paddingLeft: "3px" }}
                ></i>
              </th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <>
                  <tr className="text-center fs-6">
                    <td>{item.Name}</td>
                    <td>{item.VehicleNo}</td>
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
