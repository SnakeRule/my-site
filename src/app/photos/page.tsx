"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "@/app/photos/photos.module.css";
import { photos } from "@/lib/photos";
import PhotoCarousel from "./components/photoCarousel";

export default function Photos() {
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
        />
      )}
      <div className={styles.container}>
        {photos.map((photo) => (
          <Image
            key={photo.src}
            alt={photo.alt}
            src={photo.src}
            width={photo.width}
            height={photo.height}
            onClick={() => openCarousel(photo.src)}
          />
        ))}
      </div>
    </div>
  );
}
