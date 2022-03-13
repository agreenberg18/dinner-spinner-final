import React from "react";

import { useState, useEffect } from "react";
import burger from "./assets/burger.png";

import Inputs from "./UI/Inputs";
import RestWheel from "./UI/RestWheel";
import ModalWinner from "./UI/ModalWinner";

function App() {
  const [inputData, setInputData] = useState({});
  const [RestaurantData, setRestaurantData] = useState({});
  const [winner, setWinner] = useState({});
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  useEffect(() => {
    if (inputData.range !== undefined) {
      console.log(inputData);
      setInputData(inputData);
      getRestaurantData();
    }
  }, [inputData]);

  const getRestaurantData = async () => {
    setLoading(true);
    var meters = parseInt(inputData.range) * 1609;
    window.dataLayer.push({
      event: "getRestaurants",
      restaurantData: {
        location: inputData.location,
        price: inputData.price,
        open_now: inputData.openOnly,
        radius: inputData.range,
        rating: inputData.stars,
      },
    });

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    var params =
      "location=" +
      encodeURIComponent(inputData.location) +
      "&" +
      "price=" +
      inputData.price +
      "&open_now=" +
      inputData.openOnly +
      "&radius=" +
      meters +
      "&limit=50&sort_by=rating&term=restaurants";

    var restaurants = await fetch(
      "https://dinnerspinner.io/testing/getRestaurants?" + params,
      requestOptions
    );
    console.log(
      "https://dinnerspinner.io/testing/getRestaurants?categories=restaurants, All" +
        params
    );
    var restaurantsFmt = await restaurants.json();
    if (restaurantsFmt.error) {
      alert("Sorry, No Restaurants matched that criteria!");
      setLoading(false);
    } else if (restaurantsFmt.businesses.length > 0) {
      setRestaurantData(restaurantsFmt);
      setLoading(false);
    } else {
      alert("Sorry, No Restaurants matched that criteria!");
      setLoading(false);
    }
    console.log(restaurantsFmt);
    return restaurantsFmt;
  };
  return (
    <div className="sec">
      <section className="md:pl-14 lg:pl-28 pt-5 sec">
        <h1 className="text-black md:text-6xl lg:text-6xl font-normal text-center h1-like">
          Dinner Spinner
        </h1>
        <p className="text-center text-black text-xl pb-20">
          What's for dinner?
        </p>
        <Inputs loading={loading} setInputData={setInputData}></Inputs>
        <div className="col2">
          <img src={burger} className="img" />
        </div>
      </section>
    </div>
  );
}

export default App;
