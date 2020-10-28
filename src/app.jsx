import "./app.css";
import { Component } from "react";
import TOC from "./components/toc";
import Subject from "./components/subject";
import Content from "./components/content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
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
    let _title, _desc;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="app">
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        /> */}
        <header>
          <h1>
            <a
              href="/"
              onClick={(e) => {
                console.log(e);
                e.preventDefault();
              }}
            >
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents} />
        <Content title={_title} description={_desc} />
      </div>
    );
  }
}

export default App;
