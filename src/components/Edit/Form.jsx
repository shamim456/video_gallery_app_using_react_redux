import { useState } from "react";
import {
  useEditVideoMutation,
  useGetVideoQuery,
} from "../../features/api/apiSlice";
import TextArea from "../UI/TextArea";
import TextInput from "../UI/TextInput";
import { useNavigate, useParams } from "react-router-dom";

export default function Form({ video }) {
  const { videoId } = useParams();
  const [editVideo, { data, isLoading, isError, isSuccess, error }] =
    useEditVideoMutation();
  const {
    title: INITIAL_TITLE,
    author: INITIAL_AUTHOR,
    description: INITIAL_DESCRIPTION,
    link: INITIAL_LINK,
    date: INITIAL_DATE,
    thumbnail: INITIAL_THUMBNAIL,
    views: INITIAL_VIEWS,
    duration: INITIAL_DURATION,
  } = video || {};
  const [videoData, setVideoData] = useState({
    title: INITIAL_TITLE,
    author: INITIAL_AUTHOR,
    description: INITIAL_DESCRIPTION,
    link: INITIAL_LINK,
    thumbnail: INITIAL_THUMBNAIL,
    date: INITIAL_DATE,
    duration: INITIAL_VIEWS,
    views: INITIAL_DURATION,
  });

  const handleChange = (e) => {
    setVideoData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editVideo({ id: videoId, data: videoData });
  };
  return (
    <form method="PATCH" onSubmit={handleSubmit}>
      <div className="overflow-hidden shadow sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Video Title"
                name="title"
                onChange={handleChange}
                value={videoData.title}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Author"
                name="author"
                value={videoData.author}
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6">
              <TextArea
                title="Description"
                name="description"
                onChange={handleChange}
                value={videoData.description}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="YouTube Video link"
                name="link"
                onChange={handleChange}
                value={videoData.link}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="Thumbnail link"
                name="thumbnail"
                onChange={handleChange}
                value={videoData.thumbnail}
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput
                title="Upload Date"
                name="date"
                onChange={handleChange}
                value={videoData.date}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video Duration"
                name="duration"
                onChange={handleChange}
                value={videoData.duration}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video no of views"
                name="views"
                onChange={handleChange}
                value={videoData.views}
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
