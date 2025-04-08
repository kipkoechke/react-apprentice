export default function TourDescription({ description }) {
  // Split description into paragraphs
  const paragraphs = description.split("\n\n");

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">
        About the park camper tour
      </h2>

      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-gray-600 mb-4 leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
