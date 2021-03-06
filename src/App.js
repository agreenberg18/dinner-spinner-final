import React from "react";

import { useState, useEffect } from "react";
import { Box, Flex, Center } from "@chakra-ui/react";
import burger from "./assets/burger.png";
import logo from "./assets/logo.png";

import Inputs from "./UI/Inputs";
import RestWheel from "./UI/RestWheel";
import ModalWinner from "./UI/ModalWinner";

import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-NMKSMHQ",
};

TagManager.initialize(tagManagerArgs);

function App() {
  const [inputData, setInputData] = useState({});
  const [RestaurantData, setRestaurantData] = useState({});
  const [userShowWheel, setUserShowWheel] = useState(false);
  const [winner, setWinner] = useState({});
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [spin, setSpin] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  useEffect(() => {
    if (inputData.range !== undefined) {
      console.log(inputData);
      setInputData(inputData);
      getRestaurantData();
      setUserShowWheel(true);
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
    <Flex
      backgroundImage="url('./assets/bg.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      flexDirection="column"
      justifyContent="space-between"
      className="theBody"
    >
      <Box>
        <section className="md:pl-14 lg:pl-28 pt-5 sec">
          <h1 className="text-black md:text-6xl lg:text-6xl font-normal text-center h1-like">
            Dinner Spinner
          </h1>
          <p className="text-center text-black text-xl pb-6">
            What's for Dinner?
          </p>
        </section>
        {!userShowWheel ? (
          <div className="ml-5 mr-5 sm:grid md:grid lg:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            <div>
              <Inputs loading={loading} setInputData={setInputData}></Inputs>
            </div>
            <div>
              <img src={burger} className="img" />
            </div>
          </div>
        ) : (
          <section className="md:pl-14 lg:pl-28 pt-5">
            <div className="flex flex-col items-center content-center justify-center ">
              <div className="">
                <RestWheel
                  RestaurantData={RestaurantData}
                  setRestaurantData={setRestaurantData}
                  setWinner={setWinner}
                  openModal={openModal}
                  setUserShowWheel={setUserShowWheel}
                  spin={spin}
                  setSpin={setSpin}
                ></RestWheel>
              </div>
              <div>
                <div className=" text-center">
                  <span
                    onClick={() => {
                      setUserShowWheel(false);
                    }}
                    className="text-lg unselectable"
                  >
                    <i
                      className="fa fa-long-arrow-left  pr-2"
                      aria-hidden="true"
                    ></i>
                    Back
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}
        <ModalWinner
          modal={modal}
          setModal={setModal}
          winner={winner}
        ></ModalWinner>
      </Box>
      <Center className="secBox" alignItems="flex-end">
        <img className="logo" src={logo} alt="logo" />
      </Center>
    </Flex>
  );
}

export default App;
