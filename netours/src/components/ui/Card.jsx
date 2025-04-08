import Image from "next/image";
import Link from "next/link";

export default function TourCard({ tour }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/40 to-green-600/40 z-10"></div>
        <Image
          src={tour.imageCover}
          alt={tour.name}
          width={500}
          height={300}
          className="h-48 w-full object-cover"
        />
        <h3 className="absolute bottom-4 right-4 z-20 text-white font-bold text-2xl px-4 py-1 bg-gradient-to-br from-green-500/80 to-green-600/80 rounded">
          <span>{tour.name}</span>
        </h3>
      </div>

      <div className="p-5">
        <h4 className="text-green-600 uppercase text-sm font-bold">
          {tour.difficulty} {tour.duration}-day tour
        </h4>
        <p className="mt-2 text-gray-700">{tour.summary}</p>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span>{tour.location}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <span>{tour.startDate}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                clipRule="evenodd"
              />
            </svg>
            <span>{tour.stops} stops</span>
          </div>

          <div className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span>{tour.maxGroupSize} people</span>
          </div>
        </div>
      </div>

      <div className="px-5 py-4 bg-gray-50 flex items-center justify-between border-t border-gray-200">
        <div>
          <span className="text-green-600 font-bold text-xl">
            ${tour.price}
          </span>
          <span className="text-gray-600 ml-1">per person</span>
        </div>

        <div className="flex items-center">
          <span className="text-green-600 font-bold">
            {tour.ratingsAverage}
          </span>
          <span className="text-gray-600 ml-1">
            rating ({tour.ratingsQuantity})
          </span>
        </div>

        <Link
          href={`/tour/${tour.slug}`}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
