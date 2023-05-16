"use client";
import React from "react";
import ImagesArray from "../components/ImagesArray";
import NavBar from "../components/NavBar";
import UploadBox from "../components/UploadBox";
import "./style.scss";
export default function ImagesPage() {
  return (
    <>
      <NavBar />
      <div className="home-box mt-24">
        <UploadBox />

        <ImagesArray />
      </div>
    </>
  );
}
