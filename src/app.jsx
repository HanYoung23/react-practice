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
      currentIndex: null,
      title: null,
      desc: null,
    };
  }

  onChange = (content) => {
    this.setState({ contents: this.state.contents.concat(content) });
  };

  onChangePage = (id) => {
    let content = this.state.contents.find((e) => e.id === id);
    let title = content.title;
    let desc = content.desc;
    this.setState({ mode: id, title: title, desc: desc, control: "delete" });
  };

  render() {
    return (
      <div className="app">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={(mode) => {
            this.setState({ mode: mode, control: "delete" });
          }}
        />
        <TOC
          contents={this.state.contents}
          onChangePage={(id) => {
            this.onChangePage(id);
          }}
          onChangeIndex={(index) => {
            this.setState({ currentIndex: index });
          }}
        />
        <Control
          index={this.state.currentIndex}
          contents={this.state.contents}
          mode={this.state.mode}
          onChangeMode={(mode) => {
            this.setState({ control: mode });
          }}
          onChangeContents={(contents, nextId) => {
            console.log("asdf", nextId);
            this.setState({ contents: contents });
            this.onChangePage(nextId); /////////
          }}
        />
        {this.state.control === "create" && (
          <CreateContent
            onChangeContents={(content) => {
              this.onChange(content);
            }}
            onChangeId={this.state.contents.length}
          />
        )}
        {this.state.control === "update" && (
          <UpdateContent
            title={this.state.title}
            desc={this.state.desc}
            index={this.state.currentIndex}
            contents={this.state.contents}
            onChangeContents={(items) => {
              this.setState({ contents: items, control: "delete" });
            }}
          />
        )}
        {this.state.control === "delete" && (
          <ReadContent
            mode={this.state.mode}
            welcome={this.state.welcome}
            title={this.state.title}
            desc={this.state.desc}
          />
        )}
      </div>
    );
  }
}

export default App;
