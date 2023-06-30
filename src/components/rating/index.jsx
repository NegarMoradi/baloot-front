import React, { useState } from "react";
import "./rating.css";
import starBlank from "../../assets/icons/starBlank.png";
import starFill from "../../assets/icons/starFill.png";
const StarRating = ({rating, setRating}) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(10)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">
              {index <= (hover || rating) ? (
                <img src={starFill} alt="star" />
              ) : (
                <img src={starBlank} alt="star" />
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
