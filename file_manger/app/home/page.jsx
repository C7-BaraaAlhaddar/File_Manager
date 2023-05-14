"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

function HomePage() {
  const navigate = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("b")) navigate.push("/login");
  }, []);
  return <div>HomePage</div>;
}

export default HomePage;
