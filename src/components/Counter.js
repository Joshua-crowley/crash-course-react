import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    };
  }

  onIncrementClick = () => {
    this.setState({ count: this.state.count + 1});
  };

  onDecrementClick = () => {
    if (this.state.count) {
      this.setState({ count: this.state.count - 1});
    }
  }

  render(){
    return ( 
    <div>
      <button onClick={this.onIncrementClick}>Increment</button>
      <button onClick={this.onDecrementClick}>Decrement</button>
      <h3>{this.state.count}</h3>
    </div>
    );
  }

}

export default Counter;