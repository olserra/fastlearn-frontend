import axios, { AxiosResponse } from "axios";

export const handleSearch = async (query: string) => {
  try {
    const response: AxiosResponse<any> = await axios.post("/api/search", {
      query,
    });
    console.log("response on fetchData", response.data);
    console.log("type of", typeof response.data);
    return response.data;
  } catch (error) {
    console.error("Error generating data from OpenAI", error);
    throw error;
  }
};
