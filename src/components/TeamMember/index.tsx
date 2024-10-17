import { MEMBER_DETAILS } from '@/constants/teams';
import { Member } from '@/types/member';
import { FC } from 'react'

interface TeamMemberProps {
  index: number;
  member: Member;
}

const TeamMember: FC<TeamMemberProps> = ({index, member}) => {
  return (
    <div className="flex w-fullh-[32rem] flex-col items-center bg-black bg-opacity-50 py-4 px-1 rounded-xl">
      <div className="w-full flex flex-col gap-3">
        <div className="w-1/2 h-32 mx-auto mb-1">
          <img src={member.picture.large} alt="user" 
            className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="text-base">
          {member.name.first} {member.name.last} - 
          <span className="font-bold">&nbsp;{ MEMBER_DETAILS[index].title }</span>
        </div>
        <div className="text-sm text-justify px-5">{ MEMBER_DETAILS[index].desc }</div>
      </div>
    </div>
  )
}

export default TeamMember;