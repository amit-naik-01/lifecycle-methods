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
      alert(`previous State:` + this.state.counter + ` new State: ` + nextState.counter) 
      console.log("state changed, need to re-render")
      return true
    }
    return false
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(`Previous State before updating:` + prevState.counter)
        return null
    }


    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
          console.log("counter state updated")
          console.log("----xx----")
        }
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


