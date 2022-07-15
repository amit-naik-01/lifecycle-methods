import React, { Component } from 'react';
import './App.css';
class App extends Component {

constructor(props) {
  console.log('constructor')
	super(props);
	
	this.state = {
    counter:0,
    delete: false,
	}

	this.increment = () => this.setState({counter:this.state.counter + 1})
  this.decrement = () => this.setState({counter:this.state.counter - 1})
  this.delete = () => this.setState({delete: true })
}

// static getDerivedStateFromProps(props, state){
//   return state
// }

componentDidMount(){
  console.log('component did mount')
  console.log("-----xx-----")
  console.log("-----xx-----")
}


getSnapshotBeforeUpdate(prevProps, prevState){
  return console.log("Previous State before updating:") +
   console.log(prevState)
}



shouldComponentUpdate(nextProps, nextState){
  if(nextState !== this.state){
    console.log("state changed, need to re-render")
    return true
  }else{
  console.log("state did'nt changed,no need to re-render")
  return false
}
}



componentDidUpdate(prevProps, prevState) {
  if (prevState !== this.state) {
    console.log("----xx----")
    console.log("counter state updated")
    console.log("----xx----")
    console.log("----xx----")
  }
}

// componentWillUnmount() {
//   if(this.state.delete === true )
//   return console.log('Unmounted counter successfully');
// }

render() {
  console.log('render happens')
	return (
	<div className="App">
          <div>
            <button className ="buttons" onClick={this.delete}>Delete the counter component</button>
            <button className ="buttons" onClick={this.increment}>Increment</button>
            <button className ="buttons"  onClick={this.decrement}>Decrement</button>
          </div>
          <div className="counter">
              Counter: {this.state.delete ? null : this.state.counter}
          </div>
	</div>
	);
}
}

export default App;