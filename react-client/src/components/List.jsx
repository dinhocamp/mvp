import React from "react";
import ListEmployees from "./ListEmployees.jsx";

const List = (props) => (
  <div>
    <h4> List of emplyees </h4>
    There are {props.items.length} employees.
    {props.items.map((item) => (
      <ListEmployees item={item} />
    ))}
  </div>
);

export default List;
