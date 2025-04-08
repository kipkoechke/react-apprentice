export default function SearchForm() {
  return (
    <form className="relative">
      <button
        type="submit"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <input
        type="text"
        placeholder="Search tours"
        className="pl-10 pr-4 py-2 rounded-full bg-green-600/30 text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-white/50"
      />
    </form>
  );
}
