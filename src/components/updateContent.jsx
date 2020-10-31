import React, { Component } from "react";

class UpdateContent extends Component {
  onChange = () => {
    let index = this.props.data;
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
            <input className="title" type="text" name="title" />
          </p>
          <p>
            <textarea className="text" name="desc"></textarea>
          </p>
          <p>
            <input type="submit" value="수정하기" onClick={this.onChange} />
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
