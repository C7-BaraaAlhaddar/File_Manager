"use client";

import React from "react";
import RegisterForm from "../components/RegisterForm";
import NavBar from "../components/NavBar";

function RegisterPage() {
  return (
    <>
      <div className="register-login">
        <h2>Register</h2>
        <RegisterForm />
      </div>
    </>
  );
}

export default RegisterPage;
