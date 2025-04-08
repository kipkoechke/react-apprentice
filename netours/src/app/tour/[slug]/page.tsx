import TourDescription from "../../../components/tour/TourDescription";
import TourFacts from "../../../components/tour/TourFacts";
import TourGuides from "../../../components/tour/TourGuides";
import TourHeader from "../../../components/tour/TourHeader";
import TourPictures from "../../../components/tour/TourPictures";

// In a real app, this would fetch data from an API based on the slug
export default function TourDetailPage({ params }) {
  // Sample tour data - in a real app this would come from an API
  const tour = {
    id: "5",
    name: "The Park Camper Tour",
    slug: "the-park-camper",
    duration: 10,
    maxGroupSize: 15,
    difficulty: "Medium",
    ratingsAverage: 4.9,
    ratingsQuantity: 19,
    price: 1497,
    summary: "Breathing in Nature in America's most spectacular National Parks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageCover: "/img/tour-5-cover.jpg",
    locations: [
      {
        description: "Zion Canyon National Park",
        day: 1,
        coordinates: [-112.987418, 37.198125],
      },
      {
        description: "Antelope Canyon",
        day: 3,
        coordinates: [-111.376161, 36.86438],
      },
      {
        description: "Grand Canyon National Park",
        day: 5,
        coordinates: [-112.115763, 36.058973],
      },
      {
        description: "Joshua Tree National Park",
        day: 8,
        coordinates: [-116.107963, 34.011646],
      },
    ],
    startLocation: "Las Vegas, USA",
    startDates: ["Aug 2025"],
    images: ["/img/tour-5-1.jpg", "/img/tour-5-2.jpg", "/img/tour-5-3.jpg"],
    guides: [
      {
        id: "19",
        name: "Steven Miller",
        role: "Lead guide",
        photo: "/img/users/user-19.jpg",
      },
      {
        id: "18",
        name: "Lisa Brown",
        role: "Tour guide",
        photo: "/img/users/user-18.jpg",
      },
      {
        id: "17",
        name: "Max Smith",
        role: "Intern",
        photo: "/img/users/user-17.jpg",
      },
    ],
    reviews: [
      {
        id: "1",
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dignissimos sint quo commodi corrupti accusantium veniam saepe numquam.",
        rating: 5,
        user: {
          name: "Jim Brown",
          photo: "/img/users/user-7.jpg",
        },
      },
      {
        id: "2",
        review:
          "Veniam adipisci blanditiis, corporis sit magnam aperiam ad, fuga reiciendis provident deleniti cumque similique itaque animi, sapiente obcaecati beatae accusantium.",
        rating: 4,
        user: {
          name: "Laura Wilson",
          photo: "/img/users/user-14.jpg",
        },
      },
      // More reviews...
    ],
  };

  return (
    <div>
      <TourHeader tour={tour} />

      <section className="py-12 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-white rounded-lg shadow-md p-8">
          <TourFacts tour={tour} />
          <TourGuides guides={tour.guides} />
        </div>

        <TourDescription description={tour.description} />
      </section>

      <TourPictures images={tour.images} />

      {/* <TourMap locations={tour.locations} />

      <TourReviews reviews={tour.reviews} />

      <TourCTA tour={tour} /> */}
    </div>
  );
}
