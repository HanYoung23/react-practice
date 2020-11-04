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
      subject: {
        title: "My Dictionary 📖",
        sub: "you can write down here whatever you want",
      },
      welcome: {
        title: "welcome!",
        desc:
          "this project is made with React library. \n you can add your list with an add button below this text, or edit it,\n or delete it.",
      },
      contents: [
        {
          id: 1,
          title: "REST API",
          desc:
            "REST or RESTful API design Representational State Transfer is designed to take advantage of existing protocols.\n While REST can be used over nearly any protocol, it usually takes advantage of HTTP when used for Web APIs.\n This means that developers do not need to install libraries or additional software in order to take advantage of a REST API design.\n REST API Design was defined by Dr.\n Roy Fielding in his 2000 doctorate dissertation.\n It is notable for its incredible layer of flexibility.\n Since data is not tied to methods and resources, REST has the ability to handle multiple types of calls, return different data formats and even change structurally with the correct implementation of hypermedia.",
        },
        {
          id: 2,
          title: "React",
          desc: `React is a JavaScript library created by Facebook \n React is a User Interface (UI) library \n React is a tool for building UI components`,
        },
        {
          id: 3,
          title: "Babel",
          desc:
            "Babel is a JavaScript compiler that can translate markup or programming languages into JavaScript. \nWith Babel, you can use the newest features of JavaScript (ES6 - ECMAScript 2015).\n Babel is available for different conversions. React uses Babel to convert JSX into JavaScript.",
        },
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

  onReset = () => {
    this.setState({
      mode: "welcome",
      control: "delete",
    });
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
        <Control
          index={this.state.currentIndex}
          contents={this.state.contents}
          mode={this.state.mode}
          onChangeMode={(control) => {
            this.setState({ control: control });
          }}
          onChangeContents={(contents) => {
            this.setState({ contents: contents });
            this.onReset();
          }}
        />
      </div>
    );
  }
}

export default App;
