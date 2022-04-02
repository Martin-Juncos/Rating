import { useState } from "react";

const Rating= () => {
    const stars = ["☆", "☆", "☆", "☆", "☆"];

  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [isHovering, setIsHovering] = useState(false);

  const [clickedIndex, setClickedIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = (index) => {
    setIsHovering(false);
    setHoveredIndex(-1);
  };

  const handleClick = (index) => {
    setClickedIndex(index);
  };
  return (
    <div className="App">
      <p>Rating</p>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
      >
        {stars.map((star, index) => {
          const indexToCheck = isHovering ? hoveredIndex : clickedIndex;
          const isBefore = index < indexToCheck;
          const isCurrent = index === indexToCheck;
          return (
            <button
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              style={{
                cursor: "pointer",
                background: isBefore || isCurrent ? "yellow" : "none",
                transition: isCurrent ? "all .2s ease-in-out" : "none",
                transform: isCurrent && isHovering ? "scale(1.3)" : "none"
              }}
              onClick={() => handleClick(index)}
            >
              {star}
            </button>
          );
        })}
      </div>
    </div>
  );

}
export default Rating;