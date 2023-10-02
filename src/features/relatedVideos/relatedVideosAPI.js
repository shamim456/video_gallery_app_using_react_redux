import axios from "../../utils/axios";

// /videos?tags_like=vscode&tags_like=tips&ne=id&_limit=5
export const getRelatedVideos = async ({ tags, id }) => {
  console.log(tags);
  const limit = 5;
  let quieryString =
    tags.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") +
        `&id_ne=${id}` +
        `&_limit=${limit}`
      : `&id_ne=${id}_limit=${limit}`;
  console.log(quieryString);
  const response = await axios.get(`/videos?${quieryString}`);
  return response.data;
};
