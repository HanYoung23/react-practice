import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      desc: props.desc,
    };
  }

  onChangeTitle = () => {
    let title = document.querySelector(".title").value;
    this.setState({ title: title });
  };

  onChangeDesc = () => {
    let desc = document.querySelector("textarea").value;
    this.setState({ desc: desc });
  };

  onEdit = () => {
    let index = this.props.index;
    let items = [...this.props.contents];
    let item = { ...items[index] };
    item.id = index + 1;
    item.title = document.querySelector(".title").value;
    item.desc = document.querySelector("textarea").value;
    items[index] = item;
    this.props.onChangeContents(items);
    this.props.onChangeMode("delete");
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <article>
        <h2>Update</h2>
        <form action="/" method="post" onSubmit={this.onSubmit}>
          <p>
            <input
              className="title"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </p>
          <p>
            <textarea
              className="text"
              name="desc"
              value={this.state.desc}
              onChange={this.onChangeDesc}
            ></textarea>
          </p>
          <p>
            <input type="submit" value="수정하기" onClick={this.onEdit} />
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
