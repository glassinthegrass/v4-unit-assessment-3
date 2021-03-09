import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  handleClear() {
    this.setState({ userInput: "" });
    this.props.reset();
  }

  render() {
    return (
      <h1 className="search-bar">
        <input
          className="search"
          value={this.state.userInput}
          onChange={(event) => this.handleChange(event.target.value)}
        />
        <button
          className="search button"
          onClick={() => this.props.filterBooks(this.state.userInput)}
        >
          search
        </button>
        <button className="search button" onClick={() => this.handleClear()}>
          clear search
        </button>
      </h1>
    );
  }
}

export default SearchBar;