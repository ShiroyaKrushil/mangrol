import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Button from "../../Components/Button";
import { api } from "../../helper/api";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { resetError, showError } from "../../helper/error";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validate = (data) => {
    const schema = Joi.object({
      username: Joi.string().max(100).required().label("Name"),
      password: Joi.string().max(8).required().label("Password"),
    });
    return schema.validate(data, { abortEarly: false, allowUnknown: true });
  };

  const login = async () => {
    resetError();

    let data = {
      username: email,
      password: password,
    };

    const { error } = validate(data);
    if (error) return showError(error.details);

    let response = await api("auth/", data);
    console.log(response);
    if (response && response.status === 200) {
      navigate("/dashboard");
      window.location.reload();
      localStorage.setItem('email',email)
    } else {
    }
  };

  

  return (
    <section className="">
      <div
        className="container"
        style={{
          position: "absolute",
          top: " 50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11 ">
            <div className="card text-black " style={{ borderradius: " 25px" }}>
              <div className="card-body  p-md-5">
                <div className="row justify-content-center ">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 mb-5">
                      Login Now
                    </p>

                    <form className="">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" for="form3Example4c">
                            Email
                          </label>
                          <input
                            type="email"
                            id="username"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-5">
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" for="form3Example4cd">
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 ">
                        <Button name="Login" onclick={login} />
                      </div>
                     
                      {/* <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <p>
                          Don`t have an account?
                          <Link
                            to="/"
                            style={{ color: "blue" }}
                            className="fs-6 px-1"
                          >
                            Sign Up
                          </Link>
                        </p>
                      </div> */}
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
