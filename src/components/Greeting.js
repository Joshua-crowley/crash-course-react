import React from 'react';

function Greeting(props){
  return <div>Salutations, {props.name}!</div>
}

Greeting.defaultProps = {
  name: 'stranger',
};

export default Greeting;