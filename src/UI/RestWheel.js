import { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";

function RestWheel({
  RestaurantData,
  setWinner,
  openModal,
  setUserShowWheel,
  spin,
  setSpin,
}) {
  const [data, setData] = useState({});
  const [spinWheel, setSpinWheel] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const showInputs = () => {
    setUserShowWheel(false);
  };
  function getRandom(length) {
    return Math.floor(Math.random() * length);
  }

  function getRandomSample(array, size) {
    var length = array.length;

    for (var i = size; i--; ) {
      var index = getRandom(length);
      var temp = array[index];
      array[index] = array[i];
      array[i] = temp;
    }

    return array.slice(0, size);
  }
  useEffect(() => {
    if (Object.keys(RestaurantData).length > 0) {
      let len =
        Object.keys(RestaurantData.businesses).length < 15
          ? Object.keys(RestaurantData.businesses).length
          : 15;
      console.log(Object.keys(RestaurantData).length);
      const randomize = getRandomSample(RestaurantData.businesses, len);
      //const result = RestaurantData.businesses.map((restaurant, index) => {
      const result = randomize.map((restaurant, index) => {
        let option =
          restaurant.name.length > 15
            ? restaurant.name.slice(0, 15)
            : restaurant.name;
        switch (index % 5) {
          case 0:
            return {
              ...restaurant,
              option: option,
              style: { backgroundColor: "#9B51F5", textColor: "black" },
            };
          case 1:
            return {
              ...restaurant,
              option: option,
              style: { backgroundColor: "#F250D7", textColor: "black" },
            };
          case 2:
            return {
              ...restaurant,
              option: option,
              style: { backgroundColor: "#BAFFAE", textColor: "black" },
            };
          case 3:
            return {
              ...restaurant,
              option: option,
              style: { backgroundColor: "#D14AF0", textColor: "black" },
            };
          case 4:
            return {
              ...restaurant,
              option: option,
              style: { backgroundColor: "#F4AEFF", textColor: "black" },
            };
        }
      });
      setData(result);
    }
  }, [RestaurantData]);

  useEffect(() => {
    if (spin === true) {
      setSpin(false);
      handleSpinClick();
    }
  }, [spin]);

  const handleSpinClick = () => {
    console.log(data);
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setSpinWheel(true);
  };
  const handleWinner = () => {
    console.log("in wheel: winner " + data[prizeNumber]["name"]);
    setWinner(data[prizeNumber]);
    openModal();
  };

  return (
    <>
      <Wheel
        mustStartSpinning={spinWheel}
        outerBorderWidth={2}
        innerRadius={1}
        textDistance={60}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setSpinWheel(false);
          handleWinner();
        }}
        backgroundColors={["#3e3e3e", "#df3428"]}
        textColors={["#ffffff"]}
      />
    </>
  );
}

export default RestWheel;
