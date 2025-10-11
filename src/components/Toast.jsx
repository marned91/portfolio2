import { useEffect } from 'react';

/**
 * Toast component
 *
 * A small centered toast notification that automatically hides after a duration.
 * When `show` becomes true, a timer is started which calls `onClose` after
 * `duration` milliseconds. Timer is cleaned up if the component unmounts or
 * `show` changes.
 *
 * Props:
 * @param {Object} props
 * @param {string} props.message - Text to display inside the toast.
 * @param {boolean} props.show - Whether the toast is visible.
 * @param {() => void} props.onClose - Callback invoked when the toast should hide.
 * @param {number} [props.duration=2000] - Time in milliseconds before auto-hide.
 *
 * @returns {JSX.Element|null} The toast node when `show` is true, otherwise null.
 */
export default function Toast({ message, show, onClose, duration = 2000 }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-black/60 text-white px-4 py-2 rounded-md shadow-lg animate-slide-in font-text">
      {message}
    </div>
  );
}
