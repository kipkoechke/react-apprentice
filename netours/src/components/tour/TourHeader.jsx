import Image from "next/image";

export default function TourHeader({ tour }) {
  return (
    <section className="relative h-96 bg-green-500">
      <div className="absolute inset-0">
        <Image
          src={tour.imageCover}
          alt={tour.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="absolute bottom-8 left-0 w-full">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-light text-white mb-6">
            <span className="font-bold">{tour.name}</span>
          </h1>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center text-white">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-lg">{tour.duration} days</span>
            </div>

            <div className="flex items-center text-white">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-lg">{tour.startLocation}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
