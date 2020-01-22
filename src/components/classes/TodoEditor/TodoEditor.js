import React, { Component } from "react";

class TodoEditor extends Component {
  state = { input: "" };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit = e => {
    const { input } = this.state;
    const { addTodo } = this.props;

    e.preventDefault();

    addTodo(input);
    this.setState({
      input: ""
    });
  };

  render() {
    const { input } = this.state;
    return (
      <form onSubmit={this.handleSubmit} action="">
        <input onChange={this.handleChange} type="text" value={input} />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default TodoEditor;
