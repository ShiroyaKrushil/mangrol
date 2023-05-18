import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="container d-flex justify-content-center" style={{marginTop:'200px'}}>
      <div className="row">
        <div className="col-md-6">
          <img src={require('../../../assets/images/signup.jpg')} className="img-fluid" alt="" width={500}/>
        </div>
        <div className="col-md-6  bg-light">
          <form className="p-3 mt-5 ">
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
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Login
            </button>
           <p className="mt-4">  <Link to='/signup'>Sign Up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
