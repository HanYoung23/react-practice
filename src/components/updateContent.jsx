import React, { Component } from "react";

class UpdateContent extends Component {
  onChange = () => {
    let index = this.props.data;
    let items = [...this.props.contents];
    let item = { ...items[index] };
    item.id = index;
    item.title = document.querySelector(".title").value;
    item.desc = document.querySelector("textarea").value;
    items[index] = item;
    console.log(item);
    this.props.onChangePage(items);
  };

  onSubmit = (e) => {
    e.preventDefault();
  };
  onDelete = () => {
    this.props.onChangeMode("delete");
  };

  render() {
    return (
      <article>
        <h2>Update</h2>
        <form action="/" method="post" onSubmit={this.onSubmit}>
          <p>
            <input
              value={this.props.title}
              className="title"
              type="text"
              name="title"
            />
          </p>
          <p>
            <textarea className="text" name="desc">
              {this.props.description}
            </textarea>
          </p>
          <p>
            <input
              type="submit"
              value="수정하기"
              onClick={this.onDelete}
              onChange={this.onChange}
            />
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
