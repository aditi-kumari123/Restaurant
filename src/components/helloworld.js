import React from "react";

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
          x: 0
        };
    
      }
    
    inc =() => {
         return this.setState({x: this.state.x<10 ? this.state.x+1: this.state.x})
    }
    dec =() => {
        return this.setState({x:this.state.x<=0 ? this.state.x: this.state.x -1})
    }
    reset =() => {
      return this.setState({x: 0})
    }
  render() {
      console.log(this.state.x, "this is render")

    return <div> Hello World <br/>
        <button onClick={this.inc}>+</button>
        {this.state.x}
        <button onClick={this.dec}>-</button><br/>
        <button onClick={this.reset}>Reset</button>
    </div>;
    
  }
}
function HelloWorld2() {
  return <div>Hello</div>;
}
export { HelloWorld, HelloWorld2 };
