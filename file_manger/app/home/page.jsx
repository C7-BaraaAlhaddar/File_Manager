"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "../components/NavBar";
import UploadBox from "../components/UploadBox";
import Folder from "../components/Folder";

function HomePage() {
  const navigate = useRouter();

  // useEffect(() => {
  //   if (!localStorage.getItem("user")) navigate.push("/login");
  // }, [user]);
  return (
    <>
      <NavBar />
      <div className="home-page mt-32">
        <UploadBox />
      </div>
      <div className="folders">
        <Folder
          path={"/images"}
          d={
            "M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
          }
          name={"Your Images"}
        />
        {/* <Folder
          path={"/videos"}
          d={
            "M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"
          }
          name={"Videos"}
        /> */}
      </div>
    </>
  );
}

export default HomePage;
