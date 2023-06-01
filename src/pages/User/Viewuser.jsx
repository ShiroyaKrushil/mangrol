import React, { useEffect, useState } from "react";
import Button from "../../Components/Button";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import { api } from "../../helper/api";
import { RiCloseCircleFill } from "react-icons/ri";
import { HiCheckCircle } from "react-icons/hi";

const Viewuser = () => {
  const parms = useParams();
  let [user, setUser] = useState([]);
  const navigate = useNavigate();
  let [Page, setPage] = useState("");

  const deleteHandler = async () => {
    const data = {
      _id: parms.id,
    };

    let response = await api("user/remove", data);
    if (response && response.status === 200) {
      navigate("/userlist");
    } else {
      alert("error");
    }
  };

  const fetchdata = async () => {
    let data = {
      _id: parms.id,
    };

    const response = await api("user/view", data);

    if (response && response.status === 200) {
      setUser(response.data.data);
    }
  };
  const back = () => {
    navigate("/userlist" + Page);
  };
  useEffect(() => {
    let page = localStorage.getItem("currentPage");
    setPage(page);
    fetchdata();
  }, [parms.id]);
  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>View User</h2>
        </div>
        <div className="col-6">
          <Button
            name="Back"
            onclick={back}
            icon={<i class="fa-solid fa-arrow-left p-1"></i>}
          />
        </div>
        <div className="container-fluid" style={{ marginTop: "60px" }}>
          <div className="row">
            <div className="row d-flex justify-content-center ">
              <div
                className="col-md-3 col-sm-4 py-4 m-3 box"
                style={{ width: "490px" }}
              >
                <table class="table table-borderless">
                  <tbody className="fs-5">
                    <tr>
                      <td>User Name</td>
                      <td>:</td>
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <td>Email-id</td>
                      <td>:</td>
                      <td>{user.email_id}</td>
                    </tr>
                    <tr>
                      <td>Mobile-no</td>
                      <td>:</td>
                      <td>{user.mobile_no}</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>:</td>
                      <td>
                        {user.status === true ? (
                          <HiCheckCircle style={{ color: "green" }} />
                        ) : (
                          <RiCloseCircleFill style={{ color: "red" }} />
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Footer delete={deleteHandler} />
      </div>
    </div>
  );
};

export default Viewuser;
