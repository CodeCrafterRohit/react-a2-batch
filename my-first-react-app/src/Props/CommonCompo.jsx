import React from "react";
import DefaultProps from "./DefaultProps";
import PropsChild from "./PropsChild";
import UserComponent from "./UserComponent";

const CommonCompo = () => {
  return (
    <>
      {/* <DefaultProps />
      <DefaultProps name="John" /> */}
      {/* <PropsChild>Simple Text</PropsChild> */}
      <PropsChild>
        <h1>Hello Children Component</h1>
        <p>You can access me by using props.children</p>
        <UserComponent />
      </PropsChild>
    </>
  );
};

export default CommonCompo;
