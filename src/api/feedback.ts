import { config } from "@/constants/url";
import { Feedback, PostFeedback } from '@/types/feedback';
import axios from "axios";

async function getData() {
  try {
    const URL = config.BASE_URL_FEEDBACKS
    
    const response = await axios.get(URL, {
      headers: {
        accept: "application/json",
      },
    });
    
    return response.data;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
}

export async function getFeedbacks() {
  const data = await getData() as Feedback[];
  return data;
}

async function addData(data: PostFeedback) {
  try {
    const URL = config.BASE_URL_FEEDBACKS
    
    const response = await axios.post(URL, data, {
      headers: {
        accept: "application/json",
      },
    });
    
    return response.data;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
}

export async function addFeedbackApi(formData: PostFeedback) {
  const data = await addData(formData) as boolean;
  return data;
}

async function removeData(data: Feedback) {
  try {
    const URL = config.BASE_URL_FEEDBACKS + `/${data.id}`;
    
    const response = await axios.delete(URL, {
      headers: {
        accept: "application/json",
      },
    });
    
    return response.data;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
}

export async function removeFeedbackApi(feedback: Feedback) {
  const data = await removeData(feedback) as boolean;
  return data;
}