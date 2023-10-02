import axios from "../../utils/axios";
export const getVideos = async ({ tags, searched }) => {
  let quieryString = "";
  console.log(searched);
  if (tags?.length > 0) {
    quieryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (searched !== "") {
    quieryString += `&q=${searched}`;
  }
  const response = await axios.get(`/videos/?${quieryString}`);
  return response.data;
};
