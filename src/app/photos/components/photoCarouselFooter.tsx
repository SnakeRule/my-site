"use client";

import Image from "next/image";
import { type Dispatch, type SetStateAction, useEffect, useRef } from "react";
import styles from "@/app/photos/photos.module.css";

type PhotoCarouselFooterProps = {
  imageSrc: string;
  setImageSrc: Dispatch<SetStateAction<string>>;
  photoPaths: string[];
};

export default function PhotoCarouselFooter({
  imageSrc,
  setImageSrc,
  photoPaths,
}: PhotoCarouselFooterProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const index = photoPaths.findIndex((photo) => photo === imageSrc);
      const maxIndex = photoPaths.length - 1;
      switch (event.key) {
        case "ArrowLeft": {
          setImageSrc(index > 0 ? photoPaths[index - 1] : photoPaths[maxIndex]);
          break;
        }
        case "ArrowRight": {
          setImageSrc(index < maxIndex ? photoPaths[index + 1] : photoPaths[0]);
          break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [imageSrc, setImageSrc, photoPaths]);

  useEffect(() => {
    if (containerRef) {
      const index = photoPaths.findIndex((photo) => photo === imageSrc);
      console.log(120 * index);
      containerRef.current?.scroll({
        behavior: "smooth",
        left: 120 * index,
      });
    }
  }, [photoPaths, imageSrc]);

  return (
    <div className={styles["carousel-footer-container"]} ref={containerRef}>
      {photoPaths.map((photo) => (
        <div key={photo} className={styles["carousel-footer-photo"]}>
          <Image
            className={
              imageSrc === photo ? styles["carousel-footer-photo-selected"] : ""
            }
            alt={"Gallery footer photo"}
            src={photo}
            fill
            objectFit="contain"
            onClick={() => setImageSrc(photo)}
          />
        </div>
      ))}
    </div>
  );
}
