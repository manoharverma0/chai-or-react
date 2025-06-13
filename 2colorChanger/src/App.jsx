
import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("olive");
  return (
    <>
      <div className='h-screen w-full duration-200' style={{ backgroundColor : color }}>
        <div className='fixed flex-wrap flex bottom-12 inset-x-0 px-2 justify-center'>
          <div className=' flex flex-wrap gap-2  shadow-lg  justify-center  px-3 py-2 rounded-xl bg-white '>
              
                <button className='px-4 py-2 rounded-2xl justify-center  text-white shadow-lg ' onClick={() => setColor("red")} style={{backgroundColor:'red'}}> Red</button>
                <button className='px-2 py-2 rounded-2xl justify-center  text-white  ' onClick={() => setColor("blue")} style={{backgroundColor:'blue'}}> Blue</button>
                <button className='px-2 py-2 rounded-2xl justify-center  text-white  ' onClick={() => setColor("green")} style={{backgroundColor:'green'}}> Green</button>
                <button className='px-2 py-2 rounded-2xl justify-center  text-white  ' onClick={() => setColor("pink")} style={{backgroundColor:'pink'}}> Pink</button>
                <button className='px-2 py-2 rounded-2xl justify-center  text-white  ' onClick={() => setColor("yellow")} style={{backgroundColor:'yellow'}}> Yellow</button>
                <button className='px-2 py-2 rounded-2xl justify-center  text-white  ' onClick={() => setColor("black")} style={{backgroundColor:'black'}}> Black</button>
                <button className='px-2 py-2 rounded-2xl justify-center  text-white  ' onClick={() => setColor("orange")} style={{backgroundColor:'orange'}}> Orange</button>
             
          </div> 
        </div>
   </div>
    </>
  )
}

export default App
