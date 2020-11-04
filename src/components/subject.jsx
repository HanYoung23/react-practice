import { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <header className="sub_header">
        <h1 className="sub_h1">
          <a
            className="sub_text"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangePage("welcome");
            }}
          >
            {this.props.title}
          </a>
        </h1>
        <div className="sub_subText">{this.props.sub}</div>
      </header>
    );
  }
}

export default Subject;
