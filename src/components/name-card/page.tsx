import { TeamMember } from "@/assets/lib/types";
import Image from "next/image";
import React from "react";

interface TeamMemberCardProps {
  member: TeamMember;
}

const NameCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  console.log("member", member);
  return (
    <div className="flex flex-row items-center gap-3 p-4  min-w-[50rem]">
      <div className="relative rounded-full w-24 h-24 overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          width={96}
          height={96}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="space-x-6">
        <p className="ms-6 text-lg font-medium font-garamond">{member.name}</p>
        <div className="space-y-1 text-sm  font-garamond">
          <p className="text-start text-sm text-pink-600 font-garamond">
            {member.title}
          </p>
          {member.roles.map((role, index) => (
            <p key={index}>{role}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NameCard;
