import React from "react";
import { useNavigate } from "react-router-dom";

const UnAuthorized = () => {
  const nav = useNavigate();
  const back = () => {
    nav("/login")
  }

  return (
    <div className="bg-light">
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="card bg-dark p-5 rounded shadow-lg">
          <h1 className="text-white text-center fw-bold display-1 mb-4">404</h1>
          <p className="fs-4 text-white text-center mb-5">Oops! Page not Found</p>
          <div className="d-grid gap-2">
            <button className="btn btn-primary btn-lg" onClick={back}>
              Go back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UnAuthorized;
