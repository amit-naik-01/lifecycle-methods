import React, { Component } from 'react';
import './App.css';
import Counter from "./Counter"

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      mount:true
    }

    this.mountCounter = this.mountCounter.bind(this)
    this.unmountCounter = this.unmountCounter.bind(this)
  }


  mountCounter(){
    this.setState({mount: true})
  }
  unmountCounter(){
    this.setState({mount: false})
  }
    

  // static getDerivedStateFromProps(props, state){
  //   return state
  // }



  render() {
    return (
    <div className="App">
              <div>
              <button className ="buttons" onClick={this.mountCounter} disabled={this.state.mount}>Mount</button>
              <button className ="buttons" onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount</button>
              </div>
              Counter:
              <div className="counter">
                  {this.state.mount ? <Counter /> : null  }
              </div>
              </div>
    );
  }
}

export default App;

