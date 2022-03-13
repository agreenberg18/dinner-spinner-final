import { useState } from "react";

import Location from "./Location";
import OpenOnly from "./OpenOnly";
import Price from "./Price";
import Stars from "./Stars";
import Range from "./Range";

function Inputs({ loading, setInputData }) {
  const [LocationData, setLocationData] = useState("");
  const [OpenOnlyData, setOpenOnlyData] = useState(true);
  const [PriceData, setPriceData] = useState(3);
  const [StarsData, setStarsData] = useState(3);
  const [RangeData, setRangeData] = useState(3);

  const handleInputData = () => {
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
        <button className="bg-black  text-white text-lg tracking-wider font-medium  py-2.5 px-8 border-2 border-black  rounded-full mr-6   hover:bg-[#bdffd7] btn1 hover:text-black">
          Get Restaurants
        </button>
      </div>
      {/* <Location
        LocationData={LocationData}
        setLocationData={setLocationData}
      ></Location>
      <OpenOnly
        OpenOnly={OpenOnlyData}
        setOpenOnlyData={setOpenOnlyData}
      ></OpenOnly>
      <Price PriceData={PriceData} setPriceData={setPriceData}></Price>
      <Stars StarsData={StarsData} setStarsData={setStarsData}></Stars>
      <Range RangeData={RangeData} setRangeData={setRangeData}></Range>
      <input
        type="Button"
        isLoading={loading}
        mt={8}
        isDisabled={LocationData.length > 2 ? false : true}
        onClick={handleInputData}
      >
        Get Restaurants
      </input> */}
    </>
  );
}
export default Inputs;
