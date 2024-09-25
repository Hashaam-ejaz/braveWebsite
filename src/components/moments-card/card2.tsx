/* eslint-disable @next/next/no-img-element */
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
    <div className="bg-white border border-gray-200 text-black rounded-lg shadow-md overflow-hidden w-[250px] lg:w-[500px] min-h-[320px] lg:min-h-[387px] font-garamond ">
      <div className="relative w-full h-[200px] lg:h-[250px]">
        <img
          src={imageSrc}
          alt="Card"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <p className="text-[16px] lg:text-[24px] font-bold">{firstText}</p>
        <p className="text-[15px] lg:text-[23px]">{secondText}</p>
      </div>
    </div>
  );
};

export default Card2;
