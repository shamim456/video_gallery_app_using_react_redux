// import Success from "../ui/Success";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddVideoMutation } from "../../features/api/apiSlice";
import TextArea from "../UI/TextArea";
import TextInput from "../UI/TextInput";

export default function Form() {
  const [addVideo, { data, isLoading, isError, isSuccess, error }] =
    useAddVideoMutation();
  const [videoData, setVideoData] = useState({
    title: "",
    author: "",
    description: "",
    link: "",
    thumbnail: "",
    date: "",
    duration: "",
    views: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setVideoData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleReset = (e) => {
    setVideoData({
      title: "",
      author: "",
      description: "",
      link: "",
      thumbnail: "",
      date: "",
      duration: "",
      views: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo(videoData);
    handleReset();
    if (isSuccess) {
      navigate("/");
    }
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
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
            disabled={isLoading}
            type="submit"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>

        {/* <Success message="Video was added successfully" /> */}
      </div>
    </form>
  );
}
