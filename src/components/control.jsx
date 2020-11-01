import React, { Component } from "react";

class Control extends Component {
  render() {
    return (
      <ul>
        <li>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangeMode("create");
            }}
          >
            create
          </a>
        </li>
        <li>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (this.props.mode !== "welcome") {
                this.props.onChangeMode("update");
              }
            }}
          >
            update
          </a>
        </li>
        <li>
          <input
            type="button"
            value="delete"
            onClick={(e) => {
              e.preventDefault();
              if (this.props.mode !== "welcome") {
                this.props.onChangeMode("delete");
              }
            }}
          />
        </li>
      </ul>
    );
  }
}

export default Control;
