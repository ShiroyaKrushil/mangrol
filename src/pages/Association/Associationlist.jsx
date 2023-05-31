import React, { useEffect, useState } from "react";
import Button from "../../Components/Button";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../helper/api";

const Associationlist = () => {
  let [association, setAssociation] = useState([]);
  let parms = useParams();

  const fetchdata = async () => {
    let data = {};
    const response = await api("association/view", data);

    if (response && response.status === 200) {
      setAssociation(response?.data?.data);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  console.log(association);
  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>View Association</h2>
        </div>
        <div className="col-6">
          <Button
            name="Edit"
            link={`/editassociation/${parms.id}`}
            icon={<i class="fa-regular fa-pen-to-square p-1"></i>}
            style={{ marginLeft: "20px" }}
          />
        </div>
        <div className="container-fluid" style={{ marginTop: "60px" }}>
          <div className="row">
            <div className="row ">
              <div className="col-md-3 col-sm-4 py-4 m-3 box w-75">
                <table class="table table-borderless">
                  <tbody className="fs-5">
                    <tr>
                      <td className="w-36">Name</td>
                      <td>:</td>
                      <td>{association.name}</td>
                    </tr>
                    <tr>
                      <td className="w-36">Email ID</td>
                      <td>:</td>
                      <td>{association.email_id}</td>
                    </tr>
                    <tr>
                      <td className="w-36">Phone No.</td>
                      <td>:</td>
                      <td>{association.phone_no}</td>
                    </tr>
                    <tr>
                      <td className="w-36" style={{ fontSize: "25px" }}>
                        <b>Address</b>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-36">Address-line-1</td>
                      <td>:</td>
                      <td>{association.address?.address_line_1}</td>
                    </tr>
                    <tr>
                      <td className="w-36">Address-line-2</td>
                      <td>:</td>
                      <td>{association.address?.address_line_2}</td>
                    </tr>
                    <tr>
                      <td className="w-36">Pincode</td>
                      <td>:</td>
                      <td>{association.address?.pincode}</td>
                    </tr>
                    <tr>
                      <td className="w-36">City</td>
                      <td>:</td>
                      <td>{association.address?.city}</td>
                    </tr>
                    <tr>
                      <td className="w-36">Taluka</td>
                      <td>:</td>
                      <td>{association.address?.taluka?.name}</td>
                    </tr>
                    <tr>
                      <td className="w-36">District</td>
                      <td>:</td>
                      <td>{association.address?.district?.name}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Associationlist;
