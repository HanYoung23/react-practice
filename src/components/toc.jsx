import { Component } from "react";

class TOC extends Component {
  render() {
    const lists = [];
    const contents = this.props.data;
    let keyCount = 0;
    contents.forEach((el) => {
      keyCount++;
      lists.push(
        <li key={keyCount}>
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
