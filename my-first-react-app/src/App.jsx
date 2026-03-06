import React, { use } from "react";
import Fragment1 from "./ReactFragments/Fragment1";
import Fragment2 from "./ReactFragments/Fragment2";
import FunCompo1 from "./Components/FunCompo1";
import FunCompo2 from "./Components/FunCompo2";
import Parent from "./Props/Parent";
import Component1 from "./Props/Component1";
import CommonCompo from "./Props/CommonCompo";
import Layout from "./Props/Layout";
import Home from "./Props/Home";
import About from "./Props/About";
import WithoutState from "./State/WithoutState";
import WithState from "./State/WithState";
import CounterWithClass from "./State/CounterWithClass";
import Counter from "./State/Counter";
// import UpdatingMultipleStates from "./State/UpdatingMultipleStates";
import ListRendering from "./ListAndKeys/ListRendering";
import ProductsRendering from "./ListAndKeys/ProductsRendering";
import ProductList from "./TaskStatePropsList/ProductList";

const App = () => {
  let username = "Don";

  return (
    <React.Fragment>
      {/* <h1>Hello React</h1>
      <p>This is subheading</p>
      <img src="https://picsum.photos/300/200" alt="" />
      <br />
      <hr /> */}
      {/* <h1>{username === "" ? "John" : " Guest"}</h1> */}
      {/* <button onClick={}></button> */}

      {/* <Fragment1 /> */}
      {/* <Fragment2 /> */}
      {/* <FunCompo1 />
      <FunCompo2 /> */}
      {/* <Parent /> */}
      {/* <Component1 /> */}
      {/* <CommonCompo /> */}
      {/* <Home />
      <About /> */}
      {/* <WithoutState /> */}
      {/* <WithState /> */}
      {/* <CounterWithClass />
      <hr />
      <Counter /> */}
      {/* <UpdatingMultipleStates /> */}
      {/* <ListRendering /> */}
      {/* <ProductsRendering /> */}
      <ProductList />
    </React.Fragment>
  );
};

export default App;
