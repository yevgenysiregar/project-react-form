import React from "react";

export default class Form extends React.Component {
  state = {
    name: "",
    age: ""
  };

  changeData = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitResult = event => {
    event.preventDefault();
    alert(`Name: ${this.state.name} 
Age: ${this.state.age}`);
  };

  render() {
    return (
      <form onSubmit={this.submitResult}>
        <fieldset>
          <label>Name:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.changeData}
            name="name"
          />
          <label>Age:</label>
          <input
            type="text"
            value={this.state.age}
            onChange={this.changeData}
            name="age"
          />
        </fieldset>
        <input type="submit" value="Submit" />
        <pre>
          <code>{this.state.name}</code>
        </pre>
      </form>
    );
  }
}
