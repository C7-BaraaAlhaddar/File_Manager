import React from "react";
import NavBar from "../components/NavBar";
import "./style.scss";
import Footer from "../components/Footer";
import DocsArray from "../components/DocsArray";
export default function DocsPage() {
  return (
    <>
      <NavBar />
      <div className="home-box mt-24">
        <DocsArray />
        <Footer />
      </div>
    </>
  );
}
