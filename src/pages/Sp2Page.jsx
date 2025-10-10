import { useState } from 'react';
import ReuzeImage1 from '../assets/reuzeScreenshot.png';
import ReuzeImage2 from '../assets/reuzeProfile.png';
import ReuzeImage3 from '../assets/reuzeCategories.png';
import ReuzeImage4 from '../assets/reuzeViewItem.png';
import { FaGithub, FaShareSquare } from 'react-icons/fa';
import Toast from '../components/toast';
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
          <div className="flex flex-col gap-6 min-w-0">
            <div className="flex md:items-center items-start gap-4">
              <h1 className="text-2xl md:text-4xl font-bold text-main">
                JS Framework Project
              </h1>
              <a
                href="https://github.com/marned91/ReUze-SP2/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View project on GitHub"
                className="inline-flex items-center text-main transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/70 cursor-pointer"
              >
                <FaGithub className="text-[25px] md:text-[30px]" />
              </a>
              <button
                onClick={handleCopyLink}
                aria-label="Copy link to clipboard"
                className="inline-flex items-center text-main transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/70 cursor-pointer"
              >
                <FaShareSquare className="text-[25px] md:text-[30px]" />
              </button>
            </div>
            <Toast
              message="Copied!"
              show={copied}
              onClose={() => setCopied(false)}
            />
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
                <h2 className="text-xl font-semibold text-dark mb-2">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    'HTML',
                    'Tailwind',
                    'JavaScript',
                    'Vite',
                    'API integration',
                    'Netlify',
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
