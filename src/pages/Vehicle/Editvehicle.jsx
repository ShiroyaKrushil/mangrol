import React from "react";
import Button from "../../Components/Button";

const Editvehicle = () => {
  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>Edit Vehicle</h2>
        </div>
        <div className="col-6">
          <Button
            name="Back"
            icon={<i class="fa-solid fa-arrow-left"></i>}
            link="/viewvehicle"
          />
        </div>
      </div>
      <div class="row p-4 mt-5">
        <form className="p-4 mb-5 ">
          <div class="row">
            <div class="col- col-md-6 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6">
                Name
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="col- col-md-6 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0 "
              >
                Vehicle No
              </label>
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="row mt-4">
            <div class="col- col-md-6 col-sm-12">
              <label for="formGroupExampleInput" className="fs-6">
                Company
              </label>
              <input type="text" class="form-control" />
            </div>
            <div class="col- col-md-6 col-sm-12">
              <label
                for="formGroupExampleInput"
                className="fs-6 mt-sm-4 mt-md-0 "
              >
                Status
              </label>
              <select name="" id="" className="form-select">
                <option value="" selected>
                  enable
                </option>
                <option value="">disable</option>
              </select>
            </div>
          </div>
        </form>
        <div className="row mt-3 float-start">
          <div className="col d-flex">
            <div className="p-1">
              <Button name="Update" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editvehicle;
