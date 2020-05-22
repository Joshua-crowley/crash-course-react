import React from 'react';

import Greeting from './Greeting';
import Counter from './Counter';

function App(){
  return (
  <>
    <Greeting name='Josh'/>
    <Greeting name='Joshua'/>
    <Greeting name='JOS'/>
    <Greeting />
    <Counter count={100}/>
  </>
  );
}

export default App;