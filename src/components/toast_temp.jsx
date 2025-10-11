import { useEffect } from 'react';

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
