import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {


  const handlesignup =(e)=>{
    e.preventDefault();

  }

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="row ">
        <div className="col-md-7 pt-5">
          <img
            src={require("../../../assets/images/signup.jpg")}
            className="img-fluid"
            alt=""
            width={500}
          />
        </div>
        <div className="col-md-5 bg-light">
          <form className="mt-2 p-3" onSubmit={handlesignup}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                UserName
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Photo
              </label>
              <input
                type="file"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Phone
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleInputPassword1"
                
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-4">
              <label for="exampleInputPassword1" class="form-label">
                CPassword
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Sign Up
            </button>
            <p className="mt-4">  <Link to='/login'>Login Now</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
