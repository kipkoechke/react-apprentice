// app/tour/[slug]/page.js
import TourCTA from '../../../components/tour/TourCTA';
import TourDescription from '../../../components/tour/TourDescription';
import TourFacts from '../../../components/tour/TourFacts';
import TourGuides from '../../../components/tour/TourGuides';
import TourHeader from '../../../components/tour/TourHeader';
import TourMap from '../../../components/tour/TourMap';
import TourPictures from '../../../components/tour/TourPictures';
import TourReviews from '../../../components/tour/TourReviews';

// In a real app, this would fetch data from an API based on the slug
export default function TourDetailPage({ params }) {
  // Sample tour data - in a real app this would come from an API
  const tour = {
    id: '5',
    name: 'The Park Camper Tour',
    slug: 'the-park-camper',
    duration: 10,
    maxGroupSize: 15,
    difficulty: 'Medium',
    ratingsAverage: 4.9,
    ratingsQuantity: 19,
    price: 1497,
    summary: 'Breathing in Nature in America\'s most spectacular National Parks',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageCover: '/img/tour-5-cover.jpg',
    locations: [
      {
        description: 'Zion Canyon National Park',
        day: 1,
        coordinates: [-112.987418, 37.198125]
      },
      {
        description: 'Antelope Canyon',
        day: 3,
        coordinates: [-111.376161, 36.86438]
      },
      {
        description: 'Grand Canyon National Park',
        day: 5,
        coordinates: [-112.115763, 36.058973]
      },
      {
        description: 'Joshua Tree National Park',
        day: 8,
        coordinates: [-116.107963, 34.011646]
      }
    ],
    startLocation: 'Las Vegas, USA',
    startDates: ['Aug 2025'],
    images: [
      '/img/tour-5-1.jpg',
      '/img/tour-5-2.jpg',
      '/img/tour-5-3.jpg'
    ],
    guides: [
      {
        id: '19',
        name: 'Steven Miller',
        role: 'Lead guide',
        photo: '/img/users/user-19.jpg'
      },
      {
        id: '18',
        name: 'Lisa Brown',
        role: 'Tour guide',
        photo: '/img/users/user-18.jpg'
      },
      {
        id: '17',
        name: 'Max Smith',
        role: 'Intern',
        photo: '/img/users/user-17.jpg'
      }
    ],
    reviews: [
      {
        id: '1',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dignissimos sint quo commodi corrupti accusantium veniam saepe numquam.',
        rating: 5,
        user: {
          name: 'Jim Brown',
          photo: '/img/users/user-7.jpg'
        }
      },
      {
        id: '2',
        review: 'Veniam adipisci blanditiis, corporis sit magnam aperiam ad, fuga reiciendis provident deleniti cumque similique itaque animi, sapiente obcaecati beatae accusantium.',
        rating: 4,
        user: {
          name: 'Laura Wilson',
          photo: '/img/users/user-14.jpg'
        }
      },
      // More reviews...
    ]
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
      
      <TourMap locations={tour.locations} />
      
      <TourReviews reviews={tour.reviews} />
      
      <TourCTA tour={tour} />
    </div>
  );
}

// components/tour/TourHeader.jsx
import Image from 'next/image';

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
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-lg">{tour.duration} days</span>
            </div>
            
            <div className="flex items-center text-white">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-lg">{tour.startLocation}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/tour/TourFacts.jsx
export default function TourFacts({ tour }) {
  const facts = [
    {
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Next date',
      text: tour.startDates[0]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      label: 'Difficulty',
      text: tour.difficulty
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      label: 'Participants',
      text: `${tour.maxGroupSize} people`
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      label: 'Rating',
      text: `${tour.ratingsAverage} / 5`
    }
  ];

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Quick facts</h2>
      
      <div className="space-y-6">
        {facts.map((fact, index) => (
          <div key={index} className="flex items-center">
            {fact.icon}
            <div className="ml-4">
              <span className="block text-gray-500 text-sm">{fact.label}</span>
              <span className="block text-gray-700 font-semibold">{fact.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// components/tour/TourGuides.jsx

export default function TourGuides({ guides }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Your tour guides</h2>
      
      <div className="space-y-6">
        {guides.map(guide => (
          <div key={guide.id} className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image 
                src={guide.photo} 
                alt={guide.name}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="ml-4">
              <span className="block text-gray-500 text-sm">{guide.role}</span>
              <span className="block text-gray-700 font-semibold">{guide.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// components/tour/TourDescription.jsx
export default function TourDescription({ description }) {
  // Split description into paragraphs
  const paragraphs = description.split('\n\n');
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">About the park camper tour</h2>
      
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-gray-600 mb-4 leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

// components/tour/TourPictures.jsx

export default function TourPictures({ images }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3">
      {images.map((image, index) => (
        <div key={index} className="h-64 md:h-96 relative">
          <Image 
            src={image} 
            alt={`Tour image ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </section>
  );
}

// components/tour/TourReviews.jsx

export default function TourReviews({ reviews }) {
  function renderStars(rating) {
    return Array.from({ length: 5 }, (_, i) => (
      <svg 
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
      </svg>
    ))}}