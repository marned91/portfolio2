import { useState } from 'react';
import ReuzeImage1 from '../assets/reuzeScreenshot.png';
import ReuzeImage2 from '../assets/reuzeProfile.png';
import ReuzeImage3 from '../assets/reuzeCategories.png';
import ReuzeImage4 from '../assets/reuzeViewItem.png';
import { FaGithub, FaShareAlt, FaExternalLinkAlt } from 'react-icons/fa';
import Toast from '../components/Toast';
import ImageGallery from '../components/ImageGallery';

export function Sp2Page() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
    });
  };

  const images = [ReuzeImage1, ReuzeImage2, ReuzeImage3, ReuzeImage4];

  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-400 py-5 md:py-10 w-full">
      <div className="max-w-7xl mx-auto px-2 md:px-6">
        <div className="bg-white p-4 md:p-10 rounded-xl shadow-lg grid lg:grid-cols-2 gap-8 items-start">
          <div className="w-full max-w-[720px] mx-auto">
            <ImageGallery
              images={images}
              mainHeight={350}
              thumbHeight={80}
              thumbHeightSm={64}
              thumbHeightXs={48}
            />
          </div>
          <div className="flex flex-col gap-3 min-w-0">
            <div className="flex flex-wrap md:flex-nowrap items-center gap-4">
              <h1 className="text-2xl md:text-4xl font-bold text-main">
                JS Framework Project
              </h1>
              <div className="flex gap-2 justify-center items-center">
                <a
                  href="https://github.com/marned91/ReUze-SP2/blob/main/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View project on GitHub"
                  className="inline-flex items-center text-main transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/70 cursor-pointer"
                >
                  <FaGithub className="text-[20px]" />
                </a>
                <button
                  onClick={handleCopyLink}
                  aria-label="Copy link to clipboard"
                  className="inline-flex items-center text-main transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/70 cursor-pointer"
                >
                  <FaShareAlt className="text-[20px]" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <FaExternalLinkAlt className="text-gray-600 text-[14px]" />
              <a
                href="https://reuze.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 text-sm hover:text-gray-700 transition"
              >
                Open live site
              </a>
            </div>
            <Toast
              message="Link copied!"
              show={copied}
              onClose={() => setCopied(false)}
            />
            <div className="h-px bg-gray-300 w-full" />
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-semibold text-dark mb-2">
                  Overview
                </h2>
                <p className="text-gray-700 text-md">
                  ReUze is a responsive front-end auction platform where users
                  can browse listings, place bids, and manage their profiles.
                  The site promotes reuse and second-hand items, providing a
                  clean, user-friendly interface.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark mb-2">
                  Features
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Browse and view auction listings</li>
                  <li>Register, log in, and manage user profile </li>
                  <li>
                    Create and manage item listings with images and deadlines
                  </li>
                  <li>Place bids on items (registered users only)</li>
                  <li>Category pages and search functionality</li>
                  <li>Fully responsive interface</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark mb-3">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    'HTML',
                    'Tailwind',
                    'JavaScript',
                    'Vite',
                    'API integration',
                  ].map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-tags text-white rounded-full px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
