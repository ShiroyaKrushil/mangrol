import React, { useEffect, useState } from "react";
import Button from "../../Components/Button";
import { api } from "../../helper/api";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../Components/Footer";
import { RiCloseCircleFill } from "react-icons/ri";
import { HiCheckCircle } from "react-icons/hi";

const Viewvehicle = () => {
  const [district, setDistrict] = useState([]);
  const parms = useParams();
  let [Page,setPage] = useState('');
  const navigate = useNavigate();

  const deletedistrict = async () => {
    const data = {
      _id: parms.id,
    };

    let response = await api("master/district/delete", data);
    if (response && response.status === 200) {
      navigate("/districtlist");
    } else {
      alert("error");
    }
  };

  const fetchdata = async () => {
    let data = {
      _id: parms.id,
    };

    const response = await api("master/district/view", data);

    if (response && response.status === 200) {
      setDistrict(response.data.data);
    }
  };

  useEffect(() => {

    let page = localStorage.getItem('currentPage')
    setPage(page)
    fetchdata();
  }, []);

  const back = () => {
    navigate('/districtlist'+ Page);
  };

  return (
    <>
      <div class="container- px-3 mt-5">
        <div className="row p-4">
          <div className="col-6">
            <h2>View District</h2>
          </div>
          <div className="col-6">
            <Button
              name="Edit"
              link={`/editdistrict/${parms.id}`}
              icon={<i class="fa-regular fa-pen-to-square p-1"></i>}
              style={{ marginLeft: "20px" }}
            />
            <Button
              name="Back"
              // link='/districtlist'
              icon={<i class="fa-solid fa-arrow-left p-1"></i>}
              onclick={back}
            />
          </div>
          <div className="container-fluid" style={{ marginTop: "60px" }}>
            <div className="row">
              <div className="row d-flex justify-content-center">
                <div className="col-md-3 col-sm-4 py-4 m-3 box  text-center">
                  <table class="table table-borderless">
                    <tbody className="fs-5">
                      <tr>
                        <td>District</td>
                        <td>:</td>
                        <td>{district.name}</td>
                      </tr>
                      <tr>
                        <td>Status</td>
                        <td>:</td>
                        <td>
                          {district.status === true ? (
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
    </>
  );
};

export default Viewvehicle;
