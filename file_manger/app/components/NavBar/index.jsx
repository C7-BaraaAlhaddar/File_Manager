import React from "react";
import Link from "next/link";
import "./style.scss";
import { useRouter } from "next/navigation";

function NavBar() {
  const navigate = useRouter();
  const logout = () => {
    localStorage.setItem("user", undefined);
    navigate.push("/");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <img src="./logo.png" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            B File Manger
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            onClick={logout}
            className="text-white bg-stone-600 hover:bg-stone-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 "
          >
            Logout
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        ></div>
      </div>
    </nav>
  );
}

export default NavBar;
