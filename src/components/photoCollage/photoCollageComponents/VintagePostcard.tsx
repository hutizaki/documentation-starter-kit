/**
 * Vintage Postcard Component
 *
 * Renders a photo with vintage postcard styling including:
 * - Teal border around the image
 * - Top title text in italic serif font
 * - Bottom footer text in monospace font
 * - Amber background for vintage aesthetic
 * - Demo mode support for displaying numbers instead of images
 */

import React from 'react';

interface VintagePostcardProps {
  /** URL/path to the image (optional in demo mode) */
  imageUrl?: string;
  /** Title text displayed above the image */
  title: string;
  /** Footer text displayed below the image (bottom right) */
  footer: string;
  /** Optional className for additional styling */
  className?: string;
  /** Demo mode: display a number instead of an image */
  demoNumber?: number;
}

/**
 * Vintage Postcard Component
 * Creates a styled postcard with border and text overlays
 */
export const VintagePostcard: React.FC<VintagePostcardProps> = ({
  imageUrl,
  title,
  footer,
  className = '',
  demoNumber,
}) => {
  return (
    <div className={`bg-[#f4ece1] px-6 shadow-2xl ${className}`}>
      {/* Top text */}
      <div className="text-right pr-6 pt-2">
        <p
          className="text-gray-700 tracking-wide"
          style={{
            fontFamily: 'American Typewriter, serif',
            fontSize: '14px',
            fontStyle: 'italic',
            letterSpacing: '0.5px'
          }}
        >
          {title}
        </p>
      </div>

      {/* Image or Demo Number */}
      <div className="digital-photo">
        {demoNumber !== undefined ? (
          <div
            className="w-full h-auto flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100"
            style={{ aspectRatio: '8/5' }}
          >
            <span className="text-8xl font-bold text-gray-700 select-none">
              {demoNumber}
            </span>
          </div>
        ) : (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto block"
            style={{ aspectRatio: '8/5', objectFit: 'fill' }}
          />
        )}
      </div>

      {/* Bottom text */}
      <div className="text-right pb-[0.25rem] pr-2">
        <p
          className="text-gray-600 text-xs tracking-widest"
          style={{
            fontFamily: 'Courier New, monospace',
            fontSize: '11px'
          }}
        >
          {footer}
        </p>
      </div>
    </div>
  );
};

