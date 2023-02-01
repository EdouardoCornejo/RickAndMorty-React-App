import api from "../api/api";

export const characters = async () => {
  try {
    const response = await api.get("/api/character");
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
  }

};
