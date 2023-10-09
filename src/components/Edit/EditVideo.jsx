import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../../features/api/apiSlice";
import PublicLayout from "../../layouts/PublicLayout";
import Form from "./Form";

export default function EditVideo() {
  const { videoId } = useParams();
  const { data: video, isLoading, isError, error } = useGetVideoQuery(videoId);
  console.log(video);
  return (
    <PublicLayout>
      <div className="px-5 mx-auto max-w-7xl lg:px-0">
        <div className="w-full">
          <div className="px-4 pb-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Edit video
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Please fillup the form to edit video
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            {video ? <Form video={video} /> : null}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
