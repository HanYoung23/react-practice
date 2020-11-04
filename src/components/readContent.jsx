import { Component } from "react";

class ReadContent extends Component {
  render() {
    let title, desc, newText;
    if (this.props.mode === "welcome") {
      title = this.props.welcome.title;
      desc = this.props.welcome.desc;
      newText = desc.split("\n").map((str) => <p>{str}</p>);
    } else if (this.props.mode !== "welcome") {
      title = this.props.title;
      desc = this.props.desc;
      newText = desc.split("\n").map((str) => <p>{str}</p>);
    }

    return (
      <article className="content_article">
        <h2 className="content_header">{title}</h2>
        {newText}
      </article>
    );
  }
}

export default ReadContent;
