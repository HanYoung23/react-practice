import { Component } from "react";

class CreateContent extends Component {
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
    this.setState({ id: id, title: title, desc: text });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onChangeContents(this.state);
    this.setState({ id: null, title: null, desc: null });
  };

  render() {
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/"
          method="post"
          onSubmit={this.handleSubmit}
          onChange={this.onChange}
        >
          <p>
            <input
              value={this.state.title}
              className="title"
              type="text"
              name="title"
              placeholder="title"
            />
          </p>
          <p>
            <textarea className="text" name="desc" placeholder="description">
              {this.state.text}
            </textarea>
          </p>
          <p>
            <input type="submit" value="제출하기" />
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;
