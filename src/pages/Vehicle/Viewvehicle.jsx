import React from "react";
import Button from "../../Components/Button";

const Viewvehicle = () => {
  return (
    <>
      <div class="container- px-3 mt-5">
        <div className="row p-4">
          <div className="col-6">
            <h2>Vehicle Profile</h2>
          </div>
          <div className="col-6">
            <Button
              name="Back"
              link="/vehicle"
              icon={<i class="fa-solid fa-arrow-left p-1"></i>}
            />
          </div>
        </div>
        <div className="view d-flex justify-content-center">
          <div className="viewRight">
            <div className="d-sm-flex justify-content-evenly mb-4 sub_section"></div>
            <div className="view sub_section">
              <div className="addLeft">
                <p>Name</p>
                <p>vehicleNo</p>
                <p>company</p>
                <p>Status</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-4">
          <div className="col d-flex">
            <div className="p-1">
              <Button
                name="Edit"
                link="/editvehicle"
                icon={<i class="fa-regular fa-pen-to-square p-1"></i>}
              />
            </div>
            <div className="p-1">
              <Button
                Actionbtn="Delete"
                icon={<i class="fa-sharp fa-solid fa-trash p-1"></i>}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewvehicle;
