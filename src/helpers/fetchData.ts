import axios, { AxiosResponse } from "axios";

export const handleSearch = async (query: string) => {
  try {
    const response: AxiosResponse<any> = await axios.post("/api/search", {
      query,
    });

    // Execute the JavaScript code with eval
    const data = response.data;
    const parsedArray = eval(data);

    console.log("Data from OpenAI", parsedArray);
    console.log("Typeof data from OpenAI", typeof parsedArray);
    return parsedArray;
  } catch (error) {
    console.error("Error generating data from OpenAI", error);
    throw error;
  }
};
