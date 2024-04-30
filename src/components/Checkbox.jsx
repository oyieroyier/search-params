export default function Checkbox({ ...props }) {
  return (
    <div className="flex items-center gap-3 self-end">
      <label
        htmlFor="isCoFounder"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Is Co-founder
      </label>
      <input
        type="checkbox"
        name="isCoFounder"
        id="isCoFounder"
        className="blockrounded-md my-4 border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        {...props}
      />
    </div>
  );
}
