import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    document.title = `You clicked ${this.state.count} times`;
    this.interval = setInterval(() => {
      console.log("Interval wird ausgeführt");
    }, 5000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (prevState.count !== this.state.count) {
      document.title = `You clicked ${this.state.count} times`;
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.interval);
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>React Lifecycle Demo</h1>
        <p>You clicked {this.state.count} times.</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}