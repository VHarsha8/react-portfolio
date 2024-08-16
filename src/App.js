import React from 'react';
import Portfolio from './Portfolio';
import Combonent from './Component1';




function App() {
  return (
    <div className="App md:w-[700px] md:px-0 px-10  flex flex-col justify-start   mx-auto">
      <Portfolio /><br></br>
      <Combonent />
      
    </div>
  );
}

export default App;