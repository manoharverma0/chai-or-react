import { use, useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState("6");
  const [password, setPassword] = useState(" ");
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (characterAllowed) str += "!@#$%^&*()_";
     if (numberAllowed) str += "8912901235534846767";
    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, setPassword, numberAllowed, characterAllowed])
  
  const passRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const copyPass = useCallback(() => {
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0, 13); used to set selection range
    
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    },2000)
  },[password])

  useEffect(() => { passwordGenerator() }, [length, passwordGenerator, numberAllowed, characterAllowed])
  

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
         <h1 className='text-white text-center my-3'>Password generator</h1>
             <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input
                    type="text"
                    className="outline-none w-full py-1 px-3 bg-white text-black"
                    placeholder="Password"
                    value={password}
                    readOnly
                    ref={passRef}
                />
              <button
             className={`outline-none w-[70px] px-3 py-0.5 shrink-0 transition-colors duration-200 ${
              copied ? 'bg-green-600' : 'bg-blue-700'
             } text-white`}
            onClick={copyPass} 
          >{ copied ? "copied!" : " copy "}</button>
        </div>
        <div className='text-sm flex gap-x-2'>
          <div className='flex items-center text-sm gap-x-1 '>
            <input
              type="range" 
              value={length}
              className='cursor-pointer'
              min={8}
              max={100}
              onChange={(e)=>{setLength(e.target.value)}}
            />
            <label >Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              id="numAllow"
              defaultChecked={numberAllowed}
              onChange={
                () => {
                  setnumberAllowed((prev) => !prev);
                }}
            />
            <label htmlFor="numAllow">Numbers</label>
          </div>
           <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              id="charAllow"
              defaultChecked={characterAllowed}
              onChange={
                () => {
                  setcharacterAllowed((prev) => !prev);
                }}
            />
            <label htmlFor="charAllow">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
