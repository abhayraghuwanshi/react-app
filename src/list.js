
import React from "react";
import { connect } from "react-redux";


const mapStateToProps = state => {
  return { inputTodo: state.inputTodo };
};


const ConnectedList = ({ inputTodo }) => (
  <ul className="list-group list-group-flush">
    {inputTodo.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;