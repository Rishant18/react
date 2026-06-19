import { use, useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setlength] = useState(8);
  const [numallowed,setnumallowed] = useState(false);
  const [charrallowed,setcharallowed] = useState(false);
  const [password,setpassword] = useState("")
  const passwordref= useRef(null)

   const passwordgenerator = useCallback(()=>{
    let pass =""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     
    if (numallowed) str+="0123456789"
    if(charrallowed) str+="!@#$%^&*+-{}[]~ "
     
    for (let i = 1; i < length; i++) {
     let char = Math.floor(Math.random() * str.length +1 )
      pass += str.charAt(char)
    }
    setpassword(pass)},[length,numallowed,charrallowed,setpassword])

     const copypasswordtoclipboard = useCallback(()=>{
     passwordref.current?.select()
     window.navigator.clipboard.writeText(password)
     },[password])

   useEffect(()=>{passwordgenerator()},[length,numallowed,charrallowed,setpassword,passwordgenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800  text-orange-500'>
      <h1 className=' text-white text-center my-3 '>Password Generator</h1>
       <div className=' flex-shadow rounded-lg overflow-hidden mb-4  flex bg-white text-black'>
        <input 
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3 "
        placeholder='Password'
        readOnly 
        ref={passwordref}
        />
        <button
        onClick={copypasswordtoclipboard} 
        className='bg-sky-500 text-white outline-none px-3 py-0.5 shrink-0 hover:bg-sky-700'>copy</button>
       </div>
         <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
          
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
             />
             <label> Length: {length}</label>
             </div>
             <div className='flex items-center gap-x-1'>
              <input
               type="checkbox" 
                defaultChecked={numallowed}
                id='numberinput'
                onChange={()=>{
                  setnumallowed((prev => !prev))
                }}
              /><label> Number</label>
             </div>
             <div className='flex items-center gap-x-1'>
                 <input
                  type="checkbox" 
                  defaultChecked={charrallowed}
                  id='charinput'
                  onChange={()=>{
                  setcharallowed((prev => !prev))
                }}
                  />
                  <label htmlFor="charinput"> Character</label>
             </div>
         </div>
    </div>
    </>
  )
}

export default App
