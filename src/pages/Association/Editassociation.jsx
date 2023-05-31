import React from "react";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer_two";
import { useState } from "react";
import { api } from "../../helper/api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Editassociation = () => {
  const association = useParams();

  const [name, setName] = useState("");
  const [email_id, setEmail_id] = useState("");
  const [phone_no, setPhone_no] = useState("");
  const [address_line_1, setAddress_line_1] = useState("");
  const [address_line_2, setAddress_line_2] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [taluka, setTaluka] = useState("");
  const [district, setDistrict] = useState("");
  const [talukaData, setTalukaData] = useState([]);
  const [districtData, setDistrictData] = useState([]);


  const fetchdata = async () => {
    let data = {
        _id: association.id,
        master_request: 1
    }
    const response = await api('association/view', data);

    if (response && response.status === 200) {
        setName(response.data.data.name);
        setEmail_id(response.data.data.email_id);
        setPhone_no(response.data.data.phone_no);
        setAddress_line_1(response.data.data.address?.address_line_1);
        setAddress_line_2(response.data.data.address?.address_line_2);
        setPincode(response.data.data.address?.pincode);
        setCity(response.data.data.address?.city);
        setTaluka(response.data.data?.taluka?.name);
        setDistrict(response.data.data?.district?.name);
        setDistrictData(response.data.master?.district);
        setTalukaData(response.data.master?.taluka);
    }

};

const saveHandler = async () => {
  let address = {
      address_line_1: address_line_1,
      address_line_2: address_line_2,
      pincode: pincode,
      city: city,
      taluka: taluka,
      district: district,
  }
  let data = {
      _id: association.id,
      name: name,
      email_id: email_id,
      phone_no: phone_no,
      address: address
  }
  // const { error } = validate(data);
  // if (error) return showError(error.details);

  const response = await api('association/edit', data);

  if (response && response.status === 200) {
      navigate(`/associationlist/${association._id}`);
  }

}

useEffect(()=>{
  fetchdata();
},[])
  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>Edit Association</h2>
        </div>
        <div className="col-6">
          <Button
            name="Back"
            icon={<i class="fa-solid fa-arrow-left"></i>}
            link="/associationlist"
          />
        </div>
      </div>
      <div class="row p-4 mt-5 d-flex justify-content-center align-items-center">
        <form className="p-4 mb-5">
          <div class="row">
            <div class="col-md-4">
              <label for="formGroupExampleInput" className="fs-6">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                autoFocus
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div class="col-md-4">
              <label for="formGroupExampleInput" className="fs-6">
                Email ID
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                onChange={(e) => setEmail_id(e.target.value)}
                value={email_id}
              />
            </div>
            <div class="col-md-4">
              <label for="formGroupExampleInput" className="fs-6">
                Phone No.
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                onChange={(e) => setPhone_no(e.target.value)}
                value={phone_no}
              />
            </div>
          </div>
          <div className="row mt-4">
            <h3>Address</h3>
            <div className="col-md-12">
              <label for="formGroupExampleInput" className="fs-6">
                Address_line_1
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="1"
                className="form-control"
                onChange={(e)=>setAddress_line_1(e.target.value)}
                value={address_line_1}
              ></textarea>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <label for="formGroupExampleInput" className="fs-6">
                Address_line_2
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="1"
                className="form-control"
                onChange={(e)=>setAddress_line_2(e.target.value)}
                value={address_line_2}
              ></textarea>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <label for="formGroupExampleInput" className="fs-6">
                Pincode
              </label>
              <input
                type="text"
                id=""
                className="form-control"
                onChange={(e) => setPincode(e.target.value)}
                value={pincode}
              />
            </div>
            <div className="col-md-6">
              <label for="formGroupExampleInput" className="fs-6">
                City
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <label for="formGroupExampleInput" className="fs-6">
                Taluka
              </label>
              <select name="" id="" className="form-select" onChange={(e)=>setTaluka(e.target.value)} value={taluka}>
                <option value="" disabled>
                  Select Taluka
                </option>
                <option value="" >
                  Select Taluka
                </option>
              </select>
            </div>
            <div className="col-md-6">
              <label for="formGroupExampleInput" className="fs-6">
                District
              </label>
              <select name="" id="" className="form-select" onChange={(e)=>setDistrict(e.target.value)} value={district}>
                <option value="" disabled>
                  Select District
                </option>
              </select>
            </div>
          </div>
        </form>
        <div style={{ marginTop: "-200px" }}>
          <Footer add={saveHandler}/>
        </div>
      </div>
    </div>
  );
};

export default Editassociation;
