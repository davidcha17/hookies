import React, { useState } from 'react';

import './App.css'


function App() {

  const [state, setState] = useState( { count: 24, clicked: 0 } );
  const count = state.count
  const clicked = state.clicked

  const [newCount, setNewCount] = useState(2)
  const [newClicked, setNewClicked] = useState(0)

  function decreaseCount() {
    setState( prevState => {
      return { count: prevState.count - 1, clicked: prevState.clicked + 1 }
    })
  }

  function increaseCount() {
    setState( prevState => {
      return { count: prevState.count + 2, clicked: prevState.clicked + 1 }
    })
  }

  function newDecreaseCount() {
    setNewCount(prevNewCount => prevNewCount - 1)
    setNewClicked(prevNewClicked => prevNewClicked + 1)
  }

  function newIncreaseCount() {
    setNewCount(prevNewCount => prevNewCount + 2)
    setNewClicked(prevNewClicked => prevNewClicked + 1)
  }

  return (
    <div className="container">
      <button onClick={decreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
      <span>clicked: {clicked}</span>

      <hr/>

      <button onClick={newDecreaseCount}>-</button>
      <span>{newCount}</span>
      <button onClick={newIncreaseCount}>+</button>
      <span>newClicked: {newClicked}</span>  
    </div>
  );
}

export default App;
