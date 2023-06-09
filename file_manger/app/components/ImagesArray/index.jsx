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

export default function ImagesArray() {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const q = query(
      collection(db, "users"),
      where("uid", "==", localStorage.getItem("user"))
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setImages(() => {
        return doc.data().images;
      });
    });
  };

  const deleteImageHandler = async (url) => {
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
      images: arrayRemove(url),
    });
    setImages(images.filter((image) => image !== url));
  };

  useEffect(() => {
    getImages();
  }, []);
  return (
    <div className="images-box">
      {images &&
        images.map((image) => {
          return (
            <div
              className="image-box drop-shadow-lg

            "
              key={image}
            >
              {" "}
              <a href="image">
                <img src={image} alt="img" />
              </a>
              <button
                onClick={(e) => {
                  deleteImageHandler(image);
                }}
                className="text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:outline-none focus:ring-stone-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-stone-600 dark:hover:bg-stone-700 dark:focus:ring-stone-800"
              >
                Delete Image
              </button>
            </div>
          );
        })}
    </div>
  );
}
