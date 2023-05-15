"use client";

import React from "react";
import LoginForm from "../components/LoginForm";
import NavBar from "../components/NavBar";

function LoginPage() {
  return (
    <>
      <div className="register-login">
        <h2>Login</h2>
        <LoginForm />
      </div>
    </>
  );
}

export default LoginPage;
