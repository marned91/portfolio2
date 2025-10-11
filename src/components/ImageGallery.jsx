import { useState, useEffect } from 'react';

/**
 * ImageGallery component
 *
 * Displays a large main image with horizontal thumbnails below.
 * Thumbnails are responsive based on screen width:
 * - thumbHeight (desktop)
 * - thumbHeightSm (small screens < 640px)
 * - thumbHeightXs (extra small screens < 480px)
 *
 * Props:
 * @param {Object} props
 * @param {string[]} props.images - Array of image URLs (required)
 * @param {number} [props.mainHeight=400] - Max height for main image in px
 * @param {number} [props.thumbHeight=80] - Thumbnail height for desktop in px
 * @param {number} [props.thumbHeightSm=64] - Thumbnail height for small screens (<640px)
 * @param {number} [props.thumbHeightXs=48] - Thumbnail height for extra small screens (<480px)
 *
 * @returns {JSX.Element} Image gallery with responsive thumbnails
 */
export default function ImageGallery({
  images,
  mainHeight = 400,
  thumbHeight = 80,
  thumbHeightSm = 64,
  thumbHeightXs = 48,
}) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [currentThumbSize, setCurrentThumbSize] = useState(thumbHeight);

  useEffect(() => {
    function updateThumbSize() {
      const w = window.innerWidth;
      if (w < 480) {
        setCurrentThumbSize(thumbHeightXs);
      } else if (w < 640) {
        setCurrentThumbSize(thumbHeightSm);
      } else {
        setCurrentThumbSize(thumbHeight);
      }
    }

    updateThumbSize();
    window.addEventListener('resize', updateThumbSize);
    return () => {
      window.removeEventListener('resize', updateThumbSize);
    };
  }, [thumbHeight, thumbHeightSm, thumbHeightXs]);

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="rounded-lg shadow-xl overflow-hidden w-full border border-gray-100">
        <img
          src={selectedImage}
          alt="Project screenshot"
          className="w-full h-auto object-contain"
          style={{ maxHeight: `${mainHeight}px` }}
        />
      </div>

      <div className="flex gap-2 justify-center">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx + 1}`}
            style={{
              height: `${currentThumbSize}px`,
              width: `${currentThumbSize}px`,
            }}
            className={`object-cover rounded cursor-pointer border-2 ${
              selectedImage === img ? 'border-ring' : 'border-transparent'
            } hover:scale-105 transition-transform duration-200`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
