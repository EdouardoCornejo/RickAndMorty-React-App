import api from "../api/api";

export const apiCharacters = async (url: string) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
  }
};
