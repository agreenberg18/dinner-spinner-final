import { useState } from "react";

import Location from "./Location";
import OpenOnly from "./OpenOnly";
import Price from "./Price";
import Stars from "./Stars";
import Range from "./Range";

function Inputs({ loading, setInputData }) {
  const [LocationData, setLocationData] = useState("");
  const [OpenOnlyData, setOpenOnlyData] = useState(true);
  const [PriceData, setPriceData] = useState("3,4");
  const [StarsData, setStarsData] = useState(3);
  const [RangeData, setRangeData] = useState(3);

  const handleInputData = () => {
    console.log("clickkkk");
    setInputData({
      location: LocationData,
      openOnly: OpenOnlyData,
      price: PriceData,
      stars: StarsData,
      range: RangeData,
    });
  };
  return (
    <>
      <Location
        LocationData={LocationData}
        setLocationData={setLocationData}
      ></Location>
      <Range RangeData={RangeData} setRangeData={setRangeData}></Range>
      <Price PriceData={PriceData} setPriceData={setPriceData}></Price>
      <Stars StarsData={StarsData} setStarsData={setStarsData}></Stars>
      <OpenOnly
        OpenOnly={OpenOnlyData}
        setOpenOnlyData={setOpenOnlyData}
      ></OpenOnly>
      <div>
        <button
          disabled={(LocationData.length > 2 ? false : true) || loading}
          onClick={handleInputData}
          id="getRestBtn"
          className="bg-black  text-white text-lg tracking-wider font-medium  py-2.5 px-8 border-2 border-black  rounded-full mr-6  btn1"
        >
          {loading ? (
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-green-500"
              role="status"
            >
              <span className="visually-hidden">|</span>
            </div>
          ) : (
            <div></div>
          )}
          Get Restaurants
        </button>
      </div>
    </>
  );
}
export default Inputs;
