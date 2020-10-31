import "./app.css";
import { Component } from "react";
import TOC from "./components/toc";
import Subject from "./components/subject";
import ReadContent from "./components/readContent";
import Control from "./components/control";
import CreateContent from "./components/createContent";
import UpdateContent from "./components/updateContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      control: "delete",
      subject: { title: "WEB", sub: "World Wide Web!" },
      welcome: { title: "welcome", desc: "Hello, React!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is..." },
        { id: 2, title: "CSS", desc: "CSS is..." },
        { id: 3, title: "JavaScript", desc: "JavaScript is..." },
      ],
      index: null,
    };
  }

  onChange = (content) => {
    this.setState({ contents: this.state.contents.concat(content) });
  };

  render() {
    let _title = null;
    let _desc = null;
    let _mode = this.state.mode;
    let _index = null;
    if (_mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (isNaN()) {
      _title = this.state.contents[_mode - 1].title;
      _desc = this.state.contents[_mode - 1].desc;
      _index = _mode - 1;
      this.setState({ index: _index });
    }

    return (
      <div className="app">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={(props) => {
            this.setState({ mode: props });
          }}
        />
        <TOC
          data={this.state.contents}
          onChangePage={(props) => {
            this.setState({ mode: props });
            this.setState({ control: "delete" });
          }}
        />
        <Control
          onChangeMode={(mode) => {
            this.setState({ control: mode });
          }}
        />
        {this.state.control === "create" && (
          <CreateContent
            onChangeContents={(title) => {
              this.onChange(title);
            }}
            onChangeId={this.state.contents.length}
          />
        )}
        {this.state.control === "update" && (
          <UpdateContent
            data={_index}
            contents={this.state.contents}
            onChangeContents={(items) => {
              this.setState({ contents: items });
            }}
            onChangeMode={(mode) => {
              this.setState({ control: mode });
            }}
          />
        )}
        {this.state.control === "delete" && (
          <ReadContent title={_title} description={_desc} />
        )}
      </div>
    );
  }
}

export default App;
