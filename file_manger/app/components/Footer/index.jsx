"use client";

import React, { useEffect } from "react";
import Link from "next/link";
export default function Footer() {
  useEffect(() => {
    if (!window) console.log(true);
  }, []);
  return (
    <footer className=" rounded-lg m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            B File Manger™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
