import axios from "axios";

export const handleSearch = async (query: string) => {
  try {
    const response = await axios.post("/api/search", { query });
    console.log("Response from OpenAI", response);
    return response;
  } catch (error) {
    console.error("Error generating data from OpenAI", error);
    throw error;
  }
};
