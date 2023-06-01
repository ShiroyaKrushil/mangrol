import React, { useEffect, useState } from "react";
import Button from "../../Components/Button";
import { api } from "../../helper/api";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../Components/Footer";
import { RiCloseCircleFill } from "react-icons/ri";
import { HiCheckCircle } from "react-icons/hi";

const Viewsite = () => {
  const [zone, setZone] = useState([]);
  const parms = useParams();
  const navigate = useNavigate();
  let [Page, setPage] = useState("");

  const deletezone = async () => {
    const data = {
      _id: parms.id,
    };

    let response = await api("master/zone/delete", data);
    if (response && response.status === 200) {
      navigate("/zonelist");
    } else {
      alert("error");
    }
  };

  const fetchdata = async (id) => {
    let data = {
      _id: parms.id,
    };

    const response = await api("master/zone/view", data);

    if (response && response.status === 200) {
      setZone(response.data.data);
    }
  };
  const back = () => {
    navigate("/zonelist" + Page);
  };
  useEffect(() => {
    let page = localStorage.getItem("currentPage");
    setPage(page);
    fetchdata();
  }, []);

  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>View Zone</h2>
        </div>
        <div className="col-6">
          <Button
            name="Edit"
            link={`/editzone/${parms.id}`}
            icon={<i class="fa-regular fa-pen-to-square p-1"></i>}
            style={{ marginLeft: "20px" }}
          />
          <Button
            name="Back"
            onclick={back}
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
                      <td>Zone</td>
                      <td>:</td>
                      <td>{zone.name}</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>:</td>
                      <td>
                        {zone.status === true ? (
                          <HiCheckCircle
                            style={{ color: "green" }}
                            className="focus:outline-none text-green-700 text-lg"
                          />
                        ) : (
                          <RiCloseCircleFill
                            style={{ color: "red" }}
                            className="focus:outline-none text-red-700 text-lg"
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
        <Footer delete={deletezone} />
      </div>
    </div>
  );
};

export default Viewsite;
