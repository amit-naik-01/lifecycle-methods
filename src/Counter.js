import React from "react";

export default class Counter extends React.Component{
    constructor(props){
        console.log("constructor")
        super(props)

        this.state={
            counter:0 
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    
    increment(){
        this.setState({counter:this.state.counter + 1})
    }
    decrement(){
        this.setState({counter:this.state.counter - 1})
    }
    
    componentDidMount(){
        console.log('Component Did Mount')
        console.log("----xx----")
    }

    

    shouldComponentUpdate(nextProps, nextState){
    if(nextState !== this.state){
      console.log("state changed, need to re-render")
      return true
    }
    return false
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        return console.log("Previous State before updating:") + console.log(prevState)
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
          console.log("counter state updated")
          console.log("----xx----")
        }
    }
    
   
    componentWillUnmount(){
        if(!this.state.mount)
            console.log("counter component unmounted")
    }


    render(){
        console.log('Render')
        return <div>
            <button className ="buttons" onClick={this.increment}>Increment</button>
            <button className ="buttons" onClick={this.decrement}>Decrement</button>
            
            <div className="counter">
                Count: {this.state.counter}
            </div>
        </div>
    }  
}


