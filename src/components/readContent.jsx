import { Component } from "react";

class ReadContent extends Component {
  render() {
    let title, desc;
    if (this.props.mode === "welcome") {
      title = this.props.welcome.title;
      desc = this.props.welcome.desc;
    } else if (this.props.mode !== "welcome") {
      title = this.props.title;
      desc = this.props.desc;
    }

    return (
      <article>
        <h2>{title}</h2>
        {desc}
      </article>
    );
  }
}

export default ReadContent;
