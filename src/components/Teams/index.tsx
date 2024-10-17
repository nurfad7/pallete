import { FC } from 'react'
import TeamMember from '@/components/TeamMember';
import useMembers from '@/hooks/useMember';

const Teams: FC = () => {
  const { members, isLoading, error } = useMembers();

  return (
    <div id="teams" className='w-full min-h-[100vh] flex flex-col items-center mb-20'>
      <div className="text-3xl font-medium mb-4 mt-14 text-center">Our Leadership Team</div>
      <div className="text-sm text-center mb-10 px-5 md:px-0">
        &quot;Meet the talented individuals behind Pallete. Our painters, designers, 
        and color experts work together to deliver the best results for our clients.&quot;
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 px-10 md:px-24 text-center gap-7">
        {
          isLoading ? (<div>Loading...</div>) : error ? (<div>Error loading team members</div>)
          : members?.map((member, key) => (
            <TeamMember key={key} index={key} member={member} />
          ))
        }
      </div>
    </div>
  )
}

export default Teams;