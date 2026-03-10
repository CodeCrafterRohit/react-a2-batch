import React, { useState } from "react";

const RadioInput = () => {
  const [formData, setFormData] = useState({
    gender: "",
  });

  //! state for displaying the selected gender
  let [selectedGender, setSelectedGender] = useState("");

  //! handleInputChange
  let handleInputChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  };

  //! handleSubmit
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSelectedGender(formData.gender);
    setFormData({ gender: "" });
  };
  return (
    <div>
      <h1>Form Handling - Radio Input</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Gender:</label>
        <label htmlFor="male">
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleInputChange}
          />
          Male
        </label>
        <label htmlFor="female">
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleInputChange}
          />
          Female
        </label>
        <label htmlFor="others">
          <input
            type="radio"
            name="gender"
            id="others"
            value="others"
            checked={formData.gender === "others"}
            onChange={handleInputChange}
          />
          Others
        </label>{" "}
        <br />
        <button>Submit</button>
      </form>
      <p>Selected Gender: {selectedGender}</p>
    </div>
  );
};

export default RadioInput;
