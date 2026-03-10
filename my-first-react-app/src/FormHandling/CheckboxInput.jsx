import React, { useState } from "react";

const CheckboxInput = () => {
  //! state for skills in the form object
  let [formData, setFormData] = useState({
    skills: [],
  });

  let { skills } = formData;

  let handleInputChange = (e) => {
    // setFormData({ ...formData, skills: e.target.value });
    let { value, checked } = e.target;

    if (checked) {
      //! If checked == true that means add the skill in the given array.
      setFormData({ skills: [...skills, value] });
    } else {
      //! If you unchecked any skill that means it will remove the skill from the given array.
      setFormData({ skills: skills.filter((skill) => skill !== value) });
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ skills: [] });
  };
  return (
    <div>
      <h2>Form Handling - Checkbox Input</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Select Skills:</label>
        <label htmlFor="html">
          <input
            type="checkbox"
            name="skills"
            id="html"
            value="html"
            onChange={handleInputChange}
            checked={skills.includes("html")}
          />
          HTML
        </label>

        <label htmlFor="css">
          <input
            type="checkbox"
            name="skills"
            id="css"
            value="css"
            onChange={handleInputChange}
            checked={skills.includes("css")}
          />
          CSS
        </label>
        <label htmlFor="js">
          <input
            type="checkbox"
            name="skills"
            id="js"
            value="js"
            onChange={handleInputChange}
            checked={skills.includes("js")}
          />
          JS
        </label>
        <label htmlFor="react">
          <input
            type="checkbox"
            name="skills"
            id="react"
            value="react"
            onChange={handleInputChange}
            checked={skills.includes("react")}
          />
          React
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CheckboxInput;
