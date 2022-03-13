// import Rating from "react-rating";

function Price({ PriceData, setPriceData }) {
  const updatePrice = (val) => {
    setPriceData(val);
  };
  return (
    <div className=" mb-8">
      <h6 className="text-black font-semibold text-lg pb-4">Price</h6>
      <div className="grid grid-cols-3 gap-2 w-full max-w-screen-sm">
        <div>
          <input className="hidden" id="radio_1" type="radio" name="radio" />
          <label
            className="flex flex-col py-2 border-2 border-black cursor-pointer rounded-full font-medium  text-center bg-white hover:shadow hover:bg-purple-200 "
            htmlFor="radio_1"
          >
            <span className=" ">Cheap</span>
          </label>
        </div>
        <div>
          <input className="hidden" id="radio_2" type="radio" name="radio" />
          <label
            className="flex flex-col py-2 bg-white border-2 border-black cursor-pointer rounded-full font-medium  text-center hover:shadow hover:bg-purple-200 checked:border-blue-600"
            htmlFor="radio_2"
          >
            <span className=" ">Average</span>
          </label>
        </div>
        <div>
          <input className="hidden" id="radio_3" type="radio" name="radio" />
          <label
            className="flex flex-col py-2 border-2 bg-white border-black cursor-pointer rounded-full font-medium  text-center hover:shadow hover:bg-purple-200 checked:border-blue-600 "
            htmlFor="radio_3"
          >
            <span className=" ">Expensive</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Price;
