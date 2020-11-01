import { Component } from "react";

class TOC extends Component {
  OnFindIndex = (id) => {
    let index = this.props.contents
      .map((content) => {
        return content.id;
      })
      .indexOf(id);
    return index;
  };

  render() {
    const lists = [];
    const contents = this.props.contents;
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
              this.props.onChangeIndex(this.OnFindIndex(el.id));
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
