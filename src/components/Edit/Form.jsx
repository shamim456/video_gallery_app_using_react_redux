import TextArea from "../UI/TextArea";
import TextInput from "../UI/TextInput";

export default function Form() {
  return (
    <form action="#" method="POST">
      <div className="overflow-hidden shadow sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput title="Video Title" />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <TextInput title="Author" />
            </div>

            <div className="col-span-6">
              <TextArea title="Description" />
            </div>

            <div className="col-span-6">
              <TextInput title="YouTube Video link" />
            </div>

            <div className="col-span-6">
              <TextInput title="Thumbnail link" />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput title="Upload Date" />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput title="Video Duration" />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput title="Video no of views" />
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
