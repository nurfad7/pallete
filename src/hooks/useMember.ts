import { getMembers } from "@/api/getMember";
import { GET_MEMBERS } from "@/constants/queryKey";
import { useQuery } from "@tanstack/react-query";

const useMembers = () => {
  const {
    data: members,
    isLoading,
    error,
  } = useQuery({
    queryKey: [GET_MEMBERS],
    queryFn: async () => await getMembers(),
    refetchInterval: 360 * 1000,
  });

  return { members, isLoading, error };
};

export default useMembers;