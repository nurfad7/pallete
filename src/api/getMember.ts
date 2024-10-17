import { config } from "@/constants/url";
import { Member } from "@/types/member";
import axios from "axios";

async function getData() {
  try {
    const URL = config.BASE_URL_TEAMS;
    
    const response = await axios.get(URL, {
      headers: {
        accept: "application/json",
      },
    });
    
    return response.data?.results;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
}

export async function getMembers() {
  const data = await getData() as Member[];
  return data;
}