import React, { useState } from "react";

const SelectDropdown = () => {
  let [country, setCountry] = useState("");
  let [selectedCountry, setSelectedCountry] = useState("");

  let handleInputChange = (e) => {
    setCountry(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log({ country });
    setSelectedCountry(country);
    setCountry("");
  };
  return (
    <div>
      <h2>Form Handling - Select Dropdown</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Select Your Country:</label>
        <select name="country" id="country" onChange={handleInputChange}>
          <option value="">--Select your counrty---</option>
          <option value="India">India</option>
          <option value="Japan">Japan</option>
          <option value="Russia">Russia</option>
          <option value="China">China</option>
        </select>
        <button>Submit</button>
      </form>

      {selectedCountry && <h2>Selected Counrty: {selectedCountry}</h2>}
    </div>
  );
};

export default SelectDropdown;
