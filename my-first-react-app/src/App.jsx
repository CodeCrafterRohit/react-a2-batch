import React, { use } from "react";
import Fragment1 from "./ReactFragments/Fragment1";
import Fragment2 from "./ReactFragments/Fragment2";
import FunCompo1 from "./Components/FunCompo1";
import FunCompo2 from "./Components/FunCompo2";
import Parent from "./Props/Parent";
// import Component1 from "./Props/Component1";
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
import InlineEvent from "./EventHandling/InlineEvent";
import ExternalEventHandling from "./EventHandling/ExternalEventHandling";
import EventWithParameter from "./EventHandling/EventWithParameter";
import ChangeEvent from "./EventHandling/ChangeEvent";
import SubmitEvent from "./EventHandling/SubmitEvent";
import IfElseRendering from "./ConditionalRendering/IfElseRendering";
import TernaryOperator from "./ConditionalRendering/TernaryOperator";
import ShortCircuit from "./ConditionalRendering/ShortCircuit";
import FormHandling1 from "./FormHandling/FormHandling1";
import SingleStateObject from "./FormHandling/SingleStateObject";
import RadioInput from "./FormHandling/RadioInput";
import CheckboxInput from "./FormHandling/CheckboxInput";
import SelectDropdown from "./FormHandling/SelectDropdown";
import DataList from "./FormHandling/DataList";
import FileUpload from "./FormHandling/FileUpload";
import FormHandlingTask from "./FormHandling/FormHandlingTask";
import UncontrolledForm from "./FormHandling/UncontrolledForm";
import LoginWithUncontrolled from "./FormHandling/LoginWithUncontrolled";
import InlineStyling from "./StylingReact/InlineStyling";
import InternalStyling from "./StylingReact/InternalStyling";
// import ExternalStyling from "./StylingReact/ExternalStyling";
import Component1 from "./StylingReact/Component1";
import Component2 from "./StylingReact/Component2";
import StyledComponents from "./StylingReact/StyledComponents";
import TailwindCSSSetup from "./StylingReact/TailwindCSSSetup";
import MaterialUiDemo from "./StylingReact/MaterialUiDemo";
import LoginWithEmailAndPassword from "./ReactIconsAndNotifications/LoginWithEmailAndPassword";

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
      {/* <ProductList /> */}
      {/* <InlineEvent /> */}
      {/* <ExternalEventHandling /> */}
      {/* <EventWithParameter /> */}
      {/* <ChangeEvent /> */}
      {/* <SubmitEvent/> */}
      {/* <IfElseRendering /> */}
      {/* <TernaryOperator /> */}
      {/* <ShortCircuit /> */}
      {/* <FormHandling1 /> */}
      {/* <SingleStateObject /> */}
      {/* <RadioInput /> */}
      {/* <CheckboxInput /> */}
      {/* <SelectDropdown /> */}
      {/* <DataList /> */}
      {/* <FileUpload /> */}
      {/* <FormHandlingTask /> */}
      {/* <UncontrolledForm /> */}
      {/* <LoginWithUncontrolled /> */}
      {/* <InlineStyling />
      <InternalStyling />
      <ExternalStyling /> */}
      {/* <Component1 />
      <Component2 /> */}
      {/* <StyledComponents /> */}
      {/* <TailwindCSSSetup /> */}
      {/* <MaterialUiDemo /> */}
      <LoginWithEmailAndPassword />
    </React.Fragment>
  );
};

export default App;
