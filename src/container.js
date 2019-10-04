import React from 'react';
import SimpleCard from './card';
import List from './list'
class CONTAINER extends React.Component{
    constructor(){
        super()   
        this.state={
            numChildren:0
        }
        
    }
    onAddChild = () => {
        this.setState({
          numChildren: this.state.numChildren + 1
        });
      }
  
    render(){
        const children = [];

        for (var i = 0; i < this.state.numChildren; i += 1) {
          children.push(<ChildComponent key={i} number={i} />);
        };
        
        return(
            <ParentComponent addChild={this.onAddChild} style={{display:'flex'}}>
            {children}
          </ParentComponent>
         
        )
    }

}




const ParentComponent = props => (
    <div className="card calculator">
      <p><a href="#" onClick={props.addChild}>Add New Card</a></p>
      <div id="children-pane">
        {props.children}
      </div>
    </div>
  );
  

const ChildComponent = props => <div><SimpleCard/> </div>
export default CONTAINER