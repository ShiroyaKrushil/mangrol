import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

const Addvehicle = () => {
  const [Name,setName] = useState('');
  const [Vehicleno,setVehicleno] = useState('');
  const [Company,setCompany] = useState('');
  const [Status,setStatus] = useState('');

  const handlename =(e)=>{
    setName(e.target.value);
  }
  const handlevehicleno =(e)=>{
    setVehicleno(e.target.value);
  }
  const handlecompany =(e)=>{
    setCompany(e.target.value);
  }
  const handlestatus =(e)=>{
    setStatus(e.target.value);
  }

  const submit =(e)=>{
      e.preventDefault();
    alert('hii');
      console.log(Name,Vehicleno,Company,Status);
  }

  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>Add Vehicle</h2>
        </div>
        <div className="col-6">
          <Button
            name="Back"
            icon={<i class="fa-solid fa-arrow-left"></i>}
            link="/vehicle"
          />
        </div>
      </div>
      <div class="row p-4 mt-5">
        <form className="p-4 mb-5" >
          <div class="row">
            <div class="col- col-md-6 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6">
                Name
              </label>
              <input type="text" class="form-control" onChange={handlename}/>
            </div>
            <div class="col- col-md-6 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0 "
              >
                Vehicle No
              </label>
              <input type="text" class="form-control" onChange={handlevehicleno}/>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col- col-md-6 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6">
                Company
              </label>
              <input type="text" class="form-control" onChange={handlecompany}/>
            </div>
            <div class="col- col-md-6 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0 "
              >
                Status
              </label>
              <select name="" id="" className="form-select" onChange={handlestatus}>
                <option value="enable" selected>
                  enable
                </option>
                <option value="disable">disable</option>
              </select>
            </div>
          </div>
        </form>
        <div className="row mt-3 float-start">
          <div className="col d-flex">
            <div className="p-1">
              <Button name="Save" btn={submit}/>
            </div>
            <div className="p-1">
              <Button name="Cancle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addvehicle;
