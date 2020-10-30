import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: null,
      desc: null,
    };
  }

  onChange = () => {
    const id = this.props.onChangeId + 1;
    const title = document.querySelector(".title").value;
    const text = document.querySelector("textarea").value;
    if (title && text !== "") {
      this.setState({ id: id, title: title, desc: text });
    }
  };

  onSubmit = (e) => {
    let title = document.querySelector(".title").value;
    let text = document.querySelector("textarea").value;
    e.preventDefault();
    if (title && text !== "") {
      this.props.onChangeContents(this.state);
      document.querySelector(".title").value = "";
      document.querySelector("textarea").value = "";
    }
  };

  render() {
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/"
          method="post"
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        >
          <p>
            <input
              className="title"
              type="text"
              name="title"
              placeholder="title"
            />
          </p>
          <p>
            <textarea
              className="text"
              name="desc"
              placeholder="description"
            ></textarea>
          </p>
          <p>
            <input type="submit" value="제출하기" />
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
