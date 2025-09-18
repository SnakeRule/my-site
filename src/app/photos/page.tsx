import Image from "next/image";

export default function Photos() {
  return (
    <div>
      <p>MOI</p>
      <Image
        alt="Lepardi"
        src={
          "https://upload.wikimedia.org/wikipedia/commons/7/70/African_leopard_male_%28cropped%29.jpg"
        }
        width={465}
        height={464}
      />
    </div>
  );
}
