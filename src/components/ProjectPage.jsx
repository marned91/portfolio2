import { useState } from 'react';
import Toast from './Toast';
import CopyLinkButton from './CopyLinkButton';
import ImageGallery from './ImageGallery';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectPage({
  title,
  githubLink,
  liveLink,
  projectHash,
  images,
  overview,
  features,
  technologies,
}) {
  const [copied, setCopied] = useState(false);

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
                {title}
              </h1>
              <div className="flex gap-2 justify-center items-center">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View project on GitHub"
                  className="inline-flex items-center text-main transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/70 cursor-pointer"
                >
                  <FaGithub className="text-[20px]" />
                </a>
                <CopyLinkButton
                  projectHash={projectHash}
                  onCopy={() => setCopied(true)}
                />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <FaExternalLinkAlt className="text-gray-600 text-[14px]" />
              <a
                href={liveLink}
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
                <p className="text-gray-700 text-md">{overview}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark mb-2">
                  Features
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-dark mb-3">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, idx) => (
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
