import { useState } from 'react';
import CartImage1 from '../assets/cartScreenshot.png';
import CartImage2 from '../assets/cartViewProduct.png';
import CartImage3 from '../assets/cartCheckout.png';
import CartImage4 from '../assets/cartCart.png';
import { FaGithub, FaShareSquare } from 'react-icons/fa';
import Toast from '../components/toast';
import ImageGallery from '../components/ImageGallery';

export function Js2Page() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
    });
  };

  const images = [CartImage1, CartImage2, CartImage3, CartImage4];

  return (
    <section className="bg-gradient-to-r from-gray-100 to-gray-400 py-10 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 grid lg:grid-cols-2 gap-8 items-start">
          <div className="w-full max-w-[720px] mx-auto">
            <ImageGallery
              images={images}
              mainHeight={350}
              thumbHeight={80}
              thumbHeightSm={56}
              thumbHeightXs={44}
            />
          </div>
          <div className="flex flex-col gap-6 min-w-0">
            <div className="flex md:items-center items-start gap-4">
              <h1 className="text-2xl md:text-4xl font-bold text-main">
                JS Framework Project
              </h1>
              <a
                href="https://github.com/marned91/javascript-framework-ca/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit me on GitHub"
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
                  CART is a responsive e-commerce store built with React and
                  TypeScript. Users can browse products, manage a shopping cart,
                  complete checkout, and submit a contact form. Zustand handles
                  global cart state, and Tailwind CSS ensures a clean,
                  accessible design.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark mb-2">
                  Features
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Live product search and filtering</li>
                  <li>Dynamic product pages with reviews and discounts </li>
                  <li>Cart with add/remove and live item count</li>
                  <li>Checkout with unique order confirmation</li>
                  <li>Contact form with validation</li>
                  <li>Fully responsive and reusable components</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark mb-2">
                  Technologies
                </h2>
                <p className="text-gray-700 text-md">
                  React, TypeScript, Vite, Tailwind CSS, Zustand, React Router,
                  ESLint, Prettier, JSDoc, Netlify
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
