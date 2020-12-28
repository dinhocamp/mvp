import React from "react";
import $ from "jquery";
class Search extends React.Component {
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

  search() {
    console.log(this.state.term);
    console.log(`${this.state.term} was searched`);
    $.post("/", { search: this.state.term }, function (req, res) {
      console.log(req, res.body);
    });
  }

  render() {
    return (
      <div>
        <input value={this.state.term} onChange={this.onChange.bind(this)} />
        <button onClick={this.search.bind(this)}> get employee </button>
      </div>
    );
  }
}
export default Search;
