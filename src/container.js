import React from 'react';
import SimpleCard from './card';

class CONTAINER extends React.Component{
    constructor(){
        super()   
        this.state={
            counter:0
        }
        this.newCard=this.newCard.bind(this);
    }

    newCard(){
        this.setState({
            counter:this.state.counter +1 ,
        })
        // var counter=this.state.count +1 ;
        console.log(this.state.counter);
        
         var Array=[];
        Array.push(this.state.counter)
        
         console.log(Array)
        // console.log('clicked')
        //const Array=[0,1,2,3]
        // Array.map(function(no){return(
        //      <SimpleCard data="content"  title="Completed"/>
        //      )
        // }
        // );
    }
    render(){
        
        return(
            <div className="card-all"> 
             
        
            <button style={{height:'40px',background:'none'}} onClick={this.newCard} >ADD NEW CARD</button>
            </div>
        )
    }

}

export default CONTAINER