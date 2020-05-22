import React from 'react';

function Greeting(props){
  return <div>Salutations, {props.name}!</div>;
}

// class Greeting extends React.Component {
//   constructor(){
//     super();
//     this.state = {};

//   }

//   render() {
//     return <div>Salutations, {this.props.name}!</div>;
//   }
// }

Greeting.defaultProps = {
  name: 'stranger',
};

export default Greeting;