"use client";
import React from "react";
import ImagesArray from "../components/ImagesArray";
import NavBar from "../components/NavBar";

export default function ImagesPage() {
  return (
    <>
      <NavBar />
      <div className=" mt-24">
        <ImagesArray />
      </div>
    </>
  );
}
