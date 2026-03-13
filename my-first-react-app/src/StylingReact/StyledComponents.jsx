import React from "react";
import styled from "styled-components";

let H1 = styled.h1`
  color: red;
  background-color: yellow;
`;

let Title = styled.p`
  color: blue;
`;

let Btn = styled.button`
  border: 0px;
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border-radius: 5px;
`;
let Btn1 = styled.button`
  border: 0px;
  padding: 10px 20px;
  background-color: red;
  color: white;
  border-radius: 5px;
`;

const StyledComponents = () => {
  return (
    <div>
      <H1>Styling By Using Styled Components</H1>
      <Title>Hello React JS</Title>
      <Btn>Click Me</Btn>
      <Btn1>Click Me</Btn1>
    </div>
  );
};

export default StyledComponents;
