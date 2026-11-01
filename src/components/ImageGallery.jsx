import { useState, useEffect } from 'react';

export default function ImageGallery({
  images,
  mainAlt = 'Project screenshot',
  mainHeight = 400,
  thumbHeight = 80,
  thumbHeightSm = 64,
  thumbHeightXs = 48,
}) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [currentThumbSize, setCurrentThumbSize] = useState(thumbHeight);

  useEffect(() => {
    function updateThumbSize() {
      const width = window.innerWidth;
      setCurrentThumbSize(width < 480 ? thumbHeightXs : width < 640 ? thumbHeightSm : thumbHeight);
    }
    updateThumbSize();
    window.addEventListener('resize', updateThumbSize);
    return () => window.removeEventListener('resize', updateThumbSize);
  }, [thumbHeight, thumbHeightSm, thumbHeightXs]);

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="w-full overflow-hidden rounded-2xl border border-[#dce4dd] bg-white">
        <img src={selectedImage} alt={mainAlt} className="h-auto w-full object-contain" style={{ maxHeight: `${mainHeight}px` }} />
      </div>
      {images.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2" aria-label="Choose a project screenshot">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedImage(image)}
              aria-label={`Show project screenshot ${index + 1}`}
              aria-pressed={selectedImage === image}
              className={`overflow-hidden rounded-lg border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#578bcf] ${selectedImage === image ? 'border-[#53796a]' : 'border-transparent'}`}
            >
              <img src={image} alt="" aria-hidden="true" style={{ height: `${currentThumbSize}px`, width: `${currentThumbSize}px` }} className="block object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
