import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import List from "./components/List.jsx";
import Add from "./components/add.jsx";
import Search from "./components/Search.jsx";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listEmployees: [],
    };
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: "/items",
  //     success: (data) => {
  //       this.setState({
  //         listEmployees: data,
  //       });
  //     },
  //     error: (err) => {
  //       console.log("err", err);
  //     },
  //   });
  // }

  render() {
    return (
      <div>
        <Add />
        <h1>Employee List</h1>
        <List items={this.state.listEmployees} />
        <Search />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
