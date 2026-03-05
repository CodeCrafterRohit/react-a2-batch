import React from "react";

const Child = (props) => {
    //* Here props is default parameter which will accept all the data coming from the parent component in the form of object.
  console.log(props);
  //   Consuming a props
  //   console.log(props.name);
  console.log(props);

  //! 1st of way of destructuring:
  let { name, age, skills, address, isMarried, status, sayHello, jobHaiKyHai } =
    props;
  console.log(name);
  console.log(skills);
  console.log(skills[1]);

  return (
    <div>
      <h1>Child Component</h1>
      <h2>Name: {name}</h2>
      <h2>Age:{age}</h2>
      <h2>
        Skills:{skills[0]},{skills[1]}
      </h2>
      <h2>Status: {String(status)}</h2>
      <h2>isMarried:{isMarried}</h2>
      <h2>Job: {jobHaiKyHai}</h2>
      <button onClick={sayHello}>SayHello</button>
    </div>
  );
};

export default Child;
