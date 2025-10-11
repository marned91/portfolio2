import { useState } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import Toast from './Toast';

/**
 * CopyLinkButton component
 *
 * Renders a share icon button that copies a hash-link to the clipboard
 * when clicked. Also shows a temporary toast notification when copied.
 *
 * Props:
 * @param {Object} props
 * @param {string} props.projectHash - Short identifier used to build the hash-link (e.g. "CART", "BLUB").
 *
 * @returns {JSX.Element} A button with copy-to-clipboard functionality and toast feedback.
 */
export default function CopyLinkButton({ projectHash }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const hashLink = `${window.location.origin}/#${projectHash}`;
    navigator.clipboard.writeText(hashLink).then(() => {
      setCopied(true);
    });
  };

  return (
    <>
      <button
        onClick={handleCopyLink}
        aria-label="Copy link to clipboard"
        className="inline-flex items-center text-main transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/70 cursor-pointer"
      >
        <FaShareAlt className="text-[20px]" />
      </button>
      <Toast
        message="Link copied!"
        show={copied}
        onClose={() => setCopied(false)}
      />
    </>
  );
}
