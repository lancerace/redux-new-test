import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateTitle } from './slices/comment';
function App() {
  //for querying redux state
  const comments = useSelector((state: any) => state.comments);

  //for dispatching an action to state
  const dispatch = useDispatch();

  const [titleInput, setTitleInput] = useState("");
  return (
    <div className="App">
      <h1>Redux slice state test</h1>
      <header className="App-header">
        <p>
          {comments.title}<br />
          {comments.description}
        </p>
        <input type="text" onChange={(e) => {
          setTitleInput(e.target.value);
        }}></input>

        <button onClick={() => {
          dispatch(updateTitle(titleInput))
        }}>Send</button>
      </header>
    </div>
  );
}

export default App;
