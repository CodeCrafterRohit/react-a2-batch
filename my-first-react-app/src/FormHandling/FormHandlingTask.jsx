import React, { useState } from "react";

const FormHandlingTask = () => {
  let [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    skills: [],
    city: "",
    resume: null,
  });

  let {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    gender,
    skills,
    city,
    resume,
  } = formData;

  let handleInputChange = (e) => {
    let { name, value, type, checked } = e.target;

    if (type == "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        skills: checked
          ? [...prevData.skills, value]
          : prevData.skills.filter((skill) => skill != value),
      }));
    } else if (type == "file") {
      let file = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        resume: file,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log("FormData:", formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        skills: [],
        city: "",
        resume: null,
      });
    } else {
      alert("Password does not matched");
      setFormData((prevData) => ({
        ...prevData,
        password: "",
        confirmPassword: "",
      }));
    }
  };
  return (
    <div>
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">FirstName:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="lastName">LastName:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <label htmlFor="gender">Gender:</label>
          <label htmlFor="male">
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={gender === "male"}
              onChange={handleInputChange}
            />{" "}
            Male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={gender === "female"}
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
              checked={gender === "others"}
              onChange={handleInputChange}
            />
            Others
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="skills">Skills:</label>
          <label htmlFor="html">
            <input
              type="checkbox"
              name="skills"
              id="html"
              value="html"
              checked={skills.includes("html")}
              onChange={handleInputChange}
            />
            HTML
          </label>
          <label htmlFor="css">
            <input
              type="checkbox"
              name="skills"
              id="css"
              value="css"
              checked={skills.includes("css")}
              onChange={handleInputChange}
            />
            CSS
          </label>
          <label htmlFor="js">
            <input
              type="checkbox"
              name="skills"
              id="js"
              value="js"
              checked={skills.includes("js")}
              onChange={handleInputChange}
            />
            JS
          </label>
          <label htmlFor="react">
            <input
              type="checkbox"
              name="skills"
              id="react"
              value="react"
              checked={skills.includes("react")}
              onChange={handleInputChange}
            />
            REACT
          </label>
          <label htmlFor="java">
            <input
              type="checkbox"
              name="skills"
              id="java"
              value="java"
              checked={skills.includes("java")}
              onChange={handleInputChange}
            />
            JAVA
          </label>
          <label htmlFor="python">
            <input
              type="checkbox"
              name="skills"
              id="python"
              value="python"
              checked={skills.includes("ptyhon")}
              onChange={handleInputChange}
            />
            PYTHON
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="city">Select Your City:</label>
          <select
            name="city"
            id="city"
            value={city}
            onChange={handleInputChange}
          >
            <option value="">--Select your city--</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Surat">Surat</option>
            <option value="Vadodara">Vadodara</option>
            <option value="Rajkot">Rajkot</option>
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="">Upload Resume:</label>
          <input
            type="file"
            name="resume"
            id="resume"
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormHandlingTask;
