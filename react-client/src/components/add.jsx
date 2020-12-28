import React from "react";
import $ from "jquery";
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }
  onChange(e) {
    this.setState({
      term: e.target.value,
    });
  }
  add() {
    console.log(this.state.term);
    $.post("/", { search: this.state.term }, function (req, res) {
      console.log(req, res.body);
    });
  }
  render() {
    return (
      <div>
        <h4>Add more employees!</h4>
        Enter employee s name:{" "}
        <input value={this.state.term} onChange={this.onChange.bind(this)} />
        <button onClick={this.add.bind(this)}> Add employee </button>
      </div>
    );
  }
}
export default Add;
