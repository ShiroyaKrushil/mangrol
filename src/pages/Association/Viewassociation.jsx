import React, { useEffect, useState } from "react";
import Button from "../../Components/Button";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import { api } from "../../helper/api";
import { TfiCheckBox } from "react-icons/tfi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Viewassociation = () => {
  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>View Business Type</h2>
        </div>
        <div className="col-6">
          <Button
            name="Edit"
            link={`/editbusinesstype/${parms.id}`}
            icon={<i class="fa-regular fa-pen-to-square p-1"></i>}
            style={{ marginLeft: "20px" }}
          />
          <Button
            name="Back"
            link="/businesstypelist"
            icon={<i class="fa-solid fa-arrow-left p-1"></i>}
          />
        </div>
        <div className="container-fluid" style={{ marginTop: "60px" }}>
          <div className="row">
            <div className="row d-flex justify-content-center">
              <div className="col-md-3 col-sm-4 py-4 m-3 box  text-center">
                <table class="table table-borderless">
                  <tbody className="fs-5">
                    <tr>
                      <td>Business Type</td>
                      <td>:</td>
                      <td>{businesstype.name}</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>:</td>
                      <td>
                        {businesstype.status === true ? (
                          <TfiCheckBox className="text-lg font-extrabold" />
                        ) : (
                          <MdCheckBoxOutlineBlank />
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Viewassociation;