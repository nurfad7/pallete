import { 
  getFeedbacks, 
  addFeedbackApi, 
  removeFeedbackApi 
} from "@/api/feedback";
import { GET_CLIENT_FEEDBACKS } from "@/constants/queryKey";
import { Feedback, PostFeedback, ProcessFeedback } from "@/types/feedback";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useFeedbacks = (): ProcessFeedback => {
  const queryClient = useQueryClient();

  const {
    data: feedbacks,
    isLoading,
    error,
  } = useQuery({
    queryKey: [GET_CLIENT_FEEDBACKS],
    queryFn: async () => await getFeedbacks(),
  });
  
  const addFeedbackMutation = useMutation({
    mutationFn: addFeedbackApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_CLIENT_FEEDBACKS] });
    },
  });

  const removeFeedbackMutation = useMutation({
    mutationFn: removeFeedbackApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_CLIENT_FEEDBACKS] });
    },
  });

  const addFeedback = (feedback: PostFeedback) => {
    addFeedbackMutation.mutate(feedback);
  };

  const removeFeedback = (feedback: Feedback) => {
    removeFeedbackMutation.mutate(feedback);
  };

  return {
    addFeedback,
    removeFeedback,
    feedbacks,
    error,
    isLoading,
  };
};

export default useFeedbacks;