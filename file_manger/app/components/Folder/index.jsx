import React from "react";
import { useRouter } from "next/navigation";

export default function Folder({ path, d, name }) {
  const navigate = useRouter();
  return (
    <div
      onClick={() => {
        navigate.push({ path });
      }}
      className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700"
    >
      <p>{name}</p>
      <svg
        className="w-12 h-12 text-gray-200"
        xmlns="xhttp://www.w3.org/2000/svg"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 640 512"
      >
        <path d={d} />
      </svg>
    </div>
  );
}
