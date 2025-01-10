/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

// Define the types for the props
interface CardProps {
  imageSrc: string;
  firstText: string;
  secondText: string;
}

// Functional component using the props
const Card2: React.FC<CardProps> = ({ imageSrc, firstText, secondText }) => {
  return (
    <div className="bg-white border border-gray-200 text-black rounded-lg shadow-md overflow-hidden w-[350px] lg:w-[600px] min-h-[320px] lg:min-h-[387px]">
      <div className="relative w-full h-[200px] lg:h-[250px]">
        <Image
          src={imageSrc}
          alt="Card"
          className="absolute inset-0 object-cover w-full h-full"
          fill
        />
      </div>
      <div className="p-4">
        <p className="text-[16px] lg:text-[24px] font-bold">{firstText}</p>
        <p className="text-[15px] lg:text-[23px] font-montserrat">
          {secondText}
        </p>
      </div>
    </div>
  );
};

export default Card2;
