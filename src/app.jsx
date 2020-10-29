import "./app.css";
import { Component } from "react";
import TOC from "./components/toc";
import Subject from "./components/subject";
import ReadContent from "./components/readContent";
import Control from "./components/control";
import CreateContent from "./components/createContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      control: null,
      subject: { title: "WEB", sub: "World Wide Web!" },
      welcome: { title: "welcome", desc: "Hello, React!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is..." },
        { id: 2, title: "CSS", desc: "CSS is..." },
        { id: 3, title: "JavaScript", desc: "JavaScript is..." },
      ],
    };
  }

  render() {
    let _title = null;
    let _desc = null;
    let _mode = this.state.mode;
    if (_mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (isNaN()) {
      _title = this.state.contents[_mode - 1].title;
      _desc = this.state.contents[_mode - 1].desc;
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
          }}
        />
        <Control
          onChangeMode={(mode) => {
            this.setState({ control: mode });
          }}
        />
        {this.state.control === "create" && <CreateContent />}
        <ReadContent title={_title} description={_desc} />
      </div>
    );
  }
}

export default App;
