import React, { useState } from "react";

const DataList = () => {
  let [city, setCity] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log({ city });
    setCity("");
  };

  return (
    <div>
      <h1>Form Handling - DataList Dropdown</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Select your city</label>
        <input
          type="text"
          name="city"
          list="cities"
          placeholder="Type or select your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <datalist id="cities">
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Surat">Surat</option>
          <option value="Vadaora">Vadaora</option>
          <option value="Amreli">Amreli</option>
        </datalist>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default DataList;
