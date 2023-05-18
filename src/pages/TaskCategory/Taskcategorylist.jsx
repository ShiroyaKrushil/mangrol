import React from "react";
import { Link } from "react-router-dom";

const Taskcategorylist = () => {
  return (
    <div className="container-">
      <div className="row">
        <h2 className="mb-4">TaskCategory</h2>
        <div className="col addcompany-link ">
          <Link to="/addtaskcategory">Add</Link>
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
              <th scope="col">Color</th>
              <th scope="col">Company</th>
              <th scope="col">Status</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center fs-6">
              <td>jay</td>
              <td>red</td>
              <td>prolink</td>
              <td>Active</td>
              <td>
                <Link to="/viewtaskcategory">
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

export default Taskcategorylist;
