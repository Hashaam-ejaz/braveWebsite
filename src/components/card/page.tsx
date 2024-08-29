import React from "react";
import Image from "next/image";

interface CardProps {
  img: string; // Specifies that `img` should be a string
  text: string;
}

const Card: React.FC<CardProps> = ({ img, text = "" }) => {
  return (
    <div className="w-full h-full max-w-md rounded-lg overflow-hidden shadow-lg min-h-[14rem] lg:min-h-[18rem]">
      <Image
        src={img}
        alt="Cover Image"
        width={261}
        height={182}
        className="w-full h-[12rem] object-cover"
      />
      <div className="p-4 text-center">
        <p className="text-muted-foreground text-[18.34px] lg:text-[23px]">
          <span className="first-letter:text-[#C0428B] first-letter:font-bold">
            {text}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
