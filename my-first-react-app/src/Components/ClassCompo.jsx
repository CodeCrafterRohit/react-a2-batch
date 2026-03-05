import React, { Component } from "react";

export default class ClassCompo extends Component {
  constructor(props) {
    (super(props), (this.state = {}), (this.props = {}));
  }
  render() {
    return <div>ClassCompo</div>;
  }
}
