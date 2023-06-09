import React from "react";
import ImagesArray from "../components/ImagesArray";
import NavBar from "../components/NavBar";
import "./style.scss";
import Footer from "../components/Footer";
export default function ImagesPage() {
  return (
    <>
      <NavBar />
      <div className="home-box mt-24">
        <ImagesArray />
        <Footer />
      </div>
    </>
  );
}
