import fs from "node:fs";
import PhotoGallery from "./components/photoGallery";

async function getPhotoPaths() {
  const photos = fs.readdirSync("public/gallery");
  return photos.map((photo) => `/gallery/${photo}`);
}

export default async function Photos() {
  const photoPaths = await getPhotoPaths();

  return <PhotoGallery photoPaths={photoPaths} />;
}
