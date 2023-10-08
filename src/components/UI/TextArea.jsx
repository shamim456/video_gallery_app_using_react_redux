export default function TextArea({ title, ...attributes }) {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">{title}</label>
      <div className="mt-1">
        <textarea
          {...attributes}
          rows="3"
          className="block w-full mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Brief description for your video
      </p>
    </>
  );
}
