import axios from "../../utils/axios";
export const getVideos = async () => {
  const response = await axios.get("/videos");
  return response.data;
};

// export const getVideos = async () => {
//   const response = await fetch("http://localhost:9000/videos");
//   const data = await response.json();
//   return data;
// };
