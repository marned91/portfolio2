import { useState } from 'react';

/**
 * ImageGallery Component
 *
 * - Large image on top
 * - Small horizontal thumbnails below, centered
 */
export default function ImageGallery({
  images,
  mainHeight = 400,
  thumbHeight = 80,
}) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg shadow-xl overflow-hidden w-full border border-gray-100">
        <img
          src={selectedImage}
          alt="Project screenshot"
          className="w-full h-auto"
          style={{ maxHeight: `${mainHeight}px` }}
        />
      </div>
      <div className="flex gap-2 justify-center">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            style={{ height: `${thumbHeight}px`, width: `${thumbHeight}px` }}
            className={`object-cover rounded cursor-pointer border-3 ${
              selectedImage === img ? 'border-ring' : 'border-transparent'
            } hover:scale-105 transition-transform duration-200`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
