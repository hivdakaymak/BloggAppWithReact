import React, { Component } from "react";

export default class BlogForm extends Component {
  state = {
    title: "",
    description: "",
    error: "",
  };

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.description) {
      this.setState({ error: "Hata" });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        dateAdded: Date.now(),
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              placeholder="Title"
              value={this.state.title}
              onChange={this.state.onTitleChange}
            />
          </div>
          <div>
            <textarea
              placeholder="Description"
              value={this.state.description}
              onChange={this.state.onDescriptionChange}
            ></textarea>
          </div>
          <div>
            <button type="submit">Save Change</button>
          </div>
        </form>
      </div>
    );
  }
}
