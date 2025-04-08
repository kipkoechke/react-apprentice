import TourCard from "../components/ui/Card";

// In a real app, this data would come from an API
const tours = [
  {
    id: "1",
    name: "The Forest Hiker",
    slug: "the-forest-hiker",
    difficulty: "Easy",
    duration: 5,
    summary: "Breathtaking hike through the Canadian Banff National Park",
    location: "Banff, Canada",
    startDate: "April 2025",
    stops: 3,
    maxGroupSize: 25,
    price: 297,
    ratingsAverage: 4.9,
    ratingsQuantity: 21,
    imageCover: "/img/tour-1-cover.jpg",
  },
  {
    id: "2",
    name: "The Sea Explorer",
    slug: "the-sea-explorer",
    difficulty: "Medium-difficult",
    duration: 7,
    summary: "Exploring the jaw-dropping US east coast by foot and by boat",
    location: "Oregon, US",
    startDate: "June 2025",
    stops: 4,
    maxGroupSize: 15,
    price: 497,
    ratingsAverage: 4.8,
    ratingsQuantity: 12,
    imageCover: "/img/tour-2-cover.jpg",
  },
  // Add more tours as needed
];

export default function HomePage() {
  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
}
