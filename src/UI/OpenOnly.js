function OpenOnly({ OpenOnlyData, setOpenOnlyData }) {
  const openOnlyChange = (event) => {
    setOpenOnlyData(event.target.checked);
  };
  return (
    <div className="flex mb-10">
      <h6 className="text-black font-semibold text-lg pb-4">Open only</h6>
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative ml-5 -mt-2.5">
          <input type="checkbox" id="toggleB" className="sr-only" />
          <div className="block bg-white border-2 border-black w-10 h-6 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-black w-4 h-4 rounded-full transition"></div>
        </div>
      </label>
    </div>
    // <HStack>
    //   <FormLabel mr={0} htmlFor="openOnly">
    //     Open Only
    //   </FormLabel>
    //   <Switch
    //     onChange={openOnlyChange}
    //     defaultChecked={!OpenOnlyData}
    //     id="openOnly"
    //     size="lg"
    //   ></Switch>
    // </HStack>
  );
}

export default OpenOnly;
