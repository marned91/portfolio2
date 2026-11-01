import { useState } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import Toast from './Toast';

export default function CopyLinkButton({ projectHash }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    const route = projectHash ? `/${projectHash}` : '/';
    const hashLink = `${window.location.origin}/#${route}`;
    await navigator.clipboard.writeText(hashLink);
    setCopied(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleCopyLink}
        aria-label="Copy link to clipboard"
        className="grid h-10 w-10 place-items-center rounded-full border border-[#dce4dd] text-[#355e51] transition hover:bg-[#edf3ee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#578bcf]"
      >
        <FaShareAlt aria-hidden="true" />
      </button>
      <Toast message="Link copied!" show={copied} onClose={() => setCopied(false)} />
    </>
  );
}
