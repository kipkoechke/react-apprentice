import Image from "next/image";

export default function TourGuides({ guides }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        Your tour guides
      </h2>

      <div className="space-y-6">
        {guides.map((guide) => (
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
              <span className="block text-gray-700 font-semibold">
                {guide.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
