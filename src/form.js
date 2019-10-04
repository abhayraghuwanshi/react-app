import React from 'react';
import  {connect } from 'react-redux'
import AddTodo from './action/action';
import uuidv1 from "uuid";

function mapDispatchToProps(dispatch) {
    return {
      AddTodo: todo => dispatch(AddTodo(todo))
    };
  }

class TodoForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {title: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  

    handleChange(event) {
      this.setState({ [event.target.id]: event.target.value });
    }  
    handleSubmit(event) {
      event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.AddTodo({ title, id });
    this.setState({ title: "" });
    }
  
    render() {
      const { title } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            <input type="text" value={title}   id="title" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  const Form = connect(null, mapDispatchToProps)(TodoForm);
  
  export default Form;