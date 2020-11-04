import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

class Control extends Component {
  onChange = () => {
    let index = this.props.index;
    let contents = [...this.props.contents];
    contents.splice(index, 1);
    this.props.onChangeContents(contents);
  };

  render() {
    return (
      <ul className="control_ul">
        <li className="control_li">
          <button
            href="/"
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangeMode("create");
            }}
          >
            <FontAwesomeIcon className="icon" icon={faPlus} />
          </button>
        </li>
        <li className="control_li">
          <button
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (this.props.mode !== "welcome") {
                this.props.onChangeMode("update");
              }
            }}
          >
            <FontAwesomeIcon className="icon" icon={faPen} />
          </button>
        </li>
        <li className="control_li">
          <button
            className="control_input"
            type="button"
            value="delete"
            onClick={(e) => {
              e.preventDefault();
              if (this.props.control !== "welcome") {
                this.onChange();
                this.props.onChangeMode("delete");
              } else {
                this.props.onChangeMode("delete");
              }
            }}
          >
            <FontAwesomeIcon className="icon" icon={faEraser} />
          </button>
        </li>
      </ul>
    );
  }
}

export default Control;
