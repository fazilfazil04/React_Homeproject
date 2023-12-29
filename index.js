import React from 'react';
import ReactDOM from 'react-dom';
import ImageToggle from './ImageToggle'; 

const App = () => {
  return (
    <div>
      <h1>My Image Toggle App</h1>
      <ImageToggle />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
