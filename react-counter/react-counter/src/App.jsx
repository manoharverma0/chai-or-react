import { useState } from 'react'

import './App.css'

function App() {
  let [mode, setMode] = useState('dark');
  const changeMode = () => {
    const root = window.document.documentElement;
    if (mode === 'dark') {
      setMode('light');
      root.style.backgroundColor = 'black';
    } else {
      setMode('dark');
      root.style.backgroundColor = 'white';
    }
  }
  let [counter, ICounter] = useState(0);
  const Iclick = () => {
    if (counter < 20)
      ICounter(counter + 1);
    console.log(counter)
}
  const Dclick = () => {
    if (counter != 0)
      ICounter(counter - 1);
        console.log(counter)
}
  return (
    <>
      <div className="center">
            <h1> Current count is {counter}</h1>
            <button
            onClick={Iclick} >increase count</button>
            <button
              onClick={Dclick}>decrease count</button>
        <button onClick={changeMode} style={{ color: mode === 'dark' ? 'black' : 'white'}}>{mode} mode </button>
      </div>
    </>
  )
}

export default App
