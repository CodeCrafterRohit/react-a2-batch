import React, { useState } from "react";

const FileUpload = () => {
  let [resumeFile, setResumeFile] = useState(null);

  let handleInputChange = (e) => {
    // console.log(e.target.files[0]);
    let file = e.target.files[0];
    setResumeFile(file);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(resumeFile);
  };
  return (
    <div>
      <h1>Form Handling - Input type file</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Upload Resume:</label>
        <input
          type="file"
          name="resumeFile"
          id="resumeFile"
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>

      {resumeFile && (
        <>
          <h2>File Name: {resumeFile.name}</h2>
          <h2>File Size: {resumeFile.size}</h2>
          <h2>File Type: {resumeFile.type}</h2>
        </>
      )}
    </div>
  );
};

export default FileUpload;
