import React, { useState } from "react";
import Swal from "sweetalert2";

import axios from "axios";
import Lorem from "../components/Lorem";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const ingreso = { email, password };
    console.log(ingreso);
    const response = await axios.post(`/api/usuario/login`, ingreso);

    const mensaje = response.data.mensaje;

    console.log(mensaje);

    if (mensaje === "Bienvenido") {
      const token = response.data.token;
      localStorage.setItem("Token", token);
      window.location.href = "/index";
    } else {
      Swal.fire({
        text: "Usuario o contraseña incorrectas..",
        icon: "error",
      });
    }
  };

  const mystyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')",
    backgroundSize: "cover",
  };

  return (
    <>
      <main className="main-content  mt-0">
        <div
          className="page-header align-items-center min-vh-100"
          style={mystyle}
        >
          <div className="row">
            <div className="col-12 col-lg-12 col-md-12 ">
                <Lorem/>
              <span className="mask bg-gradient-dark opacity-6"></span>
              <div className="container my-auto justify-content align-items">
                <div className="row">
                  <div className="col-lg-4 col-md-8 col-12 mx-auto">
                    <div className="card z-index-0 fadeIn3 fadeInBottom">
                      <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                        <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                          <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">
                            Sign in
                          </h4>
                          <div className="row mt-3">
                            <div className="col-2 text-center ms-auto">
                              <a
                                className="btn btn-link px-3"
                                href="javascript:;"
                              >
                                <i className="fa fa-facebook text-white text-lg"></i>
                              </a>
                            </div>
                            <div className="col-2 text-center px-1">
                              <a
                                className="btn btn-link px-3"
                                href="javascript:;"
                              >
                                <i className="fa fa-github text-white text-lg"></i>
                              </a>
                            </div>
                            <div className="col-2 text-center me-auto">
                              <a
                                className="btn btn-link px-3"
                                href="javascript:;"
                              >
                                <i className="fa fa-google text-white text-lg"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <form role="form" className="text-start">
                          <div className="input-group input-group-outline my-3">
                            <label className="form-label">Email</label>
                            <input type="email" required onChange={(e) => setEmail(e.target.value)} className="form-control" />
                          </div>
                          <div className="input-group input-group-outline mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" required onChange={(e) => setPassword(e.target.value)} className="form-control" />
                          </div>
                          <div className="form-check form-switch d-flex align-items-center mb-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="rememberMe"
                              checked
                            />
                            <label
                              className="form-check-label mb-0 ms-3"
                              for="rememberMe"
                            >
                              Remember me
                            </label>
                          </div>
                          <div className="text-center">
                            <button
                              type="button"
                              onClick={handleLogin}
                              className="btn bg-gradient-primary w-100 my-4 mb-2"
                            >
                              Sign in
                            </button>
                          </div>
                          <p className="mt-4 text-sm text-center">
                            Don't have an account?
                            <a
                              href="../pages/sign-up.html"
                              className="text-primary text-gradient font-weight-bold"
                            >
                              Sign up
                            </a>
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer position-absolute bottom-2 py-2 w-100">
            <div className="container">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col-12 col-md-6 my-auto">
                  <div className="copyright text-center text-sm text-white text-lg-start">
                  © {/*  <script>document.write(new Date().getFullYear())</script>, */}
                  {(new Date().getFullYear())}, {" "}
                    made with <i className="fa fa-heart" aria-hidden="true"></i>{" "}
                    by
                    <a
                      href="https://www.creative-tim.com"
                      className="font-weight-bold text-white"
                      target="_blank"
                    >
                      Creative Tim
                    </a>
                    for a better web.
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com"
                        className="nav-link text-white"
                        target="_blank"
                      >
                        Creative Tim
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/presentation"
                        className="nav-link text-white"
                        target="_blank"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/blog"
                        className="nav-link text-white"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.creative-tim.com/license"
                        className="nav-link pe-0 text-white"
                        target="_blank"
                      >
                        License
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};

export default Login;
