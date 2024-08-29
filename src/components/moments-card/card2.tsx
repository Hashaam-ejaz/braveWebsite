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
    <div className="bg-white border border-gray-200 text-black rounded-lg shadow-md overflow-hidden w-[285px] lg:w-[550px] lg:h-[350px] min-h-[250px] font-garamond ">
      <div className="relative w-full h-[200px] lg:h-[250px]">
        <img
          src={imageSrc}
          alt="Card"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <p className="text-[10px] lg:text-[20px]">{firstText}</p>
        <p className="text-[16px] lg:text-[32px]">{secondText}</p>
      </div>
    </div>
  );
};

export default Card2;
