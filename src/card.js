import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css'; 
import NameForm from './form'
import List from './list'
import {connect} from 'react-redux'
import uuidv1 from 'uuid';
import { AddTodoCardTitle } from './action/action'


function mapDispatchToProps(dispatch) {
  return {
    AddTodoCardTitle: ab => dispatch(AddTodoCardTitle(ab))
  };
}
class SimpleCardS extends React.Component{
  constructor(props) {
    super(props);
    this.state = { cardTitle: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }  


  handleSubmit(event) {
    event.preventDefault();
  const { cardTitle } = this.state;
  const id = uuidv1();
  this.props.AddTodoCardTitle({ cardTitle, id });
  this.setState({cardTitle:""})
  }


render(){
  const { cardTitle } = this.state;
  return (
    <div>
     
    <Card title={cardTitle.value}  style={{ width: 300 }}>
    <form onSubmit={this.handleSubmit}>
          <label htmlFor="cardTitle">
            <input type="text" value={cardTitle}   id="cardTitle" onChange={this.handleChange} />
          </label>
          <input type="submit" value="add title" />
        </form>
      <NameForm/>
      
    </Card>
  
  </div>
   
  );
}

}
const SimpleCard = connect(null, mapDispatchToProps)(SimpleCardS);
export default SimpleCard;
