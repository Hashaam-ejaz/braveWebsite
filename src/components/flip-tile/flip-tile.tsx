"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface FlipTileProps {
  imageSrc?: StaticImageData;
  text: string;
  altText?: string;
}

export default function FlipTile({
  imageSrc,
  text,
  altText = "Tile image",
}: FlipTileProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="w-full aspect-square"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front side (Image) */}
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={altText}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">No image</p>
            </div>
          )}
        </div>

        {/* Back side (Text) */}
        <div className="flex flex-col absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#F1E8F4] text-white rounded-lg  items-center justify-center p-2">
          <p className="text-center text-[20px] text-[#632B60] font-bold mb-[1rem] mt-[1rem]">
            {text.split(" ").slice(0, 2).join(" ")}
          </p>
          <p className="text-center text-[18px] text-[#632B60] mb-[5%]">
            {text.split(" ").slice(2).join(" ")}
          </p>
        </div>
      </div>
    </div>
  );
}
