// import Rating from "react-rating";
import { useState } from "react";
import Rating from "react-rating";

function Stars({ StarsData, setStarsData }) {
  const setStars = (val) => {
    setStarsData(val);
  };

  const handleHover = (star) => {};
  return (
    <div className="mb-S">
      <h6 className="text-black font-semibold text-lg pb-2">Reviews</h6>
      <Rating
        className="star"
        onChange={setStars}
        start={0}
        stop={5}
        step={1}
        fractions={2}
        initialRating={StarsData}
        emptySymbol="fa fa-2x fa-star fa-fw"
        fullSymbol="fa fa-2x fa-star fa-fw highlight-stars"
      />
      {/* <input id="star_rating" name="star_rating" type="hidden" />
      <ul className="mb-2">
        <li
          onMouseEnter={(e) => setStars(true, e)}
          onMouseLeave={(e) => setStars(false, e)}
          value={1}
          className=""
        >
          <i className="fa fa-star fa-fw "></i>
        </li>
        <li className="">
          <i className="fa fa-star fa-fw"></i>
        </li>
        <li className="">
          <i className="fa fa-star fa-fw"></i>
        </li>
        <li>
          <i className="fa fa-star fa-fw"></i>
        </li>
        <li>
          <i className="fa fa-star fa-fw"></i>
        </li>
      </ul> */}
    </div>
  );
}

export default Stars;
