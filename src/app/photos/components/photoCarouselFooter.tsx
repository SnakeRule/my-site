import Image from "next/image";
import { type Dispatch, type SetStateAction, useEffect } from "react";
import styles from "@/app/photos/photos.module.css";
import { photos } from "@/lib/photos";

type PhotoCarouselFooterProps = {
  imageSrc: string;
  setImageSrc: Dispatch<SetStateAction<string>>;
};

export default function PhotoCarouselFooter({
  imageSrc,
  setImageSrc,
}: PhotoCarouselFooterProps) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const index = photos.findIndex((photo) => photo.src === imageSrc);
      const maxIndex = photos.length - 1;
      switch (event.key) {
        case "ArrowLeft": {
          setImageSrc(index > 0 ? photos[index - 1].src : photos[maxIndex].src);
          break;
        }
        case "ArrowRight": {
          setImageSrc(index < maxIndex ? photos[index + 1].src : photos[0].src);
          break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [imageSrc, setImageSrc]);

  return (
    <div className={styles["carousel-footer-container"]}>
      {photos.map((photo) => (
        <div key={photo.src} className={styles["carousel-footer-photo"]}>
          <Image
            className={
              imageSrc === photo.src
                ? styles["carousel-footer-photo-selected"]
                : ""
            }
            alt={photo.alt}
            src={photo.src}
            fill
            objectFit="contain"
            onClick={() => setImageSrc(photo.src)}
          />
        </div>
      ))}
    </div>
  );
}
