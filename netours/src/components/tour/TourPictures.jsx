import Image from "next/image";

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
