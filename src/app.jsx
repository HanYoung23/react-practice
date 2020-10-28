import "./app.css";
import { Component } from "react";
import TOC from "./components/toc";
import Subject from "./components/subject";
import Content from "./components/content";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Subject title="WEB" sub="world wide web!" />
        <Subject title="React" sub="for UI" />
        <TOC />
        <Content title="HTML" description="HTML is HyperText Markup Language" />
      </div>
    );
  }
}

export default App;
