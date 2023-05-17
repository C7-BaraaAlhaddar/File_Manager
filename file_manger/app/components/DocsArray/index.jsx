"use client";

import React, { useEffect, useState } from "react";
import {
  arrayRemove,
  db,
  updateDoc,
  doc,
  query,
  where,
  getDocs,
  collection,
} from "../../firebaseConfig";
import "./style.scss";

export default function DocsArray() {
  const [pdfs, setPdfs] = useState([]);

  const getImages = async () => {
    const q = query(
      collection(db, "users"),
      where("uid", "==", localStorage.getItem("user"))
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setPdfs(() => {
        return doc.data().pdf;
      });
    });
  };

  const deletePdfHandler = async (url) => {
    const q = query(
      collection(db, "users"),
      where("uid", "==", localStorage.getItem("user"))
    );

    const querySnapshot = await getDocs(q);
    let documentID;
    querySnapshot.forEach((doc) => {
      documentID = doc.id;
    });
    const userRef = doc(db, "users", documentID);

    await updateDoc(userRef, {
      pdf: arrayRemove(url),
    });
    setPdfs(pdfs.filter((pdf) => pdf !== url));
  };

  useEffect(() => {
    getImages();
  }, []);
  return (
    <div className="images-box">
      {pdfs &&
        pdfs.map((pdf) => {
          return (
            <div
              className="image-box drop-shadow-lg
            "
              key={pdf}
            >
              {" "}
              <a href={pdf}>
                <iframe src={pdf} title="pdf" />
              </a>
              <button
                onClick={(e) => {
                  deletePdfHandler(pdf);
                }}
                className="text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
              >
                Delete Pdf
              </button>
            </div>
          );
        })}
    </div>
  );
}
