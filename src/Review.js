import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  let len = people.length - 1;

  const next = () => {
    if (index < len && index >= 0) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const prev = () => {
    if (index <= len && index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(3);
    }
  };

  const surpriseMe = () => {
    setIndex(Math.floor(Math.random() * len));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="text">{text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft onClick={prev} />
          <FaChevronRight onClick={next} />
        </button>
      </div>
      <button className="random-btn" onClick={surpriseMe}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
