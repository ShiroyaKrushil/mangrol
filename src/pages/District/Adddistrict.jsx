import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { api } from "../../helper/api";
import Footer from "../../Components/Footer_two";
import { resetError, showError } from "../../helper/error";
import Joi from "joi";

const Addvehicle = () => {
  const [name, setName] = useState("");
  let [error, setError] = useState({});

  const navigate = useNavigate();

  let districtname = [
    "Ahmedabad",
    "Amreli",
    "Anand",
    "Aravalli",
    "Banaskantha",
    "Bharuch",
    "Bhavnagar",
    "Botad",
    "Chhota Udaipur",
    "Dahod",
    "Dang",
    "Devbhoomi Dwarka",
    "Gandhinagar",
    "Gir Somnath",
    "Jamnagar",
    "Junagadh",
    "Kheda",
    "Kutch",
    "Mahisagar",
    "Mehsana",
    "Morbi",
    "Narmada",
    "Navsari",
    "Panchmahal",
    "Patan",
    "Porbandar",
    "Rajkot",
    "Sabarkantha",
    "Surat",
    "Surendranagar",
    "Tapi",
    "Vadodara",
    "Valsad",
  ];

  const validate = (data) => {
    const schema = Joi.object({
      name: Joi.string().max(100).required().label("Name"),
    });
    return schema.validate(data, { abortEarly: false, allowUnknown: true });
  };

  const saveHandler = async () => {
    resetError();
    let data = {
      name: name,
    };

    const { error } = validate(data);
    if (error) return showError(error.details);

    let response = await api("master/district/add", data);
    console.log(response);
    if (response && response.status === 200) {
      setName('');
    } else {
      
    }
  };

  const canclehandler = () => {
    navigate("/districtlist");
  };

  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>Add District</h2>
        </div>
        <div className="col-6">
          <Button
            name="Back"
            icon={<i class="fa-solid fa-arrow-left"></i>}
            link="/districtlist"
          />
        </div>
      </div>
      <div class="row p-4 mt-5 d-flex justify-content-center align-items-center">
        <form className="p-4 mb-5">
          <div class="row">
            <div class="col-12">
              <label for="formGroupExampleInput" className="fs-6">
                Name
              </label>
              <select
                name=""
                id="name"
                className="form-select"
                onChange={(e) => setName(e.target.value)}
                value={name}
              >
                <option value="" disabled>
                  Select District
                </option>
                {districtname.map((name) => {
                  return <option value={name}>{name}</option>;
                })}
              </select>
              {error?.name && <span className="error">{error["name"]}</span>}
            </div>
          </div>
        </form>
        <Footer add={saveHandler} cancle={canclehandler} />
      </div>
    </div>
  );
};

export default Addvehicle;
