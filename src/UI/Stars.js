// import Rating from "react-rating";

function Stars({ StarsData, setStarsData }) {
  const setStars = (val) => {
    setStarsData(val);
  };
  return (
    <div className="mb-8S">
      <h6 className="text-black font-semibold text-lg pb-4">Reviews</h6>
      <input id="star_rating" name="star_rating" type="hidden" />
      <ul>
        <li className="">
          <i className="fa fa-star fa-fw"></i>
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
      </ul>
    </div>
    // <>
    //   <Rating
    //     onChange={setStars}
    //     start={0}
    //     stop={5}
    //     step={1}
    //     fractions={2}
    //     initialRating={StarsData}
    //     emptySymbol="bi bi-star"
    //     fullSymbol="bi bi-star-fill"
    //   />
    // </>
  );
}

export default Stars;
