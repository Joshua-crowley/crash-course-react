import React, { createContext } from 'react';

import Greeting from './Greeting';
import Counter from './Counter';

class App extends React.Component {
  onUpdate = (count) => console.log(count);

  render() {
    return (
    <>
      <Greeting name='Josh'/>
      <Greeting name='Joshua'/>
      <Greeting name='JOS'/>
      <Greeting />
      <Counter onUpdate={this.onUpdate} count={0}/>
    </>
    );
  }
};

export default App;