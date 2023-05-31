import React, { useEffect, useState } from "react";
import Button from "../../Components/Button";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import { api } from "../../helper/api";
import { RiCloseCircleFill } from "react-icons/ri";
import { HiCheckCircle } from "react-icons/hi";

const View = () => {
  const parms = useParams();
  const [taluka, setTaluka] = useState([]);
  const navigate = useNavigate();

  const deletedistrict = async () => {
    const data = {
      _id: parms.id,
    };

    let response = await api("master/taluka/delete", data);
    if (response && response.status === 200) {
      navigate("/talukalist");
    } else {
      alert("error");
    }
  };

  const fetchdata = async () => {
    let data = {
      _id: parms.id,
    };

    const response = await api("master/taluka/view", data);

    if (response && response.status === 200) {
      setTaluka(response.data.data);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [parms.id]);

  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>View Taluka</h2>
        </div>
        <div className="col-6">
          <Button
            name="Edit"
            link={`/talukaedit/${parms.id}`}
            icon={<i class="fa-regular fa-pen-to-square p-1"></i>}
            style={{ marginLeft: "20px" }}
          />
          <Button
            name="Back"
            link="/talukalist"
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
                      <td>Taluka</td>
                      <td>:</td>
                      <td>{taluka.name}</td>
                    </tr>
                    <tr>
                      <td>District</td>
                      <td>:</td>
                      <td>{taluka.district?.name}</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>:</td>
                      <td>
                        {taluka.status === true ? (
                          <HiCheckCircle
                            className="focus:outline-none text-green-700 text-lg"
                            style={{ color: "green" }}
                          />
                        ) : (
                          <RiCloseCircleFill
                            className="focus:outline-none text-red-700 text-lg"
                            style={{ color: "red" }}
                          />
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Footer delete={deletedistrict} />
      </div>
    </div>
  );
};

export default View;
