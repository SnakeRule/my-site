"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "@/app/photos/photos.module.css";
import PhotoCarousel from "./photoCarousel";

type PhotoGalleryProps = {
  photoPaths: string[];
};

export default function PhotoGallery({ photoPaths }: PhotoGalleryProps) {
  console.log(photoPaths);
  const [carouselOpen, setCarouselOpen] = useState(false);
  const [carouselVisible, setCarouselVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState("");

  const openCarousel = (photoSrc: string) => {
    setSelectedPhoto(photoSrc);
    setCarouselOpen(true);
  };

  const closeCarousel = () => {
    setCarouselVisible(false);
    setTimeout(() => setCarouselOpen(false), 200);
  };

  // This will prevent the page from scrolling while the photo carousel is open
  useEffect(() => {
    if (carouselOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [carouselOpen]);

  return (
    <div>
      {carouselOpen && (
        <PhotoCarousel
          closeCarousel={closeCarousel}
          isVisible={carouselVisible}
          setIsVisible={setCarouselVisible}
          imageSrc={selectedPhoto}
          setImageSrc={setSelectedPhoto}
          photoPaths={photoPaths}
        />
      )}
      <div className={styles.container}>
        {photoPaths.map((photo) => (
          <div key={photo} className={styles["gallery-photo-container"]}>
            <Image
              alt={"Gallery photo"}
              src={photo}
              fill
              objectFit="cover"
              style={{ height: "100%", width: "100%" }}
              onClick={() => openCarousel(photo)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
