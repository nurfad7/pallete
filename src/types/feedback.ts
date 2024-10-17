export interface Feedback {
  id: string;
  name: string;
  email: string;
  message: string;
}

export interface PostFeedback {
  name: string;
  email: string;
  message: string;
}

export interface ProcessFeedback {
  addFeedback(feedback: PostFeedback): void;
  removeFeedback(feedback: Feedback): void;
  feedbacks: Feedback[] | undefined;
  error: Error | null;
  isLoading: boolean;
}