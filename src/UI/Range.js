function Range({ RangeData, setRangeData }) {
  const onSlideChange = (val) => {
    setRangeData(val.target.value);
  };
  return (
    <div className="mb-16">
      <h6 className="text-black font-semibold text-lg pb-3">Within</h6>
      <div className="h-rs-container">
        <div className="h-rs">
          <span className="h-rs-indicator">
            {RangeData} <span>miles</span>
          </span>
          <input
            className="h-rs-line"
            type="range"
            value={RangeData}
            step="1"
            min="1"
            max="15"
            onChange={onSlideChange}
          />
        </div>
      </div>
    </div>

    /* <Slider
        min={1}
        max={20}
        step={1}
        aria-label="slider-ex-6"
        defaultValue={5}
        onChange={onSlideChange}
      >
        <SliderMark value={RangeData} textAlign="center" mt="3" ml="-5">
          {RangeData} miles
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider> */
  );
}

export default Range;
