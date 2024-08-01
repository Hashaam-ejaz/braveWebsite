import { TeamMember } from "@/assets/lib/types";
import Image from "next/image";
import React from "react";

interface TeamMemberCardProps {
  member: TeamMember;
}

const NameCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  console.log("member", member)
  return (
    <div className="flex flex-col items-center gap-3 p-4 ">
      <div className="relative rounded-full w-24 h-24 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          width={96}
          height={96}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-lg font-medium">{member.name}</h3>
      <p className="text-center text-sm text-gray-500">{member.title}</p>
      <div className="space-y-1 text-sm text-gray-600">
        {member.roles.map((role, index) => (
          <p key={index}>{role}</p>
        ))}
      </div>
    </div>
  );
};

export default NameCard;
