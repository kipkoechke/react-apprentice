import { useState } from "react";
import PropTypes from "prop-types";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};

StarRating.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  messages: PropTypes.array,
  className: PropTypes.string,
  onSetRating: PropTypes.func,
};

/**
 * Renders a star rating component with customizable properties.
 *
 * @param {Object} props - The properties for the StarRating component.
 * @param {number} [props.maxRating=5] - The maximum number of stars.
 * @param {string} [props.color="#fcc419"] - The color of the stars.
 * @param {number} [props.size=48] - The size of the stars.
 * @param {string} [props.className=""] - The CSS class name for the component.
 * @param {Array} [props.messages=[]] - The messages to display for each star rating.
 * @param {number} [props.defaultRating=0] - The default rating.
 * @param {Function} [props.onSetRating] - The callback function when a rating is set.
 * @return {JSX.Element} The rendered StarRating component.
 */
export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  messages = [],
  defaultRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  /**
   * Updates the rating state and calls the onSetRating callback if provided.
   *
   * @param {number} rating - The new rating value.
   * @returns {void} This function does not return anything.
   */
  function handleRating(rating) {
    /**
     * Updates the rating state.
     */
    setRating(rating);
    /**
     * Calls the onSetRating callback function if provided.
     */
    onSetRating && onSetRating(rating);
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}

/**
 * The Star component renders a star SVG element.
 * @param {Object} props - The properties for the Star component.
 * @param {function} props.onRate - The function to call when the star is clicked.
 * @param {boolean} props.full - Whether the star should be full or empty.
 * @param {function} props.onHoverIn - The function to call when the mouse enters the star.
 * @param {function} props.onHoverOut - The function to call when the mouse leaves the star.
 * @param {string} props.color - The color of the star.
 * @param {number} props.size - The size of the star.
 * @returns {JSX.Element} The rendered Star component.
 */
function Star({ onRate, full, onHoverIn, onHoverOut, color, size }) {
  const starStyle = {
    // Set the width and height of the star SVG element
    width: `${size}px`,
    height: `${size}px`,
    // Make the star display as a block element
    display: "block",
    // Set the cursor to be a pointer
    cursor: "pointer",
  };

  return (
    // Render an SVG element with the role of a button
    <span
      role="button"
      // Apply the starStyle to the SVG element
      style={starStyle}
      // Set the onClick event handler to the onRate function
      onClick={onRate}
      // Set the onMouseEnter event handler to the onHoverIn function
      onMouseEnter={onHoverIn}
      // Set the onMouseLeave event handler to the onHoverOut function
      onMouseLeave={onHoverOut}
    >
      {/* Render the star SVG element based on whether the full prop is true or false */}
      {full ? (
        <svg
          // Set the namespace for the SVG element to be the SVG namespace
          xmlns="http://www.w3.org/2000/svg"
          // Set the viewBox of the SVG element to be 0 0 20 20
          viewBox="0 0 20 20"
          // Set the fill and stroke of the SVG element to be the color prop
          fill={color}
          stroke={color}
        >
          {/* Render the path element for the star */}
          <path
            // Set the d attribute of the path element to be the path data for a filled star
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      ) : (
        <svg
          // Set the namespace for the SVG element to be the SVG namespace
          xmlns="http://www.w3.org/2000/svg"
          // Set the fill of the SVG element to be transparent
          fill="none"
          // Set the viewBox of the SVG element to be 0 0 24 24
          viewBox="0 0 24 24"
          // Set the stroke of the SVG element to be the color prop
          stroke={color}
        >
          {/* Render the path element for the star */}
          <path
            // Set the strokeLinecap attribute of the path element to be round
            strokeLinecap="round"
            // Set the strokeLinejoin attribute of the path element to be round
            strokeLinejoin="round"
            // Set the strokeWidth attribute of the path element to be 2
            strokeWidth="2"
            // Set the d attribute of the path element to be the path data for an empty star
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      )}
    </span>
  );
}
