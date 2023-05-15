"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import NavBar from "../components/NavBar";

function HomePage() {
  const navigate = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("user")) navigate.push("/login");
  }, []);
  return (
    <>
      <NavBar />
      <div className="home-page container mt-32">
        <h1>Hello</h1>
      </div>
    </>
  );
}

export default HomePage;
