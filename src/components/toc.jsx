import { Component } from "react";

class TOC extends Component {
  render() {
    const lists = [];
    const contents = this.props.data;
    contents.forEach((el) => {
      lists.push(
        <li key={el.id}>
          <a
            href={"/content/" + el.id}
            data={el.id}
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangePage(el.id);
            }}
          >
            {el.title}
          </a>
        </li>
      );
    });
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
