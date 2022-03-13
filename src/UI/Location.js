function Location({ LocationData, setLocationData }) {
  const setLocation = (event) => {
    setLocationData(event.target.value);
  };
  return (
    <>
      <h6 className="text-black font-semibold text-lg pb-4">Location</h6>
      <input
        className="locationInput"
        autoComplete="off"
        onChange={setLocation}
        id="Location"
        type="text"
        name="location"
        placeholder="City/Zip/Address"
        className="border-2 border-black rounded-full 
	        px-4
	        py-1.5 w-80 mb-8 textbox"
      ></input>
    </>
  );
}
export default Location;
