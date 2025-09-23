import clsx from "clsx";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { type Dispatch, type SetStateAction, useEffect } from "react";
import styles from "@/app/photos/photos.module.css";
import { photos } from "@/lib/photos";
import PhotoCarouselFooter from "./photoCarouselFooter";

type PhotoCarouselProps = {
  closeCarousel: () => void;
  isVisible: boolean;
  setIsVisible: (state: boolean) => void;
  imageSrc: string;
  setImageSrc: Dispatch<SetStateAction<string>>;
};

export default function PhotoCarousel({
  closeCarousel,
  isVisible,
  setIsVisible,
  imageSrc,
  setImageSrc,
}: PhotoCarouselProps) {
  useEffect(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  const arrowClicked = (direction: "next" | "previous") => {
    const index = photos.findIndex((photo) => photo.src === imageSrc);
    const maxIndex = photos.length - 1;
    switch (direction) {
      case "previous": {
        setImageSrc(index > 0 ? photos[index - 1].src : photos[maxIndex].src);
        break;
      }
      case "next": {
        if (index < photos.length - 1) {
          setImageSrc(index < maxIndex ? photos[index + 1].src : photos[0].src);
        }
        break;
      }
    }
  };

  return (
    <div
      className={clsx(
        styles["carousel-container"],
        isVisible ? styles["carousel-fade-in"] : styles["carousel-fade-out"]
      )}
    >
      <div className={styles["carousel-large-photo-container"]}>
        <button
          className={styles["carousel-button"]}
          type="button"
          onClick={() => arrowClicked("previous")}
        >
          <ChevronLeft size={32} />
        </button>
        <div className={styles["carousel-large-photo"]}>
          <Image alt="Lepardi" src={imageSrc} fill objectFit="contain" />
        </div>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "absolute", top: 0 }}>
            <button
              type="button"
              className={styles["carousel-button"]}
              onClick={closeCarousel}
            >
              <X size={32} />
            </button>
          </div>
          <div>
            <button
              style={{ justifySelf: "center", alignSelf: "center" }}
              type="button"
              className={styles["carousel-button"]}
              onClick={() => arrowClicked("next")}
            >
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </div>
      <PhotoCarouselFooter imageSrc={imageSrc} setImageSrc={setImageSrc} />
    </div>
  );
}
