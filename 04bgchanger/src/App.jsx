import { useState } from "react"

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor :color}}><h1> COLOR CHANGER</h1>
      <div className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-2xl ">
          <button onClick={()=>setcolor("red")} class=" hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-2xl  "
          style={{backgroundColor:"red"}}
          >Red</button>
          <button onClick={()=>setcolor("blue")} class=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl "
          style={{backgroundColor:"blue"}}
          >blue</button>
          <button onClick={()=>setcolor("green")} class=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl "
          style={{backgroundColor:"green"}}
          >green</button>

        </div>

      </div>
    </div> 
    </>
   )
}

export default App
