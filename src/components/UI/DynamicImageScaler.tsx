import React from "react";

interface DynamicImageScalerProps {
  images: {
    src: string;
    alt: string;
    top?: number | "undefined";
    bottom?: number | "undefined";
    left?: number | "undefined";
    right?: number | "undefined";
  }[];
}

const DynamicImageScaler: React.FC<DynamicImageScalerProps> = ({ images }) => {
  return (
    <div className="image-scaler basis-1/2 relative">
      {images.map((image) => (
        <img
          style={{
            position: "absolute",
            top: image.top ?? "",
            left: image.left ?? "",
            bottom: image.bottom ?? "",
            right: image.right ?? "",
          }}
          className="rounded-sm  cursor-pointer max-w-[35.6rem] hover:outline hover:outline-[10px] hover:outline-primaryGreen hover:outline-offset-[10px] hover:z-[99] hover:scale-110 shadow-imagesShadow first-line:hover:scale-110  transition-all"
          key={image.alt}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default DynamicImageScaler;
