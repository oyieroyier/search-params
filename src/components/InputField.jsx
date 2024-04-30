export default function InputField({ ...props }) {
  return (
    <div>
      <label
        htmlFor="user"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Search User
      </label>
      <input
        type="text"
        name="user"
        id="user"
        className="my-4 block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="User"
        {...props}
      />
    </div>
  );
}
